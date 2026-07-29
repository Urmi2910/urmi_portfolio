export const contentSystemsCaseStudy = {
  slug: "content-systems",
  title: "AI Content Context Engine",
  subtitle:
    "A prototype that helps AI generate consistent UI copy using writing guidelines, approved terminology, and product context.",
  projectType: "Prototype",
  tags: ["Content Systems", "AI", "UI Copy"],
  thesis:
    "Good AI copy doesn't come from better prompts. It comes from better context.",
  overview: {
    paragraphs: [
      "Every product has its own audience, terminology, writing style, and quality standards.",
      "There are plenty of writing guidelines online, but they are often too generic. What sounds human or clear is different for every product.",
      "While building content systems at DreamStreet, I wanted to explore whether the same guidelines that help people write consistently could also help AI.",
      "Instead of relying on one long prompt, this prototype gives AI the right context before it starts writing.",
    ],
  },
  whereItStarted: {
    title: "Where it started",
    paragraphs: [
      "This idea came from real content system work.",
      "I audited existing UI copy across the product, identified recurring patterns, and created reusable writing guidelines.",
      "Each guideline was based on research, product decisions, and validation.",
      "Instead of subjective advice like write naturally, the guidelines defined clear rules with examples.",
      "This gave both people and AI enough context to write consistently.",
    ],
    artifacts: [
      {
        src: "/work/content-systems/toast-audit-screenshot.png",
        alt: "Toast audit showing existing error messages from the product.",
        caption: "Toast audit",
        width: 1024,
        height: 803,
      },
      {
        src: "/work/content-systems/toast-ux-guidelines-reference.png",
        alt: "Toast guidelines documenting when and how to use toast messages.",
        caption: "Toast guidelines",
        width: 931,
        height: 1024,
      },
      {
        src: "/work/content-systems/toast-anatomy.png",
        alt: "Toast anatomy showing success, error, and information patterns.",
        caption: "Toast anatomy",
        width: 1024,
        height: 512,
      },
    ],
  },
  idea: {
    title: "The idea",
    paragraphs: [
      "Instead of putting every rule inside one prompt, store the writing guidance separately.",
      "Then let AI gather only the information it needs for that situation.",
    ],
    flow: [
      "Situation",
      "Gather context",
      "Writing rules · Approved terminology · Examples",
      "AI",
      "UI Copy",
    ],
  },
  tryIt: {
    title: "Try it",
  },
  organisingContent: {
    title: "Organising content",
    paragraphs: [
      "The writing guidance is stored in a structured content library.",
      "Each situation contains everything AI needs before it starts writing.",
    ],
    includes: [
      "Writing rules",
      "Approved terminology",
      "Message pattern",
      "Example messages",
    ],
    closing:
      "When new situations are added, only the content library grows. The workflow stays the same.",
    scenarioJson: {
      id: "password-too-short",
      messageType: "recoverable-error",
      pattern: "action-first",
      writingRules: ["active-voice", "plain-language"],
      terminology: ["password"],
      example: "password-too-short",
    },
  },
  scaling: {
    title: "Why it scales",
    paragraphs: [
      "The prototype starts with password validation, but the same workflow can support any product area.",
      "As new features are added, only the content library grows. The process stays the same.",
    ],
    examples: [
      "Authentication",
      "Payments",
      "Notifications",
      "Forms",
      "Errors",
      "Success messages",
      "Empty states",
    ],
  },
  learning: {
    title: "Learning",
    paragraphs: [
      "By turning writing principles into structured, reusable content, the same system can support both people and AI.",
      "As the product grows, teams add new content to the library instead of rewriting prompts.",
    ],
  },
  prototype: {
    scenarioId: "password-too-short",
    scenarioTitle: "Password Too Short",
    scenarioDescription: "The password contains fewer than 8 characters.",
    userGoal: "Create a valid password.",
    messageType: {
      name: "Recoverable Error",
      purpose: "Help the user fix an issue they can immediately resolve.",
      tone: "Clear, supportive and direct.",
    },
    pattern: {
      name: "Action First",
      description: "Begin with the action the user should take.",
      structure: "Action → Context",
    },
    writingRules: ["Active Voice", "One Issue", "Plain Language", "Sentence Case"],
    terminology: {
      preferred: "password",
      definition: "The user's account password.",
      avoid: ["passcode", "credentials"],
    },
    approvedExample: {
      message: "Use at least 8 characters.",
      why: "Leads with a clear action and states the length requirement in plain language.",
    },
    generatedMessage: "Use at least 8 characters.",
    validationChecks: [
      "Approved words",
      "Words to avoid",
      "One issue only",
      "Active voice",
      "Concise length",
    ],
    promptExcerpt: `You are writing product UI copy. Follow the instructions below.

Situation
The password contains fewer than 8 characters.

User goal
Create a valid password.

Message style
Recoverable Error — help the user fix an issue they can resolve right away.

How to write it
Action First: begin with the action the user should take.
Structure the message as: Action → Context.

Writing rules
- Write direct instructions where the user is the actor.
- Each message should communicate only one problem.
- Use everyday words instead of technical or internal jargon.

Approved words
Use "password" (the user's account password). Do not use "passcode" or "credentials".

Example messages
"Use at least 8 characters." — leads with a clear action and states the length requirement in plain language.

Task
Write one clear inline error message. Match the example messages in quality, not necessarily in exact wording.`,
  },
};

export const contentSystemsSections = [
  { id: "overview", label: "Overview" },
  { id: "where-it-started", label: "Where it started" },
  { id: "idea", label: "The idea" },
  { id: "organising-content", label: "Organising content" },
  { id: "try-it", label: "Try it" },
  { id: "scaling", label: "Why it scales" },
  { id: "learning", label: "Learning" },
] as const;
