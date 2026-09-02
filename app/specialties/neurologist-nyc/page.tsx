import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { NeurologistNycPage } from "@/components/site/NeurologistNycPage";
import { neurologistNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { NEUROLOGIST_NYC_SEO } from "@/data/neurologist-nyc-content";
import { IMG } from "@/data/images";
import { absoluteUrl } from "@/lib/site";

const heroImageUrl = IMG.neurologyHero.startsWith("http")
  ? IMG.neurologyHero
  : absoluteUrl(IMG.neurologyHero);

const seo = buildPageSeo({
  title: NEUROLOGIST_NYC_SEO.title,
  description: NEUROLOGIST_NYC_SEO.description,
  path: ROUTES.neurology,
  geo: true,
  keywords: [
    "neurologist NYC",
    "neurologist for tremors nyc",
    "neurologist for dystonia nyc",
    "neurologist in nyc",
    "sleep disorders neurologist nyc",
    "best pediatric neurologist nyc",
    "neurologist for sleep disorders nyc",
    "neurologist for dementia nyc",
    "neurologist nyc queens",
    "brain specialist NYC",
    "migraine neurologist NYC",
  ],
  ogImage: IMG.neurologyHero,
  extraSchema: [neurologistNycPageSchemaGraph(heroImageUrl)],
});
export const metadata = seo.metadata;

export default function NeurologistNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <NeurologistNycPage />
    </>
  );
}
