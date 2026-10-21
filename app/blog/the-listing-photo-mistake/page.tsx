import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/blogDetail";
import JsonLd from "@/components/JsonLd";
import { STUDIO_ID, breadcrumbs } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import "./page.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../../accent.css";

export const metadata: Metadata = {
  title: "The Listing Photo Mistake — The EM Creative Studio",
  description: "Buyers decide whether to click into a listing in under three seconds. We reviewed forty top-performing listings to find the one framing choice separating the scrolls-past from the saves.",
  alternates: { canonical: "/blog/the-listing-photo-mistake" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: "The listing photo mistake that’s costing you showings",
              description: metadata.description,
              image: `${SITE_URL}/images/stock/living-room.webp`,
              datePublished: "2026-08-24",
              author: { "@type": "Person", name: "Maya Chen" },
              publisher: { "@id": STUDIO_ID },
              mainEntityOfPage: `${SITE_URL}/blog/the-listing-photo-mistake`,
            },
            breadcrumbs([["Journal", "/blog"], ["The Listing Photo Mistake", "/blog/the-listing-photo-mistake"]]),
          ],
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/newsletter.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/blogDetail.js" strategy="afterInteractive" />
    </>
  );
}
