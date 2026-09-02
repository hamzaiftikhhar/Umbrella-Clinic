import type { ReactNode } from "react";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";
import { GeoImage, geoImgProps } from "./GeoImage";
import { Container } from "./Container";
import { BookButton } from "./BookButton";

function CircularProgress({ value }: { value: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="relative mx-auto h-40 w-40 sm:h-44 sm:w-44" aria-hidden>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-secondary"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-primary transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {value}%
        </span>
      </div>
    </div>
  );
}

const TRUST_BADGES = [
  { icon: Star, label: "4.6 patient rating" },
  { icon: BadgeCheck, label: "Board-certified physicians" },
  { icon: ShieldCheck, label: "Most major insurance accepted" },
] as const;

export function StatCallout({
  stat,
  title,
  description,
  image,
  imageAlt,
  cta,
}: {
  stat: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: ReactNode;
}) {
  const isRemote = image.startsWith("http");
  const numeric = Number.parseInt(stat.replace(/\D/g, ""), 10) || 92;

  return (
    <section className="section-py bg-background" aria-label="Outcomes">
      <Container>
        <div className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-card shadow-[var(--shadow-card)]">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-[color:var(--cream)]/60 p-8 sm:p-12 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Patient outcomes
              </p>

              <div className="mt-8">
                <CircularProgress value={numeric} />
              </div>

              <h2 className="mt-8 max-w-md text-balance text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 max-w-md text-sm font-normal leading-relaxed text-muted-foreground sm:text-base">
                {description}
              </p>

              <div className="mt-8">{cta ?? <BookButton>Book appointment</BookButton>}</div>

              <ul className="mt-8 flex flex-wrap gap-3" aria-label="Trust signals">
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]"
                  >
                    <Icon className="h-3.5 w-3.5 text-success" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[280px] lg:min-h-full">
              {isRemote ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  {...geoImgProps(imageAlt)}
                />
              ) : (
                <GeoImage
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-800)]/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[color:var(--cream)]/30"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
