"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const editions = [
  {
    src: "/images/marina-bay-edition.webp",
    alt: "Marina Bay Gazette newspaper-style photo booth edition",
    title: "Marina Bay Gazette",
  },
  {
    src: "/images/jewel-changi-edition.webp",
    alt: "Jewel Changi Airport newspaper-style photo booth edition",
    title: "Jewel Changi edition",
  },
];

export function FeaturedEditions() {
  const [active, setActive] = useState(0);

  const showPrevious = () => {
    setActive((current) => (current - 1 + editions.length) % editions.length);
  };

  const showNext = () => {
    setActive((current) => (current + 1) % editions.length);
  };

  return (
    <div
      aria-label="Featured Singapore newspaper editions"
      aria-roledescription="carousel"
      className="featured-editions"
      role="region"
    >
      <div className="featured-edition-stage">
        {editions.map((edition, index) => (
          <Image
            alt={edition.alt}
            aria-hidden={active !== index}
            className={index === active ? "active" : ""}
            fill
            key={edition.src}
            priority={index === 0}
            sizes="(max-width: 820px) 100vw, 50vw"
            src={edition.src}
          />
        ))}
      </div>
      <div className="featured-edition-controls">
        <div aria-atomic="true" aria-live="polite">
          <span>Singapore edition</span>
          <strong>{editions[active].title}</strong>
        </div>
        <div className="carousel-buttons">
          <button
            aria-label="Show previous edition"
            onClick={showPrevious}
            title="Previous edition"
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={22} />
          </button>
          <span aria-hidden="true">
            {active + 1} / {editions.length}
          </span>
          <button
            aria-label="Show next edition"
            onClick={showNext}
            title="Next edition"
            type="button"
          >
            <ChevronRight aria-hidden="true" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
