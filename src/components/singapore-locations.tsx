"use client";

import type { Map as LeafletMap, Marker } from "leaflet";
import { useEffect, useRef, useState } from "react";
import { SectionIntro } from "@/components/section-intro";

type Location = {
  name: string;
  coordinates: [number, number];
};

const locations: Location[] = [
  { name: "Changi Airport", coordinates: [1.3644, 103.9915] },
  { name: "Westgate Mall", coordinates: [1.3332, 103.7421] },
  { name: "CityLink Mall", coordinates: [1.2924, 103.8556] },
  { name: "Tiong Bahru Plaza", coordinates: [1.2864, 103.8272] },
  { name: "Haji Lane", coordinates: [1.3009, 103.8594] },
];

export function SingaporeLocations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  useEffect(() => {
    let disposed = false;

    async function createMap() {
      const L = await import("leaflet");

      if (disposed || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        center: [1.3521, 103.8198],
        keyboard: true,
        scrollWheelZoom: false,
        zoom: 11,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const markers = locations.map((location, index) => {
        const marker = L.marker(location.coordinates, {
          icon: L.divIcon({
            className: "location-map-marker",
            html: `<span>${String(index + 1).padStart(2, "0")}</span>`,
            iconAnchor: [20, 20],
            iconSize: [40, 40],
          }),
          keyboard: true,
          title: location.name,
        }).addTo(map);

        marker.bindTooltip(location.name, {
          className: "location-map-tooltip",
          direction: "top",
          offset: [0, -15],
        });
        marker.on("click", () => setActiveLocation(index));
        return marker;
      });

      map.fitBounds(
        L.latLngBounds(locations.map((location) => location.coordinates)),
        { maxZoom: 12, padding: [42, 42] },
      );

      mapRef.current = map;
      markersRef.current = markers;
    }

    void createMap();

    return () => {
      disposed = true;
      markersRef.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  function focusLocation(index: number) {
    const map = mapRef.current;
    const marker = markersRef.current[index];

    if (!map || !marker) return;

    setActiveLocation(index);
    map.flyTo(marker.getLatLng(), 14, { duration: 0.8 });
    marker.openTooltip();
  }

  return (
    <section className="section section-cream" id="locations">
      <div className="container">
        <div className="section-heading-row">
          <SectionIntro
            description="Discover Lumina Voyage photo booth experiences at familiar destinations across the island."
            eyebrow="Where to find us"
            title="Our locations in Singapore"
          />
        </div>
        <div className="location-map-layout">
          <div className="singapore-map-shell">
            <div
              aria-label="Interactive map of Singapore showing Lumina Voyage locations at Changi Airport, Westgate Mall, CityLink Mall, Tiong Bahru Plaza and Haji Lane"
              className="singapore-map"
              ref={containerRef}
            />
          </div>
          <ol className="location-list">
            {locations.map((location, index) => (
              <li className={activeLocation === index ? "active" : ""} key={location.name}>
                <button onClick={() => focusLocation(index)} type="button">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{location.name}</strong>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
