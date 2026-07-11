import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lumina Voyage Tech Pte. Ltd. handles website enquiries, event information and guest photographs.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <div className="narrow">
        <p className="eyebrow">Lumina Voyage Tech Pte. Ltd.</p>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: 11 July 2026</p>

        <p>
          This Privacy Policy explains how {siteConfig.legalName} (&quot;Lumina
          Voyage&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects, uses, discloses and protects
          personal data when you visit this website, submit an enquiry or
          participate in a Lumina Voyage event experience.
        </p>

        <h2>1. Information we collect</h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul className="prose-list">
          <li>name, company, email address, telephone or WhatsApp number;</li>
          <li>event dates, venues, attendance and service requirements;</li>
          <li>guest photographs and generated event outputs;</li>
          <li>messages, approvals and support requests;</li>
          <li>technical, security, cookie and analytics information.</li>
        </ul>

        <h2>2. How we use information</h2>
        <p>We may use personal data to:</p>
        <ul className="prose-list">
          <li>respond to enquiries and prepare proposals;</li>
          <li>coordinate venues, artwork, equipment and event delivery;</li>
          <li>operate the photo booth and provide agreed physical or digital outputs;</li>
          <li>provide support, maintain security and troubleshoot services;</li>
          <li>meet legal, accounting and regulatory requirements;</li>
          <li>send marketing only where an appropriate consent or lawful basis exists.</li>
        </ul>

        <h2>3. Event photographs</h2>
        <p>
          At an event, the organiser may determine the purpose for which guest
          photographs are collected. Lumina Voyage may process those images to
          operate the booth and provide the agreed outputs, subject to the
          event agreement, the organiser&apos;s instructions and applicable notice.
        </p>
        <p>
          We do not use identifiable guest images in our portfolio, website or
          marketing without the permissions required for that use.
        </p>

        <h2>4. Disclosure and service providers</h2>
        <p>
          We may disclose only the information reasonably needed to event
          organisers, hosting and email providers, digital delivery providers,
          equipment or technical support partners, professional advisers and
          public authorities where required by law. We do not sell personal
          data.
        </p>

        <h2>5. Retention</h2>
        <p>
          We retain personal data only for as long as reasonably necessary for
          the purpose for which it was collected, to complete the agreed event
          delivery, resolve support matters or meet legal obligations. Specific
          image retention and download availability may be stated in the event
          notice or service agreement.
        </p>

        <h2>6. Security and overseas processing</h2>
        <p>
          We use reasonable administrative, technical and organisational
          measures to protect personal data. Some service providers may process
          information outside Singapore; where this occurs, we take reasonable
          steps to require a comparable standard of protection.
        </p>

        <h2>7. Cookies and analytics</h2>
        <p>
          The website may use essential cookies and, where enabled, analytics
          that help us understand site performance. Analytics events must not
          contain enquiry text, contact details or guest photographs. Where
          consent is required, optional analytics will not load until consent
          is provided.
        </p>

        <h2>8. Your choices and rights</h2>
        <p>
          Subject to applicable law, you may ask to access or correct your
          personal data, withdraw consent, stop marketing or request deletion
          where continued retention is not required. Withdrawing consent may
          affect our ability to provide a requested service.
        </p>

        <h2>9. Children and minors</h2>
        <p>
          Event organisers are responsible for arranging any consent required
          for minors participating in an event experience. Please contact the
          organiser or Lumina Voyage if you have a concern about a minor&apos;s
          image.
        </p>

        <h2>10. Third-party links</h2>
        <p>
          Our website may link to WhatsApp, Instagram or other third-party
          services. Their own privacy policies apply when you use those services.
        </p>

        <h2>11. Contact us</h2>
        <p>
          For privacy questions or requests, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {" "}or write to {siteConfig.address}.
        </p>

        <p>
          For the terms that apply to the website and event bookings, see our <Link href="/terms">Terms of Service</Link>.
        </p>
      </div>
    </article>
  );
}
