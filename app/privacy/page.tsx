import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for AKRA Collection Layan — how we collect, use, and protect personal data under Thailand’s PDPA for villa rental enquiries and bookings.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        lead="How AKRA Collection Layan looks after your personal data when you visit our website, enquire about a residence, or book with us."
        image="/images/2025/09/DJI_0216-scaled.jpg"
      />

      <section className="section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: 16 October 2026</p>

          <p>
            {contact.brand} (“we”, “us”, “our”), operated by {contact.legalName},
            respects your privacy and is committed to protecting your personal
            data. This Privacy Policy explains how we look after your personal
            data when you visit our website or use our services, and tells you
            about your privacy rights under applicable law, including the
            Personal Data Protection Act B.E. 2562 (“PDPA”).
          </p>
          <p>
            By using our website, contacting us, or agreeing to this policy in
            the context of a rental enquiry or reservation, you understand that
            we will collect and use personal information as described here.
          </p>

          <h2>The data we collect about you</h2>
          <p>
            Personal data means any information about an individual from which
            that person can be identified. Depending on how you interact with
            us, we may collect:
          </p>
          <ul>
            <li>
              <strong>Identity data:</strong> name, nationality, date of birth,
              passport or ID details where needed for a lease or booking.
            </li>
            <li>
              <strong>Contact data:</strong> address, telephone, email, and
              social or messaging account details if you contact us that way.
            </li>
            <li>
              <strong>Enquiry & rental data:</strong> preferred residence,
              move-in dates, rental duration, household details, and messages
              you send via our enquiry form, email, WhatsApp, or phone.
            </li>
            <li>
              <strong>Payment data:</strong> billing details processed through
              our reservation or payment partners (we do not store full card
              numbers on this website).
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, device
              information, and pages viewed.
            </li>
            <li>
              <strong>Sensitive data (only when necessary):</strong> limited
              health or dietary information if you voluntarily provide it for
              service arrangements, handled under PDPA special criteria.
            </li>
          </ul>
          <p>
            Information about children under 18 should only be supplied by a
            parent or guardian. Contact us if such data was sent in error and we
            will delete it.
          </p>

          <h2>How we collect your personal data</h2>
          <ul>
            <li>Website forms, email, phone, WhatsApp, and social channels</li>
            <li>
              Online reservation systems (including our Cloudbeds booking page)
            </li>
            <li>
              Third parties such as agents or partners you authorise to contact
              us on your behalf
            </li>
            <li>Cookies and similar technologies on our website</li>
          </ul>

          <h2>How we use your personal data</h2>
          <p>We use personal data to:</p>
          <ul>
            <li>
              Respond to long-term rental enquiries and arrange private viewings
            </li>
            <li>
              Process reservations, quotations, leases, and related payments
            </li>
            <li>
              Provide estate services and communicate about your residence
            </li>
            <li>
              Improve our website, services, and marketing (where permitted)
            </li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
          <p>
            Legal bases may include consent, performance of a contract, our
            legitimate interests, or compliance with law. Where we rely on
            consent, you may withdraw it at any time without affecting prior
            lawful processing.
          </p>

          <h2>Disclosure of personal data</h2>
          <p>We may share data with:</p>
          <ul>
            <li>
              Staff and affiliated entities of {contact.brand} who need it to
              assist you
            </li>
            <li>
              Service providers (IT, booking platforms, payment processors,
              professional advisers)
            </li>
            <li>
              Authorities where required by law or to protect rights and safety
            </li>
          </ul>
          <p>
            We do not sell your personal information. Transfers outside Thailand
            (if any) will use appropriate safeguards consistent with the PDPA.
          </p>

          <h2>Security & retention</h2>
          <p>
            We apply technical and organisational measures appropriate to the
            risk. We retain personal data only as long as needed for the
            purposes collected, including legal, accounting, or dispute-related
            needs, then delete or anonymise it.
          </p>

          <h2>Your rights</h2>
          <p>
            Subject to applicable law, you may request access, correction,
            erasure, restriction, objection, or data portability, and withdraw
            consent where processing is consent-based. To exercise these rights,
            contact us using the details below. We may need to verify your
            identity.
          </p>

          <h2>Cookies</h2>
          <p>
            Our site may use cookies and similar technologies for essential
            operation, analytics, and (where used) advertising or social
            features. You can control cookies through your browser settings. For
            general information, visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              allaboutcookies.org
            </a>
            .
          </p>

          <h2>Third-party sites</h2>
          <p>
            Links to Facebook, Instagram, WhatsApp, Cloudbeds, Google Maps, and
            other third-party services are governed by those providers’ own
            privacy policies.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top shows when it was last revised.
          </p>

          <h2>Contact us</h2>
          <p>
            For privacy questions or requests, contact our team at{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
            <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>.
            Address: {contact.address}.
          </p>
          <p>
            See also our{" "}
            <Link href="/terms">Terms & Conditions</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
