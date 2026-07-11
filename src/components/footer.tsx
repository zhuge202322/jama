import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            alt="Lumina Voyage"
            height={80}
            src="/images/logo-square.jpg"
            width={96}
          />
          <p>
            Custom newspaper photo booth experiences for events across
            Singapore.
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li>
              <Mail aria-hidden="true" size={17} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <MessageCircle aria-hidden="true" size={17} />
              <a href={whatsappUrl()} rel="noreferrer" target="_blank">
                WhatsApp us
              </a>
            </li>
            <li>
              <MapPin aria-hidden="true" size={17} />
              <span>{siteConfig.address}</span>
            </li>
            <li>
              <Camera aria-hidden="true" size={17} />
              <a href={siteConfig.instagram} rel="noreferrer" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-cta">
          <p className="eyebrow eyebrow-light">Planning an event?</p>
          <h2>Make your guests the story.</h2>
          <Link className="button button-accent" href="/contact">
            Start an enquiry
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}
        </p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
