export type Villa = {
  slug: string;
  name: string;
  shortName: string;
  bedrooms: "1BR" | "2BR" | "3BR" | "4BR" | "1-2BR" | "2-4BR";
  size: string;
  summary: string;
  description: string;
  idealFor: string;
  highlights: string[];
  amenities: string[];
  image: string;
  gallery: string[];
};

const img = (path: string) => `/images/${path}`;

export const wings = [
  {
    title: "Luxury Duplex Residences",
    description:
      "Elegant split-level homes with private pools — ideal for couples and long-stay professionals seeking quiet privacy.",
    image: img("2025/09/honeymoon-duplex-suite-15.jpg"),
    href: "/residences/duplex-private-pool-villa",
  },
  {
    title: "Modular Pool Cabins",
    description:
      "Modern, compact residences with private pools and kitchenettes — well suited to flexible monthly living.",
    image: img("2025/09/2bedroom-carbin-8.webp"),
    href: "/residences/modular-pool-cabin",
  },
  {
    title: "Hilltop Serviced Villas",
    description:
      "Expansive hillside residences with generous living space for families settling in for months or a year.",
    image: img("2025/09/3.Layan-Hilltop-Service-Villas.jpg"),
    href: "/residences/valley-serviced-villas",
  },
  {
    title: "Luxury Valley Residences",
    description:
      "Spacious valley villas surrounded by greenery — privacy, room to live, and full estate services.",
    image: img("2025/09/Luxury-Valley-Serviced-villas.jpeg"),
    href: "/residences/valley-serviced-villas",
  },
] as const;

export const locationHighlights = [
  "A 5-minute drive to Layan Beach and Bangtao beach clubs",
  "A 10-minute drive to Laguna Phuket and the 18-hole golf course",
  "10–15 minutes to Porto de Phuket and Boat Avenue",
  "A 20-minute drive to Phuket International Airport",
  "A private saltwater pool and garden at every residence",
];

