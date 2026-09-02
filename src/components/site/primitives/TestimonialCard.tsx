"use client";

import { useState, useRef, useEffect } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { CLINIC_GOOGLE_MAPS_URL } from "@/lib/site";

interface TestimonialCardProps {
  name: string;
  quote: string;
  time?: string;
  rating?: number;
}

export function TestimonialCard({ name, quote, time, rating = 5 }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
  }, [quote, isExpanded]);

  return (
    <article className="flex h-full min-h-[280px] flex-col rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <CheckCircle2 className="h-4 w-4 text-accent-emerald" />
      </div>

      <div className="mt-2 flex gap-0.5 text-rating-star">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <div className="mt-4 flex-1">
        <p
          ref={textRef}
          className={`text-sm leading-relaxed text-foreground/80 ${isExpanded ? "" : "line-clamp-5"}`}
        >
          {quote}
        </p>
        {(isOverflowing || isExpanded) && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mt-2 text-xs font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      <div className="mt-6 flex items-center justify-start">
        <a
          href={CLINIC_GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on Google Maps"
          className="transition-transform hover:scale-110"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            className="h-5 w-5"
          />
        </a>
      </div>
    </article>
  );
}
