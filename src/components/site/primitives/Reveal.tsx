import { type ReactNode, type HTMLAttributes } from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  y?: number;
}

export function Reveal({ children, delay = 0, y = 24, className, ...rest }: RevealProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
