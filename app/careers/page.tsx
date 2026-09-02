import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";

const roles = [
  { title: "Internal Medicine Physician", type: "Full-time · NYC" },
  { title: "Cardiology Fellow / Attending", type: "Full-time · NYC" },
  { title: "Registered Medical Assistant", type: "Full-time · NYC" },
  { title: "Patient Care Coordinator", type: "Full-time · NYC" },
  { title: "Operations Lead", type: "Full-time · NYC" },
];

const seo = buildPageSeo({
  title: "Careers at Umbrella Health  NYC",
  description: "Build a modern clinic with us. Open roles at Umbrella Health.",
  path: "/careers",
  crumbs: [{ label: "Home", to: "/" }, { label: "Careers" }],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <main>
        <PageHero
          eyebrow="Careers"
          italic="Build a"
          title="modern clinic with us."
          description="We're a small, calm team building the multispecialty clinic we always wished existed. If that sounds right  say hi."
          image={IMG.founderAlt}
          imageAlt="Umbrella Health team"
          crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
        />
        <section className="py-20 sm:py-28">
          <Container size="lg">
            <SectionHeading as="h2" eyebrow="Open roles" title="What we're" accent="hiring for." />
            <ul className="mt-10 divide-y divide-border/60 rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
              {roles.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.04}>
                  <li className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                    <div>
                      <p className="text-base font-semibold text-foreground">{r.title}</p>
                      <p className="text-xs text-muted-foreground">{r.type}</p>
                    </div>
                    <a
                      href="mailto:careers@umbrellahealth.example"
                      className="text-sm font-medium text-primary"
                    >
                      Apply →
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
        <CTABanner />
      </main>
    </>
  );
}
