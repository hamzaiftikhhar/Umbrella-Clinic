import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { IMG } from "@/data/images";
import { NEIGHBORHOOD_AREAS } from "@/data/seo-faqs";
import { localClinicSchema } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Primary & Specialty Care near Union Square — Umbrella Health",
  description:
    "Board-certified primary care and specialists a short walk from Union Square, NYC. In-house diagnostics, insurance accepted — book online.",
  path: "/locations/union-square",
  geo: true,
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Locations", to: "/locations" },
    { label: "Union Square" },
  ],
  extraSchema: [localClinicSchema("Union Square", [...NEIGHBORHOOD_AREAS["union-square"]])],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <NeighborhoodPage
        config={{
          name: "Union Square",
          italic: "Multispecialty care",
          description:
            "A short walk from Union Square  primary care, cardiology, sleep, and pain in one calm clinic, insurance accepted.",
          image: IMG.unionSquare,
          imageAlt: "Union Square area in Manhattan",
          transit: "6, N, Q, R, W, L at Union Square  12-minute walk south",
          serves: "Union Square, Gramercy, East Village",
          why: [
            "One coordinated medical record across primary care and specialists",
            "Same-day labs and EKG instead of cross-town referrals",
            "Insurance-friendly  most major plans accepted",
            "Concierge-quality calm without concierge pricing",
          ],
          crumbs: [
            { label: "Home", to: "/" },
            { label: "Locations", to: "/locations" },
            { label: "Union Square" },
          ],
        }}
      />
    </>
  );
}
