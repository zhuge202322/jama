import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/newspaper-photo-booth",
  "/events",
  "/gallery",
  "/how-it-works",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-11"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/newspaper-photo-booth" ? 0.9 : 0.7,
  }));
}
