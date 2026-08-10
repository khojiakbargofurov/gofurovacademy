import type { MetadataRoute } from "next";

const baseUrl = "https://gofurovacademy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/maxfiylik`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
