import { FOOTER_HTML } from "../footer";
import { linkFor, type Detail, type Icon } from "@/lib/details";

/* Body markup for every page in lib/details.ts: the service pages under
 * /services/<slug> and the industry pages under /industries/<slug>.
 *
 * The structure is /services/social-media-management's, so that page's sheet
 * and public/scripts/pages/serviceDetail.js drive it unchanged. Two sections
 * are added on top - the intro and the related links - styled in
 * app/detail.css. */

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const S = 'stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"';
const ICONS: Record<Icon, string> = {
  cal: `<rect x="3" y="5" width="18" height="16" rx="2" ${S}/><path d="M3 10h18M8 3v4M16 3v4" ${S}/>`,
  pen: `<path d="M4 20l1-4.2L15.6 5.2a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.2 19 4 20z" ${S}/>`,
  hash: `<path d="M9 3L7 21M17 3l-2 18M4 9h17M3 15h17" ${S}/>`,
  chat: `<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" ${S}/>`,
  crop: `<path d="M6 2v16a1 1 0 0 0 1 1h15M2 6h16a1 1 0 0 1 1 1v15" ${S}/>`,
  report: `<path d="M4 20V10M11 20V4M18 20v-7" ${S}/>`,
  search: `<circle cx="11" cy="11" r="7" ${S}/><path d="M20 20l-3.6-3.6" ${S}/>`,
  web: `<rect x="3" y="4" width="18" height="15" rx="2" ${S}/><path d="M3 9h18M7 6.5h.01M10 6.5h.01" ${S}/>`,
  pin: `<path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z" ${S}/><circle cx="12" cy="10" r="2.5" ${S}/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2" ${S}/><path d="M3 7l9 6 9-6" ${S}/>`,
  camera: `<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" ${S}/><circle cx="12" cy="13.5" r="3.5" ${S}/>`,
  target: `<circle cx="12" cy="12" r="8.5" ${S}/><circle cx="12" cy="12" r="4.5" ${S}/><circle cx="12" cy="12" r=".8" ${S}/>`,
  layers: `<path d="M12 3l9 5-9 5-9-5 9-5z" ${S}/><path d="M3 13l9 5 9-5" ${S}/>`,
  star: `<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" ${S}/>`,
  print: `<path d="M7 9V3h10v6M7 17H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3" ${S}/><rect x="7" y="14" width="10" height="7" ${S}/>`,
  users: `<circle cx="9" cy="8" r="3.5" ${S}/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" ${S}/>`,
  phone: `<rect x="7" y="2.5" width="10" height="19" rx="2" ${S}/><path d="M11 18.5h2" ${S}/>`,
  shield: `<path d="M12 3l8 3v6c0 4.6-3.4 8.4-8 9-4.6-.6-8-4.4-8-9V6l8-3z" ${S}/><path d="M8.8 12l2.2 2.2 4.2-4.4" ${S}/>`,
  spark: `<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" ${S}/>`,
  play: `<rect x="3" y="4" width="18" height="16" rx="3" ${S}/><path d="M10 9l5 3-5 3V9z" ${S}/>`,
};

const ARW = `<svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>`;
const CROWN = `<svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>`;
const BUB = [
  ["a", "l1", "-4deg", "18px"],
  ["c", "l2", "-3deg", "24px"],
  ["b", "r1", "4deg", "24px"],
  ["d", "r2", "5deg", "20px"],
];

