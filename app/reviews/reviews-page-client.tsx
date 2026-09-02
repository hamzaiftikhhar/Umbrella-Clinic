"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "@/components/site/primitives/Container";
import { TestimonialCard } from "@/components/site/primitives/TestimonialCard";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { GeoImage } from "@/components/site/primitives/GeoImage";
import { BookButton } from "@/components/site/primitives/BookButton";
import { IMG } from "@/data/images";
import { patientReviews } from "@/data/reviews";

const INITIAL_COUNT = 8;

export function ReviewsPageClient() {
  const [showAll, setShowAll] = useState(false);
  const displayReviews = showAll ? patientReviews : patientReviews.slice(0, INITIAL_COUNT);
  const hasMore = patientReviews.length > INITIAL_COUNT;

  return (
    <main>
      {/* Custom hero */}
      <section className="relative overflow-hidden bg-background pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_10%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]"
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
                <span aria-current="page">Patient Reviews</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                <Star className="h-3.5 w-3.5 fill-rating-star text-rating-star" aria-hidden />
                Rated 4.6 / 5 on Google
              </p>
              <h1 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]">
                Real stories from real patients
              </h1>
              <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
                What it feels like to receive care at Umbrella Health — primary care, specialists,
                and diagnostics under one roof in Lower Manhattan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookButton>Book appointment</BookButton>
                <a
                  href="https://www.google.com/maps/place/Umbrella+Health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  Leave a Google review
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] sm:aspect-[5/6]">
                <GeoImage
                  src={IMG.patientReviewsHero}
                  alt="Patient rating Umbrella Health care 5 stars after their visit in NYC"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
              <div className="absolute -bottom-4 left-5 right-5 rounded-[1.25rem] border border-border/50 bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm sm:left-8 sm:right-auto sm:max-w-[240px]">
                <p className="font-display text-3xl font-semibold text-foreground">92%</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  of members rate their care 5 stars after the first visit
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="reviews-heading">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Patient voices
            </p>
            <h2
              id="reviews-heading"
              className="font-display mt-3 text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              What patients say about Umbrella Health
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {displayReviews.map((r, i) => (
              <Reveal key={`${r.name}-${i}`} delay={Math.min(i, 7) * 0.03}>
                <TestimonialCard {...r} rating={5} />
              </Reveal>
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-8 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-[var(--shadow-card)]"
              >
                {showAll ? (
                  <>
                    View less
                    <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  </>
                ) : (
                  <>
                    View more reviews
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          )}
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}
