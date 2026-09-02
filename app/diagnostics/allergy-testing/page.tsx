import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Allergy Testing NYC  Umbrella Health",
  description:
    "Comprehensive skin and lab-based allergy testing for environmental, food, and contact allergies.",
  path: "/diagnostics/allergy-testing",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Diagnostics", to: "/diagnostics" },
    { label: "Allergy Testing" },
  ],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <LeafPage
        config={{
          hero: {
            eyebrow: "Allergy Testing",
            italic: "Pinpoint the trigger,",
            title: "not the symptom.",
            description:
              "Skin-prick and lab-based allergy testing with a treatment plan that goes beyond an over-the-counter shrug.",
            image: IMG.microscope,
            imageAlt: "Allergy testing in lab",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Diagnostics", to: "/diagnostics" },
              { label: "Allergy Testing" },
            ],
          },
          intro: {
            heading: "Comprehensive testing,",
            accent: "real plans.",
            body: "We identify the actual triggers and build a treatment plan that integrates with your overall medical record.",
            bullets: [
              {
                iconKey: "flask-conical",
                title: "Skin & lab panels",
                body: "Skin-prick and serum IgE testing for common allergens.",
              },
              {
                iconKey: "activity",
                title: "Treatment options",
                body: "From medication to immunotherapy referrals when appropriate.",
              },
              {
                iconKey: "clipboard-list",
                title: "Integrated record",
                body: "Results live alongside primary care and pulmonary.",
              },
            ],
          },
        }}
      />
    </>
  );
}
