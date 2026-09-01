import type { MetadataRoute } from "next";

import { LOCALES, ROUTES, urlFor } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: urlFor(locale, route),
      lastModified,
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : 0.3,
      alternates: {
        languages: {
          fr: urlFor("fr", route),
          en: urlFor("en", route),
        },
      },
    })),
  );
}
