import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Lumina Voyage",
  description:
    "Lumina Voyage is a Singapore-based event experience brand creating custom photo booth experiences.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={<CtaLink href="/contact">Plan with us</CtaLink>}
        compact
        description="We create custom photo booth experiences for corporate events, MICE, brand activations and celebrations across Singapore."
        eyebrow="About Us"
        image="/images/green-booths-photo.jpg"
        imageAlt="Green Lumina Voyage newspaper photo booths"
        title="Event technology with a human sense of occasion."
      />

      <section className="section section-white about-mission-section">
        <div className="container about-mission-grid">
          <div className="about-mission-media">
            <div className="about-mission-photo">
              <Image
                alt="Two green Lumina Voyage photo booths at an event"
                fill
                sizes="(max-width: 820px) 100vw, 52vw"
                src="/images/green-booths-photo.jpg"
              />
            </div>
            <div className="about-mission-print">
              <Image
                alt="Haji Lane edition photo booth keepsake"
                fill
                sizes="(max-width: 620px) 42vw, 220px"
                src="/images/haji-lane-sample.jpg"
              />
            </div>
            <div className="about-mission-logo" aria-hidden="true">
              <Image
                alt=""
                fill
                sizes="180px"
                src="/images/logo.png"
              />
            </div>
          </div>
          <div className="about-purpose-copy">
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

      <section className="section about-vision-section">
        <div className="container about-vision-grid">
          <div className="about-vision-copy">
            <p className="eyebrow eyebrow-light">Our Vision</p>
            <h2>Redefining how people celebrate, connect, and preserve memories.</h2>
            <p>
              To become Asia&apos;s leading experiential photo booth brand,
              redefining how people celebrate, connect, and preserve memories
              through innovative visual experiences.
            </p>
          </div>
          <div className="about-vision-media">
            <div className="about-vision-photo about-vision-photo-primary">
              <Image
                alt="Yellow Lumina Voyage photo booth ready for guests"
                fill
                sizes="(max-width: 820px) 62vw, 28vw"
                src="/images/yellow-booth-photo.jpg"
              />
            </div>
            <div className="about-vision-photo about-vision-photo-secondary">
              <Image
                alt="Chinese New Year photo booth keepsake"
                fill
                sizes="(max-width: 820px) 42vw, 18vw"
                src="/images/cny-sample.jpg"
              />
            </div>
          </div>
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
