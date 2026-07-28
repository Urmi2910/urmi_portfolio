export const contentSystemsCaseStudy = {
  slug: "content-systems",
  title: "AI Content Context Engine",
  subtitle: "Helping AI write better UI copy by giving it the right information first.",
  projectType: "Prototype",
  tags: ["Content Systems", "AI", "UI Copy"],
  overview: {
    paragraphs: [
      "This prototype uses password validation as a simple example to explain the idea. The goal is not to build a password tool. The goal is to show a way to help AI generate more consistent UI copy.",
      "Instead of asking AI to write from a single prompt, the system first gathers the writing rules, approved words, message style, and examples for that situation. AI then uses that information to write the final message.",
      "As more product areas are added, only the content library grows. The process stays the same.",
    ],
    todayFlow: {
      label: "Today",
      productArea: "Password Validation",
      inputs: ["Writing Rules", "Approved Words", "Message Style", "Examples"],
      output: "UI Copy",
    },
    tomorrowFlow: {
      label: "Tomorrow",
      productAreas: [
        "Password",
        "Payments",
        "Login",
        "Notifications",
        "Empty States",
        "Forms",
      ],
      bridge: "Same process",
      output: "UI Copy",
    },
  },
  tryIt: {
    title: "Try it yourself",
    lead: "Select a scenario and generate UI copy.",
    followUp: "Then continue reading to see how the system works behind the scenes.",
  },
  promptsAlone: {
    task: "Write an inline error for a password.",
    problems: ["Approved words", "Writing rules", "Tone", "Examples", "Product standards"],
    closing: "Every new requirement means changing the prompt. Prompts get harder to maintain as writing guidance grows.",
  },
  contentLibrary: {
    title: "Move writing rules out of the prompt",
    lead: "Instead of stuffing everything into one prompt, organise the content separately so it can be reused.",
    body:
      "Each situation links to its own set of writing rules, approved words, message style, and examples. When a new scenario is added, you add content. You do not rewrite the whole prompt.",
    scenarioJson: {
      id: "password-too-short",
      messageType: "recoverable-error",
      pattern: "action-first",
      writingRules: ["active-voice", "plain-language"],
      terminology: ["password"],
      example: "password-too-short",
    },
  },
  collect: {
    title: "Collect what's needed",
    intro:
      "Before AI starts writing, the system collects everything it needs for that situation.",
    steps: [
      "Select a situation",
      "Find the message style",
      "Find the writing rules",
      "Find the approved words",
      "Find an example message",
    ],
  },
  buildInstructions: {
    title: "Combine into clear instructions",
    intro: "The collected information is combined into clear instructions for AI.",
    steps: ["Writing rules, words, and examples", "Instruction builder", "Instructions for AI"],
  },
  generate: {
    title: "Generate",
    intro: "AI writes the message using those instructions.",
  },
  validate: {
    title: "Check the message",
    intro:
      "The finished message is checked against the same writing rules and approved words.",
  },
  scaling: {
    title: "Why this scales",
    intro:
      "The prototype starts with password validation, but the same steps work for any product area.",
    today: {
      label: "Today the prototype contains",
      steps: ["10 situations", "1 product area", "Password validation"],
    },
    tomorrow: {
      label: "The same approach could support",
      areas: [
        "Authentication",
        "Payments",
        "Notifications",
        "Empty states",
        "Onboarding",
        "Errors",
        "Success messages",
      ],
    },
    principle:
      "You add new situations and product areas to the content library. The process of gathering information, writing instructions, and generating copy stays the same.",
  },
  shift: {
    title: "Two ways to work with AI copy",
    headers: ["One long prompt", "Organised content"] as const,
    rows: [
      {
        oneLongPrompt: "All writing guidance lives in the prompt",
        organisedContent: "Writing guidance lives in a content library",
      },
      {
        oneLongPrompt: "The prompt grows over time",
        organisedContent: "The content library grows over time",
      },
      {
        oneLongPrompt: "Hard to reuse across situations",
        organisedContent: "Easy to reuse across situations",
      },
      {
        oneLongPrompt: "Hard to update one rule without rewriting everything",
        organisedContent: "Easy to update one piece of content at a time",
      },
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
  { id: "try-it", label: "Try it" },
  { id: "prompts-alone", label: "Prompts alone" },
  { id: "content-library", label: "Content library" },
  { id: "collect", label: "Collect" },
  { id: "build-instructions", label: "Instructions" },
  { id: "generate", label: "Generate" },
  { id: "validate", label: "Check" },
  { id: "scaling", label: "Why it scales" },
  { id: "shift", label: "Two approaches" },
] as const;
