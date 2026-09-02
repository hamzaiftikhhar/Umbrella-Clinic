import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClass = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({ size = "xl", className, ...rest }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", sizeClass[size], className)} {...rest} />
  );
}
