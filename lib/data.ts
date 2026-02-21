export type Service = {
  title: string;
  desc: string;
  bullets: string[];
};

export type Step = {
  title: string;
  desc: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const svg = (a: string, b: string, label: string) =>
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${a}"/>
          <stop offset="100%" stop-color="${b}"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="rgba(0,0,0,.22)"/>
        </filter>
      </defs>
      <rect width="1400" height="900" rx="42" ry="42" fill="url(#g)"/>
      <g filter="url(#shadow)">
        <rect x="90" y="110" width="1220" height="680" rx="38" ry="38" fill="rgba(255,255,255,.16)"/>
      </g>
      <circle cx="1120" cy="260" r="140" fill="rgba(255,255,255,.18)"/>
      <circle cx="300" cy="660" r="180" fill="rgba(255,255,255,.12)"/>
      <text x="110" y="220" font-family="Inter, Arial" font-size="44" fill="rgba(255,255,255,.92)" font-weight="700">${label}</text>
      <text x="110" y="275" font-family="Inter, Arial" font-size="22" fill="rgba(255,255,255,.88)">Premium real estate services</text>
      <g opacity=".95">
        <rect x="110" y="330" width="560" height="18" rx="9" fill="rgba(255,255,255,.78)"/>
        <rect x="110" y="370" width="480" height="18" rx="9" fill="rgba(255,255,255,.62)"/>
        <rect x="110" y="410" width="520" height="18" rx="9" fill="rgba(255,255,255,.52)"/>
      </g>
    </svg>`
  );

export const gallery = [
  { alt: "Luxury apartment", src: svg("#0b78e6", "#86d0ff", "Luxury Apartment") },
  { alt: "Family villa", src: svg("#0f427a", "#4bb7ff", "Family Villa") },
  { alt: "Commercial property", src: svg("#0b5fb8", "#d9f0ff", "Commercial") },
  { alt: "Investment analysis", src: svg("#0d4f93", "#b9e3ff", "Investment") },
];

export const services: Service[] = [
  {
    title: "Buy & Sell",
    desc: "Pricing strategy, negotiation, and closing support from start to finish.",
    bullets: ["Market valuation", "Listing & staging plan", "Offer screening + negotiation"],
  },
  {
    title: "Rentals",
    desc: "Find quality tenants fast and protect your property with smart screening.",
    bullets: ["Tenant sourcing", "Background checks", "Lease drafting support"],
  },
  {
    title: "Property Management",
    desc: "Hands-off ownership: maintenance, reporting, and tenant communication.",
    bullets: ["Monthly reporting", "Maintenance coordination", "Rent collection workflows"],
  },
  {
    title: "Investment Advisory",
    desc: "Make confident decisions using yield modeling and risk-aware scenarios.",
    bullets: ["ROI & yield projections", "Neighborhood analysis", "Exit strategy planning"],
  },
];

export const steps: Step[] = [
  { title: "Call & goals", desc: "We define your target (buy, sell, rent, invest) and timeline." },
  { title: "Plan & pricing", desc: "We build a clear plan with realistic pricing and next actions." },
  { title: "Execute", desc: "Listings, tours, screening, negotiation — handled with speed and care." },
  { title: "Close & support", desc: "Paperwork, handover, and post-close help whenever you need it." },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amina",
    role: "Home buyer",
    quote: "Clear communication and honest pricing. The process felt simple and safe.",
  },
  {
    name: "Yassine",
    role: "Landlord",
    quote: "Tenant screening was fast and professional. My unit rented in days.",
  },
  {
    name: "Sara",
    role: "Investor",
    quote: "The ROI model helped me compare deals quickly. Great guidance and detail.",
  },
];

export const faqs = [
  {
    q: "Do you work with buyers and sellers?",
    a: "Yes — we support buying, selling, renting, management, and investment advisory depending on your needs.",
  },
  {
    q: "How do you price a property?",
    a: "We combine comparable sales, demand signals, and on-site factors (condition, layout, access) to recommend a realistic price range.",
  },
  {
    q: "Can you manage my rental remotely?",
    a: "Yes — we can handle tenant communication, maintenance coordination, and reporting with a remote-first workflow.",
  },
  {
    q: "What areas do you cover?",
    a: "You can adapt this section to your city/regions. The template is ready for any market.",
  },
];
