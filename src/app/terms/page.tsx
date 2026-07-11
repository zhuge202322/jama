import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Website and event service terms for Lumina Voyage Tech Pte. Ltd.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="legal-page">
      <div className="narrow">
        <p className="eyebrow">Lumina Voyage Tech Pte. Ltd.</p>
        <h1>Terms of Service</h1>
        <p className="updated">Last updated: 11 July 2026</p>

        <p>
          These Terms govern your use of the Lumina Voyage website. Event
          services are also subject to the quotation, proposal or service
          agreement accepted for the relevant booking. If those event-specific
          terms conflict with this website summary, the accepted quotation or
          agreement applies to that booking.
        </p>

        <h2>1. Website use</h2>
        <p>
          You may use this website to learn about our services and submit a
          genuine enquiry. You must not misuse the site, attempt unauthorised
          access, interfere with security or submit unlawful, misleading or
          harmful material.
        </p>

        <h2>2. Enquiries and quotations</h2>
        <p>
          A website enquiry is not a confirmed booking. Quotations are prepared
          based on the information supplied, may be subject to availability and
          remain valid only for the period stated in the quotation.
        </p>

        <h2>3. Booking confirmation</h2>
        <p>
          A booking is confirmed only when the required acceptance, deposit or
          other confirmation stated in the quotation has been received. Dates
          may remain available to other clients until confirmation is complete.
        </p>

        <h2>4. Service scope</h2>
        <p>
          The accepted quotation records the equipment, operating period,
          creative work, print format, digital delivery, staffing, logistics and
          post-event outputs included. Items not listed are not part of the
          confirmed service.
        </p>

        <h2>5. Client information and approvals</h2>
        <p>The client is responsible for:</p>
        <ul className="prose-list">
          <li>providing accurate event, venue and attendance information;</li>
          <li>supplying usable brand assets and content with permission for use;</li>
          <li>reviewing and approving artwork by the agreed deadline;</li>
          <li>obtaining venue access, permits and participant notices or consents;</li>
          <li>providing the agreed power, network and setup conditions.</li>
        </ul>

        <h2>6. Design and intellectual property</h2>
        <p>
          Each party retains ownership of its pre-existing brands, content and
          materials. Unless otherwise agreed, Lumina Voyage retains its working
          methods, systems and reusable design components. The client grants us
          permission to use supplied materials only as needed to prepare and
          deliver the agreed service.
        </p>

        <h2>7. Fees, GST and payment</h2>
        <p>
          Fees, applicable GST, deposits, payment milestones, transport,
          parking, venue charges, overtime and optional services are stated in
          the quotation. Late or incomplete payment may delay preparation or
          affect service availability.
        </p>

        <h2>8. Changes, postponement and cancellation</h2>
        <p>
          Change, postponement, cancellation and refund terms are stated in the
          accepted quotation or service agreement. Additional work, changed
          access conditions or late artwork may require revised fees or timing.
        </p>

        <h2>9. Venue and third-party dependencies</h2>
        <p>
          Event delivery may depend on venue access, power, connectivity,
          digital communication platforms and other third parties. We will take
          reasonable steps to prepare and support the agreed service but are not
          responsible for failures outside our reasonable control.
        </p>

        <h2>10. Guest photographs and personal data</h2>
        <p>
          The client must provide appropriate participant information and
          obtain any consent required for the event. Personal data and guest
          images are handled according to the event agreement and our <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>11. Marketing use</h2>
        <p>
          We will not present a client logo, event or identifiable guest image
          as a public case study without the permission required for that use.
        </p>

        <h2>12. Liability and force majeure</h2>
        <p>
          Nothing in these Terms excludes liability that cannot lawfully be
          excluded. Any event-specific limitations, remedies and force majeure
          provisions are stated in the accepted service agreement. Neither
          party is responsible for delay caused by events beyond its reasonable
          control, subject to the agreed notification and mitigation duties.
        </p>

        <h2>13. Governing law</h2>
        <p>
          These website Terms are governed by the laws of Singapore. The parties
          should first attempt in good faith to resolve a dispute directly.
        </p>

        <h2>14. Contact</h2>
        <p>
          Questions about these Terms may be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {" "}or to {siteConfig.address}.
        </p>
      </div>
    </article>
  );
}
