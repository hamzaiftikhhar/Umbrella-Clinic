import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Autonomic & Sudomotor Testing NYC  Umbrella",
  description: "Specialized autonomic and sudomotor testing  rarely in-house anywhere else in NYC.",
  path: "/diagnostics/autonomic-testing",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Diagnostics", to: "/diagnostics" },
    { label: "Autonomic Testing" },
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
            eyebrow: "Autonomic & Sudomotor",
            italic: "For symptoms that",
            title: "no one can explain.",
            description:
              "When fatigue, dizziness, or neuropathy keep slipping through, autonomic testing gives the workup a real foothold.",
            image: IMG.lab,
            imageAlt: "Autonomic testing equipment",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Diagnostics", to: "/diagnostics" },
              { label: "Autonomic Testing" },
            ],
          },
          intro: {
            heading: "What it measures,",
            accent: "and why it matters.",
            body: "Sudomotor and autonomic testing quantify small-fiber and autonomic nervous system function  the system behind a lot of 'all your labs are normal' presentations.",
            bullets: [
              {
                healthIcon: "nervous-system",
                title: "Sudomotor (QSART-style)",
                body: "Quantitative sweat response  small-fiber neuropathy screening.",
              },
              {
                healthIcon: "neurology",
                title: "Autonomic profile",
                body: "Heart rate variability and tilt response for dysautonomia workups.",
              },
              {
                healthIcon: "lab-tube",
                title: "Integrated workup",
                body: "Read alongside neurology, cardiology, and labs.",
              },
            ],
          },
        }}
      />
    </>
  );
}
