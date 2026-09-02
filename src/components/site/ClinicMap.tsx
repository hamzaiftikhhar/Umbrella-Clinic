import { Container } from "./primitives/Container";
import { CLINIC_MAP_EMBED_URL, SITE_NAME } from "@/lib/site";

export function ClinicMap() {
  return (
    <section aria-labelledby="map-heading" className="section-py bg-secondary/30">
      <Container size="lg">
        <div className="mb-8 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
            Find us
          </p>
          <h2
            id="map-heading"
            className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
          >
            In the heart of <span className="text-primary">Lower Manhattan.</span>
          </h2>
        </div>

        <div className="group relative overflow-hidden rounded-[1.75rem] border border-border/60 shadow-[var(--shadow-card)]">
          <iframe
            title={`Map showing ${SITE_NAME} in New York`}
            src={CLINIC_MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[420px] w-full border-0 transition-[filter] duration-500 ease-[var(--ease-premium)] [filter:grayscale(0.4)_contrast(1.02)] group-hover:[filter:grayscale(0)] sm:h-[500px]"
          />
        </div>
      </Container>
    </section>
  );
}
