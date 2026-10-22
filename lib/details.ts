/* Content for the service and industry detail pages.
 *
 * Every page here is rendered by components/pages/detail.ts through the same
 * layout as /services/social-media-management, but each one carries its own
 * copy end to end (headline, intro, deliverables, process, questions), so no
 * two pages read as duplicates to a search engine. Social Media Management
 * and SEO keep their own hand-built pages; they appear here only as names in
 * SERVICE_LINKS so the cross-links can point at them. */

export type Icon =
  | "cal" | "pen" | "hash" | "chat" | "crop" | "report" | "search" | "web" | "pin" | "mail"
  | "camera" | "target" | "layers" | "star" | "print" | "users" | "phone" | "shield" | "spark" | "play";

export type Detail = {
  kind: "service" | "industry";
  slug: string;
  /** Short name used in links, the footer and schema. */
  name: string;
  /** schema.org serviceType, or the audience for an industry page. */
  schemaType: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: [string, string];
  lede: [string, string];
  bubs: [string, string, string, string];
  img: string;
  imgAlt: string;
  intro: { eyebrow: string; h2: [string, string]; paras: string[] };
  incl: { eyebrow: string; h2: [string, string]; lede: string; cards: { ico: Icon; t: string; b: string }[] };
  steps: { h2: [string, string]; lede: string; items: { t: string; b: string }[] };
  xsell: { t: string; b: string };
  faqs: { q: string; a: string }[];
  /** Slugs (services or industries, whichever the page is not) to cross-link. */
  related: string[];
  cta: [string, string];
};

/* ============================== SERVICES ============================== */

