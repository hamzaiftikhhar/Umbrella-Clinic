import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { ArticlePage } from "@/components/site/ArticlePage";
import { articles } from "@/data/articles";
import { articleSchema } from "@/lib/schema";

const article = articles.find((a) => a.slug === "sleep-debt-guide")!;
const articlePath = `/resources/busy-professionals/${article.slug}`;

const seo = buildPageSeo({
  title: `${article.title} — Umbrella Health`,
  description: article.excerpt,
  path: articlePath,
  type: "article",
  ogImage: article.image,
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Resources", to: "/resources" },
    { label: "Busy Professionals", to: "/resources/busy-professionals" },
    { label: article.title },
  ],
  robots: { index: false, follow: false },
  extraSchema: [
    articleSchema({
      title: article.title,
      excerpt: article.excerpt,
      path: articlePath,
      image: article.image,
    }),
  ],
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ArticlePage article={article} />
    </>
  );
}
