export const productContentDesignHub = {
  slug: "product-content-design",
  title: "Product Content Design",
  context: "Examples from B2B Martech and Fintech",
  description:
    "A collection of UX writing examples showing the challenge, reasoning, iterations, and final outcome behind each decision.",
  role: "Content Designer",
  year: "2023–2024",
};

export interface WritingExampleSection {
  id: string;
  label: string;
}

export const writingExampleSections: WritingExampleSection[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My Role" },
  { id: "constraints", label: "Constraints" },
  { id: "research", label: "Research" },
  { id: "options", label: "Options Explored" },
  { id: "decisions", label: "Content Decisions" },
  { id: "comparison", label: "Before & After" },
  { id: "solution", label: "Final Solution" },
  { id: "impact", label: "Impact" },
  { id: "learnings", label: "Key Learnings" },
];

export interface WritingExampleComparison {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeMockup?: string;
  afterMockup?: string;
  showSlider?: boolean;
}

export interface WritingExampleGalleryItem {
  id: string;
  caption: string;
  alt: string;
  src?: string;
  mockup?: string;
}

export interface WritingExampleOptionRow {
  label: string;
  rationale: string;
  selected?: boolean;
}

export interface WritingExampleDialogCopy {
  title: string;
  body: string;
  primary: string;
  secondary: string;
}

