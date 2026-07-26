export const aiTrustCaseStudy = {
  slug: "ai-design",
  title: "Designing trustworthy AI conversations",
  subtitle: "How content design shaped an AI-powered financial assistant.",
  product: "Veda AI",
  company: "B2B Fintech",
  role: "Content Engineer & Content Designer",
  year: "2024",
  duration: "6 months",
  tags: ["Conversation Design", "AI Governance", "Content Strategy"],
  metrics: [
    { value: "38%", label: "Fewer escalations to human support" },
    { value: "4.2→4.6", label: "Trust rating in post-session surveys" },
    { value: "12", label: "Reusable response frameworks shipped" },
  ],
};

export const aiTrustChapters = [
  { id: "context", label: "The problem" },
  { id: "discovery", label: "Discovery" },
  { id: "system", label: "The system" },
  { id: "trust", label: "Trust by design" },
  { id: "proof", label: "Proof" },
  { id: "outcomes", label: "Outcomes" },
] as const;

export const aiTrustCollaboration = {
  partners: "Product lead, ML engineering, and support ops",
  quote:
    "The frameworks gave us a shared language in reviews. We stopped debating adjectives and started debating intent.",
};

export const aiTrustContent = {
  overview:
    "Veda AI is a financial assistant embedded in a B2B fintech platform. My work focused on the content layer: how the assistant introduces itself, interprets intent, responds under uncertainty, and recovers when it cannot act. The goal was not a clever chatbot, but a trustworthy product surface.",
  problem:
    "Early versions sounded confident but vague. Users could not tell what the assistant could do, when data was being accessed, or what would happen if an answer was wrong. In finance, that ambiguity erodes trust faster than a delayed response.",
  audience:
    "Primary users were finance operators and business admins, not developers. They were time-poor, risk-aware, and often multitasking while reconciling payments or reviewing reports. They needed clarity, not personality for its own sake.",
  intent:
    "Most sessions clustered around a small set of intents: account status, transaction lookup, report interpretation, setup guidance, and escalation to human support. The system needed to recognize intent early and route to the right response framework.",
  research: [
    "Reviewed support tickets and chat transcripts for repeated confusion points",
    "Ran comprehension tests on response drafts with finance operators",
    "Mapped failure modes with engineering: hallucination, stale data, policy blocks",
    "Benchmarked AI assistants in fintech for trust patterns, not novelty",
  ],
  principles: [
    { title: "Lead with capability", description: "Tell users what the assistant can and cannot do before they ask." },
    { title: "Show your work", description: "Reference data sources and time ranges when presenting financial information." },
    { title: "Recover, don't perform", description: "When uncertain, clarify or escalate instead of guessing." },
    { title: "Match severity to stakes", description: "Tone stays calm; urgency reflects financial impact, not alarm." },
  ],
  ia:
    "Conversation IA separated entry, intent confirmation, task execution, and closure. Each state had defined content slots: greeting, scope reminder, action summary, and next-step affordances.",
  voice:
    "Voice was professional, plain, and precise. Tone shifted by moment: onboarding was welcoming, task responses were direct, errors were calm and specific, and compliance-bound refusals were respectful without being vague.",
  frameworks:
    "Twelve response frameworks covered the highest-volume intents. Each framework defined structure, required metadata, fallback paths, and escalation triggers.",
  prompts:
    "Prompt design paired system instructions with structured output schemas. Content design owned intent labels, user-facing framing, and refusal copy; engineering owned model routing and tool calls.",
  guardrails:
    "Guardrails blocked unsupported actions, masked sensitive fields, enforced policy refusals, and required confidence thresholds before surfacing computed answers.",
  modeling:
    "Content models defined slots for intent, entities, confidence, source attribution, and user-facing actions. This let teams reuse patterns across flows without rewriting copy per screen.",
  flows:
    "Core flows included balance lookup, payout status, report summaries, setup walkthroughs, and handoff to human support. Each flow documented entry conditions, branch points, and exit criteria.",
  edgeCases:
    "Edge cases covered stale data, partial permissions, ambiguous entity matches, model timeouts, and requests outside policy. Each had a documented recovery path.",
  evaluation:
    "We evaluated drafts against clarity, trust, actionability, and policy compliance. Sessions were scored in review rubrics before release and monitored via CSAT and escalation rate post-launch.",
  final:
    "The shipped experience set expectations upfront, confirmed intent before acting, attributed financial data to sources, and offered human support without making users hunt for it.",
  impact: [
    "Support escalations dropped as users got clearer first responses",
    "Trust scores improved in post-session surveys",
    "Response frameworks became the default template for new AI features",
    "Cross-functional reviews shortened because guardrails were documented",
  ],
  learnings: [
    "Trust in financial AI is a content problem as much as a model problem",
    "The best conversation design reduces user anxiety before it reduces word count",
    "Governance artifacts should live beside the design system, not in a separate wiki",
  ],
};

