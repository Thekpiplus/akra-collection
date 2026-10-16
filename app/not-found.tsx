import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}>
      <div className="container" style={{ maxWidth: 640, textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 className="section-title">Page not found</h1>
        <p className="section-lead" style={{ marginInline: "auto" }}>
          The page you are looking for may have moved. Please explore our
          residences or send an enquiry instead.
        </p>
        <div className="hero__actions" style={{ justifyContent: "center", marginTop: "1.75rem" }}>
          <Link href="/" className="btn btn--green">
            Back to home
          </Link>
          <Link href="/residences" className="btn btn--outline-dark">
            View residences
          </Link>
          <Link href="/enquire" className="btn btn--outline-dark">
            Enquire
          </Link>
        </div>
      </div>
    </section>
  );
}
