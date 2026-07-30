export type DoDontPair = { do: string; dont: string };

export type PrincipleItem = {
  title: string;
  description: string;
  examples?: readonly string[];
};

export type IncludedItem = string | PrincipleItem;

export type GuidelinePage = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
  featured?: boolean;
};

export const guidelinesCaseStudy = {
  slug: "guidelines",
  title: "Building a Content Design System",
  subtitle:
    "Creating reusable writing standards that help teams make consistent product decisions.",
  projectType: "CleverTap",
  role: "Content Designer",
  timeline: "Ongoing",
  tags: ["Content Systems", "UX Writing", "Design Systems"],
  overview: {
    paragraphs: [
      "As products grow, more people contribute to UX copy. Without shared guidelines, writing becomes inconsistent and the experience starts to feel fragmented.",
      "To solve this, I helped build a Content Design System that organized recurring writing decisions into six reusable guideline categories. The goal was to help teams write consistently and make content decisions faster.",
    ],
    categories: [
      {
        icon: "🗂️",
        title: "Getting Started",
        sectionId: "getting-started",
        description:
          "Where every contributor starts: purpose, structure, and navigation across the system.",
      },
      {
        icon: "🧭",
        title: "Writing Goals & Principles",
        sectionId: "principles",
        description: "The foundation for every writing decision.",
      },
      {
        icon: "🎙️",
        title: "Voice & Tone",
        sectionId: "voice-and-tone",
        description: "Consistent voice across different user situations.",
      },
      {
        icon: "✍️",
        title: "Grammar & Punctuation",
        sectionId: "grammar",
        description: "Rules for recurring writing patterns.",
      },
      {
        icon: "📖",
        title: "Product Dictionary",
        sectionId: "product-dictionary",
        description: "Shared terminology and naming conventions.",
      },
      {
        icon: "🧩",
        title: "Writing for UI Components",
        sectionId: "ui-components",
        description: "Guidance for common UI patterns and interactions.",
      },
    ],
  },
  gettingStarted: {
    heading: "Getting Started",
    paragraphs: [
      "Every contributor needed a clear place to start. This page introduced the Content Design System, explained how it was organized, and showed where to find the right guidance for different writing decisions. It also documented how the system could be updated over time and the resources it was built on.",
    ],
    included: [
      "Purpose and structure of the system",
      "Navigation to all guideline categories",
      "Process for proposing and reviewing updates",
      "References and industry best practices",
      "Writing tools and supporting resources",
    ],
    reference: {
      href: "/work/guidelines/ux-writing-guidelines.pdf",
      label: "View the doc",
    },
  },
  principles: {
    heading: "Writing goals & principles",
    paragraphs: [
      "Every guideline in the system builds on the same writing principles.",
      "Rather than documenting isolated rules, I started by defining the qualities every piece of UI copy should have and the questions writers should ask before they begin.",
    ],
    items: [
      {
        title: "Writing goals",
        description:
          "Empower users, respect their time, educate when needed, and avoid unnecessary fluff.",
      },
      {
        title: "Before you write",
        description:
          'Questions like "Why am I writing this?", "What is the user\'s goal?", and "What should they do next?"',
      },
      {
        title: "Write like a human",
        description:
          "Replace jargon with everyday language, keep sentences short, and write in the present tense.",
      },
      {
        title: "Focus on the user",
        description:
          "Explain the benefit first, use consistent terminology, and guide users toward their goal.",
      },
      {
        title: "Make content easy to scan",
        description:
          "Write descriptive headings, break up long text, and organize information logically.",
      },
      {
        title: "Edit with purpose",
        description:
          "Read copy out loud, remove extra words, and reveal information only when users need it.",
      },
    ] satisfies readonly PrincipleItem[],
    reference: {
      href: "/work/guidelines/writing-goals-and-principles.pdf",
      label: "View the doc",
    },
  },
  voiceAndTone: {
    heading: "Voice & Tone",
    paragraphs: [
      "This section defined the personality of the product and how it should adapt across different user situations.",
      "It helped contributors maintain a consistent voice while adjusting the tone based on the user's context and emotions.",
    ],
    included: [
      {
        title: "Voice vs. Tone",
        description:
          "Understand the difference between a consistent voice and a tone that changes with context.",
        examples: ["Voice is who you are: it stays the same always, but your tone changes."],
      },
      {
        title: "Brand voice",
        description:
          "Define the product's personality through three core traits: Fresh, Thoughtful, and Transparent.",
      },
      {
        title: "Tone guidelines",
        description: "Learn how to adapt tone to context while staying on brand.",
        examples: [
          "Positive and bold (not a 'bro')",
          "Warm (but not over-friendly)",
          "Informative (not stiff)",
          "Straight-talking (not blunt)",
          "Honest (not over-explanatory)",
        ],
      },
      {
        title: "Do & Don't examples",
        description: "Practical writing examples that demonstrate the preferred tone.",
        examples: [
          '"Your campaign report is ready." instead of "Check out your campaign report here."',
        ],
      },
      {
        title: "Writing style",
        description:
          "Use active voice over passive voice, write in a conversational style, and choose the appropriate point of view based on the context.",
        examples: [
          '"Marti logged into the account." instead of "The account was logged into by Marti."',
        ],
      },
    ] satisfies readonly PrincipleItem[],
    reference: {
      href: "/work/guidelines/voice-and-tone.pdf",
      label: "View the doc",
    },
  },
  productDictionary: {
    heading: "Product Dictionary",
    paragraphs: [
      "As the product grew, different teams often described the same feature in different ways. To create consistency, the UX team maintained a Product Dictionary, a shared vocabulary that standardized naming across the product and beyond.",
      "While owned by UX, it became the single source of truth for customer support, technical writing, sales, marketing, and other teams creating customer-facing content.",
    ],
    included: [
      "Approved feature names used consistently across the product.",
      "Standard naming conventions for features, settings, and workflows.",
      "Preferred terminology to replace inconsistent or ambiguous language.",
      "Shared vocabulary for product, help center, support, sales, and marketing content.",
      "A living glossary that evolved alongside the product.",
    ],
  },
  grammar: {
    heading: "Grammar & Punctuation",
    paragraphs: [
      "This section standardized everyday writing decisions that appear across the product.",
      "It helped contributors apply the same grammar, punctuation, and formatting rules, making the experience feel polished and consistent.",
    ],
    included: [
      {
        title: "Punctuation standards",
        description:
          "When to use commas, periods, colons, question marks, quotation marks, and exclamation marks.",
        examples: [
          "Use the Oxford comma.",
          "Don't use exclamation marks unless it's a success message.",
        ],
      },
      {
        title: "Grammar & formatting rules",
        description:
          "Guidelines for abbreviations, acronyms, ampersands, hyphens, dashes, and parentheses.",
        examples: [
          "Avoid using an ampersand in full sentences.",
          "Spell out an acronym the first time it's used.",
        ],
      },
      {
        title: "Writing for UI",
        description:
          "Rules for punctuation across headings, body copy, lists, buttons, toasts, and input fields.",
        examples: [
          "Don't use periods in headlines.",
          "Use periods in descriptions and hint text.",
        ],
      },
      {
        title: "Consistency guidelines",
        description: "Standards for keeping writing clear and predictable across the product.",
        examples: [
          "Use active voice.",
          'Use double quotation marks (" ").',
          "Use one space after a period.",
        ],
      },
      {
        title: "Do & Don't examples",
        description: "Real examples showing the correct way to apply each guideline.",
        examples: [
          "Save your file to a hard drive, an external drive, or the cloud.",
          "All done! You've successfully created a project.",
        ],
      },
    ] satisfies readonly PrincipleItem[],
    reference: {
      href: "/work/guidelines/grammar-and-punctuation.pdf",
      label: "View the doc",
    },
  },
  uiComponents: {
    heading: "Writing for UI Components",
    paragraphs: [
      "This section provided reusable writing patterns for common UI components.",
      "Instead of treating every screen as a new writing exercise, it gave contributors practical guidance for writing clear, consistent, and task-focused product experiences.",
    ],
    included: [
      {
        title: "Buttons & Interactive Text",
        description: "Use action-first labels, task-specific language, and concise CTAs.",
        examples: [
          '"Delete" instead of "Yes"',
          '"Download update" instead of "Click here for details."',
        ],
      },
      {
        title: "Text Fields & Text Areas",
        description: "Write helpful labels, placeholder text, and hint text.",
        examples: [
          '"Enter a description"',
          '"Give your campaign a name"',
          '"Once saved, the business event name cannot be changed."',
        ],
      },
      {
        title: "Modals & Alerts",
        description:
          "Structure dialogs with a clear title, concise explanation, and action-oriented CTAs.",
        examples: [
          '"Delete geofence?" followed by "All associated details will be removed. This action cannot be undone."',
        ],
      },
      {
        title: "Snackbars",
        description:
          "Write short success, error, and warning messages that confirm what happened and guide users when needed.",
        examples: [
          '"Campaign saved"',
          '"Geofence deleted"',
          '"An unexpected error occurred… Try again later."',
        ],
      },
      {
        title: "Selection Controls, Tabs & Dropdowns",
        description:
          "Keep labels concise, use sentence case, and make actions easy to understand.",
        examples: ['"Delete," "Clone," and "View DRP settings."'],
      },
      {
        title: "Tooltips & Nag Bars",
        description:
          "Add supporting information only when needed and guide users toward the next step.",
        examples: [
          '"The card set as your primary payment method has expired. To continue accessing CleverTap, update payment details."',
        ],
      },
    ] satisfies readonly PrincipleItem[],
    reference: {
      href: "/work/guidelines/ui-components.pdf",
      label: "View the doc",
    },
  },
  document: {
    title: "Full guidelines document",
    description: "View or download the complete content design system documentation.",
    href: "/work/guidelines/ux-writing-guidelines.pdf",
    downloadFilename: "UX-writing-guidelines.pdf",
  },
  impactAndLearnings: {
    heading: "Impact & Learnings",
    intro:
      "The Content Design System became the team's single source of truth for UX writing. It replaced subjective writing decisions with shared principles, reusable patterns, and practical examples, making content more consistent and easier to scale.",
    keyLearning:
      "The biggest lesson I took away was that content systems aren't about documenting rules. They're about documenting decisions.",
    keyLearningFollowUp:
      "Once recurring decisions are captured in a reusable way, teams can write faster, collaborate better, and create a more consistent product experience.",
    closing:
      "This thinking became the foundation for my next project, where I explored how structured content could support AI-assisted writing.",
  },
} as const;

export const guidelinesSections = [
  { id: "getting-started", label: "Getting started" },
  { id: "principles", label: "Writing goals & principles" },
  { id: "voice-and-tone", label: "Voice & tone" },
  { id: "grammar", label: "Grammar & punctuation" },
  { id: "product-dictionary", label: "Product dictionary" },
  { id: "ui-components", label: "Writing for UI components" },
  { id: "impact-and-learnings", label: "Impact & learnings" },
] as const;
