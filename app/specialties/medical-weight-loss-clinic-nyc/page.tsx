import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { MedicalWeightLossClinicNycPage } from "@/components/site/MedicalWeightLossClinicNycPage";
import { medicalWeightLossClinicNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { WEIGHT_LOSS_CLINIC_SEO } from "@/data/medical-weight-loss-clinic-nyc-content";
import { IMG } from "@/data/images";
import { absoluteUrl } from "@/lib/site";

const heroImageUrl = absoluteUrl(IMG.medicalWeightLossClinicHero);

const seo = buildPageSeo({
  title: WEIGHT_LOSS_CLINIC_SEO.title,
  description: WEIGHT_LOSS_CLINIC_SEO.description,
  path: ROUTES.medicalWeightLoss,
  geo: true,
  keywords: [...WEIGHT_LOSS_CLINIC_SEO.keywords],
  ogImage: IMG.medicalWeightLossClinicHero,
  extraSchema: [medicalWeightLossClinicNycPageSchemaGraph(heroImageUrl)],
});
export const metadata = seo.metadata;

export default function MedicalWeightLossClinicNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <MedicalWeightLossClinicNycPage />
    </>
  );
}
