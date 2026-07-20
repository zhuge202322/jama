import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Lumina Voyage",
  description:
    "Lumina Voyage is a Singapore-based event experience brand creating custom newspaper photo booth experiences.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={<CtaLink href="/contact">Plan with us</CtaLink>}
        compact
        description="We create custom newspaper photo booth experiences for corporate events, MICE, brand activations and celebrations across Singapore."
        eyebrow="About Us"
        image="/images/green-booths-photo.jpg"
        imageAlt="Green Lumina Voyage newspaper photo booths"
        title="Event technology with a human sense of occasion."
      />

      <section className="section section-white">
        <div className="container split-section">
          <div className="split-media about-logo-media">
            <Image
              alt="Lumina Voyage stacked logo with camera and globe emblem"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              src="/images/logo-square.jpg"
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">Our Mission</p>
            <h2>Turning life&apos;s moments into unforgettable experiences.</h2>
            <div className="editorial-rule" />
            <p>
              To transform life&apos;s moments into unforgettable experiences
              through innovative, technology-driven photo booth solutions that
              inspire connection, creativity, and lasting memories.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="narrow vision-statement">
          <p className="eyebrow">Our Vision</p>
          <h2>Redefining how people celebrate, connect, and preserve memories.</h2>
          <p>
            To become Asia&apos;s leading experiential photo booth brand,
            redefining how people celebrate, connect, and preserve memories
            through innovative visual experiences.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="narrow about-statement">
          <p className="eyebrow eyebrow-light">Lumina Voyage</p>
          <h2>Not a borrowed catalogue. One real experience, told clearly.</h2>
          <p>
            We are starting with the Newspaper Photo Booth because it gives
            organisers a flexible creative format and gives guests a result
            they can immediately understand. Future experiences will be added
            only when they are part of Lumina Voyage&apos;s verified service range.
          </p>
          <CtaLink href="/newspaper-photo-booth" variant="secondary">
            Explore the flagship experience
          </CtaLink>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Work with Lumina Voyage</p>
            <h2>Let us shape a front page around your event.</h2>
          </div>
          <CtaLink href="/contact">Get a free quote</CtaLink>
        </div>
      </section>
    </>
  );
}
