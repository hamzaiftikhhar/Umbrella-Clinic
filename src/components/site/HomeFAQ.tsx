import { GeoImage } from "./primitives/GeoImage";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { FAQList, faqSchema, type QA } from "./primitives/FAQList";
import { PHYSICIANS } from "@/data/physicians";
import { SITE_FAQS } from "@/data/site-content";

export const homeFaqs: QA[] = [...SITE_FAQS];

const HELP_AVATARS = PHYSICIANS;

function FAQHelpContact({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center pl-3">
        {HELP_AVATARS.map((physician, index) => (
          <div
            key={physician.id}
            className="relative -ml-3 h-11 w-11 overflow-hidden rounded-full border-2 border-background bg-muted shadow-[var(--shadow-soft)] first:ml-0 sm:h-12 sm:w-12"
            style={{ zIndex: HELP_AVATARS.length - index }}
          >
            <GeoImage
              src={physician.image}
              alt={`${physician.name} ${physician.specialty} at Umbrella Health NYC`}
              fill
              className="object-cover object-top"
              sizes="48px"
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-base text-foreground">
        Need more help?{" "}
        <Link
          href="/contact-us"
          className="font-medium text-accent-emerald underline decoration-accent-emerald/50 underline-offset-[6px] transition-colors hover:text-accent-emerald/80 hover:decoration-accent-emerald"
        >
          Contact us
        </Link>
      </p>
    </div>
  );
}

export function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-py bg-background">
      <Container size="lg">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] md:items-start md:gap-10 lg:gap-12">
          <div>
            <SectionHeading
              as="h2"
              id="faq-heading"
              title="Frequently Asked"
              accent="Questions"
              description="Insurance, services, referrals, and how to book — the essentials before your first visit."
            />

            <FAQHelpContact className="mt-8 border-t border-border/60 pt-8 md:sticky md:top-24 md:mt-10" />
          </div>

          <div className="rounded-[1.75rem] border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] sm:p-7">
            <FAQList items={homeFaqs} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { faqSchema };
