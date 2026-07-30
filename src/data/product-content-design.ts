export const productContentDesignHub = {
  slug: "product-content-design",
  title: "UX Writing Showcase",
  description:
    "A collection of UX writing examples, product content, and a published blog across fintech and B2B products.",
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
  researchSectionLabel?: string;
  explorationTableLabel?: string;
  showExplorationInFindings?: boolean;
  approachParagraphs?: string[];
  approachHighlight?: string;
  solutionParagraphs?: string[];
  solutionParagraphHighlights?: string[][];
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

export const writingExampleChapterTitles = {
  approach: "Approach",
  findings: "Findings",
  solution: "Final version",
  outcome: "Key learning",
} as const;

export function getWritingExampleIntro(example: WritingExample): string[] {
  return [example.overview, example.problem].filter(Boolean);
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
      id: "approach",
      label: example.chapterTitles?.approach ?? writingExampleChapterTitles.approach,
    },
  ];

  if (
    (example.findings && example.findings.length > 0) ||
    example.findingsIntro ||
    (example.findingsBullets &&
      example.findingsBullets.length > 0 &&
      !example.approachParagraphs?.length) ||
    example.showExplorationInFindings
  ) {
    sections.push({
      id: "findings",
      label: example.chapterTitles?.findings ?? writingExampleChapterTitles.findings,
    });
  }

  sections.push({
    id: "solution",
    label: example.chapterTitles?.solution ?? writingExampleChapterTitles.solution,
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
      label: example.chapterTitles?.outcome ?? writingExampleChapterTitles.outcome,
    });
  }

  return sections;
}

export const writingExamples: WritingExample[] = [
  {
    slug: "first-run-experience",
    title: "First Run Experience",
    teaser:
      "Improving the first experience of creating an NPS campaign by simplifying the content and reducing unnecessary decisions.",
    overview:
      "This project focused on improving the first step of creating an NPS campaign. Instead of adding more guidance, I simplified the experience by removing unnecessary content and moving channel selection into the action itself.",
    problem: "",
    myRole: "",
    constraints: [],
    research: [],
    optionsExplored: [],
    approachParagraphs: [
      "The original screen tried to explain everything before users could get started. It introduced campaign channels, relied on instructional copy, and added information before users needed it.",
      "Instead of rewriting the content, I asked a different question:",
      "The primary button already communicated the next step, making much of the supporting copy repetitive. Explaining every channel upfront also increased cognitive load.",
      "Rather than adding more content, I explored whether a simpler interaction could remove the need for those explanations.",
    ],
    approachHighlight: "Does this information need to be shown here at all?",
    contentDecisions: [],
    comparison: {
      before: "Existing",
      after: "Final version",
      showSlider: false,
    },
    finalSolution:
      "I rewrote the heading to feel more welcoming and removed supporting copy that users didn't need before getting started. I also moved channel selection into the Create Campaign action, allowing users to choose a channel only when they were ready. This reduced upfront information and made the flow easier to understand.",
    solutionParagraphs: [
      "I rewrote the heading to feel more welcoming and removed supporting copy that users didn't need before getting started.",
      "I also moved channel selection into the Create Campaign action, allowing users to choose a channel only when they were ready. This reduced upfront information and made the flow easier to understand.",
    ],
    solutionParagraphHighlights: [[], ["Create Campaign"]],
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
      "Choosing familiar language for a mutual fund investment journey designed for Tier 2–4 users.",
    overview:
      "While designing the mutual fund investment journey, we needed to choose between One-time and Lumpsum for a one-time investment.",
    problem:
      "Instead of relying on industry terminology, I researched how people understood both terms before making a recommendation.",
    myRole: "",
    researchLead: "To validate the decision, I:",
    constraints: [],
    research: [
      "Reviewed financial blogs and industry terminology",
      "Compared naming across investment apps",
      "Discussed the options with the product team",
      "Ran a hallway test with colleagues who had no investing background",
    ],
    optionsExplored: [],
    findings: [
      "Most investment apps used One-time instead of Lumpsum.",
      "During hallway testing, people understood One-time immediately, while Lumpsum often needed additional explanation.",
      "The research consistently showed that familiar language made the option easier to understand.",
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
      "We chose One-time because it was more familiar, easier to understand, and communicated the same financial concept without adding complexity.",
    impact: [
      "Industry terms aren't always the clearest choice. Using familiar language can reduce confusion and help users make decisions with greater confidence.",
    ],
    keyLearnings: [
      "Industry terms aren't always the clearest choice",
      "Using familiar language can reduce confusion and help users make decisions with greater confidence",
    ],
    pullQuote:
      "Using familiar language can reduce confusion and help users make decisions with greater confidence.",
    gallery: [],
  },
  {
    slug: "confirmation-dialog",
    title: "Confirmation Dialog",
    teaser:
      "Rewriting a confirmation dialog to confirm user intent instead of encouraging users to save.",
    overview:
      "While designing a campaign creation flow, I rewrote the confirmation dialog shown when users tried to leave without saving.",
    problem:
      "The goal was to clearly communicate the consequence of leaving while keeping the decision neutral.",
    myRole: "",
    approachParagraphs: [
      "Before writing the copy, I focused on understanding the user's intent rather than the system's state.",
    ],
    researchLead: "Questions I explored:",
    constraints: [],
    research: [
      "What is the user trying to do?",
      "What action should the dialog confirm?",
      "Are we unintentionally encouraging users to save?",
      "What information do users need before deciding?",
    ],
    collaboration:
      "I also worked with the Product Manager to understand how users behaved in this flow and whether saving was actually their intention.",
    optionsExplored: [],
    showExplorationInFindings: true,
    findingsIntro:
      "Most versions focused on the system's state—saving or discarding changes—rather than the user's actual action.",
    findings: [
      "As I explored different directions, it became clear that the dialog wasn't asking users to save their work. It was simply confirming that they wanted to leave the page.",
    ],
    optionsComparisonTable: [
      {
        label: "Save progress",
        rationale: "\"Progress\" is vague and open to interpretation.",
      },
      {
        label: "Save changes",
        rationale: "Focuses on the system instead of the user's action.",
      },
      {
        label: "Save edits",
        rationale: "Still frames the decision around saving rather than leaving.",
      },
      {
        label: "Discard changes",
        rationale: "Assumes users want to discard their work.",
      },
      {
        label: "Leave page",
        rationale: "Clearly confirms what the user is trying to do.",
        selected: true,
      },
    ],
    explorationTableLabel: 'Why we chose "Leave page"',
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
      "The final dialog confirmed the user's intention, clearly explained the consequence of leaving, and stayed neutral without encouraging either choice.",
    solutionParagraphs: [
      "The final dialog confirmed the user's intention, clearly explained the consequence of leaving, and stayed neutral without encouraging either choice.",
    ],
    impact: [
      "Confirmed the user's action instead of the system's state.",
      "Kept the copy neutral without nudging users toward saving.",
      "Made the consequence of leaving clear before users made a decision.",
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
