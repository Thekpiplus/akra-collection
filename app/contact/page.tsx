import type { Metadata } from "next";
import Link from "next/link";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { contact, mailtoEnquire, whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Private Viewings",
  description:
    "Contact AKRA Collection Layan for long-term villa rental enquiries and private viewings in Layan, Phuket. Phone, WhatsApp, email, and Facebook.",
  path: "/contact",
  image:
    "https://akracollectionlayan.com/wp-content/uploads/2025/09/DJI_20240619163313_0976_D-scaled.jpg",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        lead="We are here to help with long-term rental enquiries, viewings, and availability."
        image="https://akracollectionlayan.com/wp-content/uploads/2025/09/DJI_20240619163313_0976_D-scaled.jpg"
      />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <p className="eyebrow">Visit & connect</p>
              <h2 className="section-title">AKRA Collection Layan</h2>
              <p className="section-lead">
                Perched on a quiet hillside in Soi Layan 9, Cherngtalay —
                minutes from Layan Beach and Bangtao lifestyle hubs.
              </p>
              <div className="contact-cards" style={{ marginTop: "1.75rem" }}>
                <div className="contact-card">
                  <h3>Address</h3>
                  <p>{contact.address}</p>
                  <p style={{ marginTop: "0.75rem" }}>
                    <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
                      Open in Google Maps
                    </a>
                  </p>
                </div>
                <div className="contact-card">
                  <h3>Call</h3>
                  <p>
                    <a href={`tel:${contact.phoneTel}`}>
                      {contact.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${contact.phoneAltTel}`}>
                      {contact.phoneAltDisplay}
                    </a>
                  </p>
                </div>
                <div className="contact-card">
                  <h3>Email & WhatsApp</h3>
                  <p>
                    <a href={mailtoEnquire()}>{contact.email}</a>
                  </p>
                  <p style={{ marginTop: "0.5rem" }}>
                    <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                      Message on WhatsApp
                    </a>
                  </p>
                </div>
                <div className="contact-card">
                  <h3>Social</h3>
                  <SocialLinks />
                </div>
              </div>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <Link href="/enquire" className="btn btn--gold">
                  Enquire online
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="eyebrow">Find us</p>
              <h3
                className="section-title"
                style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}
              >
                On the map
              </h3>
              <p className="section-lead" style={{ marginBottom: "1.25rem" }}>
                AKRA Collection Layan — Hideaway Villas. Private viewings by
                appointment.
              </p>
              <MapEmbed />
              <p style={{ marginTop: "1rem" }}>
                <a
                  className="btn btn--outline-dark"
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}