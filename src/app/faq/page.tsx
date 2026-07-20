import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photo Booth Help & FAQ",
  description:
    "Find practical answers about Lumina Voyage photo booth experiences, event planning, venues, prints and guest images.",
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
        compact
        description="Need help? We've got the answers you're looking for."
        eyebrow="Help & FAQs"
        image="/images/haji-lane-template.png"
        imageAlt="Custom editorial newspaper layout for a photo booth"
        title="Support"
      />

      <section className="section section-white">
        <div className="narrow">
          <SectionIntro title="Frequently Asked Questions" />
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
          <div className="cta-band-copy">
            <p className="eyebrow">Still have questions?</p>
            <h2>We&apos;re here to help.</h2>
            <p>
              Couldn&apos;t find what you were looking for? Get in touch with our
              team and we&apos;ll be happy to help.
            </p>
          </div>
          <CtaLink href="/contact">Contact us</CtaLink>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        type="application/ld+json"
      />
    </>
  );
}
