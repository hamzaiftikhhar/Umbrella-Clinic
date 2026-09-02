import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { IMG } from "@/data/images";
import { NEIGHBORHOOD_AREAS } from "@/data/seo-faqs";
import { localClinicSchema } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Care for Brooklyn Professionals — Umbrella Health NYC",
  description:
    "Board-certified primary care and specialists commutable from Williamsburg, DUMBO, and Brooklyn Heights. One NoHo clinic, insurance accepted.",
  path: "/locations/brooklyn",
  geo: true,
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Locations", to: "/locations" },
    { label: "Brooklyn" },
  ],
  extraSchema: [localClinicSchema("Brooklyn", [...NEIGHBORHOOD_AREAS.brooklyn])],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <NeighborhoodPage
        config={{
          name: "Brooklyn",
          italic: "A 20-minute commute to",
          description:
            "Easily commutable from Williamsburg, Brooklyn Heights, and DUMBO  and worth the trip for genuinely integrated specialty care.",
          image: IMG.brooklyn,
          imageAlt: "Brooklyn cityscape",
          transit: "L from Bedford Ave (15 min); A/C from High St (12 min); F from York (10 min)",
          serves: "Williamsburg, Brooklyn Heights, DUMBO, Cobble Hill",
          why: [
            "Quick L/F/A commute from Brooklyn neighborhoods underserved by integrated care",
            "Telehealth across NY State for in-between visits",
            "Diagnostics on-site so one visit can do the work of three",
            "Insurance-accepted; transparent cash-pay for longevity",
          ],
          crumbs: [
            { label: "Home", to: "/" },
            { label: "Locations", to: "/locations" },
            { label: "Brooklyn" },
          ],
        }}
      />
    </>
  );
}
