import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  as: Tag = "h2",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary/70">
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className="font-display text-3xl font-semibold leading-[1.04] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
      >
        {title} {accent && <span className="font-light italic text-primary">{accent}</span>}
      </Tag>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