export const SERVICES: Detail[] = [
  {
    kind: "service",
    slug: "branding-strategy",
    name: "Branding & Strategy",
    schemaType: "Brand strategy and identity design",
    title: "Branding & Brand Strategy Agency in Los Angeles | EM Studio",
    description:
      "Brand positioning, logo and identity systems, voice and growth strategy for agents, lenders, salons, studios and small businesses. A senior Los Angeles branding team.",
    eyebrow: "Los Angeles · Service 02",
    h1: ["A brand people", "remember by name."],
    lede: ["Positioning, identity and a plan to grow,", "built so every post, page and postcard after it looks like it came from the same place."],
    bubs: ["Positioning first", "Logo + identity", "Brand voice guide", "Quarterly strategy"],
    img: "/images/stock/branding.webp",
    imgAlt: "Designer working with colour swatches and a drawing tablet",
    intro: {
      eyebrow: "Why It Matters",
      h2: ["Most small brands look fine.", "Fine is forgettable."],
      paras: [
        "When a client hears your name from a friend, they search you before they call. What they find in those ten seconds decides whether the referral turns into a meeting. A logo on its own will not carry that. A clear position, a consistent look and a voice that sounds like you will.",
        "We start with where you sit in your market and who you want more of, then build the identity around it: logo, colour, type, photography direction and the words you use to describe yourself. You leave with a system your team can use without us in the room.",
      ],
    },
    incl: {
      eyebrow: "What's Included",
      h2: ["Everything a brand", "needs to hold together."],
      lede: "One strategist and one designer, from the first workshop to the final guidelines.",
      cards: [
        { ico: "target", t: "Positioning Workshop", b: "A working session on who you serve, who you do not, and the one thing you want to be known for." },
        { ico: "layers", t: "Logo & Identity System", b: "Primary and secondary marks, colour, type and spacing rules that work from a business card to a billboard." },
        { ico: "pen", t: "Brand Voice & Messaging", b: "Your tagline, bio, elevator pitch and a short list of words you use and words you never do." },
        { ico: "camera", t: "Photography Direction", b: "How your headshots, listings or product shots should look, so every image feels like part of the same brand." },
        { ico: "print", t: "Brand Guidelines", b: "A clear, shareable guide your assistant, printer or next hire can follow without guessing." },
        { ico: "report", t: "Growth Strategy", b: "A 12-month plan for which channels to use, in what order, and what success looks like each quarter." },
      ],
    },
    steps: {
      h2: ["From workshop", "to rollout."],
      lede: "A branding project with a fixed start and a fixed finish.",
      items: [
        { t: "Discovery", b: "A workshop, a look at your competitors and a review of everything you already have, so nothing good gets thrown out." },
        { t: "Direction", b: "One considered direction with the reasoning written down, not three logos to choose between." },
        { t: "Identity", b: "The full system built out: marks, colour, type, templates and voice, refined over two rounds." },
        { t: "Rollout", b: "Guidelines handed over, your profiles and templates updated, and a plan for the first quarter after launch." },
      ],
    },
    xsell: { t: "Branding is the base layer of every package.", b: "Signature and Bespoke clients start here, so the website, social and print that follow all share one identity." },
    faqs: [
      { q: "Do I need a rebrand or just a refresh?", a: "If people already recognise your look and it still fits who you serve, a refresh keeps that equity and fixes what is not working. If your business has moved on and the brand has not, a rebrand is usually the better spend. We will tell you which after the first workshop." },
      { q: "I work under a brokerage or franchise. Can I still have my own brand?", a: "Yes. We build personal brands that sit inside brokerage and franchise rules, and we check the guidelines you have to follow before any design work starts." },
      { q: "How long does a branding project take?", a: "Most identity projects take six to eight weeks from the first workshop to final files. A refresh can be quicker." },
      { q: "What files do I get at the end?", a: "Every logo in colour, black and white, for print and screen, plus the guidelines, editable templates and the source files. You own all of it." },
    ],
    related: ["real-estate-marketing", "hair-salon-marketing", "fitness-studio-marketing", "law-firm-marketing"],
    cta: ["Let's build a brand", "worth repeating."],
  },
  {
    kind: "service",
    slug: "website-design",
    name: "Website Design",
    schemaType: "Website design and development",
    title: "Website Design & Development in Los Angeles | EM Studio",
    description:
      "Custom websites for agents, lenders, law firms, salons, gyms and venues: fast, mobile-first, built for search and easy to edit. Designed and built by a senior Los Angeles team.",
    eyebrow: "Los Angeles · Service 03",
    h1: ["Websites that", "turn visits into calls."],
    lede: ["Designed around what your clients need to find,", "built to load fast on a phone, and set up so you can edit it yourself."],
    bubs: ["Mobile-first", "SEO-ready build", "Edit it yourself", "Lead tracking"],
    img: "/images/stock/web-design.webp",
    imgAlt: "Website layouts on a laptop and phone",
    intro: {
      eyebrow: "Why It Matters",
      h2: ["Your website is the", "first meeting."],
      paras: [
        "Most people who hear about you will look at your website before they ever pick up the phone. If it is slow, hard to read on a phone, or does not make the next step obvious, they move on to the next name on the list and you never hear about it.",
        "We design every page around one job: getting the right visitor to book, call or enquire. That means clear structure, fast pages, real copy instead of filler, and the technical groundwork that lets Google understand what you do and where you do it.",
      ],
    },
    incl: {
      eyebrow: "What's Included",
      h2: ["A site built", "to be found and used."],
      lede: "Strategy, design, copy and build, handled by the same team.",
      cards: [
        { ico: "layers", t: "Sitemap & Page Strategy", b: "Which pages you need, what each one is for, and the search terms each one should rank for." },
        { ico: "web", t: "Custom Design", b: "Designed for your brand and your clients, not a theme with your logo dropped in." },
        { ico: "phone", t: "Mobile-First Build", b: "Laid out for the phone first, because that is where most of your visitors arrive." },
        { ico: "search", t: "SEO Foundations", b: "Clean page structure, metadata, schema markup, image optimisation and a sitemap from day one." },
        { ico: "chat", t: "Lead Capture", b: "Booking, contact and enquiry forms that land in your inbox or CRM, with tracking on every one." },
        { ico: "pen", t: "Editable by You", b: "A simple editor for text, photos and listings, plus a short walkthrough so you are never stuck waiting on us." },
      ],
    },
    steps: {
      h2: ["From sitemap", "to launch day."],
      lede: "Four stages, each signed off before the next begins.",
      items: [
        { t: "Plan", b: "We map the pages, the search terms and the calls to action before anything is designed." },
        { t: "Design", b: "Key pages designed on desktop and phone, with real copy, and refined over two rounds." },
        { t: "Build", b: "The site is built, connected to your forms and analytics, and tested on real devices." },
        { t: "Launch", b: "We move the domain, submit the sitemap to Google, redirect old pages and check everything is tracking." },
      ],
    },
    xsell: { t: "A website ships inside Signature and Bespoke.", b: "It is built alongside your brand, SEO and content plan, so launch day is the start of the work, not the end." },
    faqs: [
      { q: "How long does a new website take?", a: "Most sites take six to ten weeks depending on the number of pages and how much copy we are writing. We give you a dated schedule at the start." },
      { q: "Can you redesign my current website instead of starting over?", a: "Yes. If the platform is sound we can redesign on top of it, and we always redirect your old page addresses so you keep the search rankings you already have." },
      { q: "Will I be able to update the site myself?", a: "Yes. You get an editor for the parts that change, a recorded walkthrough, and our help whenever you need something bigger." },
      { q: "Do you write the website copy?", a: "We can. Most clients have us write it, because copy written for search and for your clients at the same time is a big part of why the site works." },
    ],
    related: ["law-firm-marketing", "event-venue-marketing", "loan-officer-marketing", "yacht-marketing"],
    cta: ["Let's build a site", "that earns its keep."],
  },
  {
    kind: "service",
    slug: "content-creation",
    name: "Content Creation",
    schemaType: "Photo and video content production",
    title: "Content Creation: Reels, Photo & Video | EM Creative Studio",
    description:
      "Reels, short-form video, photography and branded graphics planned around your calendar. Content shoots for real estate, salons, gyms, venues and yacht brokers in Los Angeles.",
    eyebrow: "Los Angeles · Service 04",
    h1: ["Content that", "stops the scroll."],
    lede: ["Reels, stories, photography and branded graphics,", "planned together so a single shoot fills a month of posts."],
    bubs: ["Planned shoots", "Reels + stories", "Branded templates", "Monthly batches"],
    img: "/images/stock/camera.webp",
    imgAlt: "Camera and lenses ready for a content shoot",
    intro: {
      eyebrow: "Why It Matters",
      h2: ["Posting more is not the fix.", "Posting better is."],
      paras: [
        "Most businesses do not have a posting problem, they have a material problem. There are only so many ways to share the same three photos, so the feed goes quiet or fills up with stock images that could belong to anyone.",
        "We plan content the way a magazine does: a monthly theme, a shot list, then one well-run shoot that produces reels, stills, stories and graphics together. You get a month of material that looks like you, sounds like you and was made for the platforms it will live on.",
      ],
    },
    incl: {
      eyebrow: "What's Included",
      h2: ["A month of material", "from one good shoot."],
      lede: "Planning, production and editing in one place.",
      cards: [
        { ico: "cal", t: "Monthly Content Plan", b: "Themes, hooks and a shot list mapped to your calendar before anyone picks up a camera." },
        { ico: "play", t: "Reels & Short Video", b: "Vertical video shot and cut for Instagram, TikTok and YouTube Shorts, with captions burned in." },
        { ico: "camera", t: "Photography", b: "Portraits, spaces, products and behind-the-scenes stills that can be used across every channel." },
        { ico: "layers", t: "Branded Graphics", b: "Templates for announcements, tips, quotes and offers so your feed holds together." },
        { ico: "crop", t: "Platform-Ready Edits", b: "Every piece cropped, sized and exported for where it will be posted, not squeezed into place." },
        { ico: "pen", t: "Hooks & Scripts", b: "Opening lines and talking points written for you, so being on camera feels less like guessing." },
      ],
    },
    steps: {
      h2: ["From shot list", "to scheduled post."],
      lede: "The same rhythm every month.",
      items: [
        { t: "Plan", b: "We agree the month's themes and write the shot list and scripts around them." },
        { t: "Shoot", b: "One half-day or full-day shoot at your location, with direction so you never feel awkward on camera." },
        { t: "Edit", b: "Reels, stills and graphics edited in your brand style and sent over for a single round of approval." },
        { t: "Deliver", b: "Everything arrives organised by week, ready to schedule, or handed straight to our social team." },
      ],
    },
    xsell: { t: "Content Creation pairs with Social Media Management.", b: "We plan it, shoot it and post it, so the material and the calendar are always built for each other." },
    faqs: [
      { q: "Do you come to us for the shoot?", a: "Yes. We shoot on location in Los Angeles: your office, studio, salon, venue, listing or boat. Travel outside the area can be arranged." },
      { q: "I hate being on camera. Can you still make video for me?", a: "Yes. We write the lines, direct you through them and keep the takes short. Plenty of good content does not need your face at all, and we plan for that too." },
      { q: "How much content comes out of one shoot?", a: "That depends on the plan, but a well-planned half day usually covers a full month of posts across reels, stills and stories." },
      { q: "Who owns the photos and video?", a: "You do. You get the final files and can use them anywhere, including your website, ads and print." },
    ],
    related: ["hair-salon-marketing", "fitness-studio-marketing", "yacht-marketing", "event-venue-marketing"],
    cta: ["Let's plan", "your next shoot."],
  },
  {
    kind: "service",
    slug: "email-marketing",
    name: "Email Marketing",
    schemaType: "Email marketing and automation",
    title: "Email Marketing & Newsletters | EM Creative Studio",
    description:
      "Newsletters, drip campaigns, segmentation and automations that keep past clients and new leads warm. Email marketing for agents, lenders, salons, studios and venues.",
    eyebrow: "Los Angeles · Service 05",
    h1: ["Stay in the inbox,", "not in the spam folder."],
    lede: ["Newsletters, drip campaigns and automations", "that keep you top of mind with the people most likely to buy from you again."],
    bubs: ["Monthly newsletter", "Lead nurture drips", "List segmentation", "Open + click reports"],
    img: "/images/stock/email.webp",
    imgAlt: "Mail app icon with a new message badge",
    intro: {
      eyebrow: "Why It Matters",
      h2: ["Your list is the one audience", "you actually own."],
      paras: [
        "Social platforms change what they show people every few months. Your email list does not. The past clients, enquiries and referrals sitting in your inbox are the people most likely to hire you again or send someone your way, and most businesses only email them when they need something.",
        "We set up email that people are glad to open: a regular newsletter worth reading, automated sequences that follow up on every new lead, and lists split by who people are, so a first-time enquiry and a five-year client never get the same message.",
      ],
    },
    incl: {
      eyebrow: "What's Included",
      h2: ["Email that works", "while you are busy."],
      lede: "Strategy, writing, design and set-up, measured every month.",
      cards: [
        { ico: "mail", t: "Monthly Newsletter", b: "Written, designed and sent for you, with something useful in every issue, not just a sales pitch." },
        { ico: "spark", t: "Lead Nurture Sequences", b: "Automated follow-ups that start the moment someone enquires and keep going until they are ready." },
        { ico: "users", t: "List Segmentation", b: "Contacts sorted by stage, interest and history, so each group gets the message that fits them." },
        { ico: "cal", t: "Milestone Emails", b: "Anniversaries, renewals, birthdays and check-ins sent automatically on the right date." },
        { ico: "shield", t: "Deliverability Set-Up", b: "Domain authentication and list hygiene so your emails land in the inbox instead of spam." },
        { ico: "report", t: "Monthly Reporting", b: "Opens, clicks, replies and bookings in plain English, with what we are changing next." },
      ],
    },
    steps: {
      h2: ["From messy list", "to steady pipeline."],
      lede: "Set up once, improved every month.",
      items: [
        { t: "Clean Up", b: "We import, de-duplicate and tag your contacts and fix the technical settings that hurt delivery." },
        { t: "Map", b: "We map the journeys that matter: new enquiry, active client, past client, referral partner." },
        { t: "Build", b: "Templates, sequences and the first newsletter are written, designed and tested." },
        { t: "Send & Refine", b: "Campaigns go out on schedule, and each month's results shape the next month's emails." },
      ],
    },
    xsell: { t: "Email Marketing ships inside every package.", b: "It works best alongside your content and social, so the same story reaches people wherever they pay attention." },
    faqs: [
      { q: "Which email platform do you use?", a: "We work in the platform you already have, such as Mailchimp, Flodesk, Klaviyo or your CRM's built-in email. If you do not have one, we recommend one that suits your size." },
      { q: "How often should I email my list?", a: "For most of our clients, one good newsletter a month plus automated follow-ups is the right balance. We adjust based on how your list responds." },
      { q: "Can you write in my voice?", a: "Yes. We learn how you speak and write, and you approve every newsletter before it goes out." },
      { q: "Is it legal to email my past clients?", a: "Generally yes, if they gave you their details and every email includes a clear way to unsubscribe. We set up the opt-out and sender details correctly for you." },
    ],
    related: ["loan-officer-marketing", "real-estate-marketing", "hair-salon-marketing", "fitness-studio-marketing"],
    cta: ["Let's make your list", "worth opening."],
  },
  {
    kind: "service",
    slug: "print-digital-marketing",
    name: "Print & Digital Marketing",
    schemaType: "Print design and marketing collateral",
    title: "Print Design: Flyers, Brochures & Postcards | EM Studio",
    description:
      "Flyers, brochures, postcards, signage and digital collateral designed to match your brand. Print marketing for listings, venues, salons, gyms, law firms and yacht brokers.",
    eyebrow: "Los Angeles · Service 06",
    h1: ["Printed pieces", "people keep."],
    lede: ["Flyers, brochures, postcards and signage,", "designed to match your brand online and printed to a standard you are proud to hand over."],
    bubs: ["Print-ready files", "Mailers + postcards", "Signage", "Digital versions"],
    img: "/images/stock/print.webp",
    imgAlt: "Offset printing press producing printed materials",
    intro: {
      eyebrow: "Why It Matters",
      h2: ["Print still gets", "picked up and kept."],
      paras: [
        "A postcard on a kitchen counter, a brochure left after a tour or a menu of services at reception can stay in front of someone for weeks. That only works if it looks considered. A crowded flyer from a template site tells people the opposite of what you want them to think.",
        "We design every printed piece as part of your brand, write the copy so it gets to the point, and supply files your printer can use without questions. Each piece also comes as a digital version for email, social and your website.",
      ],
    },
    incl: {
      eyebrow: "What's Included",
      h2: ["Collateral that matches", "everything else you do."],
      lede: "Design, copy and print-ready files, with a digital twin for each piece.",
      cards: [
        { ico: "print", t: "Flyers & Brochures", b: "Listing sheets, service menus and brochures laid out to be read in seconds." },
        { ico: "mail", t: "Postcards & Mailers", b: "Direct mail for neighbourhoods, past clients or local businesses, with a clear reason to respond." },
        { ico: "layers", t: "Signage & Displays", b: "Yard signs, window graphics, banners, pull-ups and event displays that work from across the room." },
        { ico: "pen", t: "Stationery", b: "Business cards, letterhead, folders and thank-you cards in one consistent style." },
        { ico: "web", t: "Digital Collateral", b: "Email headers, presentation decks and PDF guides that match the printed pieces." },
        { ico: "shield", t: "Print-Ready Files", b: "Correct sizes, bleed and colour profiles, plus help briefing your printer if you need it." },
      ],
    },
    steps: {
      h2: ["From brief", "to printed piece."],
      lede: "Short turnarounds, no surprises at the printer.",
      items: [
        { t: "Brief", b: "We agree what the piece is for, who receives it and what you want them to do next." },
        { t: "Draft", b: "Copy and layout come back together, so you see the finished piece, not a placeholder." },
        { t: "Refine", b: "Two rounds of changes, then a final proof checked for spelling, sizes and details." },
        { t: "Deliver", b: "Print-ready files plus digital versions, or we send them straight to your printer." },
      ],
    },
    xsell: { t: "Print & Digital ships inside every package.", b: "Your printed pieces use the same brand, photography and messaging as your website and social." },
    faqs: [
      { q: "Do you handle the printing too?", a: "We can brief and coordinate with a trusted printer, or hand you files for the printer you already use. Either way the files are set up correctly." },
      { q: "How fast can you turn around a flyer?", a: "A single flyer or listing sheet is usually ready within a few business days once we have the photos and details." },
      { q: "Can you design a direct mail campaign for my area?", a: "Yes. We design the series, write the copy and can help you plan the mailing list and timing." },
      { q: "Will my printed pieces match my website and social?", a: "That is the point. Everything comes from the same brand system, so people recognise you wherever they see you." },
    ],
    related: ["real-estate-marketing", "event-venue-marketing", "yacht-marketing", "law-firm-marketing"],
    cta: ["Let's make something", "worth printing."],
  },
  {
    kind: "service",
    slug: "digital-advertising",
    name: "Digital Advertising",
    schemaType: "Paid social and search advertising",
    title: "Meta & Google Ads Management | EM Creative Studio",
    description:
      "Meta, Instagram and Google Ads planned, built and managed against real leads and bookings. Paid advertising for agents, lenders, law firms, gyms, salons and venues.",
    eyebrow: "Los Angeles · Service 07",
    h1: ["Ads that pay", "for themselves."],
    lede: ["Meta, Instagram and Google campaigns", "built around leads and bookings, with fresh creative so your ads do not wear out."],
    bubs: ["Meta + Google", "Lead tracking", "Fresh creative", "Monthly reporting"],
    img: "/images/stock/analytics.webp",
    imgAlt: "Laptop screen showing marketing analytics charts",
    intro: {
      eyebrow: "Why It Matters",
      h2: ["Boosting posts", "is not a strategy."],
      paras: [
        "Most small businesses try ads by boosting a post, see a few likes and decide ads do not work for them. The problem is usually the set-up, not the channel: no clear audience, no landing page, no tracking, and the same image running until people stop seeing it.",
        "We plan campaigns around what you actually want, whether that is enquiries, bookings, consultations or calls. Then we build the audiences, write and design the ads, connect the tracking and report what each dollar brought back.",
      ],
    },
    incl: {
      eyebrow: "What's Included",
      h2: ["Every piece a campaign", "needs to perform."],
      lede: "Strategy, creative, set-up and management under one team.",
      cards: [
        { ico: "target", t: "Campaign Strategy", b: "Goals, budget, audiences and offers agreed before a single ad goes live." },
        { ico: "users", t: "Meta & Instagram Ads", b: "Lead forms, retargeting and lookalike audiences for local service businesses." },
        { ico: "search", t: "Google Search Ads", b: "Ads that appear when people search for exactly what you do, where you do it." },
        { ico: "spark", t: "Creative Refresh", b: "New images, video and copy rotated in regularly so performance does not fade." },
        { ico: "web", t: "Landing Pages", b: "Focused pages built for the campaign, so clicks turn into enquiries instead of bounces." },
        { ico: "report", t: "Lead Tracking & Reporting", b: "Every form, call and booking tracked, with a monthly report on cost per lead." },
      ],
    },
    steps: {
      h2: ["From first test", "to steady leads."],
      lede: "Small tests first, then more budget behind what works.",
      items: [
        { t: "Set Up", b: "Tracking, pixels, audiences and landing pages put in place and tested." },
        { t: "Test", b: "Several audiences and creatives run side by side on a modest budget." },
        { t: "Scale", b: "Spend moves to the ads that bring leads, and the weak ones are switched off." },
        { t: "Refresh", b: "New creative and offers come in regularly, and the report shows what changed." },
      ],
    },
    xsell: { t: "Digital Advertising ships inside every package.", b: "Ads use the same brand, content and landing pages as the rest of your marketing, so nothing feels bolted on." },
    faqs: [
      { q: "How much should I spend on ads?", a: "It depends on your market and goals. We recommend a starting test budget during the strategy call and only suggest increasing it once the numbers justify it." },
      { q: "Is ad spend included in your fee?", a: "No. Ad spend is paid directly to Meta or Google from your own account, so you always see exactly what was spent." },
      { q: "Are there rules for advertising in my industry?", a: "Some industries, including housing, lending and legal services, have special ad categories and advertising rules. We set campaigns up to follow them." },
      { q: "How soon will I see leads?", a: "Most campaigns start producing enquiries in the first few weeks. The first month is about learning what works, and results usually improve from there." },
    ],
    related: ["loan-officer-marketing", "law-firm-marketing", "fitness-studio-marketing", "event-venue-marketing"],
    cta: ["Let's put your budget", "to work."],
  },
];

