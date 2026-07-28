export const contentSystemsCaseStudy = {
  slug: "content-systems",
  title: "Designing an AI Content Context Engine",
  subtitle: "Helping AI generate consistent UI copy using structured editorial knowledge.",
  projectType: "Prototype",
  tags: ["Content Systems", "AI", "Retrieval"],
  lead:
    "AI is good at writing, but it doesn't automatically follow a product's content guidelines. I wanted to explore whether AI could generate better UI copy if it first retrieved structured editorial knowledge.",
  overview: [
    "This case study documents a working prototype that models password-validation copy as structured editorial assets, retrieves them by scenario, and uses that context to generate and validate UI messages.",
  ],
  challenge: {
    title: "The challenge",
    intro: "Most AI workflows rely on prompts alone.",
    body: "But product teams already have knowledge like writing rules, terminology, patterns, approved examples, and message types. Without this knowledge, AI may generate copy that is inconsistent.",
    knowledgeTypes: ["Writing Rules", "Terminology", "Patterns", "Approved Examples", "Message Types"],
  },
  approach: {
    title: "My approach",
    intro:
      "Instead of putting everything inside one prompt, I separated the editorial knowledge into reusable content models.",
    tree: [
      "Scenario",
      "Message Type",
      "Pattern",
      "Writing Rules",
      "Terminology",
      "Approved Example",
    ],
    closing: "Each model has a single responsibility and can be reused across different scenarios.",
  },
  contentModel: {
    title: "Designing the content model",
    intro: "For every product scenario, I defined the editorial knowledge required to generate copy.",
    rows: [
      { type: "Scenario", purpose: "Defines the product situation" },
      { type: "Message Type", purpose: "Defines the communication goal" },
      { type: "Pattern", purpose: "Defines how the message should be structured" },
      { type: "Writing Rules", purpose: "Defines editorial constraints" },
      { type: "Terminology", purpose: "Defines approved vocabulary" },
      { type: "Approved Example", purpose: "Provides a reference message" },
    ],
  },
  workflow: {
    title: "How the system works",
    intro:
      "The prototype follows a retrieval-first workflow. Rather than sending only the scenario to the language model, the system first retrieves all the editorial knowledge associated with that scenario.",
    steps: [
      "Select Scenario",
      "Retrieve Editorial Knowledge",
      "Build AI Context",
      "Generate UI Copy",
      "Validate Output",
    ],
  },
  walkthrough: {
    scenario: {
      title: "1. Select a scenario",
      intro: "The user starts by selecting a product scenario.",
      example: "Password Too Short",
      description: "The password contains fewer than 8 characters.",
    },
    retrieve: {
      title: "2. Retrieve editorial knowledge",
      intro: "The retriever loads only the assets linked to that scenario.",
      stack: [
        { label: "Scenario", value: "Password Too Short" },
        { label: "Message Type", value: "Recoverable Error" },
        { label: "Pattern", value: "Action First" },
        {
          label: "Writing Rules",
          value: "Active Voice, One Issue, Plain Language, Sentence Case",
        },
        { label: "Terminology", value: "password" },
        { label: "Approved Example", value: "Use at least 8 characters." },
      ],
    },
    context: {
      title: "3. Build AI context",
      intro: "The retrieved assets are combined into structured instructions for the language model.",
      formula: ["Scenario", "Pattern", "Writing Rules", "Terminology", "Approved Example", "Prompt"],
    },
    generate: {
      title: "4. Generate UI copy",
      intro: "Using the structured context, the model generates UI copy that follows the editorial guidance.",
      output: "Use at least 8 characters.",
    },
    validate: {
      title: "5. Validate the response",
      intro: "The generated copy is checked against the editorial rules.",
      checks: [
        "Active Voice",
        "Approved Terminology",
        "One Issue",
        "Concise Length",
      ],
    },
  },
  learning: {
    title: "What I learned",
    items: [
      "Editorial knowledge can be modeled as reusable content instead of being embedded in prompts.",
      "Separating retrieval from generation makes the workflow easier to understand and maintain.",
      "A structured content model helps guide AI toward more consistent UI copy.",
    ],
  },
  takeaway: {
    title: "Key takeaway",
    body: "This project explores how content designers can move beyond writing individual messages and instead design structured editorial systems that AI can retrieve and use during generation.",
    comparison: {
      without: "Your password is invalid.",
      withoutLabel: "Generic instruction",
      with: "Use at least 8 characters.",
      withLabel: "Follows the retrieved pattern, writing rules, terminology, and approved example",
    },
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
      "Approved Terminology",
      "Avoided Terminology",
      "One Issue",
      "Active Voice",
      "Concise Length",
    ],
    promptExcerpt: `You are writing product UI copy. Follow the editorial brief below.

Scenario
The password contains fewer than 8 characters.

User Goal
Create a valid password.

Message Type
Recoverable Error

Pattern
Action First: Begin with the action the user should take.
Structure the message as: Action → Context.

Writing Rules
- Write direct instructions where the user is the actor.
- Each message should communicate only one problem.
- Use everyday words instead of technical or internal jargon.

Terminology
Use "password" (the user's account password). Do not use "passcode", "credentials".

Approved Examples
"Use at least 8 characters." Leads with a clear action and states the length requirement in plain language.

Task
Write one clear inline error message. Match the approved examples in quality, not necessarily in exact wording.`,
  },
};

export const contentSystemsSections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "content-model", label: "Content model" },
  { id: "workflow", label: "Workflow" },
  { id: "live-demo", label: "Live demo" },
  { id: "learning", label: "Learning" },
  { id: "takeaway", label: "Takeaway" },
] as const;
