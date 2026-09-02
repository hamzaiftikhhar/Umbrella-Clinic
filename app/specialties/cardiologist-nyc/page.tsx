import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { CardiologistNycPage } from "@/components/site/CardiologistNycPage";
import { cardiologistNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { CARDIOLOGY_NYC_SEO } from "@/data/cardiologist-nyc-content";
import { IMG } from "@/data/images";
import { absoluteUrl } from "@/lib/site";

const heroImageUrl = absoluteUrl(IMG.cardiologyHeartModel);

const seo = buildPageSeo({
  title: CARDIOLOGY_NYC_SEO.title,
  description: CARDIOLOGY_NYC_SEO.description,
  path: ROUTES.cardiology,
  geo: true,
  keywords: [
    "Cardiologist NYC",
    "NYC top Cardiologist",
    "Cardiologist downtown NYC",
    "best in class NYC Cardiologist",
    "NYC best rated Cardiologist",
    "Cardiologist upper east side NYC",
    "best Cardiologist in midtown NYC",
    "top midtown NYC Cardiologist",
    "best rated NYC Cardiologist",
    "best NYC Cardiologist",
    "top NYC Cardiologist",
    "sports Cardiologist NYC",
  ],
  ogImage: IMG.cardiologyHeartModel,
  extraSchema: [cardiologistNycPageSchemaGraph(heroImageUrl)],
});
export const metadata = seo.metadata;

export default function CardiologistNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <CardiologistNycPage />
    </>
  );
}
