import type { ReactNode } from "react";
import { GeoImage } from "./primitives/GeoImage";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { FAQList } from "./primitives/FAQList";
import { BLOG_POSTS, getPostToc, headingId, type BlogLink, type BlogPost } from "@/data/blog-posts";
import { CLINIC_GOOGLE_MAPS_URL, SITE_ADDRESS, SITE_NAME, SITE_PHONE } from "@/lib/site";

const BLUE_LINK =
  "font-medium text-primary underline decoration-primary/40 underline-offset-[5px] transition-colors hover:text-primary-glow hover:decoration-primary";

function isExternalHref(href: string) {
  return /^(https?:|tel:|mailto:)/i.test(href);
}

function ArticleLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (isExternalHref(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function LinkedText({ text, links }: { text: string; links?: BlogLink[] }) {
  if (!links?.length) return <>{text}</>;

  type Piece = { type: "text"; value: string } | { type: "link"; label: string; href: string };
  let pieces: Piece[] = [{ type: "text", value: text }];

  for (const link of links) {
    const next: Piece[] = [];
    let used = false;
    for (const piece of pieces) {
      if (piece.type === "link" || used) {
        next.push(piece);
        continue;
      }
      const idx = piece.value.indexOf(link.label);
      if (idx === -1) {
        next.push(piece);
        continue;
      }
      used = true;
      if (idx > 0) next.push({ type: "text", value: piece.value.slice(0, idx) });
      next.push({ type: "link", label: link.label, href: link.href });
      const end = idx + link.label.length;
      if (end < piece.value.length) next.push({ type: "text", value: piece.value.slice(end) });
    }
    pieces = next;
  }

  return (
    <>
      {pieces.map((piece, i) =>
        piece.type === "text" ? (
          <span key={i}>{piece.value}</span>
        ) : (
          <ArticleLink key={`${piece.href}-${i}`} href={piece.href} className={BLUE_LINK}>
            {piece.label}
          </ArticleLink>
        ),
      )}
    </>
  );
}

function CtaPanel({ prompt, label, href }: { prompt?: string; label: string; href: string }) {
  return (
    <aside className="my-8 border-l-[3px] border-primary bg-primary/[0.04] px-5 py-4 sm:px-6">
      {prompt ? <p className="text-sm text-muted-foreground">{prompt}</p> : null}
      <ArticleLink href={href} className={`${BLUE_LINK} mt-1 inline-block text-base sm:text-lg`}>
        {label}
      </ArticleLink>
    </aside>
  );
}

function FlowChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item, i) => (
        <span key={item} className="inline-flex items-center gap-2">
          <span className="rounded-full border border-primary/20 bg-background px-3.5 py-1.5 text-sm font-medium text-foreground">
            {item}
          </span>
          {i < items.length - 1 ? (
            <span className="text-primary" aria-hidden>
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

function Diagram({
  variant,
  alt,
  steps,
}: {
  variant: "concept" | "process" | "preventive" | "care-path";
  alt: string;
  steps?: string[];
}) {
  const processSteps = steps?.length
    ? steps
    : variant === "process"
      ? ["Consultation", "Evaluation/Testing", "Personalized Care Plan"]
      : variant === "care-path"
        ? ["Patient", "Primary Care", "Evaluation", "Specialist", "Follow-Up"]
        : variant === "preventive"
          ? [
              "Preventive Primary Care",
              "Screenings",
              "Vaccinations",
              "Risk Assessment",
              "Blood Pressure",
              "Health Counseling",
              "Follow-Up",
            ]
          : ["Patient", "Primary Care"];

  return (
    <figure className="overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/80 to-background p-6 sm:p-8">
      {variant === "concept" ? (
        <>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Care model
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-background px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)]">
              Patient
            </span>
            <span className="text-primary" aria-hidden>
              →
            </span>
            <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              Primary Care
            </span>
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-4">
            {["Prevention", "Diagnosis", "Treatment", "Ongoing Care"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-primary/15 bg-background px-3 py-3 text-center text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {variant === "preventive"
              ? "Preventive primary care"
              : variant === "care-path"
                ? "Coordinated care"
                : "Visit path"}
          </p>
          <div className="mt-4">
            <FlowChips items={processSteps} />
          </div>
        </>
      )}
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

function ClinicFooter() {
  const phoneHref = `tel:${SITE_PHONE.replace(/\D/g, "")}`;
  return (
    <address className="not-italic rounded-2xl border border-border/60 bg-secondary/40 px-6 py-6">
      <p className="font-display text-lg font-semibold text-foreground">{SITE_NAME}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">
        <ArticleLink href={CLINIC_GOOGLE_MAPS_URL} className={BLUE_LINK}>
          {SITE_ADDRESS}
        </ArticleLink>
      </p>
      <p className="mt-1 text-sm">
        <ArticleLink href={phoneHref} className={BLUE_LINK}>
          {SITE_PHONE}
        </ArticleLink>
      </p>
    </address>
  );
}

function ArticleBody({ post }: { post: BlogPost }) {
  let leadCount = 0;

  return (
    <div className="space-y-5">
      {post.body.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "p") {
          const isLead = leadCount < 2;
          leadCount += 1;
          return (
            <p
              key={key}
              className={
                isLead
                  ? "text-[1.15rem] leading-[1.7] text-foreground sm:text-xl"
                  : "text-[1.05rem] leading-[1.75] text-foreground/85"
              }
            >
              <LinkedText text={block.text} links={block.links} />
            </p>
          );
        }

        if (block.type === "h2") {
          return (
            <header key={key} className="scroll-mt-24 border-t border-border/50 pt-10">
              <h2
                id={headingId(block.heading)}
                className="font-display text-[1.65rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.85rem]"
              >
                {block.heading}
              </h2>
              {block.subtitle ? (
                <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
                  {block.subtitle}
                </p>
              ) : null}
            </header>
          );
        }

        if (block.type === "h3") {
          return (
            <header key={key} className="pt-3">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                {block.heading}
              </h3>
              {block.subtitle ? (
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {block.subtitle}
                </p>
              ) : null}
            </header>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={key} className="grid gap-2 sm:grid-cols-2">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 rounded-xl border border-border/50 bg-secondary/30 px-3.5 py-2.5 text-[0.98rem] leading-snug text-foreground/90"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "table") {
          return (
            <div key={key} className="overflow-hidden rounded-2xl border border-border/60">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[28rem] text-left text-sm">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    {block.rows.map(([left, right], rowIndex) => (
                      <tr
                        key={left}
                        className={rowIndex % 2 === 0 ? "bg-background" : "bg-secondary/35"}
                      >
                        <td className="px-4 py-3 font-medium text-foreground">{left}</td>
                        <td className="px-4 py-3 text-foreground/80">{right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.note ? (
                <p className="border-t border-border/60 bg-secondary/40 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                  {block.note}
                </p>
              ) : null}
            </div>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={key} className="-mx-1 overflow-hidden rounded-2xl sm:mx-0">
              <div className="relative aspect-[3/2] bg-secondary">
                <GeoImage
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
              <figcaption className="mt-2.5 text-sm text-muted-foreground">
                {block.caption ?? block.alt}
              </figcaption>
            </figure>
          );
        }

        if (block.type === "cta") {
          return <CtaPanel key={key} prompt={block.prompt} label={block.label} href={block.href} />;
        }

        if (block.type === "ctaGroup") {
          return (
            <ul
              key={key}
              className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60"
            >
              {block.links.map((link) => (
                <li key={link.href}>
                  <ArticleLink
                    href={link.href}
                    className="flex items-center justify-between gap-3 px-4 py-3.5 text-[1.02rem] font-medium text-primary hover:bg-secondary/50"
                  >
                    {link.label}
                  </ArticleLink>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ctaBox") {
          return (
            <aside
              key={key}
              className="rounded-2xl bg-primary px-6 py-7 text-primary-foreground sm:px-8"
            >
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                {block.title}
              </h3>
              {block.body ? (
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
                  {block.body}
                </p>
              ) : null}
              <div className="mt-5 flex flex-col items-start gap-2">
                {block.links.map((link) => (
                  <ArticleLink
                    key={link.label}
                    href={link.href}
                    className="font-medium text-white underline decoration-white/50 underline-offset-[6px] hover:decoration-white"
                  >
                    {link.label}
                  </ArticleLink>
                ))}
              </div>
            </aside>
          );
        }

        if (block.type === "concept") {
          return <Diagram key={key} variant="concept" alt={block.alt} />;
        }

        if (block.type === "process") {
          return <Diagram key={key} variant="process" alt={block.alt} steps={block.steps} />;
        }

        if (block.type === "diagram") {
          return <Diagram key={key} variant={block.variant} alt={block.alt} steps={block.steps} />;
        }

        if (block.type === "faq") {
          return (
            <section key={key} className="scroll-mt-24 border-t border-border/50 pt-10">
              <h2
                id={headingId(block.heading)}
                className="font-display text-[1.65rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.85rem]"
              >
                {block.heading}
              </h2>
              {block.subtitle ? (
                <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
                  {block.subtitle}
                </p>
              ) : null}
              <div className="mt-5 rounded-2xl border border-border/60 bg-card px-5 py-1 sm:px-6">
                <FAQList items={block.items} />
              </div>
            </section>
          );
        }

        return <ClinicFooter key={key} />;
      })}
    </div>
  );
}

export function BlogPostPage({ post }: { post: BlogPost }) {
  const related = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);
  const toc = getPostToc(post);
  const published = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="bg-background">
      <article>
        <header className="border-b border-border/50 pt-24 pb-10 sm:pt-28 sm:pb-12">
          <Container size="lg">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <span aria-current="page">{post.category}</span>
                </li>
              </ol>
            </nav>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {post.category}
            </p>
            <h1 className="font-display mt-4 max-w-4xl text-balance text-[2.1rem] font-bold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.35rem]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {post.subtitle ?? post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/50 pt-5 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>{published}</span>
              <span>{post.readTime}</span>
            </div>
          </Container>
        </header>

        <figure className="relative mx-auto max-w-6xl overflow-hidden bg-secondary">
          <div className="relative aspect-[16/9] max-h-[34rem] min-h-[16rem] sm:aspect-[2/1]">
            <GeoImage
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <figcaption className="mx-auto max-w-6xl px-5 py-3 text-sm text-muted-foreground sm:px-8">
            {post.imageAlt}
          </figcaption>
        </figure>

        <Container size="lg" className="py-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start lg:gap-16">
            <div className="min-w-0">
              <ArticleBody post={post} />
            </div>

            <aside className="hidden lg:sticky lg:top-24 lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                In this article
              </p>
              <nav aria-label="Article sections" className="mt-4 max-h-[70vh] overflow-y-auto pr-1">
                <ol className="space-y-2.5 border-l border-border/70 pl-4">
                  {toc.slice(0, 12).map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-[13px] leading-snug text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>

          {related.length > 0 ? (
            <aside className="mt-20 border-t border-border/60 pt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Continue reading
              </p>
              <h2 className="font-display mt-2 text-2xl font-semibold tracking-[-0.02em]">
                Related articles
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-shadow hover:shadow-[var(--shadow-card)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <GeoImage
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-[1.02rem] font-semibold leading-snug text-foreground group-hover:text-primary">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          ) : null}
        </Container>
      </article>
    </main>
  );
}
