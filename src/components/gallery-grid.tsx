"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/site";

const categories = ["All", "Prints", "Photo Booths", "Concepts"] as const;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div aria-label="Filter gallery" className="gallery-filters" role="group">
        {categories.map((category) => (
          <button
            aria-pressed={active === category}
            className={active === category ? "active" : ""}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid" aria-live="polite">
        {visible.map((item) => (
          <figure className={`gallery-item ${item.orientation}`} key={item.src}>
            <div className="gallery-image-wrap">
              <Image
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                src={item.src}
              />
            </div>
            <figcaption>
              <div>
                <strong>{item.title}</strong>
                <span>{item.category}</span>
              </div>
              <small>{item.note}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
