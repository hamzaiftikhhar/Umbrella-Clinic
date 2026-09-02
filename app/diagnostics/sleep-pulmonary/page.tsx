import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Home Sleep Study & Pulmonary Testing NYC  Umbrella",
  description:
    "Diagnostic-grade home sleep studies and pulmonary function testing  without an overnight lab.",
  path: "/diagnostics/sleep-pulmonary",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Diagnostics", to: "/diagnostics" },
    { label: "Sleep & Pulmonary" },
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
            eyebrow: "Sleep & Pulmonary",
            italic: "Diagnostics,",
            title: "delivered to your home.",
            description:
              "Calibrated home sleep tests and PFT  clinical-grade, clinically interpreted, designed for the way you actually live.",
            image: IMG.sleepStudy,
            imageAlt: "Home sleep study device",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Diagnostics", to: "/diagnostics" },
              { label: "Sleep & Pulmonary" },
            ],
          },
          intro: {
            heading: "What we test",
            accent: "& why.",
            body: "Sleep apnea is one of the most under-diagnosed cardiometabolic risk factors. We screen it at scale and act on it.",
            bullets: [
              {
                iconKey: "moon",
                title: "Home sleep study",
                body: "Diagnostic-grade at-home apnea testing with full clinical interpretation.",
              },
              {
                iconKey: "wind",
                title: "Pulmonary function (PFT)",
                body: "Spirometry and lung function testing in-clinic.",
              },
              {
                iconKey: "clipboard-list",
                title: "Treatment plan",
                body: "From CPAP to oral appliance to lifestyle  matched to your case.",
              },
            ],
          },
        }}
      />
    </>
  );
}
