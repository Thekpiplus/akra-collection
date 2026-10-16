import { contact } from "@/lib/contact";

export default function MapEmbed({
  title = "AKRA Collection Layan on Google Maps",
}: {
  title?: string;
}) {
  return (
    <div className="map-embed">
      <iframe
        src={contact.mapsEmbedUrl}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
