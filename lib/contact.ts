export const contact = {
  brand: "AKRA Collection Layan",
  brandLine: "AKRA Collection",
  brandSub: "Layan Residences",
  legalName: "Akra Layan Co., Ltd.",
  tagline: "Live Privately. Serviced Completely.",
  address: "Soi Layan 9, Cherngtalay, Thalang, Phuket 83110, Layan Beach, Thailand",
  phoneDisplay: "+66 (0) 95 546 4444",
  phoneTel: "+66955464444",
  phoneAltDisplay: "+66 (0) 76 210 999",
  phoneAltTel: "+6676210999",
  whatsapp: "66955464444",
  /** All enquiries and form submissions go here */
  email: "akra.reservation@gmail.com" as const,
  website: "https://akracollectionlayan.com",
  siteUrl: "https://akracollectionlayan.com",
  bookingUrl:
    "https://hotels.cloudbeds.com/en/reservation/KtOLlA?currency=thb",
  mapsUrl:
    "https://www.google.com/maps/place/AKRA+Collection+Layan+-+Hideaway+Villas/@8.0406349,98.2890464,17z",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.266631456731!2d98.28904639999999!3d8.040634899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050392cbc62ff47%3A0x1314a842907d2a8d!2sAKRA%20Collection%20Layan%20-%20Hideaway%20Villas!5e1!3m2!1sen!2sth!4v1792157864496!5m2!1sen!2sth",
  latitude: 8.0406349,
  longitude: 98.2890464,
  facebook: "https://www.facebook.com/AKRACollectionLayan/",
  instagram: "https://www.instagram.com/akracollectionlayan/",
  logo: "/logo.png",
  ogImage: "/images/2025/09/DJI_20240619164410_0984_D-scaled.jpg",
} as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hello, I am interested in a long-term villa rental at AKRA Collection Layan.",
  );
  return `https://wa.me/${contact.whatsapp}?text=${text}`;
}

export function mailtoEnquire(subject = "Long-term rental enquiry") {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}
