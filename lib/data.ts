export const NAV_LEFT = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT US", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
];

export const NAV_RIGHT = [
  { label: "PHILOSOPHY", href: "/philosophy" },
  { label: "TEAM", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

export const NAV_ALL = [...NAV_LEFT, ...NAV_RIGHT];

export type ServiceItem = {
  index: string;
  title: string;
  eyebrow: string;
  paragraphs: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    title: "BRAND STRATEGY",
    eyebrow: "From confusion\nto a clear position",
    paragraphs: [
      "We map the market, the audience and the competition before a single visual is made, so every decision after this point has a reason behind it.",
      "Positioning, tone of voice and messaging architecture are defined first — the foundation the rest of the brand system is built on.",
      "The result is a strategy that removes guesswork and gives every future asset a single, consistent direction to follow.",
    ],
  },
  {
    index: "02",
    title: "VISUAL IDENTITY",
    eyebrow: "From first idea\nto clear visual system",
    paragraphs: [
      "We create a visual system that gives the brand a clear form and makes it recognizable across every touchpoint, from digital platforms to printed materials.",
      "Define the logo, colors, typography and graphic language that shape the brand's visual presence and create a consistent image in the market.",
      "Build an identity that removes visual noise, strengthens recognition and helps the brand look confident, structured and memorable.",
    ],
  },
  {
    index: "03",
    title: "SOCIAL MEDIA MARKETING",
    eyebrow: "From posting\nto a real presence",
    paragraphs: [
      "We plan content systems, not single posts — visual templates, pillars and a publishing rhythm the brand can sustain long after launch.",
      "Every platform gets a tone and format shaped for how people actually browse it, without losing the identity's core structure.",
      "The result is a social presence that looks intentional, feels consistent and keeps the brand visible in a crowded feed.",
    ],
  },
  {
    index: "04",
    title: "DIGITAL CAMPAIGNS",
    eyebrow: "From idea\nto measurable reach",
    paragraphs: [
      "Campaigns are built on the same visual system as the brand, so paid and organic reach reinforce recognition instead of diluting it.",
      "We plan creative, targeting and rollout together, treating each campaign as a structured system rather than a one-off push.",
      "The result is communication that performs, tracks cleanly, and still looks unmistakably like the brand behind it.",
    ],
  },
];

export const STATS = [
  {
    value: "100%",
    title: "Tailored Direction",
    description:
      "Every solution is shaped around the brand, its market and the audience it needs to reach.",
    variant: "fluid" as const,
  },
  {
    value: "50+",
    title: "Projects Delivered",
    description:
      "Brand systems, visual identities and campaigns created for businesses that want clear growth.",
    variant: "light" as const,
  },
  {
    value: "97%",
    title: "Client Satisfaction",
    description:
      "Strong results, clear communication and consistent delivery keep clients confident in the work.",
    variant: "photo" as const,
  },
];

export const FAQS = [
  {
    q: "What does a typical project timeline look like?",
    a: "Most brand systems run 4–8 weeks from strategy to final delivery, depending on scope. Campaign work runs alongside on its own cadence once the identity is locked.",
  },
  {
    q: "Do you work with early-stage brands or only established ones?",
    a: "Both. Early-stage brands get a strategy-first process that avoids costly rework later; established brands get a structured audit before anything changes.",
  },
  {
    q: "What's included in a visual identity system?",
    a: "Logo suite, color and type system, graphic language, templates for core touchpoints, and a short guideline document your team can apply without us.",
  },
  {
    q: "Do you handle ongoing social and campaign management?",
    a: "Yes — once the system is built, we can run content and campaigns on a retainer, or hand the system off to your internal team with full documentation.",
  },
  {
    q: "How involved will our team need to be?",
    a: "We run a small number of structured checkpoints rather than constant meetings — enough input to stay aligned, without slowing the work down.",
  },
];

export const TEAM = [
  { name: "Marcus Wren", role: "Founder & Creative Director" },
  { name: "Sofia Aldric", role: "Brand Strategy Lead" },
  { name: "Théo Nakamura", role: "Visual Identity Designer" },
  { name: "Priya Odén", role: "Campaign & Motion Director" },
  { name: "Elias Roone", role: "Social & Content Strategist" },
  { name: "Nadia Cole", role: "Client Partnerships" },
];
