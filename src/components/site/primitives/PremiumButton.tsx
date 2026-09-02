import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "light";

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_10px_32px_-14px_color-mix(in_oklab,var(--primary)_65%,transparent)] ring-1 ring-primary/20 hover:bg-primary-glow hover:shadow-[0_16px_40px_-14px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:ring-primary/30",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
  outline:
    "border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm hover:border-foreground/35 hover:bg-background/70",
  light:
    "bg-background text-primary shadow-[0_8px_28px_-14px_rgba(0,0,0,0.25)] ring-1 ring-white/20 hover:bg-background/95",
};

export const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ variant = "primary", className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 active:translate-y-0",
          variants[variant],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
PremiumButton.displayName = "PremiumButton";
