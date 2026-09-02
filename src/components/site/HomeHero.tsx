import { MapPin, Search } from "lucide-react";
import { GeoImage } from "./primitives/GeoImage";
import { Container } from "./primitives/Container";
import { HomeHeroBookingCard } from "./HomeHeroBookingCard";
import { HomeHeroSatisfactionBadge } from "./HomeHeroSatisfactionBadge";
import { HomeHeroSpecialtySelect } from "./HomeHeroSpecialtySelect";
import { PremiumIcon } from "./primitives/IconBadge";
import { IMG } from "@/data/images";
import { getImageAlt } from "@/data/image-seo";
import { PHYSICIANS } from "@/data/physicians";
import { BOOKING_URL } from "@/lib/site";
import { PENDING_VERIFICATION } from "@/data/pending-verification";

const HERO_STATS = [
  {
    value: PENDING_VERIFICATION.patientsServed,
    label: "Patients Served",
    healthIcon: "hospital" as const,
  },
  { value: String(PHYSICIANS.length), label: "Specialists", healthIcon: "stethoscope" as const },
  {
    value: PENDING_VERIFICATION.googleRating,
    label: "Rating",
    healthIcon: "heart-rate" as const,
    star: true,
  },
  { value: "1", label: "Locations", iconKey: "map-pin" as const },
];

export function HomeHero() {
  return (
    <section
      className="relative min-h-[min(88vh,820px)] overflow-x-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      <GeoImage
        src={IMG.homepageDoctorHero}
        alt={getImageAlt("drRajatHero")}
        fill
        priority
        className="object-cover object-[68%_20%]"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/95 via-[46%] to-background/20 to-100%"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/25"
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[min(88vh,820px)] flex-col justify-center py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-12">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/90 px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
              Verified multispecialty care · NYC
            </p>

            <h1
              id="hero-heading"
              className="font-display mt-5 text-balance text-[2.15rem] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.15rem]"
            >
              Primary Care & Specialists in <span className="text-primary">NYC</span>
            </h1>

            <p className="mt-4 max-w-md text-pretty text-base font-normal leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              Expert primary care, board-certified specialists, and advanced diagnostics — all under
              one roof in Lower Manhattan.
            </p>

            <form
              action={BOOKING_URL}
              method="get"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 sm:mt-8"
            >
              <div className="relative flex flex-col overflow-visible rounded-[1.375rem] border border-border/50 bg-card shadow-[var(--shadow-card)] sm:flex-row sm:items-stretch sm:rounded-full sm:p-1.5">
                <div className="min-w-0 flex-1 sm:border-r sm:border-border/40">
                  <HomeHeroSpecialtySelect />
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-3 border-t border-border/40 px-4 py-3.5 sm:border-t-0 sm:py-2.5 sm:pr-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Location
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-foreground">
                      New York, NY
                    </span>
                  </span>
                </div>

                <button
                  type="submit"
                  className="mx-1.5 mb-1.5 flex items-center justify-center gap-2 rounded-[1.25rem] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow sm:mx-0 sm:mb-0 sm:rounded-full sm:px-7 sm:py-3"
                >
                  <Search className="h-4 w-4" aria-hidden />
                  Find doctor
                </button>
              </div>
            </form>

            <dl className="mt-8 grid grid-cols-2 gap-3 border-t border-border/45 pt-7 sm:mt-9 sm:grid-cols-4 sm:gap-4 sm:pt-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div className="mb-2.5">
                    {"healthIcon" in stat && stat.healthIcon ? (
                      <PremiumIcon healthIcon={stat.healthIcon} size="xs" />
                    ) : "iconKey" in stat && stat.iconKey ? (
                      <PremiumIcon iconKey={stat.iconKey} size="xs" />
                    ) : null}
                  </div>
                  <dt className="truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 flex items-baseline gap-1 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {stat.value}
                    {"star" in stat && stat.star && (
                      <span className="text-sm text-rating-star" aria-hidden>
                        ★
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden flex-col items-end justify-center gap-5 lg:flex">
            <HomeHeroBookingCard />
            <HomeHeroSatisfactionBadge />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 lg:hidden">
          <HomeHeroBookingCard />
          <HomeHeroSatisfactionBadge />
        </div>
      </Container>
    </section>
  );
}
