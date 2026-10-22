import { FOOTER_HTML } from "../footer";
import { PAGE_GROUPS } from "@/lib/pages";

/* Body markup for /site-map: every public page from lib/pages.ts, grouped.
 * Uses the /services hero (app/services/page.css) and the .smap grid in
 * app/detail.css. */

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ARW = `<svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>`;

export const HTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="arw" viewBox="0 0 17 10">
    <path d="M0 5h15M11 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" fill="none"/>
  </symbol>
  <symbol id="crown" viewBox="0 0 120 74">
    <path d="M8 68 C4 48 6 22 10 8 L24 37 L38 13 L49 33 L60 5 L71 33 L82 13 L96 37 L110 8 C114 22 116 48 112 68"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 53 C36 45 66 44 88 50 C96 52 97 58 90 60 C74 66 42 66 25 61 C19 59 16 56 20 53"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="/"><img src="/images/logo-em.svg" alt="The EM Creative Studio" width="2000" height="2000"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/packages">Packages</a>
        <a href="/work">Work</a>
        <a href="/blog">Blog</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div class="nav-collapse">
      <a class="btn btn--dark" href="/contact">Start a project ${ARW}</a>
    </div>
  </div>
</header>

<!-- ============================== HERO ========================= -->
<section class="hero" id="top" style="min-height:52vh;">
  <div class="hero__ground"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">The EM Creative Studio &middot; Site Map</span>
    <h1 class="hero__hl" data-words>Every page,<br><em class="tint">in one place.</em></h1>
  </div>
</section>

<!-- ============================== MAP ========================= -->
<section class="sec">
  <div class="wrap smap">
    ${PAGE_GROUPS.map(
      (g) => `<div class="smap__group" data-rise>
      <h2 class="smap__ttl">${esc(g.title)}</h2>
      <ul>
        ${g.pages.map((p) => `<li><a href="${p.path}">${esc(p.name)}</a></li>`).join("\n        ")}
      </ul>
    </div>`,
    ).join("\n    ")}
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
