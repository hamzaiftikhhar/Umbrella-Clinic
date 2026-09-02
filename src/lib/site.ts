export const BOOKING_URL =
  "https://www.zocdoc.com/practice/umbrella-health-109109?lock=true&isNewPatient=false&referrerType=widget";

export const SITE_NAME = "Umbrella Health";
export const SITE_TAGLINE = "Modern medicine, measured.";
/** Canonical clinic contact — matches Primary Care / Neurologist SEO schemas. */
export const SITE_PHONE = "(347) 667-8272";
export const SITE_EMAIL = "admin@myumbrellahealth.com";
export const SITE_ADDRESS = "32 West 14th Street, New York, NY 10011";

/** Official clinic social profiles — used in schema and footer. */
export const CLINIC_SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61590819788355",
  instagram: "https://www.instagram.com/umbrellahealth.nyc/",
  tiktok: "https://www.tiktok.com/@umbrella.health",
} as const;

export const CLINIC_SOCIAL_SAME_AS = [
  CLINIC_SOCIAL_LINKS.facebook,
  CLINIC_SOCIAL_LINKS.instagram,
  CLINIC_SOCIAL_LINKS.tiktok,
] as const;

/** Google Maps place for Umbrella Health — 32 West 14th Street, NYC. */
export const CLINIC_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Umbrella+Health+32+West+14th+Street+New+York+NY+10011";

/** Google Business pin coordinates for Umbrella Health (use for ImageObject / EXIF geo). */
export const CLINIC_COORDS = { lat: 40.7363331, lng: -73.9952765 } as const;

export const CLINIC_MAP_EMBED_URL =
  "https://www.google.com/maps?q=Umbrella+Health&ll=40.7363331,-73.9952765&z=17&hl=en&output=embed";

/** Set via NEXT_PUBLIC_SITE_URL in production for absolute canonical/OG URLs. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.myumbrellahealth.com";

/** Synapse clinic assistant — iframe loads `{APP_URL}/embed/{CLINIC_SLUG}`. */
export const SYNAPSE_APP_URL =
  process.env.NEXT_PUBLIC_SYNAPSE_APP_URL?.replace(/\/$/, "") ??
  "https://synapse-hamzaiftikhhar.vercel.app";
export const SYNAPSE_CLINIC_SLUG = process.env.NEXT_PUBLIC_SYNAPSE_CLINIC_SLUG ?? "umbrella-health";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
