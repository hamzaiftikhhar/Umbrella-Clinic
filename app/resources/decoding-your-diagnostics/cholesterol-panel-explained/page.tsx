import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { ArticlePage } from "@/components/site/ArticlePage";
import { articles } from "@/data/articles";
import { articleSchema } from "@/lib/schema";

const article = articles.find((a) => a.slug === "cholesterol-panel-explained")!;
const articlePath = `/resources/decoding-your-diagnostics/${article.slug}`;

const seo = buildPageSeo({
  title: `${article.title} — Umbrella Health`,
  description: article.excerpt,
  path: articlePath,
  type: "article",
  ogImage: article.image,
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Resources", to: "/resources" },
    { label: "Decoding Your Diagnostics", to: "/resources/decoding-your-diagnostics" },
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
