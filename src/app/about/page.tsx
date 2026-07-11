import type { Metadata } from "next";
import Image from "next/image";
import { Check, Compass, Handshake, MapPinned, ScanFace } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "About Lumina Voyage",
  description:
    "Lumina Voyage is a Singapore-based event experience brand creating custom newspaper photo booth experiences.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Compass,
    title: "Custom by design",
    copy: "Every edition begins with the event identity, audience and communication objective.",
  },
  {
    icon: Handshake,
    title: "Clear in delivery",
    copy: "Scope, venue requirements and responsibilities are confirmed before event day.",
  },
  {
    icon: ScanFace,
    title: "Guest-centred",
    copy: "The experience is designed to feel understandable, enjoyable and memorable.",
  },
  {
    icon: MapPinned,
    title: "Locally coordinated",
    copy: "Event planning and support are coordinated for the Singapore market.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={<CtaLink href="/contact">Plan with us</CtaLink>}
        compact
        description="We create custom newspaper photo booth experiences for corporate events, MICE, brand activations and celebrations across Singapore."
        eyebrow="About Lumina Voyage"
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
            <p className="eyebrow">Our point of view</p>
            <h2>Turning short interactions into lasting stories.</h2>
            <div className="editorial-rule" />
            <p>
              We believe the best event technology should feel simple to the
              guest and meaningful to the organiser. By combining creative
              content, photo booth technology and thoughtful preparation,
              Lumina Voyage transforms a portrait into something guests can
              hold, keep and share.
            </p>
            <p>
              Lumina Voyage Tech Pte. Ltd. was incorporated in Singapore in
              2025. As a young company, we focus on clear processes, dependable
              technical collaboration and experiences shaped around each event
              brief.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" size={20} />
                Singapore-based event coordination
              </li>
              <li>
                <Check aria-hidden="true" size={20} />
                Creative, equipment and technical collaboration
              </li>
              <li>
                <Check aria-hidden="true" size={20} />
                A flagship experience with a clear physical outcome
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionIntro
            description="The way we plan matters as much as the finished front page."
            eyebrow="Our principles"
            title="Creative energy, grounded delivery."
          />
          <div className="feature-grid">
            {principles.map(({ icon: Icon, title, copy }) => (
              <article className="feature-card" key={title}>
                <Icon aria-hidden="true" size={30} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
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
          <CtaLink href="/contact">Start an enquiry</CtaLink>
        </div>
      </section>
    </>
  );
}
