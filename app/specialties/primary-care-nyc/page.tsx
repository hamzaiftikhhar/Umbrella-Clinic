import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PrimaryCareNycPage } from "@/components/site/PrimaryCareNycPage";
import { primaryCareNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { PRIMARY_CARE_SEO } from "@/data/primary-care-nyc-content";

const seo = buildPageSeo({
  title: PRIMARY_CARE_SEO.title,
  description: PRIMARY_CARE_SEO.description,
  path: ROUTES.primaryCare,
  geo: true,
  keywords: [
    "primary care doctor NYC",
    "primary care physician New York City",
    "primary care doctor Lower Manhattan",
    "internal medicine NYC",
    "annual physical NYC",
    "same day doctor NYC",
  ],
  ogImage: "/images/dr-rajat-lamington-primary-care-nyc.webp",
  extraSchema: [primaryCareNycPageSchemaGraph()],
});
export const metadata = seo.metadata;

export default function PrimaryCareNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PrimaryCareNycPage />
    </>
  );
}
