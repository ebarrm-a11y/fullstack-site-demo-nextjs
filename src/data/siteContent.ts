export const siteContent = {
  siteName: "NorthLens Studio",
  tagline: "Cinematic photography for weddings, brands, artists & modern portraits.",
  primaryCity: "Toronto, Canada",
  serviceAreas: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  socials: {
    instagram: "https://instagram.com/",
    email: "hello@northlens.ca",
    phone: "+1 (000) 000-0000",
  },
  seo: {
    title: "NorthLens Studio — Photography in Canada",
    description:
      "Premium photography for weddings, corporate, models, artists, events and branding across Canada. Mobile-first, fast, and conversion-focused.",
    ogImage: "https://picsum.photos/seed/og/1600/900",
    siteUrl: "https://example.com"
  },
  services: [
    {
      id: "weddings",
      title: "Weddings",
      short: "Story-driven coverage, elegant edits, zero stress.",
      deliverables: ["Consultation + shot plan", "Full-day coverage options", "Online gallery", "Highlight set within 7–10 days"],
      idealFor: ["Modern couples", "City weddings", "Destination events"],
      priceRange: "CAD $2,200–$5,500",
    },
    {
      id: "corporate",
      title: "Corporate / Business",
      short: "Headshots, teams, offices, events — consistent and fast.",
      deliverables: ["On-site setup", "Retouching standards", "Brand-safe delivery", "Usage guidance"],
      idealFor: ["Teams", "Founders", "Events", "LinkedIn profiles"],
      priceRange: "CAD $350–$2,500",
    },
    {
      id: "portraits",
      title: "Portraits / Models",
      short: "Editorial portraits with clean direction and premium lighting.",
      deliverables: ["Moodboard", "Direction & posing", "Retouched selects", "Print-ready exports"],
      idealFor: ["Actors", "Models", "Creators"],
      priceRange: "CAD $250–$900",
    },
    {
      id: "artists",
      title: "Artists / Press Kits",
      short: "Press-ready visuals for releases, media, and posters.",
      deliverables: ["Concept + styling guidance", "Cinematic edits", "Multiple crops for socials", "Fast turnarounds"],
      idealFor: ["Musicians", "DJs", "Bands", "Visual artists"],
      priceRange: "CAD $300–$1,200",
    },
    {
      id: "product",
      title: "Product / Branding",
      short: "Clean product sets and lifestyle shots that sell.",
      deliverables: ["Shot list", "Consistent lighting", "Color-accurate exports", "Batch delivery"],
      idealFor: ["E-commerce", "Local brands", "Launches"],
      priceRange: "CAD $400–$3,000",
    },
    {
      id: "events",
      title: "Events",
      short: "Fast delivery, candid moments, brand-safe coverage.",
      deliverables: ["Pre-brief", "Coverage block options", "48–72h preview set", "Full gallery delivery"],
      idealFor: ["Conferences", "Brand activations", "Private events"],
      priceRange: "CAD $450–$2,800",
    },
  ],
  pricingPackages: [
    { name: "Portrait Essentials", includes: ["60–90 min session", "10 retouched selects", "1 location"], priceRange: "CAD $250–$450" },
    { name: "Corporate Half-Day", includes: ["Up to 4 hours", "Team + environment shots", "Retouching standard"], priceRange: "CAD $900–$1,600" },
    { name: "Wedding Signature", includes: ["8–10 hours", "Online gallery", "Highlight set"], priceRange: "CAD $3,200–$5,500" },
  ],
  testimonials: [
    { name: "Alicia M.", city: "Toronto", text: "Clean direction, fast delivery, and the photos look expensive. Exactly what we needed." },
    { name: "Mark R.", city: "Vancouver", text: "The corporate set was consistent and brand-safe. Great communication end to end." },
    { name: "Sofia & Daniel", city: "Montreal", text: "Wedding coverage felt effortless. The gallery captured everything without being intrusive." },
  ],
  faqs: [
    { q: "Do you travel across Canada?", a: "Yes. Travel is quoted transparently based on dates and coverage needs." },
    { q: "How fast is delivery?", a: "Previews in 48–72h for events/corporate. Full galleries typically 1–3 weeks depending on scope." },
    { q: "Do you offer video?", a: "Photography-first. For video, I can coordinate with trusted partners if needed." },
    { q: "Can you match our brand style?", a: "Yes — we define a reference set (moodboard) and keep edits consistent." },
    { q: "What’s included in retouching?", a: "Color, contrast, skin cleanup, and professional finishing. Heavy compositing available as add-on." },
    { q: "Do you deliver files with naming conventions?", a: "Yes. Galleries and exports follow consistent naming and resolution standards for teams." }
  ],
  portfolioItems: Array.from({ length: 24 }).map((_, i) => {
    const cats = ["Weddings", "Corporate", "Portraits", "Artists", "Events", "Product"] as const;
    const category = cats[i % cats.length];
    return {
      id: `p${i + 1}`,
      category,
      title: `${category} Set ${i + 1}`,
      location: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"][i % 5],
      imageUrl: `https://picsum.photos/seed/portfolio${i + 1}/1600/2000`,
      alt: `${category} photography example ${i + 1}`,
    };
  }),
} as const;

export type SiteContent = typeof siteContent;
