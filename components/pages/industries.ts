import { FOOTER_HTML } from "../footer";
import { INDUSTRIES, SERVICE_LINKS } from "@/lib/details";

/* Body markup for /industries: the hub linking every industry page. Built on
 * the /services page's hero and alternating photo rows, so app/services/page.css
 * and public/scripts/pages/services.js drive it unchanged. */

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ARW = `<svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>`;
const CROWN = `<svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>`;

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
<section class="hero" id="top">
  <div class="hero__ground"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">Los Angeles &middot; Who We Work With</span>
    <h1 class="hero__hl" data-words>Marketing built<br><em class="tint">for your industry.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Real estate is where we started. It is not where we stopped.</strong> The same senior team now runs brand, web, content and search for lenders, law firms, gyms, salons, venues and yacht brokers.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">${INDUSTRIES.length} industries</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">1 senior team</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">Local + national</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Weekly reporting</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="/contact#book">Book a 30-minute call ${ARW}</a>
    <a class="btn btn--ghost" href="#list">See every industry</a>
  </div>
</section>

<!-- ============================== INDUSTRY LIST ========================= -->
<section class="sec" id="list">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>${CROWN} Industries We Serve</span>
        <h2 class="h2" data-rise>Different markets, <span class="tint">same standard.</span></h2>
      </div>
      <p class="lede" data-rise>
        Each industry buys differently, so each gets its own plan. The craft behind it, and the team, stay the same.
      </p>
    </div>

    <div class="svc-rows">
      ${INDUSTRIES.map(
        (d, i) => `<article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="${d.img}" alt="${esc(d.imgAlt)}" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">${String(i + 1).padStart(2, "0")} / ${esc(d.name)}</span>
          <h3 class="svc-row__ttl"><a href="/industries/${d.slug}">${esc(d.name)} Marketing</a></h3>
          <p class="svc-row__body">${esc(d.lede[0])} ${esc(d.lede[1])}</p>
          <ul class="svc-row__tags">${d.incl.cards
            .slice(0, 3)
            .map((c) => `<li>${esc(c.t)}</li>`)
            .join("")}</ul>
          <a class="svc-row__link" href="/industries/${d.slug}">Marketing for ${esc(d.name.toLowerCase())} ${ARW}</a>
        </div>
      </article>`,
      ).join("\n\n      ")}
    </div>
  </div>
</section>

<!-- ============================== SERVICES ========================= -->
<section class="sec sec--linen dt-rel">
  <div class="wrap">
    <div class="dt-rel__inner" data-rise>
      <div>
        <span class="eyebrow">${CROWN} Every Industry Gets</span>
        <h2 class="dt-rel__ttl">The full studio, <span class="tint">one team.</span></h2>
      </div>
      <ul class="dt-rel__list">
        ${SERVICE_LINKS.map((l) => `<li><a href="${l.href}">${esc(l.name)} ${ARW}</a></li>`).join("\n        ")}
      </ul>
    </div>
  </div>
</section>

<!-- ============================== CTA ========================= -->
<section class="sec cta-end" id="cta">
  <div class="wrap">
    <div class="row">
      <div>
        <span class="eyebrow" data-rise>${CROWN} Ready When You Are</span>
        <h2 class="h2" data-rise>Don&rsquo;t see your industry? <span class="tint">Ask anyway.</span></h2>
      </div>
      <div data-rise>
        <a class="btn btn--dark" href="/contact#book">Book a 30-minute call ${ARW}</a>
      </div>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
