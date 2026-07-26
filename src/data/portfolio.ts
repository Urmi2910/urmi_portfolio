export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  company: string;
  role: string;
  year: string;
  duration: string;
  tags: string[];
  featured: boolean;
  accentColor: "primary" | "accent" | "tertiary" | "warm";
  metrics: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  companyAbout: string;
  summary: string;
  learnings: string[];
  logoSrc: string;
  logoSrcSet?: string;
  logoFit?: "contain" | "cover";
}

export const profile = {
  name: "Urmi Shah",
  subtitle: "Designing clarity at scale.",
  title: "Content Engineer & Content Designer",
  tagline: "Designing clarity at scale.",
  intro:
    "I've always enjoyed making complex things easier to understand. As a kid, it was board game rulebooks. Today, it's digital products.",
  email: "shah.urmi2910@gmail.com",
  phone: "(+91) 9426804388",
  linkedin: "https://www.linkedin.com/in/urmi-shah/",
  resumeUrl: "/Urmi shah_Senior Content Designer.pdf",
  resumeDownloadUrl: "/Urmi shah_Senior Content Designer.pdf",
  resumeFilename: "Urmi shah_Senior Content Designer.pdf",
  workSamples: "",

  skills: [
    "Content design",
    "UX writing",
    "Content systems",
    "Information architecture & taxonomy",
    "Localization",
    "Accessibility & inclusive content (WCAG)",
    "AI content engineering",
    "Conversation design",
    "Prompt engineering",
    "Content engineering",
    "Knowledge architecture for AI",
    "AI evaluation & governance",
  ],

  about: {
    roleLabel: "Content Designer • AI Content Engineer",
    introParagraphs: [
      {
        text: "I've always enjoyed making complex things easier to understand. As a kid, it was board game rulebooks. Today, it's digital products.",
      },
      {
        text: "Over the last 7+ years, I've grown from writing product content to designing content systems, AI experiences, and governance frameworks that help both users and teams.",
        highlights: ["content systems", "AI experiences", "governance frameworks"],
      },
    ],
    beliefQuote: {
      text: "I believe great content isn't just about choosing the right words. It's about creating systems that make products easier to understand, easier to build, and more consistent as they grow.",
      highlights: ["easier to understand", "easier to build", "more consistent"],
    },
  },

  experience: [
    {
      company: "DreamStreet",
      logoSrc: "/logos/dreamstreet.png",
      logoFit: "cover",
      role: "Content Engineer & Content Designer - III",
      period: "October 2025 to Present",
      companyAbout:
        "DreamStreet is a personal finance app for managing money, investments, and everyday payments.",
      summary:
        "I lead product content and AI conversation design across onboarding, payments, support, and Help Center.",
      learnings: [
        "Designed Veda AI — personality, conversation flows, guardrails, and fallbacks",
        "Built AI content workflows with prompt libraries and templates for faster drafts",
        "Created voice, tone, and localization guidelines for consistent content across teams",
      ],
    },
    {
      company: "Dream11",
      logoSrc: "/logos/dream11.png",
      role: "Content Designer - III",
      period: "September 2024 to October 2025",
      companyAbout:
        "Dream11 is India's largest fantasy sports platform, serving 260M+ users.",
      summary:
        "I led UX writing and built the Dream11 Content Design System so teams could ship clearer content at scale.",
      learnings: [
        "Partnered with Product and Design from discovery through launch",
        "Organized taxonomies, labels, and localization standards across products",
        "Ran workshops and reusable patterns to help teams write content-first",
      ],
    },
    {
      company: "CleverTap",
      logoSrc: "/logos/clevertap.png",
      role: "Technical writer & UX Writer",
      period: "January 2023 to August 2024",
      companyAbout:
        "CleverTap is a B2B marketing automation platform for enterprise customer engagement.",
      summary:
        "I wrote UX content for dashboards, notifications, and complex workflows, and contributed to the content design system.",
      learnings: [
        "Simplified technical features for enterprise users with Product and Design",
        "Documented writing guidelines and reusable patterns in the CDS",
        "Mentored new writers and built interview assessments for hiring",
      ],
    },
    {
      company: "Appitsimple",
      logoSrc: "/logos/appitsimple-96.png",
      logoSrcSet: "/logos/appitsimple-96.png 2x, /logos/appitsimple.png 1x",
      role: "Sr. Content writer & Copy writer",
      period: "Jun 2021 to Oct 2022",
      companyAbout:
        "Appitsimple builds mobile and web software products across multiple industries.",
      summary:
        "I wrote product UI, website, blog, and marketing content tailored to user intent and performance.",
      learnings: [
        "Improved content using clicks, feedback, and metrics",
        "Created templates and style guide contributions for cross-team consistency",
        "Briefed and reviewed freelance writers on blog content",
      ],
    },
    {
      company: "Gateway Group of Companies",
      logoSrc: "/logos/gateway.png",
      role: "Sr. Content writer",
      period: "Mar 2020 to Mar 2021",
      companyAbout:
        "Gateway Group develops technical software products for business and consumer markets.",
      summary:
        "I wrote blogs and product content that simplified complex technical ideas for broader audiences.",
      learnings: [
        "Applied AP style, SEO, and user-intent writing for clarity and discoverability",
        "Built early foundations in user-friendly writing and brand messaging",
      ],
    },
  ] satisfies Experience[],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-design",
    title: "Designing trustworthy AI conversations",
    subtitle: "",
    excerpt:
      "Conversation design, response frameworks, guardrails, and content modeling for a financial AI assistant users could trust.",
    company: "Veda AI",
    role: "Content Engineer & Content Designer",
    year: "2024",
    duration: "6 months",
    tags: ["Conversation Design", "Content Strategy"],
    featured: true,
    accentColor: "accent",
    metrics: [],
    challenge:
      "AI experiences fail when users cannot tell what the system can do, how it will behave, or what happens when it gets something wrong. Without clear personality, guardrails, and fallbacks, even capable models feel unreliable.",
    approach: [
      "Define AI personality, tone, and boundaries aligned with product trust goals",
      "Design conversation flows that set expectations and recover gracefully from errors",
      "Build guardrails and fallback patterns for edge cases, compliance, and unclear intent",
      "Test AI interactions for clarity, helpfulness, and consistency across user scenarios",
    ],
    outcome:
      "AI experiences that communicate capability honestly, guide users with confidence, and maintain trust when the system cannot deliver a perfect answer.",
  },
  {
    slug: "content-systems",
    title: "Content Systems & Content Modeling",
    subtitle: "",
    excerpt:
      "From reusable frameworks to governance and localization, these projects focus on building scalable content systems rather than individual screens.",
    company: "Portfolio",
    role: "Content Engineer & Content Designer",
    year: "2024",
    duration: "Ongoing",
    tags: ["System Design", "AI", "Governance"],
    featured: true,
    accentColor: "warm",
    metrics: [],
    challenge:
      "As products and teams grow, content quality drifts. Without shared governance, AI tooling, and reusable frameworks, every team reinvents voice, terminology, and review workflows from scratch.",
    approach: [
      "Define governance models for voice, terminology, and review across product teams",
      "Build AI-assisted workflows that improve first drafts without bypassing human judgment",
      "Design localization standards and content patterns teams can reuse at scale",
      "Document frameworks so content decisions stay consistent as products evolve",
    ],
    outcome:
      "Scalable content infrastructure that helps cross-functional teams ship clearer, more consistent product content with less rework.",
  },
  {
    slug: "product-content-design",
    title: "Product Content Design",
    subtitle: "",
    excerpt:
      "A collection of UX writing examples showing the challenge, reasoning, iterations, and final outcome behind each decision.",
    company: "Portfolio",
    role: "Content Designer",
    year: "2024",
    duration: "Ongoing",
    tags: ["UX Writing", "Content Design"],
    featured: true,
    accentColor: "primary",
    metrics: [],
    challenge:
      "Product copy often ships without the context behind it. Teams see the final line, not the user problem, constraints, or alternatives that shaped the decision.",
    approach: [
      "Frame each example around the user moment and business goal it supports",
      "Document draft iterations and explain why options were rejected",
      "Call out tone, length, and terminology tradeoffs tied to research or policy",
      "Pair final copy with the reasoning so reviewers can evaluate the thinking",
    ],
    outcome:
      "A repeatable format for presenting UX writing work that shows challenge, reasoning, and outcome, not just polished final copy.",
  },
  {
    slug: "ux-writing-practice",
    title: "Building a UX Writing Practice",
    subtitle: "",
    excerpt:
      "Creating and delivering a structured onboarding program to help teams build shared UX writing principles, reusable resources, and collaboration workflows.",
    company: "CleverTap",
    role: "Content Designer",
    year: "2023–2024",
    duration: "Multi-part program",
    tags: ["Workshop", "Leadership", "Content Design"],
    featured: true,
    accentColor: "tertiary",
    metrics: [],
    challenge:
      "As teams grow, content quality depends on shared principles—not just individual writers. New designers, PMs, and writers need a consistent foundation for UX writing, microcopy, and cross-functional collaboration.",
    approach: [
      "Design a multi-part onboarding workshop covering principles, UI components, and collaboration workflows",
      "Create reusable deck content and practical guides teams could apply immediately",
      "Document end-to-end content design process from PRD to release",
      "Curate a resource library for continued learning beyond the session",
    ],
    outcome:
      "A repeatable onboarding program that reduced the learning curve for new team members and established shared vocabulary and guidelines across writers, designers, and product managers.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export type WritingCategory = "technical" | "blog" | "workshop";

export interface WritingItem {
  id: string;
  title: string;
  description: string;
  href: string;
  year: string;
  category: WritingCategory;
  external?: boolean;
}

export interface LearningItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  learned: string;
}

