"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Camera, Mail, Menu, MessageCircle, Music2, Users, X } from "lucide-react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("nav-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <p>Photo booth experiences in Singapore</p>
          <div className="utility-links">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" size={15} />
              <span>{siteConfig.email}</span>
            </a>
            <a href={whatsappUrl()} rel="noreferrer" target="_blank">
              <MessageCircle aria-hidden="true" size={15} />
              <span>WhatsApp</span>
            </a>
            <a
              className="utility-social"
              href={siteConfig.instagram}
              rel="noreferrer"
              target="_blank"
            >
              <Camera aria-hidden="true" size={16} />
              <span>Instagram</span>
            </a>
            <a
              className="utility-social"
              href={siteConfig.tiktok}
              rel="noreferrer"
              target="_blank"
            >
              <Music2 aria-hidden="true" size={16} />
              <span>TikTok</span>
            </a>
            <a
              className="utility-social"
              href={siteConfig.facebook}
              rel="noreferrer"
              target="_blank"
            >
              <Users aria-hidden="true" size={16} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container nav-inner">
          <Link className="brand-link" href="/" aria-label="Lumina Voyage home">
            <Image
              alt="Lumina Voyage"
              height={1024}
              priority
              src="/images/logo.png"
              width={1536}
            />
          </Link>

          <nav aria-label="Primary navigation" className="desktop-nav">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={active ? "active" : ""}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <Link className="button button-primary nav-quote" href="/contact">
              Get a free quote
            </Link>
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="menu-button"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={`mobile-menu-layer ${open ? "open" : ""}`}
      >
        <button
          aria-label="Close menu"
          className="mobile-menu-backdrop"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          type="button"
        />
        <nav aria-label="Mobile navigation" className="mobile-menu" id="mobile-menu">
          <p className="mobile-menu-label">Explore Lumina Voyage</p>
          {navItems.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button button-primary mobile-quote"
            href="/contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Get a free quote
          </Link>
          <div className="mobile-social-links" aria-label="Social media">
            <a href={siteConfig.instagram} rel="noreferrer" target="_blank">
              <Camera aria-hidden="true" size={18} />
              Instagram
            </a>
            <a href={siteConfig.tiktok} rel="noreferrer" target="_blank">
              <Music2 aria-hidden="true" size={18} />
              TikTok
            </a>
            <a href={siteConfig.facebook} rel="noreferrer" target="_blank">
              <Users aria-hidden="true" size={18} />
              Facebook
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
