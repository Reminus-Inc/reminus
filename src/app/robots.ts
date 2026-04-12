import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/cto-recruit",
          "/download",
          "/download-thanks",
          "/contact",
          "/facebook-form-thanks",
          "/b/",
          "/c/",
        ],
      },
    ],
    sitemap: "https://www.reminus.co.jp/sitemap.xml",
  };
}
