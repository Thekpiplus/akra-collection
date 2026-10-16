import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contact } from "@/lib/contact";
import { villas } from "@/lib/villas";
import "./globals.css";

const titleDefault =
  "AKRA Collection Layan | Long-Term Serviced Villa Rentals in Phuket";
const description =
  "Fully serviced private pool villas in Layan, Phuket for monthly and yearly rental. Housekeeping, pool care, estate support — live privately near Layan Beach.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#243B31",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(contact.siteUrl),
  title: {
    default: titleDefault,
    template: "%s | AKRA Collection Layan",
  },
  description,
  applicationName: contact.brand,
  keywords: [
    "AKRA Collection Layan",
    "Layan villa rental",
    "Phuket long term rental",
    "monthly villa Phuket",
    "yearly villa rental Phuket",
    "serviced pool villa Layan",
    "Cherngtalay villa rent",
    "Bangtao long stay",
    "Phuket expat housing",
  ],
  authors: [{ name: contact.brand }],
  creator: contact.brand,
  publisher: contact.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_TH",
    url: contact.siteUrl,
    siteName: contact.brand,
    title: titleDefault,
    description:
      "Private pool villas for long-term living in Layan Bay — monthly, quarterly, and yearly terms.",
    images: [
      {
        url: contact.ogImage,
        width: 1200,
        height: 630,
        alt: "AKRA Collection Layan private pool villa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    images: [contact.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "real estate",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "TH-83",
    "geo.placename": "Layan Beach, Phuket",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LodgingBusiness", "RealEstateAgent"],
      "@id": `${contact.siteUrl}/#business`,
      name: contact.brand,
      legalName: contact.legalName,
      description,
      url: contact.siteUrl,
      image: [contact.ogImage, `${contact.siteUrl}/logo.png`],
      logo: `${contact.siteUrl}/logo.png`,
      telephone: contact.phoneTel,
      email: contact.email,
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
      areaServed: {
        "@type": "Place",
        name: "Layan Beach, Phuket",
      },
      sameAs: [contact.facebook, contact.instagram],
      priceRange: "THB",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contact.phoneTel,
        email: contact.email,
        contactType: "reservations",
        areaServed: "TH",
        availableLanguage: ["en", "th"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${contact.siteUrl}/#website`,
      url: contact.siteUrl,
      name: contact.brand,
      description,
      publisher: { "@id": `${contact.siteUrl}/#business` },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: `${contact.siteUrl}/residences`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${contact.siteUrl}/#residences`,
      name: "AKRA Collection Layan Residences",
      itemListElement: villas.map((villa, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: villa.name,
        url: `${contact.siteUrl}/residences/${villa.slug}`,
        image: villa.image,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
