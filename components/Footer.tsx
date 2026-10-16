import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import SocialLinks from "@/components/SocialLinks";
import { contact, mailtoEnquire, whatsappUrl } from "@/lib/contact";
import { villas } from "@/lib/villas";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand-link" aria-label={`${contact.brand} home`}>
            <BrandMark />
          </Link>
          <p className="footer-tagline">{contact.tagline}</p>
          <p>
            Fully serviced private pool villas for monthly and yearly living in
            Layan, Phuket.
          </p>
          <p className="footer-address">{contact.address}</p>
          <p className="footer-contact-lines">
            <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
            <a href={mailtoEnquire()}>{contact.email}</a>
          </p>
          <SocialLinks />
        </div>

        <div className="footer-col">
          <h3>Residences</h3>
          <ul>
            {villas.map((villa) => (
              <li key={villa.slug}>
                <Link href={`/residences/${villa.slug}`}>{villa.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link href="/rates">Long-stay rates</Link>
            </li>
            <li>
              <Link href="/amenities">Amenities & services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/enquire">Enquire</Link>
            </li>
            <li>
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Connect</h3>
          <ul>
            <li>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneTel}`}>Phone</a>
            </li>
            <li>
              <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {contact.brand}. All rights reserved.{" "}
          {contact.legalName}
        </span>
        <nav className="footer-legal" aria-label="Legal">
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
