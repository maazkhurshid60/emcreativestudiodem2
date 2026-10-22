import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { detailHTML } from "@/components/pages/detail";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/lib/details";
import { breadcrumbs, faqPage, service } from "@/lib/schema";
// Same layout as /services/social-media-management, so the same sheet.
import "../social-media-management/page.css";
import "../../detail.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../../accent.css";

/* /services/<slug> for each service in lib/details.ts. Social Media
   Management and SEO have their own folders, which take precedence. */
export const dynamicParams = false;
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = SERVICES.find((s) => s.slug === slug);
  if (!d) return {};
  return {
    title: d.title,
    description: d.description,
    alternates: { canonical: `/services/${d.slug}` },
    openGraph: { title: d.title, description: d.description, url: `/services/${d.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const d = SERVICES.find((s) => s.slug === slug);
  if (!d) notFound();
  const path = `/services/${d.slug}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            service({ name: d.name, serviceType: d.schemaType, description: d.description, path }),
            breadcrumbs([["Services", "/services"], [d.name, path]]),
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
