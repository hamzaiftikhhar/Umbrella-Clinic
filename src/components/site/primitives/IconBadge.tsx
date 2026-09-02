"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { HealthIconName, LucideIconKey } from "@/components/icons/icon-keys";
import { HealthIcon } from "@/components/icons/HealthIcon";
import { getLucideIcon } from "@/components/icons/icon-registry";

const SIZE = {
  xs: {
    box: "h-9 w-9 rounded-xl",
    icon: "h-4 w-4",
  },
  sm: {
    box: "h-12 w-12 rounded-2xl",
    icon: "h-6 w-6",
  },
  md: {
    box: "h-14 w-14 rounded-[18px]",
    icon: "h-7 w-7",
  },
  lg: {
    box: "h-16 w-16 rounded-[20px]",
    icon: "h-8 w-8",
  },
} as const;

const TONE = {
  default: "bg-icon-premium-surface text-icon-premium shadow-[var(--icon-premium-shadow)]",
  inverse:
    "bg-primary-foreground/12 text-primary-foreground shadow-none ring-1 ring-primary-foreground/15",
  glass: "bg-background/95 text-icon-premium shadow-[var(--icon-premium-shadow)] backdrop-blur-sm",
} as const;

export type PremiumIconSize = keyof typeof SIZE;
export type PremiumIconTone = keyof typeof TONE;

export interface PremiumIconProps {
  /** Serializable Lucide key (safe across Server → Client boundaries) */
  iconKey?: LucideIconKey;
  /** Health Icons glyph for medical specialties */
  healthIcon?: HealthIconName;
  children?: ReactNode;
  className?: string;
  size?: PremiumIconSize;
  tone?: PremiumIconTone;
  strokeWidth?: number;
}

/**
 * Premium icon tile  64px soft square, theme-aligned surface, elevated shadow.
 */
export function PremiumIcon({
  iconKey,
  healthIcon,
  children,
  className,
  size = "lg",
  tone = "default",
  strokeWidth = 1.8,
}: PremiumIconProps) {
  const s = SIZE[size];
  const Icon = iconKey ? getLucideIcon(iconKey) : null;

  return (
    <span className={cn("inline-grid shrink-0 place-items-center", s.box, TONE[tone], className)}>
      {healthIcon ? (
        <span className={cn("grid place-items-center", s.icon)}>
          <HealthIcon name={healthIcon} />
        </span>
      ) : Icon ? (
        <Icon className={s.icon} strokeWidth={strokeWidth} aria-hidden />
      ) : (
        children
      )}
    </span>
  );
}

/** @deprecated Use PremiumIcon with iconKey */
export function IconBadge({
  iconKey,
  className,
  size = "lg",
}: {
  iconKey: LucideIconKey;
  className?: string;
  size?: PremiumIconSize;
}) {
  return <PremiumIcon iconKey={iconKey} className={className} size={size} />;
}
