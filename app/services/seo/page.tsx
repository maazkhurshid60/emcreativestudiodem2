import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbs, service } from "@/lib/schema";
import "./page.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../../accent.css";

export const metadata: Metadata = {
  title: "SEO Plans — The EM Creative Studio",
  description:
    "Monthly SEO plans across six tiers and two tracks - one for real estate agents, teams and brokerages, one for every other business. Keyword research, Google Business Profile, technical SEO and content, reported monthly.",
  alternates: { canonical: "/services/seo" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            service({ name: "SEO & Local Search", serviceType: "Search engine optimization", description: String(metadata.description), path: "/services/seo" }),
            breadcrumbs([["Services", "/services"], ["SEO & Local Search", "/services/seo"]]),
          ],
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/seo.js" strategy="afterInteractive" />
    </>
  );
}
