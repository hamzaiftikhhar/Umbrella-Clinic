import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { pillars, articlesByPillar } from "@/data/articles";
import { ArticleCard } from "@/components/site/ArticleCard";

const p = pillars["longevity"];

const seo = buildPageSeo({
  title: `${p.title}  Umbrella Health Resources`,
  description: p.description,
  path: `/resources/${p.slug}`,
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Resources", to: "/resources" },
    { label: p.title },
  ],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <main>
        <PageHero
          eyebrow="Resources · Longevity"
          italic="Longevity &"
          title="prevention."
          description={p.description}
          image={p.image}
          imageAlt={p.title}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Resources", to: "/resources" },
            { label: p.title },
          ]}
          tone="mint"
        />
        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {articlesByPillar("longevity").map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.05}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
              {articlesByPillar("longevity").length === 0 && (
                <p className="text-sm text-muted-foreground">New articles coming soon.</p>
              )}
            </div>
          </Container>
        </section>
        <CTABanner />
      </main>
    </>
  );
}
