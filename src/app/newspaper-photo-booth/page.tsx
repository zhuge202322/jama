import type { Metadata } from "next";
import Image from "next/image";
import {
  Camera,
  Check,
  ClipboardCheck,
  MonitorCheck,
  Newspaper,
  Palette,
  Printer,
  Share2,
  Users,
} from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { UpdatesCarousel } from "@/components/updates-carousel";
import { customisationItems, projectSteps, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newspaper Photo Booth Singapore",
  description:
    "Turn guests into headline stars with custom branded front-page prints, a digital keepsake and on-site event support in Singapore.",
  alternates: { canonical: "/newspaper-photo-booth" },
};

const customIcons = [Palette, Newspaper, Camera, Share2];

const inclusions = [
  {
    icon: Palette,
    title: "Custom editorial design",
    copy: "A masthead, headline system and visual direction shaped around the agreed brief.",
  },
  {
    icon: Camera,
    title: "Guest photo experience",
    copy: "A guided capture and preview journey designed for straightforward participation.",
  },
  {
    icon: Printer,
    title: "On-site print output",
    copy: "A newspaper-style physical keepsake produced in the format confirmed for the event.",
  },
  {
    icon: Share2,
    title: "Digital delivery option",
    copy: "A digital sharing journey configured around the event and venue requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-event preparation",
    copy: "Artwork, equipment and output settings reviewed and tested before event day.",
  },
  {
    icon: Users,
    title: "Event support",
    copy: "Delivery, setup and on-site support included as stated in the approved quotation.",
  },
];

export default function NewspaperPhotoBoothPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Newspaper Photo Booth Rental",
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    description:
      "Custom newspaper-style photo booth experiences for corporate events, MICE, brand activations and celebrations.",
    url: `${siteConfig.url}/newspaper-photo-booth`,
  };

  return (
    <>
      <PageHero
        actions={
          <>
            <CtaLink href="/contact?service=newspaper-photo-booth">
              Get a free quote
            </CtaLink>
            <CtaLink href="/gallery" variant="secondary">
              View gallery
            </CtaLink>
          </>
        }
        description="Turn guest portraits into customised newspaper-style prints designed around your brand, campaign or celebration, with a digital keepsake available as part of the event experience."
        eyebrow="Lumina Voyage Newspaper Photo Booth"
        image="/images/haji-lane-sample.jpg"
        imageAlt="Personalised Haji Lane newspaper-style photo sample"
        title="Your event story, printed on the front page."
      />

      <UpdatesCarousel />

      <section className="section section-white">
        <div className="container split-section reverse">
          <div className="split-media product-machine-media">
            <Image
              alt="Two green Lumina Voyage newspaper photo booths"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              src="/images/green-booths-photo.jpg"
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">The product concept</p>
            <h2>Part photo experience. Part branded content. Completely personal.</h2>
            <div className="editorial-rule" />
            <p>
              The Newspaper Photo Booth combines portrait capture, editorial
              design and on-site print output in one guest experience. Instead
              of a conventional photo strip, each guest becomes the subject of
              a front page created for the occasion.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" size={20} />
                A custom newspaper masthead and editorial design
              </li>
              <li>
                <Check aria-hidden="true" size={20} />
                Event, campaign or celebration headlines
              </li>
              <li>
                <Check aria-hidden="true" size={20} />
                A physical print and configured digital output
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionIntro
            description="From the event masthead to the digital delivery journey, every visible touchpoint can be planned around the brief."
            eyebrow="Customisation"
            title="Make the whole edition yours."
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
          <p className="section-note">
            Final formats, artwork scope and digital options are confirmed in
            the event proposal.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            description="The experience begins well before the first guest steps in front of the camera."
            eyebrow="From brief to event day"
            title="A clear path from idea to front page."
          />
          <div className="steps-grid">
            {projectSteps.map((step) => (
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
            description="The exact package depends on the event configuration. Every approved quotation states the equipment, creative and support included."
            eyebrow="What the experience can include"
            title="The pieces behind the headline."
          />
          <div className="included-grid included-grid-three">
            {inclusions.map(({ icon: Icon, title, copy }) => (
              <article className="included-item" key={title}>
                <Icon aria-hidden="true" size={30} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow">Venue planning</p>
            <h2>What we confirm before the event.</h2>
            <p>
              Every venue is different. Before confirming the setup, we review
              the booth footprint, access window, power supply, network
              conditions, guest flow and any venue-specific requirements.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" size={20} />
                Guest count and programme timing
              </li>
              <li>
                <Check aria-hidden="true" size={20} />
                Venue access, floor area and queueing
              </li>
              <li>
                <Check aria-hidden="true" size={20} />
                Power, network and event-day coordination
              </li>
            </ul>
            <CtaLink href="/how-it-works" variant="text">
              See the full process
            </CtaLink>
          </div>
          <div className="requirements-panel">
            <div className="requirements-panel-media">
              <Image
                alt="Lumina Voyage photo booth prepared for an event"
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                src="/images/green-booths-photo.jpg"
              />
              <span className="requirements-icon">
                <MonitorCheck aria-hidden="true" size={28} strokeWidth={1.5} />
              </span>
            </div>
            <div className="requirements-panel-copy">
              <p className="eyebrow">Plan with confidence</p>
              <h3>No guessed specifications.</h3>
              <p>
                We recommend a configuration after reviewing your attendance,
                print format, venue and programme. The agreed requirements are
                recorded in the proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Start your edition</p>
            <h2>Put your next event on the front page.</h2>
          </div>
          <CtaLink href="/contact?service=newspaper-photo-booth">
            Get a free quote
          </CtaLink>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        type="application/ld+json"
      />
    </>
  );
}
