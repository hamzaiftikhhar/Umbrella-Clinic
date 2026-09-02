"use client";

import { useState } from "react";
import { GeoImage } from "./primitives/GeoImage";
import { IMG } from "@/data/images";
import { cn } from "@/lib/utils";

type SiriSphereAccentProps = {
  className?: string;
  /** Accessible name for the decorative video. */
  ariaLabel?: string;
  /** Max width in px; defaults to 320. */
  size?: number;
};

/**
 * Homepage visual accent — circular glass sphere with a muted looping video
 * (Siri-style orb) framed on a soft glowing ring.
 */
export function SiriSphereAccent({
  className,
  ariaLabel = "Umbrella Health connected care visualization",
  size = 320,
}: SiriSphereAccentProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const clamped = Math.min(360, Math.max(120, size));

  return (
    <div
      className={cn("relative mx-auto", className)}
      style={{ width: clamped, height: clamped }}
      aria-hidden={false}
    >
      {/* Outer glow */}
      <div
        className="pointer-events-none absolute inset-[-12%] rounded-full bg-[radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--navy-700)_22%,transparent),transparent_68%)] blur-2xl"
        aria-hidden
      />

      {/* Diamond-on-ring frame */}
      <div
        className="pointer-events-none absolute inset-[6%] rotate-45 rounded-[28%] border border-white/40 bg-gradient-to-br from-white/25 via-transparent to-[color:var(--navy-800)]/10 shadow-[0_0_40px_-8px_color-mix(in_oklab,var(--navy-700)_35%,transparent)] backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-[2%] rounded-full border border-white/50 shadow-[inset_0_0_24px_rgba(255,255,255,0.35)]"
        aria-hidden
      />

      {/* Glass sphere */}
      <div className="absolute inset-[10%] overflow-hidden rounded-full border border-white/60 bg-[color:var(--cream)]/30 shadow-[var(--shadow-elegant)] backdrop-blur-md">
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-full bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.55),transparent_42%),radial-gradient(circle_at_70%_80%,color-mix(in_oklab,var(--navy-700)_18%,transparent),transparent_50%)]"
          aria-hidden
        />

        {videoFailed ? (
          <GeoImage
            src={IMG.siriSpherePoster}
            alt={ariaLabel}
            fill
            className="object-cover"
            sizes={`${clamped}px`}
            priority={false}
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/siri-sphere.mp4"
            poster="/images/siri-sphere-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            aria-label={ariaLabel}
            onError={() => setVideoFailed(true)}
          />
        )}
      </div>

      {/* Soft rim highlight */}
      <div
        className="pointer-events-none absolute inset-[10%] rounded-full ring-1 ring-inset ring-white/50"
        aria-hidden
      />
    </div>
  );
}
