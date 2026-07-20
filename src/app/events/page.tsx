import type { Metadata } from "next";
import { ArrowRight, Building2, Heart, Megaphone, TentTree } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { eventTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newspaper Photo Booth for Events Singapore",
  description:
    "Adapt the Lumina Voyage Newspaper Photo Booth for corporate events, MICE, brand activations, roadshows, weddings and celebrations.",
  alternates: { canonical: "/events" },
};

const icons = [Building2, Megaphone, TentTree, Heart];

const ideas = [
  [
    "Conference mastheads and event themes",
    "Company milestones and gala headlines",
    "Delegate names, dates and venue details",
  ],
  [
    "Campaign copy and product messages",
    "Branded visual systems and QR destinations",
    "Launch, pop-up and media event editions",
  ],
  [
    "Destination and seasonal editions",
    "Community stories and programme highlights",
    "Visible, repeatable guest participation",
  ],
  [
    "Couple, date and venue-led editions",
    "Personal headlines for family and friends",
    "Keepsakes beyond the conventional photo strip",
  ],
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        actions={<CtaLink href="/contact">Discuss your event</CtaLink>}
        compact
        description="Adapt the newspaper format to match the tone, audience and objectives of your occasion, from polished corporate programmes to joyful private celebrations."
        eyebrow="For events across Singapore"
        image="/images/cny-sample.jpg"
        imageAlt="Festive newspaper photo sample for a celebration"
        title="A headline experience for every kind of event."
      />

      <section className="section section-white">
        <div className="container">
          <div className="event-detail-list">
            {eventTypes.map((event, index) => {
              const Icon = icons[index];
              return (
                <article className="event-detail" id={event.slug} key={event.slug}>
                  <div className="event-detail-number">0{index + 1}</div>
                  <div className="event-detail-main">
                    <Icon aria-hidden="true" size={34} strokeWidth={1.5} />
                    <h2>{event.title}</h2>
                    <p>{event.detail}</p>
                  </div>
                  <div className="event-detail-ideas">
                    <p className="eyebrow">Creative directions</p>
                    <ul>
                      {ideas[index].map((idea) => (
                        <li key={idea}>
                          <ArrowRight aria-hidden="true" size={17} />
                          {idea}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow eyebrow-light">One clear scope</p>
            <h2>Every event is planned, not assumed.</h2>
            <p>
              Guest count, programme timing, print format, venue access,
              connectivity and creative scope all shape the recommended setup.
              We record the final deliverables and responsibilities in the
              proposal before the event.
            </p>
          </div>
          <div className="event-question-panel">
            <p className="eyebrow eyebrow-light">Bring to your enquiry</p>
            <ol>
              <li>Your event date and venue</li>
              <li>Expected attendance and operating hours</li>
              <li>Brand guidelines or celebration theme</li>
              <li>Preferred physical and digital outputs</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Made for the brief</p>
            <h2>Tell us the occasion. We will help shape the edition.</h2>
          </div>
          <CtaLink href="/contact">Get a free quote</CtaLink>
        </div>
      </section>
    </>
  );
}
