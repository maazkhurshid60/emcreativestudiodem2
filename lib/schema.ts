import { SITE_NAME, SITE_URL } from "./site";
import { INDUSTRIES, SERVICE_LINKS } from "./details";

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
    "A boutique creative studio in Los Angeles building brand identity, websites, SEO, social media, content, email and advertising for real estate professionals, loan officers, law firms, fitness studios, hair salons, yacht brokers and event venues.",
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
  knowsAbout: [
    "Brand identity", "Web design", "Search engine optimization", "Social media management", "Content creation",
    "Email marketing", "Print design", "Digital advertising",
    ...INDUSTRIES.map((i) => `${i.name} marketing`),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICE_LINKS.map((l) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: l.name, url: `${SITE_URL}${l.href}` },
        })),
      },
      {
        "@type": "OfferCatalog",
        name: "Industries",
        itemListElement: INDUSTRIES.map((i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${i.name} Marketing`,
            url: `${SITE_URL}/industries/${i.slug}`,
            audience: { "@type": "BusinessAudience", audienceType: i.schemaType },
          },
        })),
      },
    ],
  },
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

/** One Service entity for a service or industry page, offered by the studio. */
export function service(o: { name: string; serviceType: string; description: string; path: string; audience?: string }) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${o.path}#service`,
    name: o.name,
    serviceType: o.serviceType,
    description: o.description,
    url: `${SITE_URL}${o.path}`,
    provider: { "@id": STUDIO_ID },
    areaServed: [
      { "@type": "City", name: "Los Angeles" },
      { "@type": "Country", name: "United States" },
    ],
    ...(o.audience ? { audience: { "@type": "BusinessAudience", audienceType: o.audience } } : {}),
  };
}

/** FAQPage for the questions shown on a page (they must match the visible copy). */
export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
