import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  ImageDown,
  Newspaper,
  Palette,
  Share2,
  Sparkles,
} from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { FeaturedEditions } from "@/components/featured-editions";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SingaporeLocations } from "@/components/singapore-locations";
import {
  customisationItems,
  eventTypes,
  guestSteps,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Newspaper Photo Booth Rental Singapore",
  description:
    "Create custom newspaper-style photo booth experiences for corporate events, MICE, brand activations and celebrations in Singapore.",
  alternates: { canonical: "/" },
};

const customIcons = [Palette, Newspaper, Sparkles, Share2];

export default function Home() {
  return (
    <>
      <PageHero
        actions={
          <>
            <CtaLink href="/contact">Get a free quote</CtaLink>
            <CtaLink href="/newspaper-photo-booth" variant="secondary">
              See the experience
            </CtaLink>
          </>
        }
        description="Create a custom newspaper photo booth experience built around your event. Guests step into frame, receive a branded front page to take home, and enjoy a digital keepsake designed for sharing."
        eyebrow="Newspaper Photo Booth | Singapore"
        image="/images/green-booths-photo.jpg"
        imageAlt="Two green Lumina Voyage newspaper photo booths"
        title="Turn every guest into the headline."
      />

      <section aria-label="Event types" className="stats-strip">
        <div className="container stats-grid">
          {eventTypes.map((event) => (
            <div className="stats-item" key={event.slug}>
              <strong>{event.shortTitle}</strong>
              <span>Designed around your occasion</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-white">
        <div className="container split-section">
          <FeaturedEditions />
          <div className="split-copy">
            <p className="eyebrow">More than a photo</p>
            <h2>A moment guests can hold, keep and share.</h2>
            <div className="editorial-rule" />
            <p>
              Lumina Voyage turns a familiar photo moment into a personalised
              front page. It is part guest interaction, part branded content
              and part physical keepsake, designed to continue the story beyond
              the venue.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" size={20} />
                <span>
                  <strong>A front page to take home.</strong> Each portrait joins
                  an editorial design created for the event.
                </span>
              </li>
              <li>
                <Check aria-hidden="true" size={20} />
                <span>
                  <strong>A digital keepsake.</strong> Delivery can be configured
                  around the approved event journey.
                </span>
              </li>
            </ul>
            <CtaLink href="/newspaper-photo-booth" variant="text">
              Explore the Photo Booth
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            description="A clear guest journey makes the experience easy to join at conferences, campaigns and celebrations."
            eyebrow="The guest experience"
            title="From camera-ready to front-page ready."
          />
          <div className="steps-grid">
            {guestSteps.map((step) => (
              <article className="step-item" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionIntro
            description="From the masthead to the smallest editorial detail, the experience is shaped around your identity, audience and campaign message."
            eyebrow="Built around your brief"
            title="Your event. Your edition."
          />
          <div className="custom-grid">
            {customisationItems.map((item, index) => {
              const Icon = customIcons[index];
              return (
                <article className="custom-card" key={item.title}>
                  <Icon aria-hidden="true" size={30} strokeWidth={1.6} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
          <p className="section-note section-note-light">
            Available options and final artwork scope are confirmed in your
            event proposal.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionIntro
            description="The same front-page format can feel polished at a conference, bold at a launch, welcoming at a public event or personal at a wedding."
            eyebrow="Made for the occasion"
            title="One format. Many stories."
          />
          <div className="event-grid">
            {eventTypes.map((event) => (
              <article className={`event-card ${event.accent}`} key={event.slug}>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <Link href={`/events#${event.slug}`}>
                  Explore event ideas
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SingaporeLocations />

      <section className="section section-white">
        <div className="container">
          <SectionIntro
            description="A memorable guest interaction needs strong creative direction and careful event preparation in equal measure."
            eyebrow="Why Lumina Voyage"
            title="A branded experience with a tangible ending."
          />
          <div className="feature-grid">
            <article className="feature-card">
              <Palette aria-hidden="true" size={30} strokeWidth={1.6} />
              <h3>Made for your event</h3>
              <p>
                Creative direction starts with your audience, message and
                occasion, not a generic template.
              </p>
            </article>
            <article className="feature-card">
              <Newspaper aria-hidden="true" size={30} strokeWidth={1.6} />
              <h3>Physical and digital</h3>
              <p>
                Give guests something tactile to keep, with a digital version
                configured around the event.
              </p>
            </article>
            <article className="feature-card">
              <Camera aria-hidden="true" size={30} strokeWidth={1.6} />
              <h3>Easy to join</h3>
              <p>
                A clear photo journey makes the experience approachable for a
                wide range of guests.
              </p>
            </article>
            <article className="feature-card">
              <ImageDown aria-hidden="true" size={30} strokeWidth={1.6} />
              <h3>Prepared with care</h3>
              <p>
                Equipment, artwork and event requirements are reviewed before
                the experience goes live.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Your next event</p>
            <h2>Planning something worth putting on the front page?</h2>
          </div>
          <CtaLink href="/contact">Get a free quote</CtaLink>
        </div>
      </section>
    </>
  );
}
