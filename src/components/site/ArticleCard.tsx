import { Link } from "@/components/AppLink";
import { pillars, articles } from "@/data/articles";

export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  const pillar = pillars[article.pillar];
  return (
    <Link
      href={
        `/resources/${pillar.slug}/${article.slug}` as "/resources/decoding-your-diagnostics/cholesterol-panel-explained"
      }
      className="group block h-full overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-primary/70">
          {pillar.title}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{article.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <p className="mt-4 text-xs text-muted-foreground">{article.readTime}</p>
      </div>
    </Link>
  );
}
