import Image from "next/image";
import { contact } from "@/lib/contact";

export default function BrandMark({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <span className={`brand brand--${variant}`}>
      <Image
        src={contact.logo}
        alt=""
        width={48}
        height={48}
        priority
        className="brand__logo"
      />
      <span className="brand-text">
        <strong>{contact.brandLine}</strong>
        <span>{contact.brandSub}</span>
      </span>
    </span>
  );
}
