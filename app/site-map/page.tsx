import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/siteMap";
import JsonLd from "@/components/JsonLd";
import { breadcrumbs } from "@/lib/schema";
// Same hero as /services, so the same sheet.
import "../services/page.css";
import "../detail.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../accent.css";

/* The human-readable site map. The XML one for search engines is
   /sitemap.xml (app/sitemap.ts); both read lib/pages.ts. */
export const metadata: Metadata = {
  title: "Site Map — The EM Creative Studio",
  description: "Every page on The EM Creative Studio website: services, industries, packages, work, blog and contact.",
  alternates: { canonical: "/site-map" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbs([["Site Map", "/site-map"]]) }} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/services.js" strategy="afterInteractive" />
    </>
  );
}
