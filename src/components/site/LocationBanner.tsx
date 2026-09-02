import { GeoImage } from "./primitives/GeoImage";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";
import { CLINIC_GOOGLE_MAPS_URL, SITE_ADDRESS } from "@/lib/site";

export function LocationBanner() {
  return (
    <section aria-labelledby="location-heading" className="relative w-full bg-background">
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[424px] w-full sm:h-[494px] md:h-[541px] lg:h-[588px]">
          <GeoImage
            src={IMG.clinicInterior}
            alt="Inside Umbrella Health clinic in New York City"
            fill
            className="object-cover object-[center_42%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Asymmetric organic wave — high left, dips past center, rises right */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 z-10 w-full fill-background"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            style={{ height: "7.5vw", minHeight: "58px", maxHeight: "112px" }}
            aria-hidden
          >
            <path d="M0,0 L1440,0 L1440,52 C1310,78 1120,138 760,128 C460,118 200,42 0,12 Z" />
          </svg>

          <div className="pointer-events-none absolute inset-0 z-20 flex items-center pb-0">
            <Container className="pointer-events-auto pb-0">
              <div className="max-w-2xl text-primary-foreground">
                <p className="text-base font-medium tracking-tight text-primary-foreground/90 sm:text-lg">
                  Visit Us
                </p>

                <h2
                  id="location-heading"
                  className="mt-3 max-w-lg text-balance font-display text-xl font-semibold leading-snug tracking-tight text-primary-foreground sm:text-2xl md:text-[1.75rem]"
                >
                  Modern Medicine In The Heart Of Lower Manhattan
                </h2>

                {/* Short version — mobile only */}
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/90 sm:hidden">
                  Located in Lower Manhattan, Umbrella Health offers trusted primary care,
                  board-certified specialists, and comprehensive care for patients across New York
                  City.
                </p>
                {/* Full version — sm and above */}
                <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-primary-foreground/90 sm:block sm:text-base">
                  Conveniently located in Lower Manhattan, near Union Square, Greenwich Village, and
                  the Flatiron District, Umbrella Health provides easy access to trusted primary
                  care doctors and board-certified specialists for patients across New York City.
                  Experience comprehensive, patient-centered healthcare all under one roof.
                </p>

                <p className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/90 sm:text-base">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                  <span>{SITE_ADDRESS}</span>
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 bg-primary-foreground/10 px-6 py-2.5 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/55 hover:bg-primary-foreground/15"
                  >
                    Our Clinics
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <a
                    href={CLINIC_GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-transparent px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:border-primary-foreground/45 hover:bg-primary-foreground/10"
                  >
                    Get Directions
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
