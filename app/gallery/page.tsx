import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";
import { galleryImages } from "@/lib/villas";

export const metadata: Metadata = pageMetadata({
  title: "Villa Gallery",
  description:
    "Photos of private pool villas, terraces, and hillside living at AKRA Collection Layan in Phuket.",
  path: "/gallery",
  image:
    "https://akracollectionlayan.com/wp-content/uploads/2025/09/DJI_0234-scaled.jpg",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        lead="A look inside the residences, pools, and hillside setting of AKRA Collection Layan."
        image="https://akracollectionlayan.com/wp-content/uploads/2025/09/DJI_0234-scaled.jpg"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="gallery-grid">
              {galleryImages.map((src, i) => (
                <figure key={src}>
                  <Image
                    src={src}
                    alt={`AKRA Collection Layan residence photo ${i + 1}`}
                    width={900}
                    height={700}
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
