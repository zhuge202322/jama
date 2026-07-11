import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell Lumina Voyage about your event date, venue, audience and Newspaper Photo Booth requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        description="Share the date, venue, audience and experience you have in mind. We will review the brief and contact you with the next steps."
        eyebrow="Get a free quote"
        image="/images/green-booths-photo.jpg"
        imageAlt="Lumina Voyage green newspaper photo booths"
        title="Tell us about your event."
      />

      <section className="section section-white">
        <div className="container quote-layout">
          <aside className="quote-aside">
            <p className="eyebrow">Start with the essentials</p>
            <h2>A stronger brief makes a better front page.</h2>
            <p>
              Event date, venue, attendance, programme timing and creative
              direction help us recommend a suitable configuration. You do not
              need every answer before getting in touch.
            </p>
            <div className="contact-lines">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail aria-hidden="true" size={20} />
                <span>{siteConfig.email}</span>
              </a>
              <a href={whatsappUrl()} rel="noreferrer" target="_blank">
                <MessageCircle aria-hidden="true" size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <p>
                <MapPin aria-hidden="true" size={20} />
                <span>{siteConfig.address}</span>
              </p>
            </div>
          </aside>
          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
