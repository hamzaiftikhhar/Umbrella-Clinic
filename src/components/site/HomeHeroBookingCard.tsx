"use client";

import { GeoImage } from "./primitives/GeoImage";
import { useEffect, useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { PHYSICIANS } from "@/data/physicians";
import { BOOKING_URL } from "@/lib/site";

function useNycClock() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const format = () => {
      setLabel(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    };

    format();
    const id = window.setInterval(format, 1000);
    return () => window.clearInterval(id);
  }, []);

  return label;
}

export function HomeHeroBookingCard() {
  const nycTime = useNycClock();

  return (
    <div className="w-full max-w-[340px] rounded-[1.35rem] border border-border/50 bg-card/95 p-5 shadow-[var(--shadow-elegant)] backdrop-blur-md sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          See who&apos;s available
        </p>
        <p className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-primary">
          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>NYC {nycTime}</span>
        </p>
      </div>

      <div className="mt-5 flex items-center pl-1">
        {PHYSICIANS.map((physician, index) => (
          <div
            key={physician.id}
            className="relative -ml-2.5 h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-card first:ml-0 sm:h-11 sm:w-11"
            style={{ zIndex: PHYSICIANS.length - index }}
            title={physician.name}
          >
            <GeoImage
              src={physician.image}
              alt={physician.name}
              fill
              className="object-cover object-top"
              sizes="44px"
            />
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        {PHYSICIANS.length} board-certified physicians accepting patients in Lower Manhattan.
      </p>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 flex items-center justify-between rounded-xl border border-primary/15 bg-[color-mix(in_oklab,var(--primary)_6%,white)] px-4 py-3.5 transition-colors hover:border-primary/30 hover:bg-[color-mix(in_oklab,var(--primary)_10%,white)]"
      >
        <span className="text-sm font-semibold text-primary">Check availability</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </a>
    </div>
  );
}
