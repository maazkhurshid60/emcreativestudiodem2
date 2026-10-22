import { INDUSTRIES, SERVICES } from "./details";

/* Every public page, grouped. The XML sitemap (app/sitemap.ts) and the
   human-readable one (/site-map) are both built from this list, so a page
   added here shows up in both. Service and industry pages come from
   lib/details.ts. The template viewer pages are left out on purpose: they
   are noindex. */

type Freq = "weekly" | "monthly" | "yearly";
export type SitePage = { name: string; path: string; priority: number; changeFrequency: Freq };

const page = (name: string, path: string, priority: number, changeFrequency: Freq): SitePage => ({
  name, path, priority, changeFrequency,
});

export const PAGE_GROUPS: { title: string; pages: SitePage[] }[] = [
  {
    title: "Studio",
    pages: [
      page("Home", "/", 1, "monthly"),
      page("About", "/about", 0.7, "monthly"),
      page("Packages", "/packages", 0.8, "monthly"),
      page("Website Templates", "/templates", 0.7, "monthly"),
      page("Testimonials", "/testimonials", 0.6, "monthly"),
      page("Contact", "/contact", 0.8, "yearly"),
    ],
  },
  {
    title: "Services",
    pages: [
      page("All Services", "/services", 0.9, "monthly"),
      page("Social Media Management", "/services/social-media-management", 0.8, "monthly"),
      ...SERVICES.map((s) => page(s.name, `/services/${s.slug}`, 0.8, "monthly")),
      page("SEO & Local Search", "/services/seo", 0.8, "monthly"),
    ],
  },
  {
    title: "Industries",
    pages: [
      page("All Industries", "/industries", 0.8, "monthly"),
      ...INDUSTRIES.map((i) => page(`${i.name} Marketing`, `/industries/${i.slug}`, 0.8, "monthly")),
    ],
  },
  {
    title: "Work & Journal",
    pages: [
      page("Work", "/work", 0.8, "monthly"),
      page("Westside Realty Group", "/work/westside-realty-group", 0.6, "yearly"),
      page("Blog", "/blog", 0.7, "weekly"),
      page("The Listing Photo Mistake", "/blog/the-listing-photo-mistake", 0.6, "yearly"),
    ],
  },
  {
    title: "Legal",
    pages: [
      page("Privacy Policy", "/privacy", 0.2, "yearly"),
      page("Terms of Service", "/terms", 0.2, "yearly"),
      page("Site Map", "/site-map", 0.2, "monthly"),
    ],
  },
];

export const ALL_PAGES = PAGE_GROUPS.flatMap((g) => g.pages);
