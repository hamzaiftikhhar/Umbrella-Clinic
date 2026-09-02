import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { SleepMedicineNycPage } from "@/components/site/SleepMedicineNycPage";
import { sleepMedicineNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { SLEEP_MEDICINE_NYC_SEO } from "@/data/sleep-medicine-nyc-content";
import { IMG } from "@/data/images";
import { absoluteUrl } from "@/lib/site";

const heroImageUrl = absoluteUrl(IMG.sleepMedicineHero);

const seo = buildPageSeo({
  title: SLEEP_MEDICINE_NYC_SEO.title,
  description: SLEEP_MEDICINE_NYC_SEO.description,
  path: ROUTES.sleepMedicine,
  geo: true,
  keywords: [
    "sleep medicine services",
    "sleep medicine services NYC",
    "sleep disorder center",
    "somnologist near me",
    "best sleep clinic near me",
    "sleep coach near me",
    "providence sleep medicine",
    "sleep clinics",
    "insomnia therapist",
    "insomnia therapy near me",
    "sleep medicine near me",
    "sleep specialists NYC",
  ],
  ogImage: IMG.sleepMedicineHero,
  extraSchema: [sleepMedicineNycPageSchemaGraph(heroImageUrl)],
});
export const metadata = seo.metadata;

export default function SleepMedicineServicesNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <SleepMedicineNycPage />
    </>
  );
}
