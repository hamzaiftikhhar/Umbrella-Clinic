import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PhysicianProfilePage } from "@/components/site/PhysicianProfilePage";
import { PHYSICIANS, getPhysicianById, physicianProfilePath } from "@/data/physicians";
import { physicianProfilePageSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PHYSICIANS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const physician = getPhysicianById(id);
  if (!physician) return {};

  const path = physicianProfilePath(id);
  const seo = buildPageSeo({
    title: `${physician.name}, ${physician.credentials} — ${physician.title} NYC`,
    description: `Book ${physician.name}, ${physician.title.toLowerCase()} at Umbrella Health in Lower Manhattan. ${physician.bio.slice(0, 140)}…`,
    path,
    geo: true,
    ogImage: physician.image,
    crumbs: [
      { label: "Home", to: "/" },
      { label: "Our Team", to: "/our-team" },
      { label: physician.name },
    ],
    robots: { index: false, follow: true },
  });
  return seo.metadata;
}

export default async function PhysicianProfileRoute({ params }: PageProps) {
  const { id } = await params;
  const physician = getPhysicianById(id);
  if (!physician) notFound();

  const path = physicianProfilePath(id);
  const jsonLd = physicianProfilePageSchema(physician, path);

  return (
    <>
      <JsonLd data={jsonLd} />
      <PhysicianProfilePage physician={physician} />
    </>
  );
}
