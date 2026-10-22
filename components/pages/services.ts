import { FOOTER_HTML } from "../footer";
import { INDUSTRY_LINKS } from "@/lib/details";

// Body markup for /services, lifted from em-creative-studio-services_8.html.
// Rendered as-is: the stylesheet in app/services/page.css and the behaviour in
// public/scripts/pages/services.js are both written against this exact structure.
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
        <a href="/services" aria-current="page">Services</a>
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
        Start a project <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
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
    <span class="eyebrow">Los Angeles &middot; What We Do</span>
    <h1 class="hero__hl" data-words>Eight disciplines,<br><em class="tint">one senior team.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Most agencies hand you a channel. We hand you the whole picture.</strong> Search, design, content, email and ads only work when they are saying the same thing, so one team runs all of it.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">8 disciplines</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">1 senior team</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">98% retention</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Weekly reporting</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="/contact#book">
      Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#list">See every discipline</a>
  </div>
</section>

<!-- ============================== SERVICES LIST ========================= -->
<section class="sec" id="list">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          The Full List
        </span>
        <h2 class="h2" data-rise>What&rsquo;s inside <span class="tint">every retainer.</span></h2>
      </div>
      <p class="lede" data-rise>
        Eight disciplines, run by the same senior group, coordinated so nothing you hire us for
        ever feels like it came from a different agency.
      </p>
    </div>

    <div class="svc-rows">
      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/social-media.webp" alt="Smartphone showing a folder of social media apps" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">01 / Social</span>
          <h3 class="svc-row__ttl"><a href="/services/social-media-management">Social Media Management</a></h3>
          <p class="svc-row__body">Content planning, posting, captions, hashtag strategy, and engagement that grows your following organically.</p>
          <ul class="svc-row__tags"><li>Content Calendar</li><li>Community Management</li><li>Hashtag Strategy</li></ul>
          <a class="svc-row__link" href="/services/social-media-management">More on Social Media <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/branding.webp" alt="Designer working with colour swatches and a drawing tablet" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">02 / Brand</span>
          <h3 class="svc-row__ttl"><a href="/services/branding-strategy">Branding &amp; Strategy</a></h3>
          <p class="svc-row__body">Personal brand positioning, logo and identity systems, brand voice and a growth strategy you can actually follow.</p>
          <ul class="svc-row__tags"><li>Brand Positioning</li><li>Logo &amp; Identity</li><li>Growth Strategy</li></ul>
          <a class="svc-row__link" href="/services/branding-strategy">More on Branding <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/web-design.webp" alt="Website layouts on a laptop and phone" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">03 / Web</span>
          <h3 class="svc-row__ttl"><a href="/services/website-design">Website Design</a></h3>
          <p class="svc-row__body">Custom, mobile-first websites built for search, set up to capture leads, and simple enough to edit yourself.</p>
          <ul class="svc-row__tags"><li>Custom Design</li><li>SEO-Ready Build</li><li>Lead Capture</li></ul>
          <a class="svc-row__link" href="/services/website-design">More on Websites <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/camera.webp" alt="Camera and lenses ready for a content shoot" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">04 / Content</span>
          <h3 class="svc-row__ttl"><a href="/services/content-creation">Content Creation</a></h3>
          <p class="svc-row__body">Reels, stories, branded graphics, listing content, and lifestyle visuals that stop the scroll.</p>
          <ul class="svc-row__tags"><li>Reels &amp; Stories</li><li>Branded Graphics</li><li>Listing Content</li></ul>
          <a class="svc-row__link" href="/services/content-creation">More on Content <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/email.webp" alt="Mail app icon with a new message badge" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">05 / Email</span>
          <h3 class="svc-row__ttl"><a href="/services/email-marketing">Email Marketing</a></h3>
          <p class="svc-row__body">Drip campaigns, newsletters, segmentation and automations that nurture leads into closed deals.</p>
          <ul class="svc-row__tags"><li>Drip Campaigns</li><li>Segmentation</li><li>Automation</li></ul>
          <a class="svc-row__link" href="/services/email-marketing">More on Email <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/print.webp" alt="Offset printing press producing printed materials" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">06 / Print</span>
          <h3 class="svc-row__ttl"><a href="/services/print-digital-marketing">Print &amp; Digital Marketing</a></h3>
          <p class="svc-row__body">Flyers, brochures, postcards and digital collateral that make your listings impossible to ignore.</p>
          <ul class="svc-row__tags"><li>Flyers &amp; Brochures</li><li>Postcards</li><li>Digital Collateral</li></ul>
          <a class="svc-row__link" href="/services/print-digital-marketing">More on Print <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/analytics.webp" alt="Laptop screen showing marketing analytics charts" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">07 / Ads</span>
          <h3 class="svc-row__ttl"><a href="/services/digital-advertising">Digital Advertising</a></h3>
          <p class="svc-row__body">Meta, Google and programmatic campaigns tracked against real ROI, with creative refreshed every fortnight.</p>
          <ul class="svc-row__tags"><li>Meta &amp; Google Ads</li><li>Programmatic</li><li>Creative Refresh</li></ul>
          <a class="svc-row__link" href="/services/digital-advertising">More on Ads <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="svc-row" data-rise>
        <div class="svc-row__panel">
          <img class="svc-row__img" src="/images/stock/code.webp" alt="Close-up of website source code on a screen" loading="lazy" decoding="async">
        </div>
        <div class="svc-row__content">
          <span class="svc-row__no">08 / Search</span>
          <h3 class="svc-row__ttl"><a href="/services/seo">SEO &amp; Local Search</a></h3>
          <p class="svc-row__body">Keyword research, on-page and technical fixes, Google Business Profile, citations and content &mdash; sold as its own monthly plan.</p>
          <ul class="svc-row__tags"><li>Local SEO</li><li>Technical SEO</li><li>Content &amp; Links</li></ul>
          <a class="svc-row__link" href="/services/seo">See the SEO plans <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>
    </div>

    <div style="text-align:center; margin-top:clamp(32px,4.4vh,48px)" data-rise>
      <p class="lede" style="margin:0 0 20px; max-width:none;">Every discipline above ships inside one of three fixed-scope packages.</p>
      <a href="/packages" class="btn btn--dark" style="display:inline-flex">See the packages <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
    </div>
  </div>
