import { buildPageSeo, type PageSeo } from "@/lib/page-head";
import type { Crumb } from "@/components/site/PageHero";
import type { SpecialtyAeoContent } from "@/data/specialty-content";
import { physiciansForSpecialty } from "@/data/physicians";
import { specialtyPageSchemaGraph } from "@/lib/schema";

export function buildSpecialtyPageSeo(
  path: string,
  crumbs: Crumb[],
  aeo: SpecialtyAeoContent,
): PageSeo {
  const physicians = physiciansForSpecialty(aeo.specialtyKey);
  return buildPageSeo({
    title: `${aeo.serviceName} — Umbrella Health`,
    description: aeo.serviceDescription,
    path,
    geo: true,
    crumbs,
    extraSchema: [
      specialtyPageSchemaGraph(
        path,
        {
          name: aeo.serviceName,
          description: aeo.serviceDescription,
          path,
          serviceType: aeo.serviceName.split(" in ")[0],
        },
        aeo.faqs,
        physicians.map((p) => p.id),
      ),
    ],
  });
}
