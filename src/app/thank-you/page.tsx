import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="empty-state thank-you-state">
      <div className="container empty-state-inner">
        <CheckCircle2 aria-hidden="true" className="success-icon" size={52} />
        <p className="eyebrow">Enquiry received</p>
        <h1>Your event brief is on its way.</h1>
        <p>
          Thank you for contacting Lumina Voyage. We will use the details you
          provided to review the event and contact you with the next steps.
        </p>
        <div className="hero-actions centered-actions">
          <CtaLink href="/">Return home</CtaLink>
          <CtaLink href={whatsappUrl()} variant="text">
            Continue on WhatsApp
          </CtaLink>
        </div>
        <p className="small-note">
          If you need to correct your enquiry, email {siteConfig.email}.
        </p>
      </div>
    </section>
  );
}
