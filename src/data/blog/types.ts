export interface BlogLink {
  /** Visible anchor text — keep authentic; do not rewrite. */
  label: string;
  href: string;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export type BlogDiagramVariant = "concept" | "process" | "preventive" | "care-path";

export type BlogBlock =
  | { type: "p"; text: string; links?: BlogLink[] }
  | { type: "h2"; heading: string; subtitle?: string }
  | { type: "h3"; heading: string; subtitle?: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: [string, string]; rows: [string, string][]; note?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "cta"; prompt?: string; label: string; href: string }
  | { type: "ctaGroup"; links: BlogLink[] }
  | { type: "ctaBox"; title: string; body?: string; links: BlogLink[] }
  | { type: "concept"; alt: string }
  | { type: "process"; alt: string; steps: [string, string, string] }
  | { type: "diagram"; variant: BlogDiagramVariant; alt: string; steps?: string[] }
  | { type: "faq"; heading: string; subtitle?: string; items: BlogFaq[] }
  | { type: "clinicFooter" };

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  seoTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  author: string;
  body: BlogBlock[];
}

export function headingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getPostFaqs(post: BlogPost): BlogFaq[] {
  return post.body.flatMap((block) => (block.type === "faq" ? block.items : []));
}

export function getPostToc(post: BlogPost) {
  return post.body.flatMap((block) => {
    if (block.type === "h2" || block.type === "faq") {
      return [{ id: headingId(block.heading), heading: block.heading }];
    }
    return [];
  });
}
