import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  return (
    <Link className={`button button-${variant} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </Link>
  );
}
