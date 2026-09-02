import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { BlogPostPage } from "@/components/site/BlogPostPage";
import { faqSchema } from "@/components/site/primitives/FAQList";
import { BLOG_POSTS, getBlogPost, getPostFaqs, type BlogPost } from "@/data/blog-posts";
import { articleSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function blogPostSeo(post: BlogPost) {
  const path = `/blog/${post.slug}`;
  const seo = buildPageSeo({
    title: post.seoTitle ?? `${post.title} — Umbrella Health Blog`,
    description: post.metaDescription ?? post.excerpt,
    path,
    type: "article",
    ogImage: post.image,
    keywords: post.focusKeyword ? [post.focusKeyword] : undefined,
    crumbs: [{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }],
    robots: { index: false, follow: false },
  });
  return { path, seo };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return blogPostSeo(post).seo.metadata;
}

export default async function BlogPostRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { path, seo } = blogPostSeo(post);
  const faqs = getPostFaqs(post);
  const jsonLd = [
    ...seo.jsonLd,
    articleSchema({
      title: post.seoTitle ?? post.title,
      excerpt: post.metaDescription ?? post.excerpt,
      path,
      image: post.image,
      datePublished: post.publishedAt,
    }),
    ...(faqs.length > 0 ? [faqSchema(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPostPage post={post} />
    </>
  );
}
