"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const MEDICAL_ICON_STROKE = 1.75;

export interface MedicalGlyphProps {
  className?: string;
  size?: number;
}

interface MedicalIconFrameProps {
  children: ReactNode;
  className?: string;
  /** Navy tiles for conditions/diagnostics; primary ring for why-choose */
  variant?: "condition" | "diagnostic" | "primary";
  size?: "md" | "sm";
}

const FRAME_STYLES = {
  condition:
    "bg-[color:var(--icon-premium-surface)] text-[color:var(--navy-700)] group-hover:text-[color:var(--navy-800)]",
  diagnostic: "bg-[color:var(--secondary)] text-[color:var(--navy-800)]",
  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
} as const;

/** Consistent icon tile used across neurology and specialty cards. */
export function MedicalIconFrame({
  children,
  className,
  variant = "condition",
  size = "md",
}: MedicalIconFrameProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105",
        size === "md" ? "h-11 w-11" : "h-10 w-10",
        FRAME_STYLES[variant],
        className,
      )}
      aria-hidden
    >
      {children}
    </span>
  );
}

/** Base props for custom medical outline SVGs (Phosphor-compatible sizing). */
export function medicalSvgProps({ className, size = 22 }: MedicalGlyphProps = {}) {
  return {
    className: cn("shrink-0", className),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth: MEDICAL_ICON_STROKE,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}