export interface WritingExampleIterationImage {
  label?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WritingExample {
  slug: string;
  title: string;
  teaser: string;
  overview: string;
  problem: string;
  myRole: string;
  constraints: string[];
  research: string[];
  optionsExplored: { label: string; description: string; rejected?: boolean }[];
  explorationIntro?: string;
  optionsComparisonTable?: WritingExampleOptionRow[];
  dialogExplorations?: WritingExampleDialogCopy[];
  dialogExplorationPair?: WritingExampleDialogCopy[];
  collaboration?: string;
  contentDecisions: string[];
  comparison: WritingExampleComparison;
  finalSolution: string;
  impact: string[];
  keyLearnings: string[];
  pullQuote: string;
  gallery: WritingExampleGalleryItem[];
  chapterTitles?: {
    moment?: string;
    approach?: string;
    findings?: string;
    solution?: string;
    outcome?: string;
  };
  findings?: string[];
  findingsIntro?: string;
  findingsBullets?: string[];
  findingsClosing?: string;
  researchLead?: string;
  approachParagraphs?: string[];
  solutionParagraphs?: string[];
  iterationImages?: WritingExampleIterationImage[];
  additionalComparisons?: WritingExampleComparisonBlock[];
}

export interface WritingExampleComparisonBlock {
  label?: string;
  intro?: string[];
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeMockup?: string;
  afterMockup?: string;
}

export function toWritingExampleSectionId(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getWritingExampleSections(example: WritingExample): WritingExampleSection[] {
  const sections: WritingExampleSection[] = [
    {
      id: "moment",
      label: example.chapterTitles?.moment ?? "The user moment",
    },
    {
      id: "approach",
      label: example.chapterTitles?.approach ?? "How I approached it",
    },
  ];

  if (
    (example.findings && example.findings.length > 0) ||
    example.findingsIntro ||
    (example.findingsBullets &&
      example.findingsBullets.length > 0 &&
      !example.approachParagraphs?.length)
  ) {
    sections.push({
      id: "findings",
      label: example.chapterTitles?.findings ?? "What I found",
    });
  }

  sections.push({
    id: "solution",
    label: example.chapterTitles?.solution ?? "What we shipped",
  });

  example.additionalComparisons?.forEach((block) => {
    if (block.label) {
      sections.push({
        id: toWritingExampleSectionId(block.label),
        label: block.label,
      });
    }
  });

  if (example.chapterTitles?.outcome || example.impact.length > 0) {
    sections.push({
      id: "outcome",
      label: example.chapterTitles?.outcome ?? "What changed",
    });
  }

  return sections;
}

function example(
  slug: string,
  title: string,
  teaser: string,
  focus: string,
  problemDetail: string,
  before: string,
  after: string
): WritingExample {
  return {
    slug,
    title,
    teaser,
    overview: `${focus} In a B2B SaaS workflow used by enterprise teams, small copy changes shaped whether users understood risk, moved forward, or abandoned a task.`,
    problem: problemDetail,
    myRole: "Owned UX writing from discovery through delivery. Partnered with product and design to define user goals, draft alternatives, test comprehension, and document patterns for reuse.",
    constraints: [
      "Enterprise admins needed precision; casual copy eroded trust",
      "Legal and compliance review required for high-risk actions",
      "Strings had strict character limits in compact UI surfaces",
      "Product supported multiple locales and had to stay translation-friendly",
    ],
    research: [
      "Reviewed support tickets and session replays for hesitation points",
      "Ran lightweight comprehension checks with internal CS and sales teams",
      "Mapped the task flow with PM and design to find decision moments",
      "Benchmarked patterns from adjacent B2B products for clarity, not novelty",
    ],
    optionsExplored: [
      {
        label: "Minimal copy",
        description: "Short labels with detail deferred to tooltips.",
        rejected: true,
      },
      {
        label: "Explicit copy",
        description: "Surface consequences directly in the primary UI.",
      },
      {
        label: "Progressive disclosure",
        description: "Primary action stays clean; secondary panel adds context.",
      },
    ],
    contentDecisions: [
      "Led with the user outcome, not system language",
      "Named the object and action in plain terms",
      "Separated reversible vs irreversible actions in tone and structure",
      "Matched severity to visual hierarchy and button emphasis",
    ],
    comparison: { before, after, beforeLabel: "Before", afterLabel: "After" },
    finalSolution: `Shipped copy that reduced ambiguity at the decision point, aligned with design system patterns, and gave CS a consistent narrative when users asked for help.`,
    impact: [
      "Fewer support questions about this step in the flow",
      "Higher completion rate on the primary task in usability testing",
      "Pattern adopted in adjacent flows across the product",
    ],
    keyLearnings: [
      "Clarity beats brevity when money, data, or access is at stake",
      "The best UX writing makes the next step feel obvious, not clever",
      "Documenting rationale helps teams reuse decisions under new constraints",
    ],
    pullQuote: "Good product copy does not explain the interface. It helps someone decide with confidence.",
    gallery: [
      { id: "flow", caption: "Task flow with decision point highlighted", alt: "User flow diagram" },
      { id: "wire", caption: "Early wireframe with copy annotations", alt: "Wireframe screenshot" },
      { id: "final", caption: "Final UI in context", alt: "Final interface screenshot" },
    ],
  };
}

export const writingExamples: WritingExample[] = [
  {
    slug: "first-run-experience",
    title: "First Run Experience",
    teaser:
      "Improving the first experience of creating an NPS campaign by simplifying copy and moving channel choice into the action.",
    chapterTitles: {
      moment: "Overview",
      approach: "Thought process",
      solution: "Explorations",
    },
    overview:
      "This project focused on improving the first experience of creating an NPS campaign. The existing screen felt negative and overloaded users with information before they could even get started.",
    problem: "",
    myRole: "",
    constraints: [],
    research: [],
    optionsExplored: [],
    approachParagraphs: [
      "The original design tried to explain everything upfront. It introduced campaign channels, explained what users needed to do, and relied heavily on instructional copy.",
      "Instead of asking how I could rewrite the content, I asked whether users needed this information at all.",
      "The button already communicated the next step, so the body copy felt repetitive. Explaining different campaign channels before users had taken any action also added unnecessary complexity.",
      "Rather than writing more content, I explored whether the interaction itself could reduce the need for explanation.",
    ],
    contentDecisions: [],
    comparison: {
      before: "Existing",
      after: "Final version",
      showSlider: false,
    },
    finalSolution:
      "I rewrote the heading to feel more welcoming and simplified the supporting copy. More importantly, I suggested adding a dropdown to the Create Campaign button so users could choose a channel directly from the action. This removed the need to explain every option upfront and made the flow easier to understand.",
    solutionParagraphs: [
      "I rewrote the heading to feel more welcoming and simplified the supporting copy.",
      "More importantly, I suggested adding a dropdown to the Create Campaign button so users could choose a channel directly from the action. This removed the need to explain every option upfront and made the flow easier to understand.",
    ],
    impact: [],
    keyLearnings: [
      "Content design isn't always about writing better copy",
      "Changing the interaction can remove the need for copy altogether",
    ],
    pullQuote: "Sometimes changing the interaction removes the need for copy altogether.",
    gallery: [],
  },
  {
    slug: "one-time-vs-lumpsum",
    title: "One-time vs Lumpsum",
    teaser:
      "Choosing familiar language for a mutual fund investment journey built for Tier 2–4 users.",
    chapterTitles: {
      moment: "Overview",
      approach: "My approach",
      findings: "What I found",
      solution: "Final decision",
      outcome: "Key learning",
    },
    overview:
      "While designing the mutual fund investment journey for a fintech app built for Tier 2–4 users, we had to decide whether to call the investment option One-time or Lumpsum.",
    problem:
      "Instead of relying on assumptions or industry terminology, I researched how people understood both terms before making a recommendation.",
    myRole: "To make an informed decision, I:",
    constraints: [],
    research: [
      "Reviewed financial blogs and articles",
      "Compared how other investment apps named the same investment type",
      "Discussed the options with my team",
      "Ran a quick hallway test with our help staff, who had no investing background",
    ],
    optionsExplored: [],
    findings: [
      "Most investment apps used One-time instead of Lumpsum.",
      "During hallway testing, people understood One-time immediately. Lumpsum often needed an explanation, even though both meant the same thing.",
      "This showed that familiar language helped people understand the option faster.",
    ],
    contentDecisions: [],
    comparison: {
      before: "Lumpsum",
      after: "One-time",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeImage: "/work/product-content-design/one-time-vs-lumpsum-before.png",
      afterImage: "/work/product-content-design/one-time-vs-lumpsum-after.png",
    },
    finalSolution:
      "We chose One-time for the investment journey. It used language that people already understood and made the experience easier without changing the financial meaning.",
    impact: [
      "This project reinforced that familiar language is often more effective than industry terminology. A small content decision can reduce confusion and help users make decisions with more confidence.",
    ],
    keyLearnings: [
      "Familiar language is often more effective than industry terminology",
      "A small content decision can reduce confusion and help users make decisions with more confidence",
    ],
    pullQuote:
      "Familiar language is often more effective than industry terminology.",
    gallery: [],
  },
  example(
    "trigger-order-vs-gtt",
    "Trigger Order vs GTT",
    "Translating trading-adjacent concepts into task-oriented language.",
    "Rewrote labels explaining trigger order and good-till-triggered behavior for a workflow panel.",
    "Expert users wanted precision; newer operators needed guardrails. Existing labels assumed market terminology everyone did not share.",
    "Trigger order | GTT",
    "Start when price is hit | Stay active until triggered or cancelled"
  ),
  {
    slug: "confirmation-dialog",
    title: "Confirmation Dialog",
    teaser:
      "Rewriting confirmation dialogs to confirm user intent when leaving without saving.",
    chapterTitles: {
      moment: "Overview",
      approach: "How I approached it",
      solution: "What we shipped",
      outcome: "What changed",
    },
    overview:
      "While designing a campaign creation flow, I needed to rewrite the confirmation dialog shown when users tried to leave without saving.",
    problem:
      "The goal was to help users understand the consequence of their action without influencing their decision.",
    myRole:
      "Before writing the copy, I wanted to understand the user's intent rather than the system's action.",
    constraints: [],
    research: [
      "What is the user trying to do?",
      "Should we confirm leaving the page or saving their work?",
      "Are we unintentionally encouraging users to save?",
      "What information do users need before making a decision?",
    ],
    collaboration:
      "I spoke with the Product Manager to understand how users behaved in this flow and whether saving was actually their intention.",
    optionsExplored: [],
    explorationIntro:
      "Each option focused on the system's state rather than the user's action. The more I explored, the more I realised the dialog wasn't asking users to save or discard. It was simply confirming that they wanted to leave the page.",
    optionsComparisonTable: [
      {
        label: "Save progress",
        rationale: "\"Progress\" can mean different things.",
      },
      {
        label: "Save changes",
        rationale: "Focuses on the system, not the user's action.",
      },
      {
        label: "Save edits",
        rationale: "Frames the choice around the system's state, not leaving the page.",
      },
      {
        label: "Discard changes",
        rationale: "Assumes the user wants to discard.",
      },
      {
        label: "Leave page",
        rationale: "Confirms exactly what the user is trying to do.",
        selected: true,
      },
    ],
    dialogExplorations: [
      {
        title: "Save changes?",
        body: "You have unsaved changes. If you leave without saving you might lose those changes.",
        secondary: "Discard",
        primary: "Save",
      },
      {
        title: "Leave page?",
        body: "You will lose unsaved changes on leaving the page.",
        secondary: "Cancel",
        primary: "Leave",
      },
      {
        title: "Save changes?",
        body: "You will lose unsaved changes on leaving the page.",
        secondary: "Don't Save",
        primary: "Save and close",
      },
      {
        title: "Save changes?",
        body: "You will lose unsaved changes on leaving the page.",
        secondary: "Discard",
        primary: "Save",
      },
      {
        title: "Save changes?",
        body: "You will lose unsaved changes on leaving the page.",
        secondary: "Don't Save",
        primary: "Save & Close",
      },
      {
        title: "Discard unsaved changes?",
        body: "You will lose unsaved changes on leaving the page.",
        secondary: "Cancel",
        primary: "Discard",
      },
    ],
    dialogExplorationPair: [
      {
        title: "Save changes?",
        body: "Changes will be lost if you leave without saving.",
        secondary: "Discard",
        primary: "Save",
      },
      {
        title: "Discard changes?",
        body: "You will lose changes on leaving the page.",
        secondary: "Cancel",
        primary: "Discard",
      },
    ],
    contentDecisions: [],
    comparison: {
      before: "Save changes?",
      after: "Leave page?",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeMockup: "save-changes",
      afterMockup: "leave-page",
      showSlider: false,
    },
    finalSolution:
      "I changed the title to Leave page and used Leave anyway as the primary action. This kept the dialog neutral, confirmed the user's intention, and clearly communicated that unsaved changes would be lost without pushing them towards either option.",
    impact: [
      "The dialog confirmed what the user was trying to do, not what the system wanted them to do",
      "Copy stayed neutral instead of nudging users toward saving",
      "Users could understand the consequence of leaving without extra explanation",
    ],
    keyLearnings: [
      "Confirmation dialogs should confirm the user's action, not influence their decision",
      "Focusing on user intent instead of system actions made the interaction clearer and more natural",
    ],
    pullQuote:
      "Confirmation dialogs should confirm the user's action, not influence their decision.",
    gallery: [],
  },
  {
    slug: "prerequisites",
    title: "Prerequisites",
    teaser:
      "Revising WhatsApp onboarding prerequisites with front-loaded, simpler copy and more helpful CTAs.",
    chapterTitles: {
      moment: "Overview",
      approach: "Thought process",
      solution: "Before & after",
    },
    overview:
      "I revised the prerequisites copy shown before WhatsApp onboarding to help users understand requirements before starting the flow.",
    problem: "",
    myRole: "",
    constraints: [],
    research: [],
    optionsExplored: [],
    approachParagraphs: [
      "The existing copy was dense, passive, and buried the most important requirements. I revised it with four goals in mind:",
    ],
    findingsBullets: [
      "Front-loading content",
      "Simpler language",
      "Clear and concise content",
      "Helpful CTAs",
    ],
    contentDecisions: [],
    comparison: {
      before: "Prerequisites",
      after: "Required to onboard Whatsapp",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeMockup: "prerequisites-before",
      afterMockup: "prerequisites-after",
      showSlider: false,
    },
    finalSolution: "",
    impact: [],
    keyLearnings: [
      "Front-load the most important requirement so users see it first",
      "Helpful link text beats generic policy names",
    ],
    pullQuote: "Front-load the most important requirement so users see it first.",
    gallery: [],
  },
];

export function getWritingExample(slug: string): WritingExample | undefined {
  return writingExamples.find((item) => item.slug === slug);
}
