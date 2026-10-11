// ─────────────────────────────────────────────────────────────────────────────
// lib/design-data.ts — Creative Lab mode data layer
// ─────────────────────────────────────────────────────────────────────────────

import {
  PERSONAL as BASE_PERSONAL,
  PROJECTS as BASE_PROJECTS,
  EXPERIENCE as BASE_EXPERIENCE,
  EDUCATION as BASE_EDUCATION,
  CERTIFICATIONS as BASE_CERTIFICATIONS,
} from "./data";

// ── Personal (Creative Lab persona) ──────────────────────────────────────────
export const DESIGN_PERSONAL = {
  ...BASE_PERSONAL,

  // Hero
  displayRole: "Visual Designer & Frontend Developer",
  heroHeadline: "I design experiences that feel clear, expressive, and human.",
  heroSub:
    "Hi, I'm Shawez. I build at the intersection of visual design and frontend development — from first wireframe to final deployed pixel.",

  // About
  aboutHeadline: "I turn complex ideas into digital products that feel simple.",
  aboutBio1:
    "I work between visual design and frontend development. I enjoy taking complicated requirements and turning them into interfaces that feel obvious to use — even when the problem underneath isn't obvious at all.",
  aboutBio2:
    "I've spent 150+ hours reviewing real AI interfaces through Outlier and OneForma, which taught me exactly where UI creates friction. That experience sharpens how I think about clarity, contrast, and what to leave out.",
  personalLine:
    "I like systems that are precise underneath but feel effortless on the surface.",
};

// ── Services ──────────────────────────────────────────────────────────────────
export interface DesignService {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  accent: string;
}

export const DESIGN_SERVICES: DesignService[] = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design",
    description:
      "Responsive websites and landing pages that communicate clearly and guide visitors toward the action that matters. No templates — designed for your brand from scratch.",
    deliverables: [
      "Page design & layout",
      "Responsive across all devices",
      "Brand-aligned visual system",
      "CMS-ready delivery",
    ],
    accent: "#1834FF",
  },
  {
    id: "ui-ux",
    number: "02",
    title: "UI/UX & Product Design",
    description:
      "Interfaces and flows that reduce confusion and keep users moving. From rough wireframes to developer-ready Figma prototypes that the engineering team can build without guesswork.",
    deliverables: [
      "User flows & wireframes",
      "High-fidelity Figma prototype",
      "Usability review",
      "Developer handoff",
    ],
    accent: "#E1523D",
  },
  {
    id: "design-systems",
    number: "03",
    title: "Design Systems",
    description:
      "A shared set of components, tokens, and patterns so your team builds consistently without reinventing decisions each time. Works in Figma and in code.",
    deliverables: [
      "Component library",
      "Design tokens & variables",
      "Style guide & documentation",
      "Figma-to-code alignment",
    ],
    accent: "#0D9488",
  },
  {
    id: "frontend",
    number: "04",
    title: "Frontend Development",
    description:
      "Clean, responsive Next.js and React interfaces built from your design — or mine. Fast, accessible, and maintainable code that doesn't need to be rewritten in six months.",
    deliverables: [
      "Next.js / React codebase",
      "Tailwind CSS styling",
      "Framer Motion animations",
      "Accessible & optimized",
    ],
    accent: "#7C3AED",
  },
];

// ── Creative Process ──────────────────────────────────────────────────────────
export interface DesignProcessStep {
  step: string;
  title: string;
  description: string;
}

