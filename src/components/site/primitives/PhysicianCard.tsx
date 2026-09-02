import { GeoImage } from "./GeoImage";
import { Facebook, Instagram, Linkedin, Twitter, type LucideIcon } from "lucide-react";
import { Link } from "@/components/AppLink";
import {
  DEFAULT_PHYSICIAN_SOCIALS,
  physicianProfilePath,
  type Physician,
  type PhysicianSocial,
} from "@/data/physicians";

const SOCIAL_ICON: Record<PhysicianSocial["platform"], LucideIcon> = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

type PhysicianCardProps = Pick<
  Physician,
  "id" | "name" | "specialty" | "image" | "imageAlt" | "socials"
> & {
  className?: string;
  priority?: boolean;
};

/**
 * Premium provider card — portrait with a floating social pill overlapping the
 * bottom edge, and the name + specialty set beneath on the page canvas.
 */
export function PhysicianCard({
  id,
  name,
  specialty,
  image,
  imageAlt,
  socials = DEFAULT_PHYSICIAN_SOCIALS,
  className,
  priority,
}: PhysicianCardProps) {
  const profilePath = physicianProfilePath(id) as `/our-physicians/${string}`;

  return (
    <article className={`group text-center ${className ?? ""}`}>
      <div className="relative">
        <Link href={profilePath} className="block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border/50 bg-secondary/50 shadow-[var(--shadow-card)] transition-premium group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-elegant)]">
            <GeoImage
              src={image}
              alt={imageAlt ?? `${name}, ${specialty} at Umbrella Health`}
              fill
              priority={priority}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
              className="object-cover object-top transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.05]"
            />
          </div>
        </Link>

        {socials.length > 0 && (
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-1 rounded-full border border-border/50 bg-background px-2 py-1.5 shadow-[var(--shadow-soft)]">
            {socials.map((s) => {
              const Icon = SOCIAL_ICON[s.platform];
              return (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={`${name} on ${s.label}`}
                  className="grid h-7 w-7 place-items-center rounded-full text-foreground/70 transition-premium hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        )}
      </div>

      <Link href={profilePath} className="mt-9 block">
        <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
          {name}
        </h3>
        <p className="mt-1.5 text-sm font-medium tracking-wide text-primary">{specialty}</p>
      </Link>
    </article>
  );
}
