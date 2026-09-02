import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Healthspan & Biomarker Program NYC  Umbrella",
  description:
    "Track your biomarkers longitudinally and optimize against your own baseline  measured, not marketed.",
  path: "/longevity/healthspan-programs",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Longevity", to: "/longevity" },
    { label: "Healthspan Programs" },
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
            eyebrow: "Healthspan",
            italic: "Track your numbers,",
            title: "year after year.",
            description:
              "A clinical program for people who want to measure and optimize the next 30 years  not just react to the last 12 months.",
            image: IMG.busyPro,
            imageAlt: "Patient reviewing biomarker dashboard",
            tone: "mint",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Longevity", to: "/longevity" },
              { label: "Healthspan Programs" },
            ],
          },
          intro: {
            heading: "Longitudinal,",
            accent: "by design.",
            body: "Every panel stacks on the last. Trends are the point.",
            bullets: [
              {
                iconKey: "line-chart",
                title: "Longitudinal dashboard",
                body: "Your biomarkers, tracked over years  not just the last visit.",
              },
              {
                iconKey: "activity",
                title: "Quarterly check-ins",
                body: "Iterate on the plan against actual data.",
              },
              {
                iconKey: "clipboard-list",
                title: "Written plan",
                body: "What we're measuring, why, and what we'll change.",
              },
            ],
          },
        }}
      />
    </>
  );
}
