import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/site/primitives/Container";
import { schemaDebugBundle } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Structured Data Preview",
  description: "Developer preview of Schema.org JSON-LD used across Umbrella Health.",
  path: "/schema",
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function SchemaDebugPage() {
  const bundle = schemaDebugBundle();

  return (
    <>
      <JsonLd data={[]} />
      <main className="section-py bg-background">
        <Container size="lg">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Structured data preview
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Google reads <code className="text-sm">application/ld+json</code> embedded in each
            page&apos;s HTML — not this URL. Use this page to inspect the entity graph for
            Organization, MedicalClinic, Physician, and FAQ schemas.
          </p>

          <div className="mt-10 space-y-8">
            {Object.entries(bundle).map(([key, value]) => (
              <section key={key} aria-labelledby={`schema-${key}`}>
                <h2
                  id={`schema-${key}`}
                  className="text-lg font-semibold capitalize text-foreground"
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h2>
                <pre className="mt-3 overflow-x-auto rounded-2xl border border-border/60 bg-card p-5 text-xs leading-relaxed text-foreground/90">
                  {JSON.stringify(value, null, 2)}
                </pre>
              </section>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
