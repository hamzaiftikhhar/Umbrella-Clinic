import { Container } from "./Container";
import { BookButton } from "./BookButton";

export interface CTABannerProps {
  eyebrow?: string;
  title?: string;
  italic?: string;
  ctaLabel?: string;
  ariaLabel?: string;
  /** @deprecated retained for API compatibility; clinic photo carousel removed */
  images?: readonly string[];
  /** @deprecated retained for API compatibility; clinic photo carousel removed */
  imageAlt?: string;
}

/**
 * Page-closing call-to-action. Art-directed precision panel (tokenized navy +
 * data-grid motif)  replaces the repeated clinic-photo carousel.
 */
export function CTABanner({
  eyebrow,
  title = "Take the first step to",
  italic = "feel measurably better.",
  ctaLabel = "Book your appointment",
  ariaLabel = "Get started",
}: CTABannerProps) {
  return (
    <section aria-label={ariaLabel} className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[1.5rem] bg-primary px-8 py-16 text-primary-foreground shadow-[var(--shadow-elegant)] sm:px-14 sm:py-20">
          {/* Precision data grid */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-primary-foreground/[0.06]"
            aria-hidden
          >
            <defs>
              <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>

          {/* Accent glows */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-teal/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-accent-emerald/15 blur-3xl"
            aria-hidden
          />

          <div className="relative max-w-2xl">
            {eyebrow && (
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" aria-hidden />
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
              {title} <span className="text-primary-foreground/90">{italic}</span>
            </h2>
            <div className="mt-8">
              <BookButton variant="light">{ctaLabel}</BookButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
