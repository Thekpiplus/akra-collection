import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import VillaCard from "@/components/VillaCard";
import { contact, whatsappUrl } from "@/lib/contact";
import { longStayDiscounts } from "@/lib/rates";
import { pageMetadata } from "@/lib/seo";
import { locationHighlights, villas, wings } from "@/lib/villas";

export const metadata: Metadata = pageMetadata({
  title: "Long-Term Serviced Villa Rentals in Phuket",
  description:
    "Rent a fully serviced private pool villa at AKRA Collection Layan. Monthly and yearly terms near Layan Beach with housekeeping, pool care, and estate support.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section bg-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Live privately</p>
            <h2 className="section-title">
              Serviced residences, not a short stay
            </h2>
            <p className="section-lead">
              Eighteen private pool villas set in tropical hillside greenery —
              crafted for digital nomads, couples, expats, and families who want
              space, privacy, and estate-level care on monthly or yearly terms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our collection</p>
            <h2 className="section-title">Residence wings</h2>
            <p className="section-lead">
              From duplex homes to valley villas — choose the layout that fits
              how you live.
            </p>
          </Reveal>
          <div className="wing-grid">
            {wings.map((wing) => (
              <Link key={wing.title} href={wing.href} className="wing-card">
                <Image
                  src={wing.image}
                  alt={wing.title}
                  width={900}
                  height={700}
                  sizes="(max-width: 960px) 100vw, 50vw"
                />
                <div className="wing-card__body">
                  <h3>{wing.title}</h3>
                  <p>{wing.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Residences</p>
            <h2 className="section-title">Explore available homes</h2>
            <p className="section-lead">
              One- to four-bedroom private pool villas with fully equipped
              kitchenettes and estate services included.
            </p>
          </Reveal>
          <div className="villa-grid">
            {villas.slice(0, 3).map((villa) => (
              <VillaCard key={villa.slug} villa={villa} />
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/residences" className="btn btn--green">
              View all residences
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-green">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Long-stay value</p>
            <h2 className="section-title">More months, more freedom</h2>
            <p className="section-lead">
              Seasonal monthly rates with clear discounts for longer commitments
              — utilities billed separately on actual usage.
            </p>
          </Reveal>
          <div className="discount-row">
            {longStayDiscounts.map((item) => (
              <div className="discount-card" key={item.term}>
                <span>{item.term}</span>
                <strong>{item.discount}</strong>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/rates" className="btn btn--gold">
              See full rate table
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="split__media">
              <Image
                src="https://akracollectionlayan.com/wp-content/uploads/2025/10/terrace.jpg"
                alt="Private terrace and pool"
                width={1000}
                height={800}
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="eyebrow">Included in your rental</p>
              <h2 className="section-title">Fully serviced living</h2>
              <p className="section-lead">
                Housekeeping twice a week, linen changed once a week, pool and
                garden care, high-speed Wi-Fi, and 24-hour reception with estate
                maintenance — so everyday living stays effortless.
              </p>
              <ul className="checklist">
                {locationHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <Link href="/amenities" className="btn btn--green">
                  Amenities & services
                </Link>
                <a
                  href={whatsappUrl()}
                  className="btn btn--outline-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <h2>Request a private viewing</h2>
            <p>
              Walk the grounds, see the residences, and discuss monthly or yearly
              terms with our team.
            </p>
            <div className="hero__actions">
              <a
                href={contact.bookingUrl}
                className="btn btn--gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
              <Link href="/enquire" className="btn btn--outline">
                Long-stay enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
