import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/industries";
import JsonLd from "@/components/JsonLd";
import { INDUSTRIES } from "@/lib/details";
import { SITE_URL } from "@/lib/site";
import { breadcrumbs } from "@/lib/schema";
// Same hero and photo rows as /services, so the same sheet.
import "../services/page.css";
import "../detail.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../accent.css";

export const metadata: Metadata = {
  title: "Industries We Serve — The EM Creative Studio",
  description:
    "Marketing for real estate agents, loan officers, law firms, fitness studios, hair salons, yacht brokers and event venues. Brand, web, content and SEO from one Los Angeles team.",
  alternates: { canonical: "/industries" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbs([["Industries", "/industries"]]),
            {
              "@type": "ItemList",
              name: "Industries we serve",
              itemListElement: INDUSTRIES.map((d, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `${d.name} Marketing`,
                url: `${SITE_URL}/industries/${d.slug}`,
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
