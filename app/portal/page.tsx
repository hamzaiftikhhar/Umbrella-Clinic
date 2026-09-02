import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { PremiumButton } from "@/components/site/primitives/PremiumButton";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Patient Portal  Umbrella Health",
  description: "Access your records, messages, results, and scheduling.",
  path: "/portal",
  crumbs: [{ label: "Home", to: "/" }, { label: "Patient Portal" }],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Patient Portal"
        italic="Your records,"
        title="in one place."
        description="Sign in to view results, send messages to your care team, and manage scheduling."
        image={IMG.busyPro}
        imageAlt="Patient portal access"
        crumbs={[{ label: "Home", to: "/" }, { label: "Patient Portal" }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container size="sm">
          <Reveal>
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
              <div className="grid gap-4">
                <label className="text-sm">
                  <span className="mb-1.5 block font-medium text-foreground">Email</span>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1.5 block font-medium text-foreground">Password</span>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
              </div>
              <div className="mt-6">
                <PremiumButton className="w-full">Sign in</PremiumButton>
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Need an account? Create one at your first visit.
              </p>
            </div>
          </Reveal>
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
