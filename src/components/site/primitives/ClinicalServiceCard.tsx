"use client";

import { GeoImage } from "./GeoImage";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { cn } from "@/lib/utils";

export interface ClinicalServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  href: string;
  className?: string;
}

export function ClinicalServiceCard({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  className,
}: ClinicalServiceCardProps) {
  return (
    <div className={cn("group/card relative min-w-0", className)}>
      <Link href={href} className="block">
        <article className="relative aspect-[4/5] overflow-hidden rounded-[1.375rem] sm:rounded-[1.5rem]">
          <GeoImage
            src={imageUrl}
            alt={imageAlt ?? `${title} at Umbrella Health NYC`}
            fill
            className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover/card:scale-[1.05]"
            sizes="(max-width: 640px) 50vw, 25vw"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30 transition-opacity duration-300 group-hover/card:opacity-0"
            aria-hidden
          />
          <h3 className="absolute left-4 top-4 z-10 max-w-[85%] text-balance text-base font-semibold leading-snug text-white transition-opacity duration-300 group-hover/card:opacity-0 sm:left-5 sm:top-5 sm:text-lg">
            {title}
          </h3>

          <span
            className="absolute bottom-4 right-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover/card:bottom-auto group-hover/card:right-4 group-hover/card:top-4 group-hover/card:border-white/60 group-hover/card:bg-white group-hover/card:text-primary sm:bottom-5 sm:right-5 sm:group-hover/card:top-5"
            aria-hidden
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
          </span>
          <span className="sr-only">Learn more about {title}</span>

          <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/75 to-black/40 p-5 pb-5 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 sm:p-6 sm:pb-6 max-lg:hidden">
            <h3 className="mb-2 pr-2 text-base font-semibold leading-snug text-white sm:text-lg">
              {title}
            </h3>
            <p className="line-clamp-5 text-sm leading-relaxed text-white/85 sm:line-clamp-6">
              {description}
            </p>
          </div>
        </article>
      </Link>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:hidden">{description}</p>
    </div>
  );
}

export function ClinicalServiceRows({ services }: { services: ClinicalServiceCardProps[] }) {
  const rows = [services.slice(0, 4), services.slice(4, 8)];

  return (
    <div className="space-y-4 sm:space-y-5">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {row.map((service) => (
            <ClinicalServiceCard key={service.title} {...service} />
          ))}
        </div>
      ))}
    </div>
  );
}
