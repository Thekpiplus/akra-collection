import Image from "next/image";

export default function PageHero({
  title,
  lead,
  image,
}: {
  title: string;
  lead: string;
  image: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <Image src={image} alt="" fill priority sizes="100vw" />
        <div className="page-hero__shade" />
      </div>
      <div className="page-hero__content">
        <p className="eyebrow">AKRA Collection Layan</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}
