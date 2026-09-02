from pathlib import Path
from PIL import Image, PngImagePlugin
import piexif

ROOT = Path("/Users/apple/development/umbrella-health copy")
OUT = ROOT / "public/images/blog"
OUT.mkdir(parents=True, exist_ok=True)

LAT = 40.7363331
LON = -73.9952765

ASSETS = {
    "how-often-see-primary-care-doctor-nyc.webp": "public/images/doctor-consultation-physio.webp",
    "what-is-primary-care-nyc.webp": "public/images/primary-care-nyc.webp",
    "how-to-choose-primary-care-doctor-nyc.webp": "public/images/sleep-medicine-consultation.webp",
    "annual-physical-nyc.webp": "public/images/pain-management/exam.webp",
    "chronic-conditions-primary-care-nyc.webp": "public/images/diagnostic-testing-laboratory-blood-work.webp",
    "same-day-sick-visits-nyc.webp": "public/images/clinic-reception-contact.webp",
    "diagnostic-testing-primary-care-nyc.webp": "public/images/diagnostic-testing-preventive-screening.webp",
    "umbrella-health-clinic-interior-nyc.webp": "public/images/APNQkAGh3YEm92Qa-kUP3rKYhHDg5OzGaYziM48tRLgdof1x00Y-d0vwEyzQbry2Kni-1HP7-tQc87_fmoHP9Pu6gMXqzJvCAqxysq6rXF-kA6F8QbNSvfnUSzoTbK1dwMauOVrQNo_w1600-h1200-k-no.webp",
    "physician-patient-consultation-nyc.webp": "public/images/medical-weight-loss-physician-consultation.webp",
    "cardiology-consultation-nyc.webp": "public/images/cardiology/services-ecg.webp",
}


def gps_ifd(lat: float, lon: float) -> dict:
    def rat(value: float):
        deg = int(abs(value))
        minutes_full = (abs(value) - deg) * 60
        minutes = int(minutes_full)
        seconds = round((minutes_full - minutes) * 60 * 100)
        return ((deg, 1), (minutes, 1), (seconds, 100))

    return {
        piexif.GPSIFD.GPSVersionID: (2, 3, 0, 0),
        piexif.GPSIFD.GPSLatitudeRef: "N" if lat >= 0 else "S",
        piexif.GPSIFD.GPSLatitude: rat(lat),
        piexif.GPSIFD.GPSLongitudeRef: "E" if lon >= 0 else "W",
        piexif.GPSIFD.GPSLongitude: rat(lon),
        piexif.GPSIFD.GPSImgDirectionRef: "T",
    }


def process(src_rel: str, dest_name: str) -> None:
    src = ROOT / src_rel
    dest = OUT / dest_name
    im = Image.open(src).convert("RGB")
    # Keep landscape sources as-is; cap width for web.
    max_w = 1800
    if im.width > max_w:
        ratio = max_w / im.width
        im = im.resize((max_w, int(im.height * ratio)), Image.Resampling.LANCZOS)

    exif_dict = {
        "0th": {
            piexif.ImageIFD.Artist: "Umbrella Health",
            piexif.ImageIFD.Copyright: "Umbrella Health, 32 West 14th Street, New York, NY 10011",
            piexif.ImageIFD.ImageDescription: "Umbrella Health clinic, Lower Manhattan, New York City",
            piexif.ImageIFD.Software: "Umbrella Health",
        },
        "Exif": {},
        "GPS": gps_ifd(LAT, LON),
        "1st": {},
        "thumbnail": None,
    }
    exif_bytes = piexif.dump(exif_dict)
    im.save(dest, "WEBP", quality=84, method=6, exif=exif_bytes)
    print(f"{dest_name:52} {im.size[0]}x{im.size[1]}  {dest.stat().st_size // 1024}kB")


if __name__ == "__main__":
    for dest_name, src_rel in ASSETS.items():
        process(src_rel, dest_name)
