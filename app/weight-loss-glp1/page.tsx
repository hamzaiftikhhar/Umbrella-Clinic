import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { LeafPage, faqSchema } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";

const faqs = [
  {
    q: "Is the program medically supervised?",
    a: "Yes. Every member starts with baseline labs and body composition. Monthly clinical follow-ups, prescribing managed in-house by board-certified physicians.",
  },
  {
    q: "Which medications are available?",
    a: "Semaglutide and tirzepatide (Ozempic/Wegovy/Mounjaro/Zepbound) where clinically appropriate. Subject to insurance and clinical eligibility.",
  },
  {
    q: "What's included in the price?",
    a: "Initial consult, baseline labs, body composition, monthly clinical follow-ups, and titration management. Medication cost is separate and may be covered by insurance.",
  },
  {
    q: "How fast can I start?",
    a: "Most members complete intake and labs within the first week and start the program at the follow-up visit.",
  },
];

const seo = buildPageSeo({
  title: "GLP-1 Weight Loss NYC  Medically Supervised | Umbrella",
  description:
    "Medically supervised GLP-1 weight loss with baseline labs, body composition, and monthly clinical follow-up. Insurance-friendly. Book in NYC.",
  path: "/weight-loss-glp1",
  crumbs: [{ label: "Home", to: "/" }, { label: "Weight Loss (GLP-1)" }],
  extraSchema: [faqSchema(faqs)],
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
            eyebrow: "Weight Loss · GLP-1",
            italic: "Medically supervised.",
            title: "Metabolically measured.",
            description:
              "A real clinical program  baseline labs, body composition, monthly check-ins  not a prescription mill. Semaglutide and tirzepatide where appropriate.",
            image: IMG.medicalWeightLossConsult,
            imageAlt:
              "Medical weight loss consultation measuring waist circumference at Umbrella Health NYC",
            crumbs: [{ label: "Home", to: "/" }, { label: "Weight Loss (GLP-1)" }],
          },
          intro: {
            heading: "Built like a",
            accent: "real program.",
            body: "GLP-1 medications work. They work better when someone is actually watching the data and tuning the plan.",
            bullets: [
              {
                iconKey: "syringe",
                title: "Clinical prescribing",
                body: "Semaglutide and tirzepatide where clinically indicated, managed by physicians.",
              },
              {
                iconKey: "line-chart",
                title: "Body comp + labs",
                body: "Baseline + interval body composition, lipid, A1c, and metabolic tracking.",
              },
              {
                iconKey: "clipboard-check",
                title: "Monthly follow-ups",
                body: "Titration, side effects, lifestyle  managed every month, not once a quarter.",
              },
            ],
          },
          pills: {
            label: "What's included",
            items: [
              "Initial consult",
              "Baseline labs",
              "Body composition",
              "Monthly clinical follow-ups",
              "Titration management",
              "Side-effect coaching",
              "Insurance navigation",
            ],
          },
          related: {
            heading: "Pair with",
            accent: "the right care.",
            cards: [
              {
                title: "Primary Care",
                description: "Annual physical that anchors the plan.",
                to: "/specialties/primary-care",
              },
              {
                title: "Biomarker Panels",
                description: "See exactly what GLP-1 is changing.",
                to: "/diagnostics/biomarkers",
              },
              {
                title: "Hormone & Metabolic",
                description: "Long-term metabolic optimization.",
                to: "/longevity/hormone-optimization",
              },
            ],
          },
          faqs,
          cta: { title: "Start a measured", italic: "weight loss program." },
        }}
      />
    </>
  );
}
