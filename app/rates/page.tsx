import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RatesTable from "@/components/RatesTable";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Long-Stay Monthly & Yearly Rates",
  description:
    "Seasonal monthly rental rates and 3/6/12-month discounts for 1–4 bedroom serviced pool villas at AKRA Collection Layan, Phuket.",
  path: "/rates",
  image:
    "https://akracollectionlayan.com/wp-content/uploads/2025/09/DJI_0227-scaled.jpg",
});

export default function RatesPage() {
  return (
    <>
      <PageHero
        title="Long-stay rates"
        lead="Spacious villas · Fully serviced · 1–4 bedrooms. Seasonal monthly pricing with packages for longer commitments."
        image="https://akracollectionlayan.com/wp-content/uploads/2025/09/DJI_0227-scaled.jpg"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Monthly rental</p>
            <h2 className="section-title">Your private paradise awaits</h2>
            <p className="section-lead">
              The rates below are in Thai Baht per month by season. The 12-month
              column shows the published yearly package total. Multi-month
              discounts reward longer stays.
            </p>
          </Reveal>
          <RatesTable />
          <div className="hero__actions" style={{ marginTop: "2rem" }}>
            <Link href="/enquire" className="btn btn--gold">
              Request a quotation
            </Link>
            <Link href="/residences" className="btn btn--outline-dark">
              Browse residences
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container feature-strip">
          {[
            {
              title: "Private pool & garden",
              text: "Relax in your own space — professionally maintained.",
            },
            {
              title: "Fully serviced",
              text: "Housekeeping, maintenance, and 24-hour reception.",
            },
            {
              title: "Comfort & privacy",
              text: "Your home away from home for months or a year.",
            },
            {
              title: "Layan, Phuket",
              text: "Close to Layan Beach, restaurants, and lifestyle.",
            },
          ].map((item) => (
            <div className="feature-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
