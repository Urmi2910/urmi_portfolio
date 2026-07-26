export const workshopPresentation = {
  cover: {
    title: "UX Writing",
    subtitle: "Designing conversations between people and products.",
    author: "Urmi",
    role: "Content Designer",
  },
  agenda: {
    title: "What we'll explore",
    subtitle:
      "By the end of this workshop, you'll understand how to write clear, scalable product experiences and collaborate effectively with cross-functional teams.",
    items: [
      {
        number: "01",
        title: "Understanding UX Writing",
        description: "What it is, why it matters, and how it shapes product experiences.",
      },
      {
        number: "02",
        title: "Principles of Great UX Copy",
        description: "The fundamentals that make interfaces intuitive, useful, and trustworthy.",
      },
      {
        number: "03",
        title: "Writing for Enterprise Products",
        description: "How writing changes when your users are professionals working in complex workflows.",
      },
      {
        number: "04",
        title: "Design Systems & UI Components",
        description: "Writing for buttons, tooltips, dialogs, empty states, errors, forms, and more.",
      },
      {
        number: "05",
        title: "Collaboration in Practice",
        description: "How content designers work with PMs, designers, engineers, and researchers.",
      },
      {
        number: "06",
        title: "Real Product Examples",
        description: "We'll analyze real product decisions and discuss the thinking behind them.",
      },
    ],
  },
  understanding: {
    title: "Understanding UX Writing",
    subtitle: "The words in your product are part of the experience—not an afterthought.",
    paragraphs: [
      "UX writing is the practice of crafting the text people read as they move through a product—from buttons and labels to errors, empty states, and onboarding flows.",
      "Good copy guides action, reduces friction, and builds trust. It works with design so interfaces feel intuitive without over-explaining.",
      "At scale, UX writing becomes a system: shared principles, reusable patterns, and a consistent voice across every touchpoint.",
    ],
    components: [
      "Labels",
      "Buttons",
      "Tooltips",
      "Placeholders",
      "Error Messages",
      "Snackbars",
      "Empty States",
      "Confirmation Dialogs",
      "Emails",
      "Feature Descriptions",
    ],
    takeaway:
      "Every interface is a conversation. UX writing makes that conversation clear, useful, and human.",
  },
  process: {
    steps: ["User Goal", "Interaction Design", "Content Design", "User Decision", "Outcome"],
    questions: [
      "What is the user trying to accomplish?",
      "How does the interaction guide them forward?",
      "What words help them decide with confidence?",
      "Did the outcome meet their goal?",
    ],
  },
  principles: {
    title: "Principles of Great UX Copy",
    subtitle: "The fundamentals that make interfaces intuitive, useful, and trustworthy.",
    items: [
      {
        title: "Clarity",
        description: "Use plain language. Say exactly what the user needs to know—nothing more.",
      },
      {
        title: "Usefulness",
        description: "Every word should help someone understand, decide, or act.",
      },
      {
        title: "Consistency",
        description: "Same patterns, same terms, same voice—across every screen and state.",
      },
      {
        title: "Accessibility",
        description: "Write for everyone. Avoid jargon, bias, and assumptions about ability or context.",
      },
      {
        title: "Progressive disclosure",
        description: "Reveal information when it's needed—not all at once.",
      },
      {
        title: "Plain language",
        description: "Short sentences. Active voice. Words your users actually use.",
      },
    ],
  },
  enterprise: {
    title: "Writing for Enterprise Products",
    subtitle: "How writing changes when your users are professionals working in complex workflows.",
    points: [
      "Users are experts in their domain—not your product. Respect their time with precise, scannable copy.",
      "Workflows are multi-step and high-stakes. Clarity at each step prevents costly mistakes.",
      "Terminology must stay consistent across teams, tools, and documentation.",
      "Tone stays professional and confident—helpful without being casual or condescending.",
    ],
  },
  uiComponents: {
    title: "Design Systems & UI Components",
    subtitle: "Writing for buttons, tooltips, dialogs, empty states, errors, forms, and more.",
    description:
      "When to use each component, common mistakes, and the principles behind effective microcopy.",
    components: [
      "Labels & placeholders",
      "Snackbars",
      "Confirmation dialogs",
      "Empty states",
      "Tooltips",
      "Buttons & CTAs",
      "Selection controls",
      "System emails",
    ],
  },
  collaboration: {
    title: "Collaboration in Practice",
    subtitle: "How content designers work with PMs, designers, engineers, and researchers.",
    steps: [
      { label: "Understand PRD", detail: "Goals, constraints, user intent" },
      { label: "Review Figma", detail: "Flows, states, edge cases" },
      { label: "Write copydoc", detail: "Drafts, rationale, variants" },
      { label: "Collaborate", detail: "PM, design, engineering" },
      { label: "Validate & ship", detail: "Review, test, release" },
    ],
    note: "Includes guidance on using AI responsibly during drafting and review.",
  },
  productExamples: {
    title: "Real Product Examples",
    subtitle: "We'll analyze real product decisions and discuss the thinking behind them.",
    prompts: [
      "What was the user trying to do at this moment?",
      "Why this word, this label, this structure?",
      "What would happen if we removed or changed this copy?",
    ],
  },
  resources: {
    title: "Learning Resources",
    subtitle: "Keep learning beyond the workshop.",
    description:
      "Curated references for new writers, designers, and PMs to continue building content design fluency.",
    items: [
      { title: "UX Writing articles", type: "Articles" },
      { title: "Design system references", type: "Systems" },
      { title: "Style guides & terminology", type: "Guides" },
      { title: "Workshop follow-ups", type: "Internal" },
    ],
  },
} as const;

export type WorkshopPresentationSlideId =
  | "cover"
  | "agenda"
  | "understanding"
  | "process"
  | "principles"
  | "enterprise"
  | "ui-components"
  | "collaboration"
  | "product-examples"
  | "resources";

export const workshopPresentationSlideOrder: WorkshopPresentationSlideId[] = [
  "cover",
  "agenda",
  "understanding",
  "process",
  "principles",
  "enterprise",
  "ui-components",
  "collaboration",
  "product-examples",
  "resources",
];
