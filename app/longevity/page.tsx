import { Link } from "@/components/AppLink";
import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { ServiceCard } from "@/components/site/primitives/ServiceCard";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";

const programs = [
  {
    title: "Executive Physicals",
    description: "A half-day deep workup for principals and partners.",
    to: "/longevity/executive-physicals",
  },
  {
    title: "Healthspan & Biomarker Programs",
    description: "Track your numbers, longitudinally, against your baseline.",
    to: "/longevity/healthspan-programs",
  },
  {
    title: "Hormone & Metabolic Optimization",
    description: "Clinical, evidence-based  not wellness-spa adjacent.",
    to: "/longevity/hormone-optimization",
  },
];

const seo = buildPageSeo({
  title: "Longevity & Healthspan Medicine NYC  Umbrella Health",
  description:
    "Executive physicals, biomarker panels, and healthspan programs from a real multispecialty clinic. Measured optimization, not vibes.",
  path: "/longevity",
  crumbs: [{ label: "Home", to: "/" }, { label: "Longevity" }],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Longevity"
        italic="The next 30 years,"
        title="measured and optimized."
        description="Longevity medicine done with rigor  executive physicals, biomarker programs, and metabolic optimization, run by physicians who own the diagnostics."
        image={IMG.longevityHero}
        imageAlt="Longevity program patient in NYC clinic"
        crumbs={[{ label: "Home", to: "/" }, { label: "Longevity" }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            as="h2"
            eyebrow="Programs"
            title="A real clinical program,"
            accent="not a panel of supplements."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.to} delay={i * 0.05}>
                <ServiceCard {...p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-border/60 bg-secondary/40 p-8 text-center sm:p-12">
            <p className="font-display text-2xl italic text-foreground">
              Full healthspan dashboard launches 2026.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Join the waitlist to be first and to lock in founding-member pricing.
            </p>
            <Link
              href="/longevity/waitlist"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Join the waitlist
            </Link>
          </div>
        </Container>
      </section>
      <CTABanner title="Start measuring" italic="your healthspan." />
    </main>
  );
}

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <Page />
    </>
  );
}
