import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { ProseSection } from "@/components/site/PageBuilding";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "HIPAA & Accessibility  Umbrella Health",
  description: "Our HIPAA compliance and accessibility commitments.",
  path: "/hipaa-accessibility",
  crumbs: [{ label: "Home", to: "/" }, { label: "HIPAA & Accessibility" }],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <main>
        <PageHero
          eyebrow="Legal"
          italic="HIPAA &"
          title="accessibility."
          description="Our commitment to patient privacy and access for everyone."
          image={IMG.consult}
          imageAlt="HIPAA & Accessibility"
          crumbs={[{ label: "Home", to: "/" }, { label: "HIPAA & Accessibility" }]}
          tone="mint"
        />
        <ProseSection>
          <h3>HIPAA</h3>
          <p>
            Umbrella Health complies with HIPAA. Patients receive a Notice of Privacy Practices at
            intake describing how Protected Health Information (PHI) is used and disclosed. For full
            text, contact our privacy officer.
          </p>
          <h3>Accessibility</h3>
          <p>
            Our clinic is step-free with ADA-compliant exam rooms and restrooms. We aim for WCAG 2.1
            AA conformance on this website. If you find a barrier, please email
            accessibility@umbrellahealth.example and we'll fix it.
          </p>
          <h3>Languages</h3>
          <p>
            Care available in English, Spanish, Mandarin, Hindi, and Russian. Interpreter services
            available on request.
          </p>
        </ProseSection>
        <CTABanner />
      </main>
    </>
  );
}
