import { PageHero, type Crumb } from "./PageHero";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { ServiceCard } from "./primitives/ServiceCard";
import { BookButton } from "./primitives/BookButton";
import { CTABanner } from "./primitives/CTABanner";
import { PillList } from "./PageBuilding";
import { FAQList, faqSchema, type QA } from "./primitives/FAQList";
import { PremiumIcon } from "./primitives/IconBadge";
import { PhysicianCard } from "./primitives/PhysicianCard";
import type { HealthIconName, LucideIconKey } from "@/components/icons/icon-keys";
import type { SpecialtyAeoContent } from "@/data/specialty-content";
import { physiciansForSpecialty } from "@/data/physicians";

export interface LeafConfig {
  hero: {
    eyebrow?: string;
    title: string;
    italic?: string;
    description: string;
    image: string;
    imageAlt: string;
    tone?: "forest" | "mint" | "cream";
    crumbs?: Crumb[];
  };
  intro?: {
    heading: string;
    accent?: string;
    body: string;
    bullets?: {
      iconKey?: LucideIconKey;
      healthIcon?: HealthIconName;
      title: string;
      body: string;
    }[];
  };
  pills?: { label: string; items: string[] };
  related?: {
    heading: string;
    accent?: string;
    cards: { title: string; description?: string; to?: string; badge?: string }[];
  };
  faqs?: QA[];
  cta?: { title?: string; italic?: string; image?: string };
  /** AEO-rich specialty sections (symptoms, treatments, physicians, unique FAQs). */
  aeo?: SpecialtyAeoContent;
}

export function LeafPage({ config }: { config: LeafConfig }) {
  const c = config;
  return (
    <main>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        italic={c.hero.italic}
        description={c.hero.description}
        image={c.hero.image}
        imageAlt={c.hero.imageAlt}
        tone={c.hero.tone}
        crumbs={c.hero.crumbs}
      />

      {c.intro && (
        <section className="py-20 sm:py-28">
          <Container size="lg">
            <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
              <SectionHeading as="h2" title={c.intro.heading} accent={c.intro.accent} />
              <div>
                <p className="text-lg leading-relaxed text-foreground/80">{c.intro.body}</p>
                {c.intro.bullets && (
                  <ul className="mt-8 space-y-6">
                    {c.intro.bullets.map((b) => (
                      <li key={b.title} className="flex gap-4">
                        <PremiumIcon healthIcon={b.healthIcon} iconKey={b.iconKey} size="lg" />
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {b.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-10">
                  <BookButton>Book appointment</BookButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {c.aeo && (
        <>
          <section
            className="border-t border-border/60 bg-secondary/20 py-20 sm:py-28"
            aria-labelledby="symptoms-heading"
          >
            <Container size="lg">
              <SectionHeading as="h2" id="symptoms-heading" title="Symptoms" accent="we evaluate" />
              <div className="mt-8">
                <PillList items={c.aeo.symptoms} />
              </div>
            </Container>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="when-heading">
            <Container size="lg">
              <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
                <SectionHeading
                  as="h2"
                  id="when-heading"
                  title="When to see"
                  accent="a specialist"
                />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{c.aeo.whenToSee.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {c.aeo.whenToSee.body}
                  </p>
                </div>
              </div>
            </Container>
          </section>

          <section
            className="border-y border-border/60 bg-secondary/20 py-20 sm:py-28"
            aria-labelledby="treatments-heading"
          >
            <Container size="lg">
              <SectionHeading
                as="h2"
                id="treatments-heading"
                title="Treatments"
                accent="& services"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {c.aeo.treatments.map((treatment) => (
                  <li key={treatment} className="flex gap-3 text-sm text-foreground/80">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {treatment}
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="specialty-insurance-heading">
            <Container size="lg">
              <SectionHeading
                as="h2"
                id="specialty-insurance-heading"
                title="Insurance"
                accent="accepted"
                description={c.aeo.insuranceNote}
              />
              <div className="mt-8">
                <BookButton>Check insurance & book</BookButton>
              </div>
            </Container>
          </section>

          {physiciansForSpecialty(c.aeo.specialtyKey).length > 0 && (
            <section
              className="border-t border-border/60 py-20 sm:py-28"
              aria-labelledby="specialty-physicians-heading"
            >
              <Container size="lg">
                <SectionHeading
                  as="h2"
                  id="specialty-physicians-heading"
                  title="Your"
                  accent="physicians"
                />
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-3xl">
                  {physiciansForSpecialty(c.aeo.specialtyKey).map((p) => (
                    <PhysicianCard
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      specialty={p.specialty}
                      image={p.image}
                      imageAlt={p.imageAlt}
                    />
                  ))}
                </div>
              </Container>
            </section>
          )}
        </>
      )}

      {c.pills && (
        <section className="pb-20">
          <Container size="lg">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
                {c.pills.label}
              </p>
              <PillList items={c.pills.items} />
            </Reveal>
          </Container>
        </section>
      )}

      {c.related && (
        <section className="bg-secondary/40 py-20 sm:py-28">
          <Container>
            <SectionHeading as="h2" title={c.related.heading} accent={c.related.accent} />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {c.related.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.04}>
                  <ServiceCard {...card} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {(c.faqs ?? c.aeo?.faqs) && (c.faqs ?? c.aeo?.faqs)!.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container size="lg">
            <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
              <SectionHeading as="h2" title="Common questions," accent="answered." />
              <FAQList items={c.faqs ?? c.aeo!.faqs} />
            </div>
          </Container>
        </section>
      )}

      <CTABanner title={c.cta?.title} italic={c.cta?.italic} />
    </main>
  );
}

export { faqSchema };
