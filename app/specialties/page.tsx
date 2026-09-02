import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { ServiceCard } from "@/components/site/primitives/ServiceCard";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CLINICAL_SERVICES } from "@/data/clinical-services";
import { IMG } from "@/data/images";

const specialties = CLINICAL_SERVICES.map((service) => ({
  title: service.label,
  description: service.summary,
  to: service.href,
}));

const seo = buildPageSeo({
  title: "Specialties — Umbrella Health NYC",
  description:
    "Primary care, cardiology, neurology, sleep, and pain management — one multispecialty NYC clinic, one record, one team.",
  path: "/specialties",
  crumbs: [{ label: "Home", to: "/" }, { label: "Specialties" }],
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Departments"
        title="under one roof."
        italic="Multispecialty care,"
        description="From annual physicals to interventional cardiology and pain procedures — our specialists share a record, a hallway, and a plan for you."
        image={IMG.clinicInterior}
        imageAlt="Umbrella Health multispecialty clinic interior"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.04}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
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