/* ============================== INDUSTRIES ============================== */

export const INDUSTRIES: Detail[] = [
  {
    kind: "industry",
    slug: "real-estate-marketing",
    name: "Real Estate",
    schemaType: "Real estate agents, teams and brokerages",
    title: "Real Estate Marketing for Agents & Teams | EM Studio",
    description:
      "Branding, listing content, social media, websites and SEO for real estate agents, teams and brokerages. A Los Angeles marketing studio built around real estate.",
    eyebrow: "Industries · Real Estate",
    h1: ["Real estate marketing", "that wins listings."],
    lede: ["Personal branding, listing content, social and search", "for agents, teams and brokerages who want to be the name people think of first."],
    bubs: ["Agents + teams", "Listing launches", "Local SEO", "Personal branding"],
    img: "/images/stock/industry-real-estate.webp",
    imgAlt: "Modern home exterior against a clear sky",
    intro: {
      eyebrow: "Where We Started",
      h2: ["Real estate is", "where we started."],
      paras: [
        "Real estate is the industry this studio grew up in, so we know the rhythm of the work: listing launches, open houses, just-sold posts, sphere nurturing and brokerage rules about what you can and cannot say.",
        "Sellers look you up before they invite you to a listing appointment, and buyers judge you by how you present a home. We build the personal brand, listing content, website and search presence that make you look like the obvious choice in your farm area.",
      ],
    },
    incl: {
      eyebrow: "What We Do For Agents",
      h2: ["Everything an agent needs", "to look like the leader."],
      lede: "Built for solo agents, teams and boutique brokerages.",
      cards: [
        { ico: "layers", t: "Personal Branding", b: "A look and voice that sets you apart within your brokerage, while staying inside its rules." },
        { ico: "camera", t: "Listing Launch Content", b: "Coming-soon, just-listed and open-house content for social, email and print, ready the day you list." },
        { ico: "web", t: "Agent & Team Websites", b: "IDX-ready sites with neighbourhood pages that help you rank for the areas you sell." },
        { ico: "pin", t: "Local SEO & Google Profile", b: "Neighbourhood keywords, reviews and a Google Business Profile that brings in sellers." },
        { ico: "mail", t: "Sphere & Past-Client Email", b: "Market updates and check-ins that keep you top of mind for referrals." },
        { ico: "print", t: "Farming Mailers", b: "Postcards and just-sold mailers for your farm area that look nothing like the agent next door's." },
      ],
    },
    steps: {
      h2: ["From brand", "to listing appointments."],
      lede: "How we work with agents and teams.",
      items: [
        { t: "Position", b: "We define your farm area, your ideal clients and what makes you different from the agents they will compare you with." },
        { t: "Build", b: "Brand, website and listing templates are built so every launch is quick and consistent." },
        { t: "Show Up", b: "Social, email and mailers keep you visible to your sphere and your farm every week." },
        { t: "Measure", b: "Monthly reports on enquiries, rankings and engagement, tied back to listings won." },
      ],
    },
    xsell: { t: "Our packages were built around real estate.", b: "Essentials, Signature and Bespoke each cover the channels agents and teams rely on most." },
    faqs: [
      { q: "Do you work with agents outside Los Angeles?", a: "Yes. We are based in Los Angeles and work with agents and teams across the United States. Local SEO is set up for whichever market you serve." },
      { q: "Can you work within my brokerage's brand rules?", a: "Yes. We review your brokerage guidelines first, so your personal brand sits alongside it correctly." },
      { q: "Do you build IDX websites?", a: "Yes. We build agent and team websites that connect to your IDX feed, with neighbourhood pages written for search." },
      { q: "Can you help with a single listing launch?", a: "Yes. Listing launch content is available on its own, and it is included in our monthly packages." },
    ],
    related: ["branding-strategy", "content-creation", "social-media-management", "seo"],
    cta: ["Let's win you", "more listings."],
  },
  {
    kind: "industry",
    slug: "loan-officer-marketing",
    name: "Loan Officers",
    schemaType: "Mortgage loan officers and lending teams",
    title: "Marketing for Loan Officers & Mortgage Brokers | EM Studio",
    description:
      "Personal branding, social content, email nurture and websites for loan officers and mortgage brokers, built to win referral partners and stay compliant. Los Angeles studio.",
    eyebrow: "Industries · Loan Officers",
    h1: ["Marketing for loan officers", "agents want to refer."],
    lede: ["Personal branding, education-led content and email nurture", "that keeps you front of mind with borrowers and referral partners."],
    bubs: ["Referral partners", "Borrower education", "Co-branded content", "Compliance-aware"],
    img: "/images/stock/industry-mortgage.webp",
    imgAlt: "House key in the front door of a home",
    intro: {
      eyebrow: "The Challenge",
      h2: ["Rates change weekly.", "Trust takes longer."],
      paras: [
        "Most of a loan officer's business comes from two places: past borrowers and the agents who refer to you. Both choose the lender they remember and trust, not always the one with the best rate this week.",
        "We help you be that lender. Clear, helpful content that explains the process, a personal brand that looks as professional as the agents you partner with, and steady email that keeps you in touch with everyone who has ever closed with you.",
      ],
    },
    incl: {
      eyebrow: "What We Do For Lenders",
      h2: ["Built for the way", "lending actually works."],
      lede: "For individual loan officers, branch teams and mortgage brokers.",
      cards: [
        { ico: "layers", t: "Personal Branding", b: "A professional identity that works with your company's branding and stands out on its own." },
        { ico: "users", t: "Agent Partner Marketing", b: "Co-branded flyers, open-house materials and social content you can share with the agents you work with." },
        { ico: "pen", t: "Borrower Education Content", b: "Short videos, posts and guides that answer the questions first-time buyers are too nervous to ask." },
        { ico: "mail", t: "Past-Client Email", b: "Anniversary emails, market updates and check-ins that bring repeat and referral business." },
        { ico: "web", t: "Loan Officer Websites", b: "Clear pages for each loan type, an application link and calculators that lead to a conversation." },
        { ico: "shield", t: "Compliance-Aware Copy", b: "Content written with lending advertising rules in mind and set up for your compliance team to review." },
      ],
    },
    steps: {
      h2: ["From first post", "to referral pipeline."],
      lede: "How we work with loan officers.",
      items: [
        { t: "Audit", b: "We review your current brand, partner list and content, and note any compliance requirements." },
        { t: "Brand", b: "Your personal brand and co-branded templates are built for you and your agent partners." },
        { t: "Educate", b: "A monthly calendar of borrower-friendly content and partner materials goes live." },
        { t: "Nurture", b: "Email keeps past clients and partners close, and we report on referrals each month." },
      ],
    },
    xsell: { t: "Every package works for lending teams.", b: "Email nurture and partner content are where most loan officers see the fastest return." },
    faqs: [
      { q: "Do you understand mortgage advertising rules?", a: "We write with lending advertising rules in mind, include the disclosures your company requires, and build in time for your compliance team to approve content before it is published." },
      { q: "Can you make co-branded materials with my agent partners?", a: "Yes. Co-branded flyers, open-house sign-in materials and social posts are among the most useful things we make for loan officers." },
      { q: "I work for a larger lender. Can I still have my own marketing?", a: "Usually yes, within your company's guidelines. We check what is allowed and build your personal brand to fit." },
      { q: "What kind of content works for loan officers?", a: "Plain-English education does best: how pre-approval works, what closing costs cover, what changes when rates move. It builds trust before anyone needs a loan." },
    ],
    related: ["email-marketing", "branding-strategy", "digital-advertising", "social-media-management"],
    cta: ["Let's grow your", "referral pipeline."],
  },
  {
    kind: "industry",
    slug: "law-firm-marketing",
    name: "Law Firms",
    schemaType: "Law firms and attorneys",
    title: "Law Firm Marketing & Websites for Attorneys | EM Studio",
    description:
      "Websites, local SEO, branding and content for law firms and solo attorneys. Clear, professional marketing that brings in the right cases. Los Angeles marketing studio.",
    eyebrow: "Industries · Law Firms",
    h1: ["Law firm marketing", "that earns trust first."],
    lede: ["Websites, search and branding for attorneys and firms,", "written clearly enough that a worried client calls you, not the next result."],
    bubs: ["Practice area pages", "Local SEO", "Google reviews", "Clear, calm copy"],
    img: "/images/stock/industry-law.webp",
    imgAlt: "Attorney signing documents at a desk",
    intro: {
      eyebrow: "The Challenge",
      h2: ["People call a lawyer", "on a bad day."],
      paras: [
        "Someone searching for an attorney is usually stressed, short on time and comparing three or four firms at once. They decide quickly, based on whether your website makes them feel understood and whether it is obvious how to reach you.",
        "We build law firm marketing around that moment: clear practice area pages, calm and plain-spoken copy, a strong local search presence and reviews that reassure. The result looks established and professional, without the stock photos of gavels and handshakes.",
      ],
    },
    incl: {
      eyebrow: "What We Do For Firms",
      h2: ["Marketing that sounds", "like a good counsel."],
      lede: "For solo attorneys, boutique practices and growing firms.",
      cards: [
        { ico: "web", t: "Law Firm Websites", b: "Fast, accessible sites with one clear page per practice area and an easy way to request a consultation." },
        { ico: "pin", t: "Local SEO", b: "Practice area and location keywords, plus a Google Business Profile set up to bring in calls." },
        { ico: "star", t: "Review Strategy", b: "A simple process for asking satisfied clients for reviews, and replying to every one." },
        { ico: "pen", t: "Practice Area Content", b: "Articles and FAQs that answer what clients search for, written in plain English." },
        { ico: "layers", t: "Firm Branding", b: "A logo, colour and voice that look established, without the clichés of legal marketing." },
        { ico: "shield", t: "Ethics-Aware Messaging", b: "Copy written with attorney advertising rules in mind, with the disclaimers your state requires." },
      ],
    },
    steps: {
      h2: ["From first search", "to booked consultation."],
      lede: "How we work with law firms.",
      items: [
        { t: "Research", b: "We study how clients search for your practice areas and which firms they compare you with." },
        { t: "Structure", b: "Your site is mapped so each practice area and location has its own page." },
        { t: "Publish", b: "Pages, articles and your Google profile go live, written for clients and for search." },
        { t: "Grow", b: "Rankings, calls and form enquiries are tracked and reported each month." },
      ],
    },
    xsell: { t: "Law firms usually start with a website and SEO.", b: "Signature and Bespoke cover the site, search and content plan together." },
    faqs: [
      { q: "Do you follow attorney advertising rules?", a: "We write with your state bar's advertising rules in mind, avoid guarantees about outcomes and include the disclaimers you need. Your firm approves everything before it goes live." },
      { q: "Should each practice area have its own page?", a: "Yes. A dedicated page for each practice area, and for each city you serve, is one of the most effective things a firm can do for search." },
      { q: "Can you help us get more Google reviews?", a: "Yes. We set up a simple, compliant process for requesting reviews and help you reply professionally to every one." },
      { q: "We are a small practice. Is this worth it for us?", a: "Often more so. A solo or boutique firm with a clear site and strong local search can compete with much larger firms in its own area." },
    ],
    related: ["website-design", "seo", "branding-strategy", "digital-advertising"],
    cta: ["Let's bring in", "the right cases."],
  },
  {
    kind: "industry",
    slug: "fitness-studio-marketing",
    name: "Fitness Studios",
    schemaType: "Gyms, fitness studios and personal trainers",
    title: "Fitness Marketing for Gyms & Studios | EM Creative Studio",
    description:
      "Social media, reels, branding, ads and email for gyms, boutique fitness studios and personal trainers. Marketing that fills classes and keeps members coming back.",
    eyebrow: "Industries · Fitness",
    h1: ["Fitness marketing", "that fills the class."],
    lede: ["Reels, social, ads and member email", "for gyms, boutique studios and trainers who want a full schedule and members who stay."],
    bubs: ["Class-filling ads", "Reels + coaching clips", "Member retention", "Intro offers"],
    img: "/images/stock/industry-fitness.webp",
    imgAlt: "Bright fitness studio with bikes and weights",
    intro: {
      eyebrow: "The Challenge",
      h2: ["Getting people in once is easy.", "Keeping them is the work."],
      paras: [
        "Fitness is a crowded, local market. A new member compares you with every studio within a short drive, usually on Instagram, and then decides whether to try an intro offer. After that, retention matters more than anything else.",
        "We market both sides: content and ads that show what a class with you actually feels like, and email and community content that keeps members motivated and talking about you. Your coaches become the face of the brand, because that is who people come back for.",
      ],
    },
    incl: {
      eyebrow: "What We Do For Fitness",
      h2: ["Built for studios,", "gyms and trainers."],
      lede: "From a single trainer to a multi-location studio.",
      cards: [
        { ico: "play", t: "Reels & Class Content", b: "Short, energetic video from real classes and coaches, shot to show the experience, not just the equipment." },
        { ico: "target", t: "Intro Offer Ads", b: "Meta and Google campaigns built around trial classes and first-month offers, tracked to sign-ups." },
        { ico: "users", t: "Community Content", b: "Member spotlights, challenges and milestones that make people feel part of something." },
        { ico: "mail", t: "Member Email", b: "Welcome sequences, re-engagement for lapsed members and schedule updates that keep attendance up." },
        { ico: "pin", t: "Local Search", b: "A Google profile and site set up to show up for gym, class and trainer searches nearby." },
        { ico: "layers", t: "Studio Branding", b: "A look that carries from the wall graphics to the merch to the feed." },
      ],
    },
    steps: {
      h2: ["From first class", "to loyal member."],
      lede: "How we work with fitness businesses.",
      items: [
        { t: "Learn", b: "We take a class, meet your coaches and look at where your members come from." },
        { t: "Shoot", b: "A content day captures classes, coaches and your space for a month of posts and ads." },
        { t: "Launch", b: "Intro offer ads and a posting calendar go live together." },
        { t: "Retain", b: "Member email and community content keep attendance up, and we report on both." },
      ],
    },
    xsell: { t: "Fitness clients usually pair Content and Social.", b: "Add Digital Advertising when you are ready to push an intro offer or a new location." },
    faqs: [
      { q: "Do you shoot content during real classes?", a: "Yes, with your members' permission. Real classes make the most convincing content, and we work around the session so it is not disrupted." },
      { q: "Can you help with a new studio opening?", a: "Yes. Pre-launch content, founding member offers and opening ads are a great time to bring us in." },
      { q: "I am a personal trainer, not a gym. Is this for me?", a: "Yes. Trainers often benefit most from a clear personal brand, a simple booking site and consistent video content." },
      { q: "Do you work with booking platforms like Mindbody?", a: "We link ads, email and your website to the booking platform you already use, so every sign-up can be tracked." },
    ],
    related: ["content-creation", "social-media-management", "digital-advertising", "email-marketing"],
    cta: ["Let's fill", "your schedule."],
  },
  {
    kind: "industry",
    slug: "hair-salon-marketing",
    name: "Hair Salons",
    schemaType: "Hair salons, stylists and beauty studios",
    title: "Hair Salon Marketing & Social Media | EM Creative Studio",
    description:
      "Instagram content, branding, local SEO and email for hair salons, stylists and beauty studios. Marketing that keeps the chair booked and clients rebooking. Los Angeles studio.",
    eyebrow: "Industries · Hair Salons",
    h1: ["Salon marketing", "that keeps chairs booked."],
    lede: ["Instagram, branding and rebooking email", "for salons and independent stylists whose work deserves to be seen."],
    bubs: ["Before + afters", "Stylist spotlights", "Rebooking emails", "Local search"],
    img: "/images/stock/industry-salon.webp",
    imgAlt: "Stylist blow-drying a client's hair in a salon",
    intro: {
      eyebrow: "The Challenge",
      h2: ["Your work is visual.", "Your marketing should be too."],
      paras: [
        "Most new salon clients find you on Instagram or Google Maps, scroll your work, read a few reviews and book. If your feed is irregular or the photos do not do the colour justice, they book with someone else whose work they could see clearly.",
        "We make your work look as good online as it does in the chair: properly lit before-and-afters, stylist spotlights, a consistent feed, strong local search and email that brings clients back on time for their next appointment.",
      ],
    },
    incl: {
      eyebrow: "What We Do For Salons",
      h2: ["Everything a salon needs", "to stay booked."],
      lede: "For salons, suites and independent stylists.",
      cards: [
        { ico: "camera", t: "Before & After Content", b: "Lighting and framing that show colour and cuts properly, shot in your salon." },
        { ico: "play", t: "Reels & Transformations", b: "Short transformation videos and styling tips made for Instagram and TikTok." },
        { ico: "users", t: "Stylist Spotlights", b: "Content that introduces each stylist, so clients book with a person they already feel they know." },
        { ico: "pin", t: "Google Maps & Reviews", b: "A Google Business Profile with fresh photos, services and a steady flow of reviews." },
        { ico: "mail", t: "Rebooking Email & SMS", b: "Timely reminders and seasonal offers that bring clients back before they drift." },
        { ico: "layers", t: "Salon Branding", b: "A look that carries from your sign and service menu to your feed and gift cards." },
      ],
    },
    steps: {
      h2: ["From new follower", "to regular client."],
      lede: "How we work with salons.",
      items: [
        { t: "Visit", b: "We spend time in the salon, meet your stylists and see what makes your work different." },
        { t: "Shoot", b: "A content day with real clients and transformations fills the month ahead." },
        { t: "Post", b: "A consistent feed, stories and Google updates go out on schedule." },
        { t: "Rebook", b: "Email and reminders bring clients back, and reporting shows bookings and reviews." },
      ],
    },
    xsell: { t: "Salons usually pair Content and Social.", b: "Add Email Marketing to bring clients back for their next appointment without chasing them." },
    faqs: [
      { q: "Do you photograph real clients?", a: "Yes, with their permission. Real transformations are the most convincing content a salon can post." },
      { q: "I rent a suite. Can you market just me?", a: "Yes. Independent stylists often need a personal brand, a booking link that works and a consistent feed more than anything else." },
      { q: "Can you help us get more Google reviews?", a: "Yes. We set up a simple way to ask happy clients for reviews and help you reply to every one." },
      { q: "Which booking systems do you work with?", a: "We link your website, social and email to the booking platform you already use, such as Vagaro, GlossGenius, Boulevard or Square." },
    ],
    related: ["content-creation", "social-media-management", "branding-strategy", "email-marketing"],
    cta: ["Let's keep", "your chairs full."],
  },
  {
    kind: "industry",
    slug: "yacht-marketing",
    name: "Boats & Yachts",
    schemaType: "Yacht brokers, charter companies and marine businesses",
    title: "Yacht & Boat Marketing for Brokers | EM Creative Studio",
    description:
      "Listing content, branding, websites, social and print for yacht brokers, charter companies and boat dealers. Luxury marine marketing from a Los Angeles creative studio.",
    eyebrow: "Industries · Boats & Yachts",
    h1: ["Yacht marketing", "with a luxury finish."],
    lede: ["Listing content, branding and campaigns", "for yacht brokers, charter companies and boat dealers selling a lifestyle, not just a vessel."],
    bubs: ["Listing launches", "Charter bookings", "Brochure design", "Luxury branding"],
    img: "/images/stock/industry-yacht.webp",
    imgAlt: "Bow of a superyacht moored in a marina at night",
    intro: {
      eyebrow: "The Challenge",
      h2: ["Buyers fall for the lifestyle", "before the spec sheet."],
      paras: [
        "Yacht buyers and charter guests make emotional decisions with large budgets. They want to picture themselves on deck long before they look at engine hours. Marketing that leads with a list of specifications and a dozen dockside photos rarely gets them there.",
        "We market boats the way luxury property is marketed: a launch plan for every listing, considered photography and video, polished brochures and a brand that feels at home next to the clients you serve. The same approach fills charter calendars and keeps past clients coming back.",
      ],
    },
    incl: {
      eyebrow: "What We Do For Marine",
      h2: ["Built for brokers,", "charters and dealers."],
      lede: "Sales listings, charter fleets and dealerships.",
      cards: [
        { ico: "camera", t: "Listing Photo & Video", b: "Shoot direction for exterior, interior and on-the-water footage that sells the experience." },
        { ico: "print", t: "Listing Brochures", b: "Printed and digital brochures that present each vessel like the luxury item it is." },
        { ico: "web", t: "Broker & Charter Websites", b: "Fleet and listing pages that are easy to search, with enquiry and booking built in." },
        { ico: "target", t: "Targeted Campaigns", b: "Ads aimed at qualified buyers and charter guests, with listing launches timed to boat shows." },
        { ico: "users", t: "Social & Community", b: "Content that shows life aboard, the destinations and the people behind the brokerage." },
        { ico: "mail", t: "Client Email", b: "New listings, price changes and charter availability sent to the people most likely to act." },
      ],
    },
    steps: {
      h2: ["From listing", "to signed contract."],
      lede: "How we work with marine businesses.",
      items: [
        { t: "Brief", b: "We learn the vessel or fleet, the likely buyer or guest, and the timing that matters, such as boat shows or the season." },
        { t: "Capture", b: "Photo and video are planned and directed to show the boat at its best." },
        { t: "Launch", b: "Brochure, listing page, email and social go live together, followed by targeted ads." },
        { t: "Follow Up", b: "Enquiries are tracked, and the campaign is adjusted until the boat sells or the calendar fills." },
      ],
    },
    xsell: { t: "Marine clients usually choose Signature or Bespoke.", b: "Both cover brand, content and campaigns together, so every listing launch looks the same high standard." },
    faqs: [
      { q: "Do you shoot on the water?", a: "We direct shoots at the marina and on the water, and work with marine photographers and drone operators when a listing calls for it." },
      { q: "Can you market a single listing?", a: "Yes. A listing launch package covers brochure, listing page, email and social for one vessel." },
      { q: "Do you work with charter companies?", a: "Yes. For charters we focus on booking pages, destination content and campaigns timed to the season." },
      { q: "Can you help us get ready for a boat show?", a: "Yes. Brochures, signage, digital displays and a pre-show email and social campaign are all things we can prepare." },
    ],
    related: ["content-creation", "print-digital-marketing", "website-design", "branding-strategy"],
    cta: ["Let's launch", "your next listing."],
  },
  {
    kind: "industry",
    slug: "event-venue-marketing",
    name: "Event Venues",
    schemaType: "Event venues, wedding venues and event spaces",
    title: "Event & Wedding Venue Marketing | EM Creative Studio",
    description:
      "Websites, social content, SEO, ads and print for event venues, wedding venues and private event spaces. Marketing that fills your calendar with the right bookings.",
    eyebrow: "Industries · Event Venues",
    h1: ["Venue marketing", "that fills the calendar."],
    lede: ["Websites, content and search for event and wedding venues,", "so couples and planners can picture their day in your space and book a tour."],
    bubs: ["Tour bookings", "Wedding + corporate", "Search visibility", "Real event content"],
    img: "/images/stock/industry-venue.webp",
    imgAlt: "Event venue with long tables set beneath string lights",
    intro: {
      eyebrow: "The Challenge",
      h2: ["People book the venue", "they can picture."],
      paras: [
        "Couples, planners and companies compare venues online long before they visit. They want to see the space set up for an event like theirs, understand capacity and pricing, and book a tour without a long back-and-forth. Empty-room photos and a contact form are not enough.",
        "We market your venue around real events: content from weddings, parties and corporate events, clear pages for each kind of event you host, search visibility for the terms people use, and campaigns that fill quiet dates and the off-season.",
      ],
    },
    incl: {
      eyebrow: "What We Do For Venues",
      h2: ["Everything a venue needs", "to book more dates."],
      lede: "For wedding venues, private event spaces and corporate venues.",
      cards: [
        { ico: "web", t: "Venue Websites", b: "Pages for weddings, private and corporate events, with capacity, galleries and tour booking." },
        { ico: "camera", t: "Real Event Content", b: "Photo and video from actual events, plus partnerships with the planners and photographers who work there." },
        { ico: "search", t: "Venue SEO", b: "Rank for searches like wedding venues near you, event space for hire and corporate venues." },
        { ico: "print", t: "Brochures & Pricing Guides", b: "Polished packages and pricing guides sent the moment someone enquires." },
        { ico: "target", t: "Off-Season Campaigns", b: "Ads and offers for weekday and quiet-month dates, aimed at the right planners and couples." },
        { ico: "users", t: "Planner & Vendor Network", b: "Content and materials for the planners and vendors who recommend you." },
      ],
    },
    steps: {
      h2: ["From first search", "to signed contract."],
      lede: "How we work with venues.",
      items: [
        { t: "Walk Through", b: "We tour the space, look at your calendar and find which events and dates need filling." },
        { t: "Capture", b: "Content from real events and styled shoots shows the space at its best." },
        { t: "Publish", b: "Event pages, galleries, brochures and search work go live together." },
        { t: "Fill Dates", b: "Campaigns target open dates, and we report on enquiries, tours and bookings." },
      ],
    },
    xsell: { t: "Venues usually start with a website and content.", b: "Add Digital Advertising to fill quiet months and weekday dates." },
    faqs: [
      { q: "Do you market wedding venues and corporate venues differently?", a: "Yes. Couples and corporate planners search, compare and decide differently, so each gets its own pages, content and campaigns." },
      { q: "Can you use photos from events held at our venue?", a: "Yes, with permission from the photographers and clients. We help you set up partnerships with the photographers who work at your venue regularly." },
      { q: "How do you help with quiet months?", a: "With targeted offers for weekday, off-season and last-minute dates, promoted through ads, email and your planner network." },
      { q: "Can you make our pricing guide and brochure?", a: "Yes. We design pricing guides and brochures that match your website and can be sent automatically when someone enquires." },
    ],
    related: ["website-design", "seo", "content-creation", "digital-advertising"],
    cta: ["Let's fill", "your calendar."],
  },
];

/** Every service, including the two with their own hand-built pages, in menu order. */
export const SERVICE_LINKS: { name: string; href: string }[] = [
  { name: "Social Media Management", href: "/services/social-media-management" },
  ...SERVICES.map((s) => ({ name: s.name, href: `/services/${s.slug}` })),
  { name: "SEO & Local Search", href: "/services/seo" },
];

export const INDUSTRY_LINKS = INDUSTRIES.map((i) => ({ name: i.name, href: `/industries/${i.slug}` }));

/** Name and URL for any slug a page cross-links to. */
export function linkFor(slug: string) {
  if (slug === "seo") return { name: "SEO & Local Search", href: "/services/seo" };
  if (slug === "social-media-management") return { name: "Social Media Management", href: "/services/social-media-management" };
  const d = [...SERVICES, ...INDUSTRIES].find((x) => x.slug === slug);
  if (!d) throw new Error(`Unknown detail slug: ${slug}`);
  return { name: d.name, href: `/${d.kind === "service" ? "services" : "industries"}/${d.slug}` };
}
