import { ArrowRight, BadgeCheck, Shield, Star } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { PremiumIcon } from "./primitives/IconBadge";
import { GeoImage } from "./primitives/GeoImage";
import { IMG } from "@/data/images";
import { getImageAlt } from "@/data/image-seo";
import type { HealthIconName, LucideIconKey } from "@/components/icons/icon-keys";

const points: {
  healthIcon?: HealthIconName;
  iconKey?: LucideIconKey;
  title: string;
  description: string;
}[] = [
  {
    healthIcon: "stethoscope",
    title: "Experienced Primary Care Physicians & Specialists",
    description:
      "Board-certified doctors who know your history and coordinate care across specialties.",
  },
  {
    healthIcon: "heart-rate",
    title: "Built Around You",
    description:
      "Personalized treatment plans tailored to your lifestyle, goals, and long-term wellness.",
  },
  {
    healthIcon: "scanner",
    title: "Advanced Diagnostics",
    description:
      "In-house testing and imaging so you get answers faster — without leaving the clinic.",
  },
  {
    healthIcon: "hospital",
    title: "Multispeciality Healthcare",
    description:
      "Primary care, cardiology, neurology, sleep, pain, and more under one coordinated roof.",
  },
  {
    iconKey: "clock",
    title: "Same-Day Appointments & Coordinated Care",
    description:
      "Timely access when you need it, with specialists and primary care working as one team.",
  },
];

export function UmbrellaDifference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="section-py bg-background"
    >
      <Container>
        <div className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-gradient-to-br from-card via-secondary/25 to-background p-8 shadow-[var(--shadow-card)] sm:p-10 lg:grid lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-12 lg:p-12 xl:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
              <Shield className="h-3.5 w-3.5" aria-hidden />
              Trusted NYC Healthcare
            </p>

            <h2
              id="difference-heading"
              className="font-display mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl"
            >
              Why Patients Choose Umbrella Health In <span className="text-primary">New York?</span>
            </h2>

            <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
              Experience patient-centered healthcare from trusted primary care doctors in NYC. At
              Umbrella Health, we combine clinical expertise, compassionate care, and personalized
              treatment to help you achieve better long-term health.
            </p>

            <div className="mt-10 flex flex-col gap-5 border-t border-border/50 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link
                to="/our-team"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Meet Our Physicians
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <div className="flex items-center gap-2.5 border-border/60 sm:border-l sm:pl-6">
                <div className="flex gap-0.5 text-rating-star" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Rated <span className="font-semibold text-foreground">4.6</span> by patients
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-[480px] lg:mx-0 lg:mt-0 lg:ml-auto lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.375rem] bg-muted shadow-[var(--shadow-elegant)]">
              <GeoImage
                src={IMG.premiumDoctorPortrait}
                alt={getImageAlt("drRajat")}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-800)]/35 via-transparent to-transparent" />

              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3 rounded-[1.25rem] border border-border/40 bg-card/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:bottom-6 sm:right-6">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-success-surface text-success">
                  <BadgeCheck className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-foreground">
                    Board-Certified Care
                  </p>
                  <p className="text-xs text-muted-foreground">Accredited NYC providers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Five feature cards — larger duotone icons + supporting text + hover */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {points.map((p, index) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-[1.375rem] border border-border/50 bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-elegant)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <PremiumIcon
                  healthIcon={p.healthIcon}
                  iconKey={p.iconKey}
                  size="lg"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span
                  className="font-display text-xl font-semibold tabular-nums text-primary/20 transition-colors duration-300 group-hover:text-primary/40"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-sm font-semibold leading-snug text-foreground sm:text-[0.9375rem]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