export const intentMap = [
  { intent: "Account status", volume: "High", route: "Status framework" },
  { intent: "Transaction lookup", volume: "High", route: "Lookup framework" },
  { intent: "Report summary", volume: "Medium", route: "Summary framework" },
  { intent: "Setup help", volume: "Medium", route: "Guidance framework" },
  { intent: "Human support", volume: "Low", route: "Escalation framework" },
];

export const conversationTree = {
  root: "User opens assistant",
  branches: [
    { label: "Known intent", children: ["Confirm entities", "Run tool", "Respond with source"] },
    { label: "Ambiguous intent", children: ["Ask clarifying question", "Offer options"] },
    { label: "Out of scope", children: ["Policy refusal", "Suggest alternative"] },
  ],
};

export const toneComparisons = [
  { context: "Successful lookup", before: "Here you go!", after: "Found 3 payouts for Acme Corp in the last 7 days." },
  { context: "Uncertain match", before: "I think this is right.", after: "I found two accounts named Acme. Which one did you mean?" },
  { context: "Policy block", before: "Sorry, I can't help.", after: "I can't modify billing settings. I can connect you with support." },
];

export const beforeAfterResponses = [
  {
    user: "What's my payout status?",
    before: "Your payout is processing.",
    after: "Payout #4821 for ₹2,40,000 is processing. Expected completion: 18 Jan, 6 PM IST. Source: Payments API, updated 2 min ago.",
  },
  {
    user: "Why did this fail?",
    before: "An error occurred.",
    after: "The payout failed because the beneficiary IFSC was invalid. Fix the IFSC in Recipients and retry.",
  },
];

export const decisionMatrix = {
  headers: ["Signal", "Low confidence", "High confidence"],
  rows: [
    ["Entity match", "Ask clarifying question", "Proceed with lookup"],
    ["Policy sensitivity", "Refuse + explain", "Proceed with attribution"],
    ["Data freshness", "Disclose staleness", "Respond normally"],
  ],
};

export const guardrailLayers = [
  { layer: "Input", rules: ["PII detection", "Prompt injection filter", "Scope classifier"] },
  { layer: "Reasoning", rules: ["Tool allowlist", "Confidence threshold", "Source requirement"] },
  { layer: "Output", rules: ["Policy refusal templates", "Mask sensitive fields", "Escalation triggers"] },
];

export const promptExample = {
  system: "You are Veda AI, a financial assistant for business admins. Be precise, cite data sources, and ask clarifying questions when entity matches are ambiguous. Never invent balances or payout states.",
  user: "Show payouts for Acme last week",
  assistant:
    "I found 3 payouts for Acme Corp between 8–14 Jan. Total: ₹6,12,000. Want the breakdown by status or recipient?",
};

export const responseTemplate = {
  slots: ["Context acknowledgment", "Primary answer", "Source attribution", "Next step or confirmation"],
  example: {
    acknowledgment: "Checking payouts for Acme Corp (8–14 Jan).",
    answer: "3 payouts totaling ₹6,12,000 — 2 completed, 1 processing.",
    attribution: "Source: Payments API · Updated 2 min ago",
    next: "Would you like details for the processing payout?",
  },
};

export const contentModel = [
  { field: "intent", type: "enum", purpose: "Route to response framework" },
  { field: "entities", type: "array", purpose: "Accounts, dates, amounts referenced" },
  { field: "confidence", type: "score", purpose: "Trigger clarify vs answer" },
  { field: "sources", type: "array", purpose: "User-facing attribution" },
  { field: "actions", type: "array", purpose: "CTAs and escalation paths" },
];

export const conversationScenarios = [
  {
    id: "lookup",
    label: "Payout lookup",
    messages: [
      { role: "assistant", text: "I can help with payouts, balances, and reports. What would you like to check?" },
      { role: "user", text: "Status for Acme payout this week" },
      { role: "assistant", text: "Payout #4821 for Acme Corp (₹2,40,000) is processing. Expected completion: 18 Jan, 6 PM IST. Source: Payments API." },
    ],
  },
  {
    id: "clarify",
    label: "Ambiguous entity",
    messages: [
      { role: "user", text: "Show balance for Acme" },
      { role: "assistant", text: "I found two accounts: Acme Corp (Operating) and Acme Retail. Which balance should I pull?" },
    ],
  },
  {
    id: "escalate",
    label: "Policy escalation",
    messages: [
      { role: "user", text: "Change the tax setting on this account" },
      { role: "assistant", text: "I can't modify tax settings here. I can connect you with support or share the settings doc." },
    ],
  },
];

export const flowSteps = [
  "Greet + set capability scope",
  "Detect intent",
  "Confirm entities if needed",
  "Fetch via tool with attribution",
  "Respond using framework",
  "Offer next step or close",
];
