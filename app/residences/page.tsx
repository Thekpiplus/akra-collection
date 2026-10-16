import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VillaCard from "@/components/VillaCard";
import { pageMetadata } from "@/lib/seo";
import { villas } from "@/lib/villas";

export const metadata: Metadata = pageMetadata({
  title: "Residences for Long-Term Rent",
  description:
    "Browse 1–4 bedroom private pool villas for monthly and yearly rental at AKRA Collection Layan, Phuket — duplexes, modular cabins, and valley homes.",
  path: "/residences",
  image:
    "/images/2025/09/Luxury-Valley-Serviced-villas.jpeg",
});

export default function ResidencesPage() {
  const groups = [
    {
      title: "One-bedroom residences",
      items: villas.filter((v) => v.bedrooms === "1BR"),
    },
    {
      title: "Flexible & multi-bedroom homes",
      items: villas.filter((v) => v.bedrooms !== "1BR"),
    },
  ];

  return (
    <>
      <PageHero
        title="Our residences"
        lead="Private pool villas for monthly and yearly living — from intimate duplexes to expansive family homes."
        image="/images/2025/09/Luxury-Valley-Serviced-villas.jpeg"
      />

      {groups.map((group) => (
        <section className="section" key={group.title}>
          <div className="container">
            <Reveal>
              <p className="eyebrow">For rent</p>
              <h2 className="section-title">{group.title}</h2>
            </Reveal>
            <div className="villa-grid">
              {group.items.map((villa) => (
                <VillaCard key={villa.slug} villa={villa} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
