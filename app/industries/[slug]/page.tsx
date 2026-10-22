import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { detailHTML } from "@/components/pages/detail";
import JsonLd from "@/components/JsonLd";
import { INDUSTRIES } from "@/lib/details";
import { breadcrumbs, faqPage, service } from "@/lib/schema";
// Same layout as the service detail pages, so the same sheet.
import "../../services/social-media-management/page.css";
import "../../detail.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../../accent.css";

/* /industries/<slug> for each industry in lib/details.ts. */
export const dynamicParams = false;
export function generateStaticParams() {
  return INDUSTRIES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = INDUSTRIES.find((s) => s.slug === slug);
  if (!d) return {};
  return {
    title: d.title,
    description: d.description,
    alternates: { canonical: `/industries/${d.slug}` },
    openGraph: { title: d.title, description: d.description, url: `/industries/${d.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const d = INDUSTRIES.find((s) => s.slug === slug);
  if (!d) notFound();
  const path = `/industries/${d.slug}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            service({
              name: `${d.name} Marketing`,
              serviceType: "Marketing services",
              description: d.description,
              path,
              audience: d.schemaType,
            }),
            breadcrumbs([["Industries", "/industries"], [d.name, path]]),
            faqPage(d.faqs),
          ],
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: detailHTML(d) }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/serviceDetail.js" strategy="afterInteractive" />
    </>
  );
}
