import { CtaLink } from "@/components/cta-link";

export default function NotFound() {
  return (
    <section className="empty-state">
      <div className="container empty-state-inner">
        <p className="eyebrow">404</p>
        <h1>This page missed the headline.</h1>
        <p>
          The page may have moved. Return to the main story or tell us about
          your event.
        </p>
        <div className="hero-actions">
          <CtaLink href="/">Back to home</CtaLink>
          <CtaLink href="/contact" variant="text">
            Get a free quote
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
