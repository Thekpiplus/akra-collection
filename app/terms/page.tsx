import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the AKRA Collection Layan website and enquiring about or booking long-term serviced villa rentals in Phuket.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        lead="Please read these terms before using our website or enquiring about a long-term residence at AKRA Collection Layan."
        image="https://akracollectionlayan.com/wp-content/uploads/2025/09/DJI_0228-scaled.jpg"
      />

      <section className="section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: 16 October 2026</p>

          <p>
            These Terms & Conditions (“Terms”) govern your use of the{" "}
            {contact.brand} website and related online channels operated by{" "}
            {contact.legalName}. By accessing our website or submitting an
            enquiry, you agree to these Terms. If you do not agree, please do
            not use the site.
          </p>

          <h2>1. About us</h2>
          <p>
            {contact.brand} offers fully serviced private pool villas in Layan,
            Phuket for monthly and longer-term rental, as well as reservations
            through our booking partner. Contact: {contact.address};{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>;{" "}
            <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>.
          </p>

          <h2>2. Website use</h2>
          <ul>
            <li>
              Content on this site is for general information about our
              residences, rates, amenities, and how to enquire or book.
            </li>
            <li>
              You must not misuse the site (including attempting unauthorised
              access, scraping in a way that harms the service, or transmitting
              malware).
            </li>
            <li>
              We may update, suspend, or discontinue any part of the website
              without notice.
            </li>
          </ul>

          <h2>3. Residences, rates & availability</h2>
          <ul>
            <li>
              Descriptions, photographs, and floor details are provided in good
              faith. Layouts and finishes may vary by unit.
            </li>
            <li>
              Published monthly and yearly rates, seasonal periods, and
              long-stay discounts are indicative and may change. A confirmed
              quotation or signed agreement prevails.
            </li>
            <li>
              Availability is not guaranteed until confirmed in writing by our
              team or through the reservation system.
            </li>
            <li>
              Unless otherwise stated in a signed rental agreement, utility
              charges (such as water and electricity) are billed separately on
              actual usage. Included services (for example housekeeping, linen,
              pool and garden care) are as described in your quotation or lease.
            </li>
          </ul>

          <h2>4. Enquiries & viewings</h2>
          <p>
            Submitting an enquiry via our form, email, phone, or WhatsApp does
            not create a binding rental contract. Private viewings are by
            appointment. We may request identification and tenancy information
            before confirming a long-term lease.
          </p>

          <h2>5. Online bookings</h2>
          <p>
            Instant reservations made through our Book Now link are processed on
            the Cloudbeds platform (or any successor booking partner). Those
            bookings are also subject to the booking partner’s terms and any
            rate rules shown at checkout. Long-term rental terms may require a
            separate lease agreement with {contact.legalName}.
          </p>

          <h2>6. Payments & deposits</h2>
          <p>
            Payment schedules, deposits, security deposits, cancellation, and
            refund rules are set out in your quotation, lease, or booking
            confirmation. Failure to pay on time may result in cancellation or
            termination as stated in that agreement.
          </p>

          <h2>7. Resident responsibilities</h2>
          <p>
            Residents and their guests must use the property and estate
            facilities respectfully, comply with estate rules, and not engage in
            illegal or disruptive activity. Damage beyond fair wear and tear may
            be charged to the resident.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            Website text, branding, logos, and photographs are owned by{" "}
            {contact.brand} or its licensors. You may not copy or reuse them for
            commercial purposes without prior written consent.
          </p>

          <h2>9. Third-party links</h2>
          <p>
            Links to Facebook, Instagram, maps, booking platforms, and other
            external sites are provided for convenience. We are not responsible
            for their content or privacy practices.
          </p>

          <h2>10. Disclaimer & liability</h2>
          <p>
            The website is provided “as is”. To the fullest extent permitted by
            law, we disclaim warranties regarding accuracy, uninterrupted
            availability, or fitness for a particular purpose. Nothing in these
            Terms excludes liability that cannot be excluded under applicable
            Thai law.
          </p>

          <h2>11. Privacy</h2>
          <p>
            Personal data is handled according to our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>12. Governing law</h2>
          <p>
            These Terms are governed by the laws of Thailand. Courts in Thailand
            shall have jurisdiction, without prejudice to mandatory consumer
            protections that may apply.
          </p>

          <h2>13. Changes</h2>
          <p>
            We may revise these Terms from time to time. Continued use of the
            website after changes are posted constitutes acceptance of the
            updated Terms.
          </p>

          <h2>14. Contact</h2>
          <p>
            Questions about these Terms:{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> ·{" "}
            <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
          </p>
        </div>
      </section>
    </>
  );
}
