export const contentSystemsHub = {
  slug: "content-systems",
  title: "Content Systems & Content Modeling",
  subtitle: "Designing systems that help teams create consistent content at scale.",
  description:
    "From reusable frameworks to governance and localization, these projects focus on building scalable content systems rather than individual screens.",
  role: "Content Engineer & Content Designer",
  year: "2023–2024",
};

export type SystemStudyLayout = "framework" | "language" | "voice";

export interface SystemPrinciple {
  title: string;
  description: string;
}

export interface SystemExample {
  label: string;
  context: string;
  output: string;
}

export interface SystemTableRow {
  cells: string[];
}

export interface SystemStudy {
  slug: string;
  title: string;
  teaser: string;
  layout: SystemStudyLayout;
  problem: string;
  whySystemNeeded: string;
  research: string[];
  principles: SystemPrinciple[];
  framework: string;
  frameworkNodes?: string[];
  examples: SystemExample[];
  patternTable?: SystemTableRow[];
  taxonomyLevels?: { label: string; items: string[] }[];
  toneDimensions?: { label: string; left: string; right: string }[];
  implementation: string[];
  collaboration: string[];
  impact: string[];
  lessonsLearned: string[];
  collaborationQuote?: string;
  collaborationPartners?: string;
}

function study(
  slug: string,
  title: string,
  teaser: string,
  layout: SystemStudyLayout,
  problem: string,
  why: string,
  extras?: Partial<SystemStudy>
): SystemStudy {
  return {
    slug,
    title,
    teaser,
    layout,
    problem,
    whySystemNeeded: why,
    research: [
      "Audited existing patterns across product surfaces and support channels",
      "Interviewed engineers, designers, and support on where content breaks down",
      "Reviewed analytics and tickets tied to confusion or inconsistent messaging",
      "Benchmarked design-system and content-system models from adjacent products",
    ],
    principles: [
      { title: "System over screens", description: "Decisions should scale through reusable rules, not one-off copy." },
      { title: "Shared vocabulary", description: "Teams need the same terms for states, severity, and user outcomes." },
      { title: "Documented rationale", description: "Every rule includes why it exists so teams can adapt without drift." },
      { title: "Built for maintenance", description: "Systems include ownership, review paths, and update triggers." },
    ],
    framework: "A structured model that connects user context, content intent, and reusable patterns to implementation.",
    examples: [
      { label: "Pattern applied", context: "High-traffic flow", output: "Consistent structure across teams" },
      { label: "Edge case handled", context: "Rare failure state", output: "Documented fallback without bespoke copy" },
    ],
    implementation: [
      "Published system documentation in the team wiki and design system",
      "Added Figma and code references teams could adopt directly",
      "Ran office hours for PM, design, and engineering during rollout",
      "Integrated checks into content review and QA where possible",
    ],
    collaboration: [
      "Partnered with design systems on component-level content slots",
      "Aligned with engineering on string keys, fallbacks, and localization hooks",
      "Worked with support and compliance on high-risk message categories",
    ],
    impact: [
      "Reduced one-off content debates in feature reviews",
      "Fewer inconsistencies flagged in QA and support escalations",
      "Faster onboarding for new writers and contributors",
    ],
    lessonsLearned: [
      "Systems succeed when they reduce decisions, not add documentation for its own sake",
      "Visual models help cross-functional partners adopt rules faster than prose alone",
      "Start with the messiest, highest-volume surface area and expand from there",
    ],
    ...extras,
  };
}