export function detailHTML(d: Detail): string {
  const isService = d.kind === "service";
  const back = isService ? { href: "/services", label: "All Services" } : { href: "/industries", label: "All Industries" };
  const used = [...new Set(d.incl.cards.map((c) => c.ico))];

  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="arw" viewBox="0 0 17 10">
    <path d="M0 5h15M11 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" fill="none"/>
  </symbol>
  <symbol id="crown" viewBox="0 0 120 74">
    <path d="M8 68 C4 48 6 22 10 8 L24 37 L38 13 L49 33 L60 5 L71 33 L82 13 L96 37 L110 8 C114 22 116 48 112 68"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 53 C36 45 66 44 88 50 C96 52 97 58 90 60 C74 66 42 66 25 61 C19 59 16 56 20 53"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="ic-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></symbol>
  ${used.map((k) => `<symbol id="ic-${k}" viewBox="0 0 24 24">${ICONS[k]}</symbol>`).join("\n  ")}
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="/"><img src="/images/logo-em.svg" alt="The EM Creative Studio" width="2000" height="2000"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services"${isService ? ' aria-current="page"' : ""}>Services</a>
        <a href="/about">About</a>
        <a href="/packages">Packages</a>
        <a href="/work">Work</a>
        <a href="/blog">Blog</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div class="nav-collapse">
      <a class="btn btn--dark" href="/contact">
        Start a project ${ARW}
      </a>
    </div>
  </div>
</header>

<!-- ============================== HERO ========================= -->
<section class="hero" id="top">
  <div class="hero__ground"></div>
  <div class="hero__photo" aria-hidden="true">
    <img src="${d.img}" alt="" loading="eager" decoding="async">
  </div>
  <div class="hero__photo-veil" aria-hidden="true"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <a class="hero__crumb" href="${back.href}">
      <svg width="14" height="9" viewBox="0 0 17 10" style="transform:scaleX(-1)"><use href="#arw"/></svg>
      ${back.label}
    </a><br>
    <span class="eyebrow">${esc(d.eyebrow)}</span>
    <h1 class="hero__hl" data-words>${esc(d.h1[0])}<br><em class="tint">${esc(d.h1[1])}</em></h1>
  </div>

  <p class="hero__lede">
    <strong>${esc(d.lede[0])}</strong> ${esc(d.lede[1])}
  </p>

  <div class="hero__bubs">
    ${d.bubs
      .map(
        (b, i) =>
          `<span class="bub-float bub-float--${BUB[i][0]} bub-pos--${BUB[i][1]}"><span class="bub bub--${BUB[i][0]}" style="--br:${BUB[i][2]}; --tail:${BUB[i][3]};">${esc(b)}</span></span>`,
      )
      .join("\n    ")}
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="/contact#book">
      Book a 30-minute call ${ARW}
    </a>
    <a class="btn btn--ghost" href="#included">See what&rsquo;s included</a>
  </div>
</section>

<!-- ============================== INTRO ========================= -->
<section class="sec dt-intro">
  <div class="wrap dt-intro__grid">
    <div>
      <span class="eyebrow" data-rise>${CROWN} ${esc(d.intro.eyebrow)}</span>
      <h2 class="h2" data-rise>${esc(d.intro.h2[0])} <span class="tint">${esc(d.intro.h2[1])}</span></h2>
    </div>
    <div class="dt-intro__body" data-rise>
      ${d.intro.paras.map((p) => `<p>${esc(p)}</p>`).join("\n      ")}
    </div>
  </div>
</section>

<!-- ============================== WHAT'S INCLUDED ========================= -->
<section class="sec sec--linen" id="included">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>${CROWN} ${esc(d.incl.eyebrow)}</span>
        <h2 class="h2" data-rise>${esc(d.incl.h2[0])} <span class="tint">${esc(d.incl.h2[1])}</span></h2>
      </div>
      <p class="lede" data-rise>${esc(d.incl.lede)}</p>
    </div>

    <div class="incl-grid">
      ${d.incl.cards
        .map(
          (c) => `<article class="incl-card" data-rise>
        <span class="incl-card__ico"><svg viewBox="0 0 24 24"><use href="#ic-${c.ico}"/></svg></span>
        <h3 class="incl-card__ttl">${esc(c.t)}</h3>
        <p class="incl-card__body">${esc(c.b)}</p>
      </article>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>

<!-- ============================== HOW IT RUNS (timeline) ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>${CROWN} How It Runs</span>
        <h2 class="h2" data-rise>${esc(d.steps.h2[0])} <span class="tint">${esc(d.steps.h2[1])}</span></h2>
      </div>
      <p class="lede" data-rise>${esc(d.steps.lede)}</p>
    </div>

    <div class="timeline" data-rise>
      <div class="timeline__line" aria-hidden="true"></div>
      ${d.steps.items
        .map(
          (s, i) => `<div class="timeline__step">
        <div class="timeline__dot" style="--d:${i * 120}ms">0${i + 1}</div>
        <h3 class="timeline__ttl">${esc(s.t)}</h3>
        <p class="timeline__body">${esc(s.b)}</p>
      </div>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>

<!-- ============================== RELATED ========================= -->
<section class="sec sec--linen dt-rel">
  <div class="wrap">
    <div class="dt-rel__inner" data-rise>
      <div>
        <span class="eyebrow">${CROWN} ${isService ? "Who It's For" : "Services We Run"}</span>
        <h2 class="dt-rel__ttl">${
          isService ? `${esc(d.name)} for <span class="tint">your industry.</span>` : `What we run for <span class="tint">${esc(d.name.toLowerCase())}.</span>`
        }</h2>
      </div>
      <ul class="dt-rel__list">
        ${d.related
          .map((slug) => {
            const l = linkFor(slug);
            return `<li><a href="${l.href}">${esc(l.name)} ${ARW}</a></li>`;
          })
          .join("\n        ")}
      </ul>
    </div>
  </div>
</section>

<!-- ============================== PACKAGE CROSS-SELL ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="xsell" data-rise>
      <div>
        <h3 class="xsell__ttl">${esc(d.xsell.t)}</h3>
        <p class="xsell__body">${esc(d.xsell.b)}</p>
      </div>
      <a class="btn btn--paper" href="/packages">Compare packages ${ARW}</a>
    </div>
  </div>
</section>

<!-- ============================== FAQ ========================= -->
<section class="sec sec--linen">
  <div class="wrap" style="max-width:900px">
    <div style="text-align:center">
      <span class="eyebrow" data-rise>${CROWN} Good Questions</span>
      <h2 class="h2" data-rise style="margin-inline:auto">Before you <span class="tint">ask twice.</span></h2>
    </div>

    <div class="faq" data-rise>
      ${d.faqs
        .map(
          (f, i) => `<div class="faq-item" data-open="${i === 0}">
        <button class="faq-item__q" type="button">
          ${esc(f.q)}
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">${esc(f.a)}</p>
        </div></div>
      </div>`,
        )
        .join("\n\n      ")}
    </div>
  </div>
</section>

<!-- ============================== CTA ========================= -->
<section class="sec cta-end" id="cta">
  <div class="wrap">
    <div class="row">
      <div>
        <span class="eyebrow" data-rise>${CROWN} Ready When You Are</span>
        <h2 class="h2" data-rise>${esc(d.cta[0])} <span class="tint">${esc(d.cta[1])}</span></h2>
      </div>
      <div data-rise>
        <a class="btn btn--dark" href="/contact#book">
          Book a 30-minute call ${ARW}
        </a>
      </div>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
}
