import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/* Everything open to crawlers. Whether a page may be indexed is the root
   layout's robots metadata, not this file: blocking a URL here would stop
   Google from ever reading that page's noindex. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
