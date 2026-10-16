"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { contact } from "@/lib/contact";

const slides = [
  {
    src: "/images/2025/09/DJI_20240619164410_0984_D-scaled.jpg",
    alt: "Aerial view of AKRA Collection Layan residences",
  },
  {
    src: "/images/2025/09/DSC00032-scaled.jpg",
    alt: "Private pool villa terrace at Layan",
  },
  {
    src: "/images/2025/09/honeymoon-duplex-suite-15.jpg",
    alt: "Duplex residence with private pool",
  },
  {
    src: "/images/2025/09/Luxury-Valley-Serviced-villas.jpeg",
    alt: "Valley serviced villa surrounded by greenery",
  },
  {
    src: "/images/2025/10/terrace.jpg",
    alt: "Outdoor living terrace at AKRA Collection Layan",
  },
] as const;

const INTERVAL_MS = 5500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="hero hero--slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Residence photography"
    >
      <div className="hero__media">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              quality={75}
            />
          </div>
        ))}
        <div className="hero__shade" />
      </div>

      <div className="hero__content">
        <h1 className="hero__brand">
          AKRA Collection <em>Layan</em>
        </h1>
        <p className="hero__line">
          Your private paradise for monthly and yearly living — fully serviced
          residences just above Layan Beach.
        </p>
        <div className="hero__actions">
          <a
            href={contact.bookingUrl}
            className="btn btn--gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          <Link href="/rates" className="btn btn--outline">
            View monthly rates
          </Link>
        </div>
      </div>

      <div className="hero-controls">
        <button
          type="button"
          className="hero-arrow"
          onClick={prev}
          aria-label="Previous photo"
        >
          ‹
        </button>
        <div className="hero-dots" role="tablist" aria-label="Slides">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1}`}
              className={`hero-dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero-arrow"
          onClick={next}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <div className="hero-progress" aria-hidden="true">
        <span
          key={index}
          className={`hero-progress__bar ${paused ? "is-paused" : ""}`}
        />
      </div>
    </section>
  );
}
