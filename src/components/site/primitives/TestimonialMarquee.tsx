"use client";

import { TestimonialCard } from "./TestimonialCard";

interface ReviewItem {
  name: string;
  quote: string;
  time?: string;
}

export function TestimonialMarquee({ reviews }: { reviews: ReviewItem[] }) {
  const loop = [...reviews, ...reviews];

  return (
    <div className="reviews-marquee relative mt-8 w-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24 xl:w-[calc((100vw-1216px)/2+2rem)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24 xl:w-[calc((100vw-1216px)/2+2rem)]"
        aria-hidden
      />

      <div className="reviews-marquee-track flex w-max gap-5">
        {loop.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className="w-[min(85vw,340px)] shrink-0 [pointer-events:auto]"
            aria-hidden={index >= reviews.length}
          >
            <TestimonialCard {...review} rating={5} />
          </div>
        ))}
      </div>
    </div>
  );
}
