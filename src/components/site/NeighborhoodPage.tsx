import type { Crumb } from "@/components/site/PageHero";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { BookButton } from "@/components/site/primitives/BookButton";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { MapPin, Train } from "lucide-react";

export interface NeighborhoodConfig {
  name: string;
  italic: string;
  description: string;
  image: string;
  imageAlt: string;
  transit: string;
  serves: string;
  why: string[];
  crumbs: Crumb[];
}

export function NeighborhoodPage({ config }: { config: NeighborhoodConfig }) {
  return (
    <main>
      <PageHero
        eyebrow="Neighborhoods we serve"
        italic={config.italic}
        title={`for ${config.name}.`}
        description={config.description}
        image={config.image}
        imageAlt={config.imageAlt}
        crumbs={config.crumbs}
      />
      <section className="py-20 sm:py-28">
        <Container size="lg">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <SectionHeading
                as="h2"
                title="Why patients near"
                accent={`${config.name} choose us.`}
              />
              <ul className="mt-8 space-y-4 text-base text-foreground/80">
                {config.why.map((w) => (
                  <li key={w} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BookButton>Book at our NoHo clinic</BookButton>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-2xl italic">Getting here</h3>
                <ul className="mt-6 space-y-4 text-sm text-foreground/80">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    32 West 14th Street, Lower Manhattan
                  </li>
                  <li className="flex gap-3">
                    <Train className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {config.transit}
                  </li>
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">Serves {config.serves}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
