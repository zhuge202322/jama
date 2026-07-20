import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumina Voyage",
    short_name: "Lumina Voyage",
    description:
      "Photo booth experiences for events in Singapore.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfcf8",
    theme_color: "#0f5249",
    icons: [
      {
        src: "/images/logo-square.jpg",
        sizes: "576x457",
        type: "image/jpeg",
      },
    ],
  };
}
