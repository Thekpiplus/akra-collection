import Image from "next/image";
import Link from "next/link";
import type { Villa } from "@/lib/villas";

export default function VillaCard({ villa }: { villa: Villa }) {
  return (
    <article className="villa-card">
      <Link href={`/residences/${villa.slug}`}>
        <div className="villa-card__media">
          <Image
            src={villa.image}
            alt={villa.name}
            width={800}
            height={600}
            sizes="(max-width: 960px) 50vw, 33vw"
          />
        </div>
        <div className="villa-card__body">
          <div className="villa-card__meta">
            {villa.bedrooms} · {villa.size}
          </div>
          <h3>{villa.name}</h3>
          <p>{villa.summary}</p>
          <span className="btn btn--outline-dark">View residence</span>
        </div>
      </Link>
    </article>
  );
}