export const systemStudies: SystemStudy[] = [
  study(
    "error-message-framework",
    "Error Message Framework",
    "A decision-led model for classifying, writing, and implementing errors across a B2B platform.",
    "framework",
    "Errors were written screen by screen. Severity, tone, and next steps varied by team, creating user mistrust and support load.",
    "Without a shared error taxonomy, teams reinvented structure for every failure state. Engineering hard-coded strings; design lacked a severity model; support could not predict what users would see.",
    {
      framework: "A severity-first taxonomy that routes every error to a recovery pattern, source attribution, and escalation path.",
      frameworkNodes: ["Detect", "Classify severity", "Select pattern", "Surface recovery", "Log & learn"],
      principles: [
        { title: "Severity first", description: "Classify impact before writing a single word." },
        { title: "Recovery-led", description: "Every error should answer what happened and what to do next." },
        { title: "Plain language", description: "Avoid codes and internal jargon in user-facing copy." },
        { title: "Consistent structure", description: "Title, explanation, and action follow the same anatomy." },
      ],
      patternTable: [
        { cells: ["Severity", "User sees", "Action pattern", "Example"] },
        { cells: ["Critical", "Blocked task", "Primary + support", "Payment failed — update method"] },
        { cells: ["Recoverable", "Partial success", "Retry or fix", "Upload incomplete — retry file"] },
        { cells: ["Informational", "FYI only", "Dismiss", "Sync delayed — still processing"] },
      ],
      examples: [
        { label: "Before system", context: "Generic alert", output: "Error occurred. Try again." },
        { label: "After system", context: "Recoverable upload", output: "Upload incomplete. Check file size and retry." },
        { label: "After system", context: "Critical billing", output: "Payment failed. Update billing to keep campaigns running." },
      ],
      implementation: [
        "Embedded severity tokens in the design system for alert, banner, and inline patterns",
        "Published decision tree and pattern table in Figma and engineering docs",
        "Partnered with support to align ticket categories with user-facing severity labels",
      ],
      impact: [
        "Support tickets citing vague errors down 31% in pilot flows",
        "Error review time in QA dropped from ad hoc to checklist-driven",
        "Three product squads adopted the framework without custom copy reviews",
      ],
      collaborationQuote: "We finally had a shared way to argue about errors without rewriting them in every review.",
      collaborationPartners: "Engineering lead and support operations",
    }
  ),
  study(
    "hinglish-framework",
    "Hinglish Framework",
    "A localization model for balancing English, Hinglish, and Hindi across product surfaces.",
    "language",
    "India-first products needed language that felt natural without sacrificing clarity for business users operating in English.",
    "Ad hoc mixing of English and Hindi created inconsistency across flows. Marketing, product, and support each made different calls on register, script, and transliteration.",
    {
      framework: "A register map that ties surface type, user mindset, and script choice to review ownership.",
      taxonomyLevels: [
        { label: "Formal English", items: ["Settings", "Compliance", "Billing"] },
        { label: "Hinglish (Roman)", items: ["Onboarding", "Notifications", "Help prompts"] },
        { label: "Hindi (Devanagari)", items: ["Legal", "IVR", "Regional campaigns"] },
      ],
      principles: [
        { title: "Context-driven register", description: "Language choice follows user mindset, not personal preference." },
        { title: "Predictable mixing", description: "Hinglish follows documented patterns for verbs, nouns, and CTAs." },
        { title: "Script integrity", description: "When Hindi is used, typography and line length rules apply." },
        { title: "Test for comprehension", description: "Validate with users across metros and tier-2 markets." },
      ],
      examples: [
        { label: "English", context: "Empty state", output: "No campaigns yet. Create your first campaign." },
        { label: "Hinglish", context: "Empty state", output: "Abhi koi campaign nahi hai. Apna pehla campaign banayein." },
        { label: "Hinglish", context: "Success toast", output: "Campaign save ho gaya." },
      ],
      patternTable: [
        { cells: ["Surface", "Register", "Script", "Review owner"] },
        { cells: ["Dashboard labels", "English", "Latin", "Content"] },
        { cells: ["Push notifications", "Hinglish", "Latin", "Content + Marketing"] },
        { cells: ["Legal disclaimers", "Hindi", "Devanagari", "Legal + Content"] },
      ],
      research: [
        "Interviewed users in Mumbai, Bengaluru, and Jaipur on comprehension of mixed-language UI",
        "Audited 240 strings across onboarding, notifications, and lifecycle email",
        "Aligned with localization on script, line length, and transliteration rules",
      ],
      implementation: [
        "Shipped register matrix as the first page teams see in localization reviews",
        "Added Hinglish examples to component specs, not just the style guide",
        "Ran bilingual comprehension checks before major campaign launches",
      ],
      impact: [
        "Localization review cycles shortened with fewer back-and-forth edits",
        "Marketing and product stopped duplicating conflicting translation decisions",
        "User testing showed higher comprehension for Hinglish notifications vs English-only",
      ],
      collaborationQuote: "The matrix settled arguments we used to have in every campaign review.",
      collaborationPartners: "Localization lead and marketing",
    }
  ),
  study(
    "voice-tone-system",
    "Voice & Tone System",
    "A governance model for voice, tone, and terminology across product and lifecycle touchpoints.",
    "voice",
    "Voice drifted as new teams shipped features. The product sounded different in onboarding, errors, and lifecycle email.",
    "A voice document alone was not enough. Teams needed tone guidance by context, terminology rules, and a review model tied to the design system.",
    {
      framework: "Voice attributes stay fixed; tone adapts by context with documented examples and terminology locks.",
      toneDimensions: [
        { label: "Confidence", left: "Tentative", right: "Assured" },
        { label: "Energy", left: "Calm", right: "Motivating" },
        { label: "Formality", left: "Conversational", right: "Professional" },
      ],
      principles: [
        { title: "Voice is stable", description: "Personality stays constant across the product." },
        { title: "Tone adapts", description: "Tone shifts by moment — onboarding vs error vs success." },
        { title: "Terminology is contractual", description: "Preferred terms are documented and enforced." },
        { title: "Examples over adjectives", description: "Show tone through samples, not vague descriptors." },
      ],
      examples: [
        { label: "Onboarding tone", context: "First-run", output: "Direct, encouraging, outcome-led" },
        { label: "Error tone", context: "Failed action", output: "Calm, specific, recovery-led" },
        { label: "Lifecycle tone", context: "Re-engagement", output: "Professional, respectful, value-led" },
      ],
      frameworkNodes: ["Voice attributes", "Tone by context", "Terminology", "Review & governance"],
      implementation: [
        "Moved voice guidance into the design system beside components, not a standalone PDF",
        "Created tone examples for onboarding, errors, success, and lifecycle email",
        "Set terminology locks for billing and compliance terms with legal sign-off",
      ],
      impact: [
        "New feature copy reviews referenced shared examples instead of starting from scratch",
        "Voice drift across squads reduced in quarterly content audits",
        "PMs could evaluate tone with samples, not abstract adjectives",
      ],
      collaborationQuote: "It gave design and PM the same reference point when tone felt off.",
      collaborationPartners: "Design system team and product marketing",
    }
  ),
];

export function getSystemStudy(slug: string): SystemStudy | undefined {
  return systemStudies.find((item) => item.slug === slug);
}
