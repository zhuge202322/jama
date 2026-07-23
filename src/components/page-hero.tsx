import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  actions?: ReactNode;
  compact?: boolean;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  actions,
  compact = false,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`page-hero ${compact ? "page-hero-compact" : ""} ${className}`.trim()}
    >
      <Image
        alt={imageAlt}
        className="page-hero-image"
        fill
        priority
        sizes="100vw"
        src={image}
      />
      <div className="page-hero-scrim" />
      <div className="container page-hero-content">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
