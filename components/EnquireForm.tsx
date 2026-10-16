"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { contact, whatsappUrl } from "@/lib/contact";
import { villas } from "@/lib/villas";

export default function EnquireForm() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const ENQUIRY_EMAIL = contact.email;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [residence, setResidence] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [duration, setDuration] = useState("12 months");
  const [message, setMessage] = useState("");
  const [nextUrl, setNextUrl] = useState(
    `${contact.siteUrl}/enquire?sent=1`,
  );

  useEffect(() => {
    setNextUrl(`${window.location.origin}/enquire?sent=1`);
  }, []);

  const body = useMemo(() => {
    return [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Residence interest: ${residence || "Not specified"}`,
      `Preferred move-in: ${moveIn || "Flexible"}`,
      `Duration: ${duration}`,
      "",
      message || "I would like to enquire about a long-term rental.",
    ].join("\n");
  }, [name, email, phone, residence, moveIn, duration, message]);

  const subject = `Long-term rental enquiry — ${residence || "AKRA Collection Layan"}`;

  return (
    <div className="form-card">
      {sent && (
        <p className="form-sent" role="status">
          Thank you — your enquiry has been sent to {ENQUIRY_EMAIL}. We will
          reply as soon as possible.
        </p>
      )}
      <p className="form-dest">
        Enquiries are sent to{" "}
        <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
      </p>
      <form
        className="form-grid"
        action={`https://formsubmit.co/${ENQUIRY_EMAIL}`}
        method="POST"
      >
        <input type="hidden" name="_subject" value={subject} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={nextUrl} />
        <input
          type="hidden"
          name="_replyto"
          value={email || ENQUIRY_EMAIL}
        />
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+66 ..."
          />
        </div>
        <div className="form-field">
          <label htmlFor="residence">Residence</label>
          <select
            id="residence"
            name="residence"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
          >
            <option value="">Select a residence</option>
            {villas.map((villa) => (
              <option key={villa.slug} value={villa.name}>
                {villa.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="moveIn">Preferred move-in</label>
          <input
            id="moveIn"
            name="move_in"
            type="date"
            value={moveIn}
            onChange={(e) => setMoveIn(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="duration">Rental duration</label>
          <select
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>1 month</option>
            <option>3 months</option>
            <option>6 months</option>
            <option>12 months</option>
            <option>Flexible / discuss</option>
          </select>
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your household, preferred number of bedrooms, or when you would like to view."
          />
        </div>
        <div className="form-field form-field--full form-actions">
          <button type="submit" className="btn btn--gold">
            Send enquiry
          </button>
          <a
            className="btn btn--outline-dark"
            href={whatsappUrl(body)}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
          <a
            className="btn btn--outline-dark"
            href={`mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          >
            Open in email app
          </a>
        </div>
      </form>
    </div>
  );
}
