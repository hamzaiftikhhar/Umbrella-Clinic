import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface HeroSplitProps {
  eyebrow?: string;
  title: ReactNode; // includes <em> italic accents
  description?: string;
  image: string;
  imageAlt: string;
  actions?: ReactNode;
  tone?: "forest" | "mint";
}

export function HeroSplit({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  actions,
  tone = "forest",
}: HeroSplitProps) {
  const isForest = tone === "forest";
  return (
    <section
      className={`relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-32 ${
        isForest ? "bg-primary text-primary-foreground" : "bg-[color:var(--mint)] text-foreground"
      }`}
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <Reveal>
            {eyebrow && (
              <p
                className={`mb-5 text-xs font-medium uppercase tracking-[0.22em] ${
                  isForest ? "text-primary-foreground/70" : "text-primary/70"
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h1 className="text-balance font-sans text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.5rem]">
              {title}
            </h1>
            {description && (
              <p
                className={`mt-5 max-w-xl text-pretty text-base leading-relaxed sm:text-lg ${
                  isForest ? "text-primary-foreground/80" : "text-foreground/70"
                }`}
              >
                {description}
              </p>
            )}
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full rounded-full object-cover shadow-[var(--shadow-elegant)]"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </Container>

      {/* curved bottom */}
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
