import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newspaper Photo Booth FAQ",
  description:
    "Answers about customisation, event suitability, prints, digital delivery, venue requirements and booking a Lumina Voyage Newspaper Photo Booth.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <PageHero
        actions={<CtaLink href="/contact">Ask about your event</CtaLink>}
        compact
        description="Practical answers about the product, event planning, venue requirements and guest image handling."
        eyebrow="Frequently asked questions"
        image="/images/haji-lane-template.png"
        imageAlt="Custom editorial newspaper layout for a photo booth"
        title="Before your edition goes to print."
      />

      <section className="section section-white">
        <div className="narrow">
          <SectionIntro
            description="Event requirements vary. Your quotation and accepted service terms remain the final record of the agreed scope."
            eyebrow="Planning questions"
            title="Clear answers, with no guessed promises."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Still deciding?</p>
            <h2>Share the event details and we will help define the setup.</h2>
          </div>
          <CtaLink href="/contact">Get a free quote</CtaLink>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        type="application/ld+json"
      />
    </>
  );
}
