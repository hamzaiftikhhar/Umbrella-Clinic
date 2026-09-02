import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "cream" | "mint" | "forest" | "white" | "muted";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: Tone;
  spacing?: "sm" | "md" | "lg";
  curved?: boolean;
}

const toneClass: Record<Tone, string> = {
  cream: "bg-background text-foreground",
  mint: "bg-[color:var(--mint)] text-foreground",
  forest: "bg-primary text-primary-foreground",
  white: "bg-card text-foreground",
  muted: "bg-secondary text-foreground",
};

const spacingClass: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-14 sm:py-20",
  md: "py-20 sm:py-28",
  lg: "py-24 sm:py-36",
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { tone = "cream", spacing = "md", curved, className, children, ...rest },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn(toneClass[tone], spacingClass[spacing], curved && "relative", className)}
      {...rest}
    >
      {children}
      {curved && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-1px] h-12 bg-background"
          style={{
            WebkitMaskImage: "radial-gradient(120% 100% at 50% 100%, black 70%, transparent 71%)",
            maskImage: "radial-gradient(120% 100% at 50% 100%, black 70%, transparent 71%)",
          }}
        />
      )}
    </section>
  );
});
