import type { ReactNode } from "react";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";
import { Link } from "@/components/AppLink";
import { ChevronRight } from "lucide-react";
import { GeoImage } from "./primitives/GeoImage";

export interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  italic?: string;
  description?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
  tone?: "forest" | "mint" | "cream";
}

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  image,
  imageAlt,
  crumbs,
  tone = "forest",
}: PageHeroProps) {
  const dark = tone === "forest";
  const bg =
    tone === "forest"
      ? "bg-primary text-primary-foreground"
      : tone === "mint"
        ? "bg-[color:var(--mint)] text-foreground"
        : "bg-background text-foreground";

  return (
    <section className={`relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-32 ${bg}`}>
      <Container>
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={`mb-6 text-xs ${dark ? "text-primary-foreground/60" : "text-foreground/55"}`}
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />}
                  {c.to ? (
                    <Link href={c.to} className="hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <Reveal>
            {eyebrow && (
              <p
                className={`mb-5 text-xs font-medium uppercase tracking-[0.22em] ${
                  dark ? "text-primary-foreground/70" : "text-primary/70"
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-balance text-4xl font-bold leading-[1.04] tracking-[-0.02em] sm:text-5xl md:text-[3.25rem]">
              {italic ? (
                <>
                  <span className="font-medium">{italic} </span>
                  {title}
                </>
              ) : (
                title
              )}
            </h1>
            {description && (
              <p
                className={`mt-5 max-w-xl text-pretty text-base leading-relaxed sm:text-lg ${
                  dark ? "text-primary-foreground/80" : "text-foreground/70"
                }`}
              >
                {description}
              </p>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full shadow-[var(--shadow-elegant)]">
              <GeoImage
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 28rem"
              />
            </div>
          </Reveal>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-1px] h-16 bg-background"
        style={{
          WebkitMaskImage: "radial-gradient(140% 100% at 50% 100%, black 70%, transparent 71%)",
          maskImage: "radial-gradient(140% 100% at 50% 100%, black 70%, transparent 71%)",
        }}
      />
    </section>
  );
}
