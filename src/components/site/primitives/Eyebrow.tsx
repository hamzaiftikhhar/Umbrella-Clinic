import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Eyebrow({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xs font-medium uppercase tracking-[0.22em] text-primary/70", className)}
      {...rest}
    />
  );
}
