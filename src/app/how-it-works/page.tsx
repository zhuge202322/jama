import type { Metadata } from "next";
import {
  CheckCircle2,
  ClipboardList,
  PenTool,
  ScanLine,
  Settings2,
  Users,
} from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { guestSteps, projectSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How the Newspaper Photo Booth Works",
  description:
    "See how Lumina Voyage plans, designs, prepares and delivers a custom newspaper photo booth experience for your event.",
  alternates: { canonical: "/how-it-works" },
};

const timelineIcons = [ClipboardList, PenTool, Settings2, Users];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        actions={<CtaLink href="/contact">Start with your brief</CtaLink>}
        compact
        description="A thoughtful event experience starts with a clear brief, approved artwork and a setup prepared for the venue."
        eyebrow="How it works"
        image="/images/green-booths-photo.jpg"
        imageAlt="Lumina Voyage newspaper photo booth equipment"
        title="From your idea to their front page."
      />

      <section className="section section-white">
        <div className="container">
          <SectionIntro
            description="We align the creative, technical and venue details before the guest experience goes live."
            eyebrow="For organisers"
            title="Four stages, one agreed event plan."
          />
          <div className="process-timeline">
            {projectSteps.map((step, index) => {
              const Icon = timelineIcons[index];
              return (
                <article className="timeline-item" key={step.number}>
                  <div className="timeline-marker">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.6} />
                  </div>
                  <div>
                    <span className="step-number">{step.number}</span>
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionIntro
            description="At the event, the interaction stays simple even though the creative work behind it is highly customised."
            eyebrow="For guests"
            title="A short journey with a tangible ending."
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
            description="Final technical requirements depend on the selected print format, venue and programme."
            eyebrow="Event readiness"
            title="What we confirm before setup."
          />
          <div className="readiness-grid">
            <article>
              <ScanLine aria-hidden="true" size={32} />
              <h3>Venue & footprint</h3>
              <p>Access routes, floor area, queueing and the agreed setup window.</p>
            </article>
            <article>
              <Settings2 aria-hidden="true" size={32} />
              <h3>Power & connectivity</h3>
              <p>Compatible power, network conditions and any venue restrictions.</p>
            </article>
            <article>
              <CheckCircle2 aria-hidden="true" size={32} />
              <h3>Artwork & output</h3>
              <p>Approved headlines, brand assets, layouts and output settings.</p>
            </article>
            <article>
              <Users aria-hidden="true" size={32} />
              <h3>Guest flow & support</h3>
              <p>Attendance, operating period, programme timing and staffing scope.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Bring us the brief</p>
            <h2>We will turn the event details into a clear experience plan.</h2>
          </div>
          <CtaLink href="/contact">Start an enquiry</CtaLink>
        </div>
      </section>
    </>
  );
}
