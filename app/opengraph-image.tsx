import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/* The card shown when any page is shared (WhatsApp, LinkedIn, Facebook, X,
   iMessage). Built once at build time; every route inherits it. Brand
   espresso and paper with the EM mark from app/icon.png. */
export const alt = "The EM Creative Studio — brand, web and SEO for real estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = `data:image/png;base64,${readFileSync(join(process.cwd(), "app/icon.png")).toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          gap: 64,
          background: "linear-gradient(135deg, #3B2912 0%, #5A4632 100%)",
          color: "#F6F4F1",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={260} height={260} alt="" style={{ borderRadius: 999 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 22, flex: 1 }}>
          <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#A1D7D6" }}>
            The EM Creative Studio
          </div>
          <div style={{ fontSize: 66, lineHeight: 1.08, fontWeight: 700 }}>Brands that earn their crown</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#D6C6B4" }}>
            Brand, web and SEO for real estate · Los Angeles
          </div>
        </div>
      </div>
    ),
    size,
  );
}
