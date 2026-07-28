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
  subtitle: "I design clarity at scale.",
  title: "Content Engineer & Content Designer",
  tagline: "I design clarity at scale.",
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
    roleLabel: "Content Designer & AI Content Engineer",
    introParagraphs: [
      {
        text: "I've always enjoyed making complex things easier to understand. As a kid, it was board game rulebooks. Today, it's digital products.",
      },
      {
        text: "Over 7 years, I've grown from writing product content to designing content systems, AI experiences, and governance frameworks that scale across products and teams.",
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
      companyAbout: "Building AI-powered financial experiences for first-time investors.",
      summary:
        "I lead product content, AI experiences, and content systems that make investing, payments, and support easier to understand.",
      learnings: [
        "Led product content across onboarding, payments, support, and AI experiences for a new finance app, creating simpler, more trustworthy experiences for Tier 2–4 users",
        "Built AI content workflows, including prompt libraries and reusable templates, improving content quality and helping teams create faster, more consistent first drafts",
        "Designed Veda AI, defining its personality, conversation flows, guardrails, and fallback responses to build trust, improve response quality, and create a more reliable AI experience",
        "Built scalable content systems covering voice, terminology, localization, AI guidelines, and governance to improve consistency across products and teams",
        "Used UX research and content testing to improve clarity, solve user problems, and refine the product experience",
      ],
    },
    {
      company: "Dream11",
      logoSrc: "/logos/dream11.png",
      role: "Content Designer - III",
      period: "September 2024 to October 2025",
      companyAbout: "India's largest fantasy sports platform with 260M+ users.",
      summary:
        "I led content design across multiple products and built the Content Design System that helped teams create consistent content at scale.",
      learnings: [
        "Led clear, accessible, and user-first content across Dream11 products, improving usability and building customer confidence for 260M+ users",
        "Partnered with Product, Design, Research, and Engineering from discovery to launch, using content to influence product decisions and shape end-to-end user journeys",
        "Built the Dream11 Content Design System, creating reusable patterns, governance, writing guidelines, and searchable content libraries",
        "Enabled product teams through workshops, reusable templates, and writing guidelines, helping teams create more consistent content at scale",
        "Organized content with taxonomies, labels, and localization standards to improve consistency and comprehension across products",
        "Applied accessibility, user research, and data to improve content, reduce friction, and build user trust",
      ],
    },
    {
      company: "CleverTap",
      logoSrc: "/logos/clevertap.png",
      role: "UX Writer",
      period: "January 2023 to August 2024",
      companyAbout: "An enterprise customer engagement platform used by global brands.",
      summary:
        "I owned UX content across multiple product areas, simplified complex enterprise workflows, and contributed to the Content Design System.",
      learnings: [
        "Owned content across multiple product pods within CleverTap's B2B marketing platform, designing dashboards, onboarding, notifications, and complex product workflows",
        "Partnered with Product, Design, Engineering, and Documentation to simplify technical features and improve usability for enterprise users",
        "Maintained consistent product language across multiple product areas while balancing user needs, technical complexity, and business goals",
        "Expanded the Content Design System through reusable writing patterns, documentation, governance, and best practices",
        "Validated content through research, usability testing, stakeholder reviews, and iterative improvements",
        "Mentored new writers, created hiring assessments, and interviewed candidates to help grow the content design team",
      ],
    },
    {
      company: "Appitsimple",
      logoSrc: "/logos/appitsimple-96.png",
      logoSrcSet: "/logos/appitsimple-96.png 2x, /logos/appitsimple.png 1x",
      role: "Sr. Content writer & Copy writer",
      period: "Jun 2021 to Oct 2022",
      companyAbout: "A SaaS company building web and mobile products.",
      summary:
        "I wrote product, web, and marketing content while learning how content shapes the end-to-end product experience.",
      learnings: [
        "Wrote across channels for product, website, blogs, and marketing, tailoring content to user intent",
        "Improved content performance by analysing clicks, feedback, and metrics, then iterating for results",
        "Created reusable templates, contributed to the style guide, and aligned tone across teams",
        "Guided freelance writers with briefs and reviews to keep blogs clear and consistent",
      ],
    },
    {
      company: "Gateway Group of Companies",
      logoSrc: "/logos/gateway.png",
      role: "Sr. Content writer",
      period: "Mar 2020 to Mar 2021",
      companyAbout: "A technology company building enterprise software solutions.",
      summary:
        "I translated complex technical concepts into blogs, product content, and marketing copy that customers could easily understand.",
      learnings: [
        "Wrote blogs and product content for multiple technical products, simplifying complex ideas for wider audiences",
        "Applied AP style guide, SEO, and user-intent writing to make content clear and discoverable",
        "Built a foundation in user-friendly writing and consistent brand messaging",
      ],
    },
  ] satisfies Experience[],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-design",
    title: "Designing AI people can trust",
    subtitle: "",
    excerpt:
      "Conversation design, AI personality, guardrails, and fallback flows that make AI interactions clear, helpful, and trustworthy.",
    company: "Portfolio",
    role: "Content Engineer & Content Designer",
    year: "2024",
    duration: "Ongoing",
    tags: ["AI Design", "Conversation Design"],
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
    title: "Building systems that scale content",
    subtitle: "",
    excerpt:
      "Content governance, AI workflows, localization, and reusable frameworks that help teams create consistent content, faster.",
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
      "A collection of UX writing samples with the challenge, reasoning, iterations, and final outcome behind each decision.",
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
      "Frame each sample around the user moment and business goal it supports",
      "Document draft iterations and explain why options were rejected",
      "Call out tone, length, and terminology tradeoffs tied to research or policy",
      "Pair final copy with the reasoning so reviewers can evaluate the thinking",
    ],
    outcome:
      "A repeatable format for presenting UX writing work that shows challenge, reasoning, and outcome, not just polished final copy.",
  },
  {
    slug: "writing-beyond-products",
    title: "Writing beyond products",
    subtitle: "",
    excerpt:
      "Technical writing, published articles, workshops, and AI experiments that reflect how I think, learn, and share knowledge.",
    company: "Portfolio",
    role: "Content Engineer & Content Designer",
    year: "2024",
    duration: "Ongoing",
    tags: ["Technical Writing", "Workshop", "AI Experiments"],
    featured: true,
    accentColor: "tertiary",
    metrics: [],
    challenge:
      "Not all content design work lives inside a product flow. Articles, workshops, and experiments need the same clarity, structure, and intent as in-app copy, but with different formats and audiences.",
    approach: [
      "Publish technical writing and articles that explain complex topics in accessible language",
      "Facilitate workshops that help teams improve how they write and think about content",
      "Run AI experiments to test new ways of creating, evaluating, and scaling content",
      "Share learning openly so others can reuse frameworks, not just final outputs",
    ],
    outcome:
      "A body of work beyond shipped products that shows how I think, learn, and help others grow as content practitioners.",
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
  "These certifications are just one part of that journey. Most of what I know comes from curiosity, building, and learning by doing.";

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
