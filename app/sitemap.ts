import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ALL_PAGES } from "@/lib/pages";

/* /sitemap.xml, from the page list in lib/pages.ts (shared with /site-map).
   lastModified is the build date: the site is static, so every deploy is
   when its pages last changed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ALL_PAGES.map((p) => ({
    url: `${SITE_URL}${p.path === "/" ? "" : p.path}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
