import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/services";
import JsonLd from "@/components/JsonLd";
import { SERVICE_LINKS } from "@/lib/details";
import { SITE_URL } from "@/lib/site";
import { breadcrumbs, STUDIO_ID } from "@/lib/schema";
import "./page.css";
import "../detail.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../accent.css";

export const metadata: Metadata = {
  title: "Services — The EM Creative Studio",
  description: "Branding, website design, social media, content, email, print, digital advertising and SEO under one senior team. A Los Angeles marketing studio for real estate and small businesses.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbs([["Services", "/services"]]),
            {
              "@type": "OfferCatalog",
              name: "Services",
              url: `${SITE_URL}/services`,
              itemListElement: SERVICE_LINKS.map((l) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: l.name, url: `${SITE_URL}${l.href}`, provider: { "@id": STUDIO_ID } },
              })),
            },
          ],
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/services.js" strategy="afterInteractive" />
    </>
  );
}
