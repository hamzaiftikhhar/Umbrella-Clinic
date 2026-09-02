import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { TestimonialMarquee } from "./primitives/TestimonialMarquee";
import { patientReviews } from "@/data/reviews";

export function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="section-py bg-background">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <SectionHeading
            as="h2"
            id="reviews-heading"
            eyebrow="Verified patient reviews"
            title="Real stories from"
            accent="real people."
            description="See why patients across New York trust Umbrella Health for primary care, specialty medicine, diagnostics, and preventive health."
            className="max-w-2xl"
          />
          <Link
            to="/patient-reviews"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-card px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-muted/40"
          >
            View all reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>

      <TestimonialMarquee reviews={patientReviews} />
    </section>
  );
}
