"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "@/components/BrandMark";
import { contact } from "@/lib/contact";

const links = [
  { href: "/", label: "Home" },
  { href: "/residences", label: "Residences" },
  { href: "/rates", label: "Rates" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style: body } = document.body;
    const { style: html } = document.documentElement;

    body.position = "fixed";
    body.top = `-${scrollY}px`;
    body.left = "0";
    body.right = "0";
    body.width = "100%";
    body.overflow = "hidden";
    html.overflow = "hidden";

    return () => {
      body.position = "";
      body.top = "";
      body.left = "";
      body.right = "";
      body.width = "";
      body.overflow = "";
      html.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`site-header ${solid || !isHome || open ? "is-solid" : ""} ${!isHome ? "is-inner" : ""} ${open ? "is-menu-open" : ""}`}
    >
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label={`${contact.brand} home`}>
          <BrandMark />
        </Link>

        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link href="/enquire" className="nav-link nav-link--soft">
              Enquire
            </Link>
            <a
              href={contact.bookingUrl}
              className="btn btn--gold nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
