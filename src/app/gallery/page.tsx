import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { galleryItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newspaper Photo Booth Gallery",
  description:
    "Explore Lumina Voyage newspaper print samples, booth formats and creative concepts for events in Singapore.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        actions={<CtaLink href="/contact">Create your edition</CtaLink>}
        compact
        description="Explore newspaper print samples, equipment views and creative concepts for destinations, brands, seasonal events and celebrations."
        eyebrow="Gallery"
        image="/images/haji-lane-template.png"
        imageAlt="Editorial Haji Lane Singapore newspaper design"
        title="Every front page begins with a different story."
      />

      <section className="section section-white">
        <div className="container">
          <SectionIntro
            description="Images are labelled as product samples, equipment views or concept designs. Final artwork and event configuration are created or confirmed for each brief."
            eyebrow="Prints, booths and concepts"
            title="A closer look at the experience."
          />
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="section section-cream">
        <div className="narrow gallery-disclosure">
          <p className="eyebrow">A note on the gallery</p>
          <h2>Samples show possibility, not a fixed template.</h2>
          <p>
            Existing images help explain the product format. Your event edition
            will be developed around the approved brand, event theme, output
            format and guest journey. Any final use of identifiable guest or
            venue images is subject to the necessary permissions.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Your visual direction</p>
            <h2>Bring us the brand, occasion and headline idea.</h2>
          </div>
          <CtaLink href="/contact">Get a free quote</CtaLink>
        </div>
      </section>
    </>
  );
}
