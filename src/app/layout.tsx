import type { Metadata, Viewport } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { MessageCircle } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig, whatsappUrl } from "@/lib/site";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Lumina Voyage | Newspaper Photo Booth Rental Singapore",
    template: "%s | Lumina Voyage",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: siteConfig.name,
    title: "Lumina Voyage | Newspaper Photo Booth Rental Singapore",
    description: siteConfig.description,
    images: [
      {
        url: "/images/green-booths-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Lumina Voyage newspaper photo booths",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Voyage | Newspaper Photo Booth Rental Singapore",
    description: siteConfig.description,
    images: ["/images/green-booths-photo.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f5249",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "101 Cecil Street, #13-10, Tong Eng Building",
      addressLocality: "Singapore",
      postalCode: "069533",
      addressCountry: "SG",
    },
    sameAs: [siteConfig.instagram, siteConfig.tiktok, siteConfig.facebook],
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <a
          aria-label="Enquire with Lumina Voyage on WhatsApp"
          className="whatsapp-float"
          href={whatsappUrl()}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden="true" size={24} strokeWidth={1.8} />
        </a>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
