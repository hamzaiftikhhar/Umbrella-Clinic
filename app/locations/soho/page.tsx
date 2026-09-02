import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { IMG } from "@/data/images";
import { NEIGHBORHOOD_AREAS } from "@/data/seo-faqs";
import { localClinicSchema } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Primary & Specialty Care near SoHo — Umbrella Health",
  description:
    "Multispecialty primary care and specialists for SoHo and Nolita patients. Two blocks from Spring Street — insurance accepted, book online.",
  path: "/locations/soho",
  geo: true,
  crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "SoHo" }],
  extraSchema: [localClinicSchema("SoHo", [...NEIGHBORHOOD_AREAS.soho])],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <NeighborhoodPage
        config={{
          name: "SoHo",
          italic: "Care that fits",
          description:
            "Two blocks from Spring Street  calm modern medicine for SoHo, Nolita, and Little Italy.",
          image: IMG.soho,
          imageAlt: "SoHo street",
          transit: "6 at Spring  2-minute walk; N/R at Prince  5 minutes",
          serves: "SoHo, Nolita, Little Italy, Lower East Side",
          why: [
            "Two blocks from the 6  actually walkable",
            "Same-day labs, EKG, ultrasound on-site",
            "Multispecialty: primary care, cardiology, neurology, sleep, pain",
            "Insurance-accepted with cash-pay longevity add-ons",
          ],
          crumbs: [
            { label: "Home", to: "/" },
            { label: "Locations", to: "/locations" },
            { label: "SoHo" },
          ],
        }}
      />
    </>
  );
}
