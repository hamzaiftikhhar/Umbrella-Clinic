import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { IMG } from "@/data/images";
import { NEIGHBORHOOD_AREAS } from "@/data/seo-faqs";
import { localClinicSchema } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Primary & Specialty Care near Tribeca / FiDi — Umbrella Health",
  description:
    "Board-certified primary care and specialists for Tribeca and Financial District professionals. In-house diagnostics at our NoHo clinic — insurance accepted.",
  path: "/locations/tribeca-fidi",
  geo: true,
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Locations", to: "/locations" },
    { label: "Tribeca / FiDi" },
  ],
  extraSchema: [localClinicSchema("Tribeca / FiDi", [...NEIGHBORHOOD_AREAS["tribeca-fidi"]])],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <NeighborhoodPage
        config={{
          name: "Tribeca & FiDi",
          italic: "Concierge-quality care",
          description:
            "Built for downtown firms  executive physicals, longevity, GLP-1, and multispecialty under one roof, insurance accepted.",
          image: IMG.tribeca,
          imageAlt: "Tribeca / Financial District street view",
          transit: "6 at Canal  8-minute walk; 4/5 at Brooklyn Bridge  12 minutes",
          serves: "Tribeca, Financial District, Battery Park City",
          why: [
            "Executive physical programs designed for principals and partners",
            "Same-day diagnostics so a visit fits inside a calendar block",
            "Longevity and metabolic programs measured against your baseline",
            "Telehealth follow-ups for the weeks you can't make it in",
          ],
          crumbs: [
            { label: "Home", to: "/" },
            { label: "Locations", to: "/locations" },
            { label: "Tribeca / FiDi" },
          ],
        }}
      />
    </>
  );
}
