import type { Metadata } from "next";
import type { Crumb } from "@/components/site/PageHero";
import { CLINIC_COORDS, SITE_NAME, absoluteUrl } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/schema";

interface HeadOpts {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  crumbs?: Crumb[];
  extraSchema?: object[];
  /** Override default OG/Twitter image path (relative to public/). */
  ogImage?: string;
  /** Optional keywords for high-intent landing pages. */
  keywords?: string[];
  /** Add NYC geo meta tags for local landing pages. */
  geo?: boolean;
  /** Override robots directives (defaults to index, follow). */
  robots?: Metadata["robots"];
}

export interface PageSeo {
  metadata: Metadata;
  jsonLd: object[];
}

function ogImages(imagePath: string) {
  const url = absoluteUrl(imagePath);
  return [{ url, width: 1200, height: 630, alt: SITE_NAME }];
}

export function buildPageSeo({
  title,
  description,
  path,
  type = "website",
  crumbs,
  extraSchema = [],
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  geo = false,
  robots = { index: true, follow: true },
}: HeadOpts): PageSeo {
  const jsonLd: object[] = [];

  if (crumbs && crumbs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: c.to ? absoluteUrl(c.to) : absoluteUrl(path),
      })),
    });
  }

  jsonLd.push(...extraSchema);

  const images = ogImages(ogImage);

  const metadata: Metadata = {
    // Complete SEO titles (brand already present, or written as "Keyword | Phrase")
    // must not get the layout template " — Umbrella Health" appended.
    title: title.includes(SITE_NAME) || title.includes(" | ") ? { absolute: title } : title,
    description,
    keywords,
    robots,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName: SITE_NAME,
      images,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(ogImage)],
    },
    ...(geo
      ? {
          other: {
            "geo.region": "US-NY",
            "geo.placename": "New York City",
            "geo.position": `${CLINIC_COORDS.lat};${CLINIC_COORDS.lng}`,
            ICBM: `${CLINIC_COORDS.lat}, ${CLINIC_COORDS.lng}`,
          },
        }
      : {}),
  };

  return { metadata, jsonLd };
}

/** @deprecated TanStack Start helper — use buildPageSeo for Next.js pages. */
export function pageHead(opts: HeadOpts) {
  const { jsonLd } = buildPageSeo(opts);
  const scripts = jsonLd.map((s) => ({
    type: "application/ld+json",
    children: JSON.stringify(s),
  }));

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: opts.path },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: opts.path }],
    scripts,
  };
}
