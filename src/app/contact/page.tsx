import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
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
    <section className="section section-white">
      <div className="container quote-layout">
        <aside className="quote-aside">
          <p className="eyebrow">Start with the essentials</p>
          <h1>A stronger brief makes a better front page.</h1>
          <p>
            Sharing your event date, venue, expected attendance, programme
            schedule, and creative direction will help us recommend the most
            suitable photo booth configuration. Don&apos;t worry if you don&apos;t
            have all the details yet&mdash;we&apos;re happy to discuss at any stage
            of the planning process.
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
  );
}
