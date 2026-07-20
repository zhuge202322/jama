"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { latestUpdates } from "@/lib/site";

export function UpdatesCarousel() {
  const [active, setActive] = useState(0);
  const update = latestUpdates[active];

  const move = (direction: number) => {
    setActive(
      (current) =>
        (current + direction + latestUpdates.length) % latestUpdates.length,
    );
  };

  return (
    <section aria-label="Latest events and news" className="updates-window">
      <div className="container updates-window-inner">
        <div className="updates-window-heading">
          <p className="eyebrow eyebrow-light">Latest from Lumina Voyage</p>
          <h2>Events & updates</h2>
        </div>
        <article aria-atomic="true" aria-live="polite" className="updates-slide">
          <p className="updates-label">{update.label}</p>
          <h3>{update.title}</h3>
          <p>{update.description}</p>
          <Link href={update.href}>Read more</Link>
        </article>
        <div className="updates-controls">
          <span aria-hidden="true">
            {String(active + 1).padStart(2, "0")} / {String(latestUpdates.length).padStart(2, "0")}
          </span>
          <button
            aria-label="Show previous update"
            onClick={() => move(-1)}
            title="Previous update"
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={22} />
          </button>
          <button
            aria-label="Show next update"
            onClick={() => move(1)}
            title="Next update"
            type="button"
          >
            <ChevronRight aria-hidden="true" size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
