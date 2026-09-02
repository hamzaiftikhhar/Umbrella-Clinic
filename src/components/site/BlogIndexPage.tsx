import { GeoImage } from "./primitives/GeoImage";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BLOG_POSTS } from "@/data/blog-posts";
import { CTABanner } from "./primitives/CTABanner";

export function BlogIndexPage() {
  const [featured, second, ...rest] = BLOG_POSTS;

  return (
    <main>
      <section className="border-b border-border/50 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <Container size="lg">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-muted-foreground">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Blog</span>
              </li>
            </ol>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Umbrella Health Journal
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-6xl">
            Primary care, explained for New Yorkers.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Practical guides from the physicians at Umbrella Health — written for people who want
            clear answers, not generic health copy.
          </p>
        </Container>
      </section>

      {featured && (
        <section className="border-b border-border/50">
          <Container size="lg" className="py-10 sm:py-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-secondary">
                <GeoImage
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {featured.category} · Featured
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-sm font-medium text-primary">
                  Read article <span aria-hidden>→</span>
                </p>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <section className="py-12 sm:py-16">
        <Container size="lg">
          {second ? (
            <Link
              href={`/blog/${second.slug}`}
              className="group mb-10 grid items-center gap-6 border-b border-border/50 pb-10 sm:grid-cols-[18rem_minmax(0,1fr)] sm:gap-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary">
                <GeoImage
                  src={second.image}
                  alt={second.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {second.category}
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold leading-snug tracking-[-0.02em] text-foreground group-hover:text-primary">
                  {second.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {second.excerpt}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{second.readTime}</p>
              </div>
            </Link>
          ) : null}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary">
                  <GeoImage
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {post.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner eyebrow="Ready for care?" title="Book with" italic="our physicians." />
    </main>
  );
}
