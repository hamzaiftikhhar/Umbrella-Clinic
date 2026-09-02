import { Link } from "@/components/AppLink";
import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";
import { medicalClinicSchema } from "@/lib/schema";
import { ArrowRight } from "lucide-react";
import { GeoImage } from "@/components/site/primitives/GeoImage";

const places = [
  {
    slug: "union-square",
    name: "Union Square",
    img: IMG.unionSquare,
    blurb: "Primary & specialty care a walk south of Union Square.",
  },
  {
    slug: "tribeca-fidi",
    name: "Tribeca / FiDi",
    img: IMG.tribeca,
    blurb: "Concierge-quality care for downtown firms.",
  },
  { slug: "soho", name: "SoHo", img: IMG.soho, blurb: "Two blocks from Spring Street." },
  { slug: "brooklyn", name: "Brooklyn", img: IMG.brooklyn, blurb: "Worth the L/F/A commute." },
];

const seo = buildPageSeo({
  title: "Neighborhoods We Serve — Umbrella Health NYC",
  description:
    "Multispecialty care from one NoHo clinic serving Union Square, Tribeca/FiDi, SoHo, Greenwich Village, and commutable Brooklyn neighborhoods.",
  path: "/locations",
  geo: true,
  crumbs: [{ label: "Home", to: "/" }, { label: "Locations" }],
  extraSchema: [medicalClinicSchema({ includeHours: true })],
  robots: { index: false, follow: true },
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Locations"
        italic="One clinic,"
        title="serving downtown."
        description="Our NoHo flagship serves patients across Union Square, Tribeca/FiDi, SoHo, and commutable Brooklyn neighborhoods."
        image={IMG.nyc}
        imageAlt="Umbrella Health clinic neighborhood — Lower Manhattan, NYC"
        crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/locations/${p.slug}` as "/locations/union-square"}
                  className="group block overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <GeoImage
                      src={p.img}
                      alt={`${p.name} neighborhood near Umbrella Health clinic in Lower Manhattan`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Primary care near {p.name}{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
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
