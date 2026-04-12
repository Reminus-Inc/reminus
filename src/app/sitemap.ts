import type { MetadataRoute } from "next";
import { articles } from "./blog/_articles";

const BASE_URL = "https://www.reminus.co.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/blog/`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${BASE_URL}/privacy-policy/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}/`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
