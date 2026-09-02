import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { MedicalSpaNycPage } from "@/components/site/MedicalSpaNycPage";
import { medicalSpaNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { MEDICAL_SPA_SEO } from "@/data/medical-spa-nyc-content";
import { IMG } from "@/data/images";
import { absoluteUrl } from "@/lib/site";

const heroImageUrl = absoluteUrl(IMG.medicalSpaNycHero);

const seo = buildPageSeo({
  title: MEDICAL_SPA_SEO.title,
  description: MEDICAL_SPA_SEO.description,
  path: ROUTES.medicalSpa,
  geo: true,
  keywords: [...MEDICAL_SPA_SEO.keywords],
  ogImage: IMG.medicalSpaNycHero,
  extraSchema: [medicalSpaNycPageSchemaGraph(heroImageUrl)],
});
export const metadata = seo.metadata;

export default function MedicalSpaNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <MedicalSpaNycPage />
    </>
  );
}
