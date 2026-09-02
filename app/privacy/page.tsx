import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { ProseSection } from "@/components/site/PageBuilding";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Privacy Policy  Umbrella Health",
  description: "How Umbrella Health collects, uses, and protects your information.",
  path: "/privacy",
  crumbs: [{ label: "Home", to: "/" }, { label: "Privacy" }],
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
          italic="Privacy"
          title="policy."
          description="Plain-language summary of how we handle your information."
          image={IMG.busyPro}
          imageAlt="Privacy"
          crumbs={[{ label: "Home", to: "/" }, { label: "Privacy" }]}
          tone="mint"
        />
        <ProseSection>
          <p>
            Umbrella Health respects your privacy. This page summarizes how we collect, use, and
            protect personal information you share with us through this website. Clinical
            information you share inside our patient portal or with our care team is governed by our
            Notice of Privacy Practices under HIPAA.
          </p>
          <h3>What we collect</h3>
          <ul>
            <li>Contact information you submit through our forms (name, email, phone).</li>
            <li>Booking information passed to our scheduling partner (Zocdoc).</li>
            <li>
              Standard web analytics (page views, referrer, device type) used to improve the site.
            </li>
          </ul>
          <h3>How we use it</h3>
          <p>
            To respond to your inquiry, schedule your visit, and improve our services. We do not
            sell personal information.
          </p>
          <h3>Contact</h3>
          <p>Questions about this policy? Email privacy@umbrellahealth.example.</p>
        </ProseSection>
        <CTABanner />
      </main>
    </>
  );
}
