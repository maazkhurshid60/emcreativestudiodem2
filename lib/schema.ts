import { SITE_NAME, SITE_URL } from "./site";

/* The studio as one schema.org entity. The home page publishes it in full;
   other pages point at it by @id instead of repeating it. Details match the
   footer and the contact page. */
export const STUDIO_ID = `${SITE_URL}/#studio`;

export const STUDIO = {
  "@type": "ProfessionalService",
  "@id": STUDIO_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "A boutique creative studio in Los Angeles building brand identity, websites, SEO, social media and email marketing for real estate professionals.",
  email: "info@theemcreativestudio.com",
  telephone: "+1-818-484-1031",
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
  areaServed: { "@type": "Country", name: "United States" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  knowsAbout: ["Brand identity", "Web design", "Search engine optimization", "Social media management", "Email marketing", "Real estate marketing"],
};

export const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": STUDIO_ID },
  inLanguage: "en-US",
};

/** Home › … › page, for the breadcrumb trail Google shows under a result. */
export function breadcrumbs(trail: [name: string, path: string][]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"] as [string, string], ...trail].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path === "/" ? "" : path}`,
    })),
  };
}