export const DESIGN_PROCESS: DesignProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand your goals, your users, and your constraints. Before opening Figma.",
  },
  {
    step: "02",
    title: "Structure",
    description:
      "Map user flows, content hierarchy, and component architecture. Figure out what goes where and why.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Typography, colour, layout, and pixel-precise Figma prototypes — designed to work, not just look good.",
  },
  {
    step: "04",
    title: "Build",
    description:
      "Responsive, production-ready frontend code. Shipped clean, tested on real devices.",
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export interface DesignProject {
  id: string;
  number: string;
  title: string;
  type: string;
  category: string;
  year: string;
  problem: string;
  solution: string;
  deliverables: string[];
  tags: string[];
  accentColor: string;
  previewType: "verifier" | "dashboard" | "learning" | "studio";
  link?: string;
}

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: BASE_PROJECTS[0].id,
    number: "01",
    // P1.8: cleaner, client-friendly title
    title: "AI Verification Interface",
    type: "Concept Case Study",
    category: "Product Design",
    year: "2025",
    problem:
      "Non-technical reviewers couldn't make fast, confident decisions from raw CNN confidence scores and forensic data.",
    solution:
      "Designed a clean inspection interface with a clear pass/fail readout at a glance, and expandable heatmaps for reviewers who need to dig deeper.",
    deliverables: [
      "User flows & wireframes",
      "Interactive Figma prototype",
      "Visual inspection UI",
      "Accessibility token system",
    ],
    tags: ["Figma", "UI Design", "Design Systems"],
    accentColor: "#1834FF",
    previewType: "verifier",
    link: BASE_PROJECTS[0].link,
  },
  {
    id: BASE_PROJECTS[1].id,
    number: "02",
    title: "Titanic Data Visualization Dashboard",
    type: "Design Prototype",
    category: "Data Visualization",
    year: "2025",
    problem:
      "ML model outputs locked in Jupyter notebooks couldn't communicate insights to people who don't read code.",
    solution:
      "Built an interactive dashboard with demographic filters, clear bar charts, and passenger story cards that made the data human.",
    deliverables: [
      "Data visualization design",
      "Interactive filter system",
      "Responsive grid layout",
      "Micro-interaction specs",
    ],
    tags: ["Dashboard UI", "Information Design", "Figma"],
    accentColor: "#E1523D",
    previewType: "dashboard",
    link: BASE_PROJECTS[1].link,
  },
  {
    id: BASE_PROJECTS[2].id,
    number: "03",
    title: "Adaptive Learning Experience",
    type: "UX Research Project",
    category: "EdTech & UX",
    year: "2025",
    problem:
      "Intrusive webcam emotion monitoring made learners anxious and self-conscious rather than focused on learning.",
    solution:
      "Designed ambient, non-intrusive UI adaptations — subtle warmth shifts and quiet micro-breaks — so the system helps without getting in the way.",
    deliverables: [
      "Affective UX research",
      "Ambient UI patterns",
      "Privacy-first interactions",
      "Component system",
    ],
    tags: ["UX Research", "EdTech", "Figma"],
    accentColor: "#0D9488",
    previewType: "learning",
    link: BASE_PROJECTS[2].link,
  },
  {
    id: BASE_PROJECTS[3].id,
    number: "04",
    title: "AI Evaluation Interface",
    type: "Tool Design",
    category: "Developer Tools",
    year: "2025",
    problem:
      "Evaluating thousands of multi-turn AI responses caused eye fatigue when tools lacked ergonomic layout and keyboard shortcuts.",
    solution:
      "Created a distraction-free split-pane tool with synchronized scrolling, customizable rubrics, and keyboard shortcuts for fast annotation.",
    deliverables: [
      "High-density tool UI",
      "Typography scale",
      "Keyboard navigation map",
      "Dark/light token system",
    ],
    tags: ["Developer Tools", "Ergonomic UI", "Figma"],
    accentColor: "#7C3AED",
    previewType: "studio",
    link: BASE_PROJECTS[3].link,
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
export const DESIGN_EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "AI Data & Interface Evaluation",
    company: "Outlier & OneForma",
    badge: "Contract · Remote",
    summary:
      "150+ hours reviewing AI interfaces, response quality, and annotation UX. Sharpened my eye for exactly where interfaces create friction.",
    contributions: [
      "Reviewed AI-generated text and images for clarity, accuracy, and instruction-following.",
      "Annotated image data (bounding boxes, segmentation) with strict QA standards.",
      "Assessed conversation flows for readability, tone, and structural clarity.",
    ],
    skills: ["Interface Review", "UX Heuristics", "Annotation", "QA"],
  },
  {
    period: "2024",
    role: "Data Science & Visualization Intern",
    company: "Averixis Solutions",
    badge: "Internship",
    summary:
      "Turned raw datasets into clear charts and presentations. Built ML pipelines on Google Cloud.",
    contributions: [
      "Designed exploratory charts and visual summaries from tabular data.",
      "Co-developed machine learning pipelines on Google Cloud.",
      "Translated technical outputs into clear stakeholder presentations.",
    ],
    skills: ["Data Visualization", "Dashboard Design", "Google Cloud"],
  },
  {
    period: "2024 — Present",
    role: "Independent Design Projects",
    company: "Self-initiated",
    badge: "Concept Work",
    summary:
      "Self-initiated concept projects exploring product design, data visualization, and EdTech UX. All work labelled as concept — no client relationship implied.",
    contributions: [
      "Designed 4 concept case studies spanning product design and data visualization.",
      "Built responsive frontend implementations using Next.js and Tailwind.",
      "Documented design decisions and process for each project.",
    ],
    skills: ["Product Design", "Figma", "Next.js", "Frontend"],
  },
];

// ── Education & Certifications (pass-through) ─────────────────────────────────
export const DESIGN_EDUCATION = BASE_EDUCATION;
export const DESIGN_CERTIFICATIONS = BASE_CERTIFICATIONS;
