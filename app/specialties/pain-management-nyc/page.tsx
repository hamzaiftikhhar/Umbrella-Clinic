import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PainManagementNycPage } from "@/components/site/PainManagementNycPage";
import { painManagementNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { PAIN_NYC_SEO } from "@/data/pain-management-nyc-content";
import { IMG } from "@/data/images";
import { absoluteUrl } from "@/lib/site";

const heroImageUrl = absoluteUrl(IMG.painManagementProfessionalHero);

const seo = buildPageSeo({
  title: PAIN_NYC_SEO.title,
  description: PAIN_NYC_SEO.description,
  path: ROUTES.painManagement,
  geo: true,
  keywords: [
    "Pain Management NYC",
    "pain management",
    "pain treatment near me",
    "pain management services",
    "pain management clinic near me",
    "modern pain management",
    "acute pain management",
    "pain clinic near me",
    "pain management doctor",
    "pain management doctor near me",
    "pain specialist near me",
  ],
  ogImage: IMG.painManagementProfessionalHero,
  extraSchema: [painManagementNycPageSchemaGraph(heroImageUrl)],
});
export const metadata = seo.metadata;

export default function PainManagementNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PainManagementNycPage />
    </>
  );
}
