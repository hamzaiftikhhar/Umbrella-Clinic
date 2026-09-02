import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { DiagnosticTestingNycPage } from "@/components/site/DiagnosticTestingNycPage";
import { diagnosticTestingNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import { DIAGNOSTIC_TESTING_SEO } from "@/data/diagnostic-testing-nyc-content";
import { IMG } from "@/data/images";
import { absoluteUrl } from "@/lib/site";

const heroImageUrl = absoluteUrl(IMG.diagnosticTestingHero);

const seo = buildPageSeo({
  title: DIAGNOSTIC_TESTING_SEO.title,
  description: DIAGNOSTIC_TESTING_SEO.description,
  path: ROUTES.diagnostics,
  geo: true,
  keywords: [...DIAGNOSTIC_TESTING_SEO.keywords],
  ogImage: IMG.diagnosticTestingHero,
  extraSchema: [diagnosticTestingNycPageSchemaGraph(heroImageUrl)],
});
export const metadata = seo.metadata;

export default function DiagnosticsRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <DiagnosticTestingNycPage />
    </>
  );
}
