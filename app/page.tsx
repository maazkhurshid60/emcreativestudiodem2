import type { Metadata } from "next";
import SiteBody from "@/components/SiteBody";
import JsonLd from "@/components/JsonLd";
import { STUDIO, WEBSITE } from "@/lib/schema";
import "./globals.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "./mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "./accent.css";

// Deliberately here and not in the root layout: metadata set on a layout is
// inherited by every route that does not override it, so a canonical up there
// would quietly tell search engines that /about, /work and the rest are all
// duplicates of the home page.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [STUDIO, WEBSITE] }} />
      <SiteBody />
    </>
  );
}
