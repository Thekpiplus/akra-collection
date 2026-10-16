import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import EnquireForm from "@/components/EnquireForm";
import Reveal from "@/components/Reveal";
import { contact, whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Enquire About a Long-Term Rental",
  description:
    "Enquire about monthly or yearly villa rental at AKRA Collection Layan. Request a private viewing or quotation by email or WhatsApp.",
  path: "/enquire",
  image:
    "https://akracollectionlayan.com/wp-content/uploads/2025/09/DSC00032-scaled.jpg",
});

export default function EnquirePage() {
  return (
    <>
      <PageHero
        title="Enquire about a residence"
        lead="Tell us your preferred move-in date and duration. We will respond with availability and a tailored quotation."
        image="https://akracollectionlayan.com/wp-content/uploads/2025/09/DSC00032-scaled.jpg"
      />

      <section className="section">
        <div className="container split">
          <Reveal>
            <Suspense fallback={<div className="form-card">Loading form…</div>}>
              <EnquireForm />
            </Suspense>
          </Reveal>
          <Reveal>
            <div>
              <p className="eyebrow">Private viewing</p>
              <h2 className="section-title">Prefer to talk first?</h2>
              <p className="section-lead">
                Viewings are by appointment. Reach us by phone, WhatsApp, or
                email — we are happy to show you the residences and discuss
                long-stay terms.
              </p>
              <div className="contact-cards" style={{ marginTop: "1.5rem" }}>
                <div className="contact-card">
                  <h3>Book Now</h3>
                  <a
                    href={contact.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open reservation system
                  </a>
                </div>
                <div className="contact-card">
                  <h3>WhatsApp</h3>
                  <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                    +66 95 546 4444
                  </a>
                </div>
                <div className="contact-card">
                  <h3>Phone</h3>
                  <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
                </div>
                <div className="contact-card">
                  <h3>Email</h3>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
