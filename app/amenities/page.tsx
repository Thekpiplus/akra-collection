import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { rateInclusions } from "@/lib/rates";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Amenities & Estate Services",
  description:
    "Included long-term rental services at AKRA Collection Layan: housekeeping, linen, pool and garden care, Wi-Fi, 24-hour reception, and on-site café.",
  path: "/amenities",
  image:
    "https://akracollectionlayan.com/wp-content/uploads/2025/10/Have_a_trip_day28-scaled.jpg",
});

const amenities = [
  {
    title: "Housekeeping & linen",
    text: "Cleaning twice a week and linen changed once a week are included in your rental, so everyday living stays easy.",
  },
  {
    title: "Pool & garden care",
    text: "Every residence has a private saltwater pool and garden, professionally maintained as part of your lease.",
  },
  {
    title: "24-hour reception",
    text: "Round-the-clock reception and estate maintenance support while you live on site.",
  },
  {
    title: "Vanali Café",
    text: "An on-site café serving coffee, bakery items, and Thai and fusion dishes — open for residents to enjoy at their own pace.",
  },
  {
    title: "High-speed Wi-Fi",
    text: "Reliable connectivity suited to remote work and everyday streaming across the estate.",
  },
  {
    title: "Vehicle & transfers",
    text: "Front-desk assistance with vehicle rentals and optional airport transfers for a smoother move-in.",
  },
  {
    title: "Beach shuttle",
    text: "A complimentary afternoon shuttle to Layan Beach for easy coastal access without needing a car.",
  },
  {
    title: "In-residence wellness",
    text: "Massage therapists can be arranged to your villa through reception — privacy comes first.",
  },
  {
    title: "Clear utility billing",
    text: "Water and electricity are billed separately based on actual usage — transparent for long-term residents.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title="Amenities & services"
        lead="Everything you need for everyday living — not a short check-in stay."
        image="https://akracollectionlayan.com/wp-content/uploads/2025/10/Have_a_trip_day28-scaled.jpg"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Estate living</p>
            <h2 className="section-title">Comfort with quiet support</h2>
            <p className="section-lead">
              AKRA Collection Layan pairs private residences with practical
              services so you can focus on life in Phuket — work, family, and
              downtime — while the estate team takes care of the rest.
            </p>
          </Reveal>
          <div className="amenity-grid">
            {amenities.map((item) => (
              <article className="amenity-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container split">
          <Reveal>
            <div className="split__media">
              <Image
                src="https://akracollectionlayan.com/wp-content/uploads/2025/09/IMG_8986-scaled.jpg"
                alt="Estate living spaces"
                width={1000}
                height={800}
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="eyebrow">Included with rent</p>
              <h2 className="section-title">What your lease covers</h2>
              <ul className="checklist">
                {rateInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/rates" className="btn btn--green">
                  Review rates
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