export const villas: Villa[] = [
  {
    slug: "duplex-private-pool-villa",
    name: "Duplex Private Pool Villa",
    shortName: "Duplex Pool Villa",
    bedrooms: "1BR",
    size: "100 m²",
    summary:
      "A 100 m² split-level residence with a private pool, kitchenette, and a flexible living area that can convert for guests.",
    description:
      "Nestled on a quiet hillside above Layan Bay, this one-bedroom duplex is designed for long-term comfort: a king bedroom upstairs, a living room with sofa bed below, a fully equipped kitchenette, and your own saltwater pool and garden. Soundproofing, smart entertainment, and high-speed Wi-Fi make it practical for remote work or quiet living — a private home with estate services, not a short holiday stopover.",
    idealFor:
      "Digital nomads, couples, or small households seeking premium privacy with fully serviced living.",
    highlights: [
      "Flexible living area that converts into a second sleeping space",
      "Private saltwater pool and tropical garden",
      "Fully equipped kitchenette",
      "Soundproof design and high-speed Wi-Fi",
    ],
    amenities: [
      "Private pool",
      "Kitchenette",
      "Smart TV & streaming",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Safety box",
      "Balcony & outdoor seating",
      "Complimentary toiletries",
    ],
    image: img("2025/09/DSC00032-scaled.jpg"),
    gallery: [
      img("2025/09/DSC00032-scaled.jpg"),
      img("2025/09/DJI_0227-scaled.jpg"),
      img("2025/09/DJI_0234-scaled.jpg"),
      img("2025/10/terrace.jpg"),
    ],
  },
  {
    slug: "mountain-view-duplex",
    name: "Mountain View Duplex Pool Villa",
    shortName: "Mountain View Duplex",
    bedrooms: "1BR",
    size: "100 m²",
    summary:
      "A one-bedroom duplex with mountain views, a private pool, and a calm layout for monthly or yearly living.",
    description:
      "Wake to hillside greenery and mountain views from this 100 m² duplex residence. It shares the same thoughtful split-level plan as our classic duplex — king bedroom, living area with sofa bed, kitchenette, and private pool — oriented toward serene mountain scenery. Built for residents who want space to work, unwind, and live privately while the estate team handles the pool, garden, and housekeeping.",
    idealFor:
      "Couples and remote workers who want a quiet long-stay base with views.",
    highlights: [
      "Mountain and garden views",
      "Private pool terrace",
      "Kitchenette for everyday living",
      "Estate housekeeping and linen service included",
    ],
    amenities: [
      "Private pool",
      "Mountain views",
      "Kitchenette",
      "Smart TV",
      "High-speed Wi-Fi",
      "Walk-in closet",
      "Outdoor seating",
      "Air conditioning",
    ],
    image: img("2025/09/mountain-view-duplex-villa-15.jpg"),
    gallery: [
      img("2025/09/mountain-view-duplex-villa-15.jpg"),
      img("2025/09/DJI_0228-scaled.jpg"),
      img("2025/09/DJI_0216-scaled.jpg"),
      img("2025/09/IMG_9005-scaled.jpg"),
    ],
  },
  {
    slug: "honeymoon-duplex",
    name: "Romantic Duplex Pool Villa",
    shortName: "Romantic Duplex",
    bedrooms: "1BR",
    size: "100 m²",
    summary:
      "A refined one-bedroom duplex with panoramic pool views — ideal for couples renting by the month or year.",
    description:
      "This romantic long-stay duplex offers panoramic views, a private pool, a king bedroom, a living area, and a kitchenette across 100 m². Ideal for couples relocating for a season or settling into Phuket life with privacy and full estate services — designed for living, not a short hotel stay.",
    idealFor:
      "Couples seeking a private long-term residence with a softer, more intimate atmosphere.",
    highlights: [
      "Panoramic pool and greenery views",
      "Split-level 100 m² layout",
      "Kitchenette and living area",
      "Monthly, quarterly, and yearly terms available",
    ],
    amenities: [
      "Private pool",
      "Panoramic views",
      "King bedroom",
      "Kitchenette",
      "Smart TV & streaming",
      "High-speed Wi-Fi",
      "Soundproof walls",
      "Outdoor terrace",
    ],
    image: img("2025/09/honeymoon-duplex-suite-15.jpg"),
    gallery: [
      img("2025/09/honeymoon-duplex-suite-15.jpg"),
      img("2025/09/honeymoon-duplex-suite-13.jpg"),
      img("2025/10/DA945EF1-884D-4CD1-9556-439084454E5E-scaled.jpeg"),
      img("2025/09/DSC09973-Edit-scaled.jpg"),
    ],
  },
  {
    slug: "modular-pool-cabin",
    name: "Modular Pool Cabin",
    shortName: "Modular Cabin",
    bedrooms: "1-2BR",
    size: "Compact modern layout",
    summary:
      "Contemporary pool cabins in one- and two-bedroom layouts — efficient, private, and ready for monthly living.",
    description:
      "Our modular pool cabins combine modern finishes with a private pool and garden views. Choose a one-bedroom cabin for two, or a two-bedroom layout for four — each with a kitchenette and the same estate services as our larger residences. A practical choice for families or friends who want a self-contained home near Layan Beach without the formality of a hotel stay.",
    idealFor:
      "Small families and friends sharing a long-stay residence with modern comforts.",
    highlights: [
      "One- and two-bedroom configurations",
      "Private pool with garden setting",
      "Modern cabin design with kitchenette",
      "Fully serviced long-term rental terms",
    ],
    amenities: [
      "Private pool",
      "1 or 2 bedrooms",
      "Kitchenette",
      "Smart entertainment",
      "High-speed Wi-Fi",
      "Soundproof walls",
      "Garden views",
      "Air conditioning",
    ],
    image: img("2025/09/2bedroom-carbin-8.webp"),
    gallery: [
      img("2025/09/2bedroom-carbin-8.webp"),
      img("2025/09/image00016-scaled.jpeg"),
      img("2025/10/8EDB0093-45BC-45BB-91A6-599C26ED1CF2-scaled.jpeg"),
      img("2025/09/DJI_20240619163313_0976_D-scaled.jpg"),
    ],
  },
  {
    slug: "valley-serviced-villas",
    name: "Layan Valley Serviced Villas",
    shortName: "Valley Serviced Villas",
    bedrooms: "2-4BR",
    size: "Up to ~400–460 m²",
    summary:
      "Multi-level valley residences with two to four bedrooms — generous space for families on quarterly or yearly leases.",
    description:
      "Settle into a spacious Layan Valley residence spanning multiple levels, with a private pool, jacuzzi options on select homes, and room to live comfortably. Configurations from two to four bedrooms suit larger households. Monthly rates follow the seasonal rate sheet (for example, two-bedroom homes from THB 170,000 in shoulder months); quarterly, semi-annual, and yearly discounted terms are available. Utilities are billed separately based on usage.",
    idealFor:
      "Large families and households seeking premium privacy and a serene residential lifestyle.",
    highlights: [
      "Generous floor areas of up to around 460 m²",
      "Two-, three-, and four-bedroom options",
      "Private saltwater pool and garden",
      "Estate services included in the rental",
    ],
    amenities: [
      "Private pool",
      "Multiple bedrooms & bathrooms",
      "Full living & dining areas",
      "Kitchen facilities",
      "High-speed Wi-Fi",
      "Valley greenery views",
      "Outdoor living spaces",
      "Estate maintenance",
    ],
    image: img("2025/09/Luxury-Valley-Serviced-villas.jpeg"),
    gallery: [
      img("2025/09/Luxury-Valley-Serviced-villas.jpeg"),
      img("2025/09/Luxury-serviced-pool-villa.jpeg"),
      img("2025/09/3.Layan-Hilltop-Service-Villas.jpg"),
      img("2025/10/Have_a_trip_day42-scaled.jpg"),
    ],
  },
  {
    slug: "four-bedroom-villa",
    name: "Four-Bedroom Villa with Private Pool",
    shortName: "Four-Bedroom Villa",
    bedrooms: "4BR",
    size: "~400–450 m²",
    summary:
      "An expansive four-bedroom residence with a private pool — built for families committing to long-term living in Layan.",
    description:
      "An expansive luxury residence featuring four bedrooms, multiple bathrooms, and a private pool with mountain or garden views. Designed as a true family home within the AKRA Collection estate: housekeeping, linen service, pool and garden care, Wi-Fi, and 24-hour reception are included in the rental, while water and electricity are billed on actual usage. Enquire about seasonal monthly rates or the 12-month package.",
    idealFor:
      "Families and multi-generational households who need space for year-round or seasonal living.",
    highlights: [
      "Four bedrooms and expansive living areas",
      "Private pool with outdoor living space",
      "Full estate and housekeeping services",
      "Yearly package and long-stay discounts available",
    ],
    amenities: [
      "Private pool",
      "4 bedrooms",
      "Multiple bathrooms",
      "Living & dining spaces",
      "Kitchen facilities",
      "High-speed Wi-Fi",
      "Mountain / garden views",
      "Outdoor terrace",
    ],
    image: img("2025/09/4bedroom-15.jpg"),
    gallery: [
      img("2025/09/4bedroom-15.jpg"),
      img("2025/09/Luxury-serviced-pool-villa.jpeg"),
      img("2025/10/Have_a_trip_day24-scaled.jpg"),
      img("2025/10/Have_a_trip_day28-scaled.jpg"),
    ],
  },
];

export function getVilla(slug: string) {
  return villas.find((v) => v.slug === slug);
}

export const galleryImages = [
  img("2025/09/DJI_20240619164410_0984_D-scaled.jpg"),
  img("2025/09/DSC00032-scaled.jpg"),
  img("2025/09/honeymoon-duplex-suite-15.jpg"),
  img("2025/09/mountain-view-duplex-villa-15.jpg"),
  img("2025/09/2bedroom-carbin-8.webp"),
  img("2025/09/4bedroom-15.jpg"),
  img("2025/09/Luxury-Valley-Serviced-villas.jpeg"),
  img("2025/09/DJI_0227-scaled.jpg"),
  img("2025/09/DJI_0234-scaled.jpg"),
  img("2025/10/terrace.jpg"),
  img("2025/09/IMG_9005-scaled.jpg"),
  img("2025/09/DSC09973-Edit-scaled.jpg"),
  img("2025/09/3.Layan-Hilltop-Service-Villas.jpg"),
  img("2025/10/Have_a_trip_day42-scaled.jpg"),
  img("2025/09/Luxury-serviced-pool-villa.jpeg"),
  img("2025/10/DSC09869-scaled.jpg"),
];
