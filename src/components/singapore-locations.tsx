import { SectionIntro } from "@/components/section-intro";

type Location = {
  name: string;
  position: { left: string; top: string };
};

const locations: Location[] = [
  {
    name: "Changi Airport",
    position: { left: "84%", top: "44%" },
  },
  { name: "Westgate Mall", position: { left: "22%", top: "40%" } },
  { name: "CityLink Mall", position: { left: "58%", top: "45%" } },
  { name: "Tiong Bahru Plaza", position: { left: "47%", top: "59%" } },
  {
    name: "Haji Lane",
    position: { left: "62%", top: "36%" },
  },
];

export function SingaporeLocations() {
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
          <div
            aria-label="Map of Singapore showing Lumina Voyage locations at Changi Airport, Westgate Mall, CityLink Mall, Tiong Bahru Plaza and Haji Lane"
            className="singapore-map"
            role="img"
          >
            <svg aria-hidden="true" viewBox="0 0 1000 480">
              <path
                d="M91 239 130 194 194 170 257 129 326 137 390 109 473 125 532 105 603 137 668 132 722 162 783 166 822 194 899 205 928 237 882 265 841 266 799 290 722 284 677 313 610 301 553 323 489 306 427 323 374 299 310 307 255 279 197 283 149 262Z"
              />
              <path d="m475 356 54-13 44 19-49 23Z" />
              <path d="m699 342 34-8 22 16-35 14Z" />
              <path d="m268 342 37-7 18 15-34 13Z" />
            </svg>
            {locations.map((location, index) => (
              <div
                className="location-marker"
                key={location.name}
                style={location.position}
              >
                <span className="location-pin" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
          <ol className="location-list">
            {locations.map((location, index) => (
              <li key={location.name}>
                <span>0{index + 1}</span>
                <strong>{location.name}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
