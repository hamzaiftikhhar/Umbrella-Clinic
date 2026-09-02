import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "@/components/AppLink";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { BookButton } from "@/components/site/primitives/BookButton";
import { FAQList, faqSchema } from "@/components/site/primitives/FAQList";
import { InsurancePageSearch } from "@/components/site/InsurancePageSearch";
import { GeoImage } from "@/components/site/primitives/GeoImage";
import { IMG } from "@/data/images";

const carriers = [
  {
    name: "Aetna",
    src: "/images/insurance/aetna.png",
    imgClass: "max-h-6 sm:max-h-7 scale-90",
  },
  {
    name: "Blue Cross Blue Shield",
    src: "/images/insurance/bluecross-blueshield.png",
    imgClass: "max-h-12 sm:max-h-14 scale-110",
  },
  {
    name: "Cigna",
    src: "/images/insurance/cigna.png",
    imgClass: "max-h-8 sm:max-h-10",
  },
  {
    name: "United Healthcare",
    src: "/images/insurance/united-healthcare.png",
    imgClass: "max-h-8 sm:max-h-10",
  },
  {
    name: "Medicare",
    src: "/images/insurance/medicare.png",
    imgClass: "max-h-8 sm:max-h-10",
  },
  {
    name: "Medica",
    src: "/images/insurance/medica.png",
    imgClass: "max-h-7 sm:max-h-8 scale-95",
  },
  {
    name: "Health Partners",
    src: "/images/insurance/health-partners.jpg",
    imgClass: "max-h-7 sm:max-h-8 scale-95",
  },
  {
    name: "Sanford Health",
    src: "/images/insurance/sanford-health.png",
    imgClass: "max-h-8 sm:max-h-10",
  },
  {
    name: "TRICARE",
    src: "/images/insurance/tricare.png",
    imgClass: "max-h-8 sm:max-h-10",
  },
  {
    name: "UMR",
    src: "/images/insurance/umr.png",
    imgClass: "max-h-8 sm:max-h-10",
  },
  {
    name: "EmblemHealth",
    src: "https://cdn.prod.website-files.com/671689b64db775dfa0909ffe/6717f73a739b76071499f949_emblem-health-logo.svg",
    imgClass: "max-h-8 sm:max-h-10",
  },
];

const steps = [
  {
    n: 1,
    title: "Book online via Zocdoc",
    body: "Pick a time that works. New patient or returning  both flow through Zocdoc.",
  },
  {
    n: 2,
    title: "We verify your coverage",
    body: "Our team confirms benefits before your visit so there are no surprise bills.",
  },
  {
    n: 3,
    title: "Care at the clinic",
    body: "Most visits are covered. You'll typically pay only your copay or coinsurance.",
  },
  {
    n: 4,
    title: "Optional: cash-pay add-ons",
    body: "Longevity and executive physicals are transparent cash-pay. FSA/HSA-eligible where applicable.",
  },
];

const faqs = [
  {
    q: "Do you take my plan?",
    a: "Most likely yes  we work with all of the major carriers listed above and many sub-plans. Verify before your visit if you'd like certainty.",
  },
  {
    q: "What if you're out-of-network?",
    a: "We offer transparent self-pay pricing and can supply a superbill for out-of-network reimbursement when applicable.",
  },
  {
    q: "Are longevity programs covered by insurance?",
    a: "Most longevity and executive-physical add-ons are cash-pay and not covered by insurance  they're FSA/HSA-eligible where applicable.",
  },
  { q: "Do you accept FSA/HSA?", a: "Yes, for qualifying medical services and self-pay add-ons." },
];

const seo = buildPageSeo({
  title: "Insurance & Pricing  Umbrella Health NYC",
  description:
    "We accept most major insurance plans and offer transparent cash-pay for longevity and self-pay services.",
  path: "/insurance",
  crumbs: [{ label: "Home", to: "/" }, { label: "Insurance & Pricing" }],
  ogImage: "/images/insurance-accepted-hero.webp",
  extraSchema: [faqSchema(faqs)],
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      {/* Unique insurance hero */}
      <section className="relative overflow-hidden bg-background pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_0%_0%,color-mix(in_oklab,var(--success)_12%,transparent),transparent_65%)]"
          aria-hidden
        />
        <Container size="lg" className="relative pb-14 sm:pb-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Insurance & Pricing</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 xl:gap-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-success/25 bg-success-surface px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-success">
                Most major plans accepted
              </p>
              <h1 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]">
                We accept most major insurance plans
              </h1>
              <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
                Insurance for your medical care. Transparent cash-pay for longevity and self-pay
                add-ons. No surprise bills.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookButton>Book — we&apos;ll verify coverage</BookButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
                <GeoImage
                  src={IMG.insuranceAcceptedHero}
                  alt="Patients celebrating insurance coverage accepted at Umbrella Health NYC"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 left-6 right-6 rounded-[1.25rem] border border-border/50 bg-card px-5 py-4 shadow-[var(--shadow-card)] sm:left-auto sm:right-8 sm:max-w-[260px]">
                <p className="text-sm font-semibold text-foreground">
                  Coverage verified before you visit
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Our team confirms benefits so you know what to expect.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <InsurancePageSearch />
      <section className="py-20 sm:py-28">
        <Container size="lg">
          <SectionHeading
            as="h2"
            eyebrow="Accepted plans"
            title="The plans we"
            accent="work with."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {carriers.map((c) => (
              <div
                key={c.name}
                className="flex h-24 items-center justify-center rounded-2xl border border-border/60 bg-card px-5 py-4 text-center text-sm font-medium text-foreground transition-colors hover:bg-muted/50 sm:h-28"
              >
                {c.src ? (
                  <img
                    src={c.src}
                    alt={`${c.name} logo`}
                    className={`w-auto max-w-[88%] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 ${c.imgClass}`}
                    loading="lazy"
                  />
                ) : (
                  c.name
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Don&apos;t see yours? Use the search above — we work with many additional plans.
          </p>
        </Container>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <Container size="lg">
          <SectionHeading as="h2" eyebrow="How it works" title="No surprise" accent="bills." />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <li className="list-none">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 flex justify-center">
            <BookButton>Book we'll verify coverage</BookButton>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container size="lg">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading as="h2" title="Common" accent="questions." />
            <FAQList items={faqs} />
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
