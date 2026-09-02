import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description?: string;
  to?: string;
  badge?: string;
  image?: string;
  className?: string;
}

export function ServiceCard({ title, description, to, badge, image, className }: ServiceCardProps) {
  const Inner = (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.375rem] border border-border/50 bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-elegant)]",
        className,
      )}
    >
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          {badge && (
            <span className="rounded-full bg-[color:var(--mint)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="mt-6 flex items-end justify-between">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-background text-primary transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
        {image && (
          <img
            src={image}
            alt=""
            className="ml-3 h-16 w-24 rounded-xl object-cover opacity-90"
            loading="lazy"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );

  if (!to) return Inner;
  return (
    <Link to={to} className="block h-full">
      {Inner}
    </Link>
  );
}