</section>

<!-- ============================== PROCESS (sticky stack) ========================= -->
<section class="sec sec--linen" id="process">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          How It Runs
        </span>
        <h2 class="h2" data-rise>One process, <span class="tint">every discipline.</span></h2>
      </div>
      <p class="lede" data-rise>Whichever service brought you here, the engagement follows the same spine.</p>
    </div>

    <div class="stack">
      <article class="step">
        <div class="step__no">01</div>
        <div>
          <h3 class="step__ttl">Listen, then audit.</h3>
          <p class="step__body">A 90-minute session with whoever actually owns the revenue. Then we pull the numbers: rankings, page speed, funnel drop-off, and what your three closest competitors are doing better than you.</p>
          <ul class="step__tags"><li>Discovery call</li><li>Technical audit</li><li>Competitor teardown</li></ul>
        </div>
      </article>
      <article class="step">
        <div class="step__no">02</div>
        <div>
          <h3 class="step__ttl">Draw the direction.</h3>
          <p class="step__body">One direction, presented properly, with the reasoning attached. You will see type, colour, motion and two key screens before a single line of production code exists.</p>
          <ul class="step__tags"><li>Art direction</li><li>Key screens</li><li>Copy platform</li></ul>
        </div>
      </article>
      <article class="step">
        <div class="step__no">03</div>
        <div>
          <h3 class="step__ttl">Build it properly.</h3>
          <p class="step__body">Accessible markup, real performance budgets, schema on every template, and a CMS your team can edit on a Tuesday afternoon without calling us.</p>
          <ul class="step__tags"><li>Design system</li><li>Build &amp; QA</li><li>Analytics</li></ul>
        </div>
      </article>
      <article class="step">
        <div class="step__no">04</div>
        <div>
          <h3 class="step__ttl">Then keep the pressure on.</h3>
          <p class="step__body">Launch is the start. Monthly content, technical SEO upkeep, paid creative and a plain-English report that tells you what moved and what we are doing about it.</p>
          <ul class="step__tags"><li>Monthly content</li><li>Search upkeep</li><li>Revenue report</li></ul>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ============================== INDUSTRIES ========================= -->
<section class="sec dt-rel" id="industries">
  <div class="wrap">
    <div class="dt-rel__inner" data-rise>
      <div>
        <span class="eyebrow"><svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg> Industries We Serve</span>
        <h2 class="dt-rel__ttl">Built for <span class="tint">your industry.</span></h2>
        <p class="dt-rel__sub">Real estate is where we started. Every discipline above now runs for these industries too, each with its own plan.</p>
      </div>
      <ul class="dt-rel__list">
        ${INDUSTRY_LINKS.map((l) => `<li><a href="${l.href}">${l.name.replace(/&/g, "&amp;")} <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a></li>`).join("\n        ")}
        <li><a class="dt-rel__all" href="/industries">All industries <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a></li>
      </ul>
    </div>
  </div>
</section>

<!-- ============================== CTA ========================= -->
<section class="sec cta-end" id="cta">
  <div class="wrap">
    <div class="row">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Ready When You Are
        </span>
        <h2 class="h2" data-rise>Pick a discipline, <span class="tint">or take all eight.</span></h2>
      </div>
      <div data-rise>
        <a class="btn btn--dark" href="/contact#book">
          Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
