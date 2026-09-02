import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { FAQList, faqSchema } from "@/components/site/primitives/FAQList";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SITE_FAQS } from "@/data/site-content";
import { IMG } from "@/data/images";

const faqs = [...SITE_FAQS];

const seo = buildPageSeo({
  title: "FAQ  Umbrella Health NYC",
  description:
    "Answers to the most common questions about Umbrella Health  insurance, booking, services, location, and more.",
  path: "/faq",
  crumbs: [{ label: "Home", to: "/" }, { label: "FAQ" }],
  extraSchema: [faqSchema(faqs)],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="We got you."
        italic="Questions?"
        description="Straight answers about insurance, services, location, and how to get started."
        image={IMG.consult}
        imageAlt="Patient with care team"
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <section className="py-20 sm:py-28">
        <Container size="lg">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading as="h2" title="Common" accent="questions." />
            <FAQList items={faqs} />
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
