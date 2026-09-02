import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "@/components/AppLink";
import { Container } from "@/components/site/primitives/Container";
import { PhysicianCard } from "@/components/site/primitives/PhysicianCard";
import { CareDiagram } from "@/components/site/CareDiagram";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { BookButton } from "@/components/site/primitives/BookButton";
import { GeoImage } from "@/components/site/primitives/GeoImage";
import { PHYSICIANS } from "@/data/physicians";
import { physiciansSchema } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Our Team — Umbrella Health NYC",
  description:
    "Meet the board-certified physicians at Umbrella Health — a multispecialty team delivering coordinated primary care and specialty medicine in Lower Manhattan, NYC.",
  path: "/our-team",
  crumbs: [{ label: "Home", to: "/" }, { label: "Our Team" }],
  geo: true,
  ogImage: "/images/dr-rajat-lamington-primary-care-nyc.webp",
  extraSchema: physiciansSchema(PHYSICIANS),
});
export const metadata = seo.metadata;

/** Keep founder first; include full team in the hero collage. */
const HERO_PORTRAITS = PHYSICIANS;

function Page() {
  return (
    <main>
      {/* Premium team hero */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_10%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]"
          aria-hidden
        />
        <Container size="lg" className="relative pb-16 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Our Team</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Board-certified · Manhattan
              </p>
              <h1 className="font-display mt-5 text-balance text-[2.2rem] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.2rem]">
                Meet the physicians behind your care
              </h1>
              <p className="mt-6 max-w-xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                A multispecialty team practicing from one connected record — so primary care,
                specialists, and diagnostics move together, not in silos.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <BookButton>Book an appointment</BookButton>
                <p className="text-sm text-muted-foreground">
                  {PHYSICIANS.length} physicians · Lower Manhattan
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {HERO_PORTRAITS.map((p, i) => (
                  <div
                    key={p.id}
                    className={`relative overflow-hidden rounded-[1.35rem] border border-border/50 bg-card shadow-[var(--shadow-elegant)] ${
                      i % 2 === 1 ? "mt-5 sm:mt-8" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/5]">
                      <GeoImage
                        src={p.image}
                        alt={p.imageAlt ?? p.name}
                        fill
                        priority={i < 3}
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 45vw, 200px"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--navy-900)]/80 via-[color:var(--navy-900)]/30 to-transparent px-3 pb-3 pt-10">
                      <p className="text-xs font-semibold text-white sm:text-sm">{p.name}</p>
                      <p className="mt-0.5 line-clamp-1 text-[10px] text-white/75 sm:text-xs">
                        {p.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="providers-heading">
        <Container size="lg">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
              All providers
            </p>
            <h2
              id="providers-heading"
              className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
            >
              The physicians you&apos;ll{" "}
              <span className="font-light italic text-primary">actually see.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PHYSICIANS.map((p, i) => (
              <PhysicianCard
                key={p.id}
                id={p.id}
                name={p.name}
                specialty={p.specialty}
                image={p.image}
                imageAlt={p.imageAlt}
                priority={i < 3}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container size="lg">
          <SectionHeading
            as="h2"
            eyebrow="The method"
            title="One connected"
            accent="standard of care."
            description="Four moves we make for every patient: deep diagnostics, a comprehensive plan, personalized treatment, and ongoing measurement."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>
      <CareDiagram />
      <CTABanner eyebrow="Get started" title="Meet your" italic="care team." />
    </main>
  );
}

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <Page />
    </>
  );
}