export const writingGroups: {
  id: WritingCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "technical",
    label: "Technical writing",
    description: "Docs, guides, and in-product explanations",
  },
  {
    id: "blog",
    label: "Published writing",
    description: "Essays and posts on content, UX, and AI experiments",
  },
  {
    id: "workshop",
    label: "Workshops & talks",
    description: "Sessions for designers and product teams",
  },
];

export const writingItems: WritingItem[] = [
  {
    id: "clevertap-api-guide",
    title: "Developer onboarding documentation",
    description: "API quickstart and integration guides for a marketing automation platform.",
    href: "#",
    year: "2023",
    category: "technical",
  },
  {
    id: "release-notes-system",
    title: "Release notes & changelog system",
    description: "Structured templates for shipping clear, scannable product updates.",
    href: "#",
    year: "2024",
    category: "technical",
  },
  {
    id: "voice-in-systems",
    title: "Why voice belongs in design systems",
    description: "On treating language as a first-class design material, not an afterthought.",
    href: "#",
    year: "2024",
    category: "blog",
    external: true,
  },
  {
    id: "ai-content-workflows",
    title: "AI-assisted content workflows that still sound human",
    description: "How teams can speed up production without flattening brand voice.",
    href: "#",
    year: "2025",
    category: "blog",
    external: true,
  },
  {
    id: "microcopy-workshop",
    title: "Microcopy clinic for product designers",
    description: "Hands-on workshop on error states, empty states, and onboarding copy.",
    href: "#",
    year: "2024",
    category: "workshop",
  },
  {
    id: "content-patterns-talk",
    title: "Content patterns in Figma",
    description: "Talk on embedding reusable copy into design system workflows.",
    href: "#",
    year: "2023",
    category: "workshop",
  },
];

export const learningIntro =
  "Most of what I know comes from curiosity, building, and learning by doing. These certifications are just one part of that journey.";

export const learningItems: LearningItem[] = [
  {
    id: "uxcc-advanced-ux-content",
    title: "Advanced UX content for product",
    institution: "UX Content Collective",
    year: "2026",
    learned:
      "Content as product strategy, product content systems, content engineering, and context engineering",
  },
  {
    id: "uxcc-fundamentals-ux-writing",
    title: "Fundamentals on UX writing",
    institution: "UX Content Collective",
    year: "2022",
    learned: "Voice and tone, microcopy for UI, accessibility, and localization",
  },
  {
    id: "mica-content-strategy",
    title: "Content strategy",
    institution: "MICA",
    year: "2020",
    learned: "Digital Content & Marketing Specialization",
  },
  {
    id: "pdeu-bba-marketing",
    title: "BBA (Hons.) Marketing, Mass Communication",
    institution: "PDEU",
    year: "2018",
    learned: "Fundamentals of communication, audience, message, and channel",
  },
];
