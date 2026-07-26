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
}

export interface WritingExampleGalleryItem {
  id: string;
  caption: string;
  alt: string;
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
  contentDecisions: string[];
  comparison: WritingExampleComparison;
  finalSolution: string;
  impact: string[];
  keyLearnings: string[];
  pullQuote: string;
  gallery: WritingExampleGalleryItem[];
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
  example(
    "first-run-experience",
    "First Run Experience",
    "Onboarding copy that teaches the product by helping users ship something real.",
    "Shaped first-run copy for a new workspace setup flow.",
    "The first-run experience listed features instead of outcomes. New admins completed tours but still did not know what to do first.",
    "Welcome to the platform",
    "Create your first campaign in three steps"
  ),
  example(
    "one-time-vs-lumpsum",
    "One-time vs Lumpsum",
    "Disambiguating financial terms for non-expert business users.",
    "Clarified copy comparing one-time and recurring payment configurations.",
    "Users conflated billing frequency with payout timing. Misselections led to reconciliation issues and support escalations.",
    "One-time vs Lumpsum",
    "Single payment vs Scheduled payouts"
  ),
  example(
    "trigger-order-vs-gtt",
    "Trigger Order vs GTT",
    "Translating trading-adjacent concepts into task-oriented language.",
    "Rewrote labels explaining trigger order and good-till-triggered behavior for a workflow panel.",
    "Expert users wanted precision; newer operators needed guardrails. Existing labels assumed market terminology everyone did not share.",
    "Trigger order | GTT",
    "Start when price is hit | Stay active until triggered or cancelled"
  ),
  example(
    "confirmation-dialog",
    "Confirmation Dialog",
    "Making destructive actions feel deliberate without adding friction to safe paths.",
    "Redesigned confirmation dialog copy for a high-stakes delete action.",
    "Users paused or cancelled because the dialog sounded alarming but vague. They could not tell what would be deleted or whether the action could be undone.",
    "Delete item?",
    "Delete this report? You can restore it from Archive for 30 days."
  ),
  example(
    "search-experience",
    "Search Experience",
    "Helping power users scan results fast while guiding first-time users.",
    "Refined search placeholder, empty, and zero-results states across a data-heavy dashboard.",
    "Search felt like a generic filter. Users typed internal IDs correctly but missed natural language queries, and empty states offered no recovery path.",
    "Search",
    "Search campaigns, segments, or IDs"
  ),
  example(
    "call-to-action",
    "Call to Action",
    "Turning a generic upgrade prompt into a value-led invitation.",
    "Rewrote primary CTA copy on a feature gate for a premium analytics module.",
    "The CTA described a plan tier, not a user benefit. Trial users hesitated because they did not know what they would unlock.",
    "Upgrade to Pro",
    "Unlock advanced reports"
  ),
  example(
    "prerequisites",
    "Prerequisites",
    "Explaining setup steps before users hit a dead end.",
    "Clarified prerequisite messaging before users could publish an automation.",
    "Users reached a blocked state late in setup. The product listed missing requirements without explaining why they mattered or how long setup would take.",
    "Complete required fields",
    "Add a sender profile before you publish. Takes about 2 minutes."
  ),
  example(
    "snackbars",
    "Snackbars",
    "Balancing confirmation, next steps, and calm in transient feedback.",
    "Standardized snackbar patterns for success, failure, and partial completion.",
    "Snackbars stacked inconsistent verbs and mixed system errors with user mistakes, so people ignored them or opened support tickets unnecessarily.",
    "Error occurred",
    "Campaign not saved. Check audience rules and try again."
  ),
  example(
    "dropdown-labels",
    "Dropdown Labels",
    "Naming options so teams pick the right configuration the first time.",
    "Improved dropdown labels for trigger frequency and audience type.",
    "Similar options used internal jargon. Admins selected the wrong value, causing misconfigured campaigns that were hard to debug.",
    "Type A / Type B",
    "One-time send / Recurring schedule"
  ),
];

export function getWritingExample(slug: string): WritingExample | undefined {
  return writingExamples.find((item) => item.slug === slug);
}
