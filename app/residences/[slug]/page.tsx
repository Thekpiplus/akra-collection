import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { contact, whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";
import { locationHighlights, getVilla, villas } from "@/lib/villas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return villas.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) return { title: "Residence" };
  return pageMetadata({
    title: `${villa.name} for Long-Term Rent`,
    description: villa.summary,
    path: `/residences/${villa.slug}`,
    image: villa.image,
  });
}

export default async function ResidenceDetailPage({ params }: Props) {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: villa.name,
    description: villa.description,
    url: `${contact.siteUrl}/residences/${villa.slug}`,
    image: villa.gallery,
    numberOfRooms: villa.bedrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: villa.size,
    },
    amenityFeature: villa.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Soi Layan 9, Cherngtalay",
      addressLocality: "Thalang",
      addressRegion: "Phuket",
      postalCode: "83110",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.latitude,
      longitude: contact.longitude,
    },
    hasMap: contact.mapsUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: contact.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Residences",
        item: `${contact.siteUrl}/residences`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: villa.name,
        item: `${contact.siteUrl}/residences/${villa.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PageHero title={villa.name} lead={villa.summary} image={villa.image} />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/residences">Residences</Link>
                <span>/</span>
                <span aria-current="page">{villa.shortName}</span>
              </nav>
              <p className="eyebrow">Long-term residence</p>
              <h2 className="section-title">A private home to settle into</h2>
              <div className="detail-meta">
                <span className="pill">{villa.bedrooms}</span>
                <span className="pill">{villa.size}</span>
                <span className="pill">Private pool</span>
                <span className="pill">Fully serviced</span>
              </div>
              <p className="section-lead">{villa.description}</p>
              <p className="section-lead" style={{ marginTop: "1rem" }}>
                <strong>Ideal for:</strong> {villa.idealFor}
              </p>
              <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
                <Link
                  href={`/enquire?residence=${encodeURIComponent(villa.name)}`}
                  className="btn btn--gold"
                >
                  Enquire about this home
                </Link>
                <a
                  href={whatsappUrl(
                    `Hello, I am interested in renting the ${villa.name} long-term.`,
                  )}
                  className="btn btn--outline-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="split__media">
              <Image
                src={villa.gallery[1] ?? villa.image}
                alt={villa.name}
                width={1000}
                height={800}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Highlights</p>
            <h2 className="section-title">Why residents choose this villa</h2>
            <ul className="checklist">
              {villa.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h3
              className="section-title"
              style={{ fontSize: "2rem", marginTop: "3rem" }}
            >
              Amenities
            </h3>
            <ul className="amenity-list">
              {villa.amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Location</p>
            <h2 className="section-title">Layan living, connected</h2>
            <ul className="checklist">
              {locationHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <div className="detail-gallery">
            {villa.gallery.map((src) => (
              <Image
                key={src}
                src={src}
                alt={`${villa.name} gallery`}
                width={900}
                height={680}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Ready to discuss terms?</h2>
          <p>
            Ask about seasonal monthly rates, long-stay discounts, and private
            viewing times for the {villa.shortName}.
          </p>
          <div className="hero__actions">
            <Link href="/rates" className="btn btn--outline">
              View rates
            </Link>
            <Link href="/enquire" className="btn btn--gold">
              Enquire now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
