export const contentSystemsCaseStudy = {
  slug: "content-systems",
  title: "Content Modeling for AI",
  subtitle:
    "A prototype exploring whether structured content can help AI generate consistent UI copy at scale.",
  projectType: "Prototype",
  tags: ["Content Systems", "AI", "UI Copy"],
  overview: {
    paragraphs: [
      "AI made writing UI copy much faster. More designers, PMs, and developers could now generate copy in seconds.",
      "But speed created a new challenge. Everyone could generate copy, but not everyone wrote it the same way. Even with the same prompt, AI could produce different terminology, structure, and tone.",
      "We already had writing guidelines that helped people stay consistent. I wanted to explore whether those same guidelines could become structured context that helped AI write consistently too.",
    ],
  },
  whereItStarted: {
    title: "Where it started",
    audit: {
      paragraphs: [
        "Before thinking about AI, I looked at how we were writing messages today.",
        "I audited existing error messages across the product and found the same problems again and again. Similar situations were written differently, terminology wasn't consistent, and message patterns changed from one feature to another.",
        "Instead of fixing messages one by one, I documented reusable patterns that everyone could follow.",
      ],
      artifact: {
        src: "/work/content-systems/toast-audit-screenshot.png",
        alt: "Toast audit showing existing error messages from the product.",
        caption: "Toast audit",
        width: 1024,
        height: 803,
      },
    },
    guidelines: {
      intro: [
        "The guidelines went beyond writing tips. They defined how different message types should work.",
      ],
      messageTypes: [
        { name: "Success", description: "tells the user what happened." },
        { name: "Error", description: "explains the problem and how to fix it." },
        { name: "Information", description: "shares an important update." },
      ],
      closing:
        "Along with writing rules, approved terminology, and examples, these patterns became a reusable content system.",
      artifacts: [
        {
          src: "/work/content-systems/toast-ux-guidelines-reference.png",
          alt: "Toast guidelines documenting when and how to use toast messages.",
          caption: "Toast guidelines",
          width: 931,
          height: 1024,
        },
      ],
    },
  },
  contentModel: {
    title: "From guidelines to a content model",
    intro: [
      "The guidelines were still written as documents. That worked for people, but AI needed information in a format it could retrieve consistently.",
      "So instead of storing everything in one long document, I started breaking the knowledge into reusable pieces.",
    ],
    step1: {
      title: "Find the reusable parts",
      intro:
        "Before building the content model, I reviewed the writing guidelines and looked for patterns that repeated across hundreds of messages.",
      question: "What information does AI need every time it writes an error message?",
      approach:
        "If the same piece of information was needed again and again, it became part of the content model.",
      blocks: [
        {
          title: "What type of message is this?",
          summary: "AI first needs to know what it's writing so it can pick the right pattern.",
          examples: ["Recoverable error", "Validation error", "Success", "Information", "Warning"],
        },
        {
          title: "How should it be structured?",
          summary: "Messages of the same type usually follow the same structure.",
          patterns: [
            { label: "Recoverable error", pattern: "What happened → How to fix it" },
            { label: "Success", pattern: "What happened" },
            { label: "Validation error", pattern: "Action → Requirement" },
          ],
        },
        {
          title: "What writing rules apply?",
          summary: "Principles reused across every message, stored once, not repeated in every prompt.",
          examples: ["Plain language", "Active voice", "One issue", "Concise", "Sentence case"],
        },
        {
          title: "Which words should be used?",
          summary: "Approved product vocabulary keeps copy consistent.",
          examples: ["Password", "Rewards", "Captain"],
          examplesVariant: "approved" as const,
        },
        {
          title: "Which words should be avoided?",
          summary: "Document what not to say so AI doesn't drift from product language.",
          examples: ["Passcode", "Reward Points", "C/VC"],
          examplesVariant: "avoided" as const,
        },
        {
          title: "What examples can AI learn from?",
          summary: "Rules explain principles; examples show how they're applied.",
          examples: [
            "Use at least 8 characters.",
            "Team saved.",
            "Enter a valid email address.",
          ],
          examplesVariant: "quote" as const,
        },
      ],
      decisionFramework: {
        title: "How did I decide what became reusable?",
        questions: [
          "Will this be used across multiple messages?",
          "Will different writers need this guidance?",
          "Will AI produce inconsistent results without it?",
        ],
        closing:
          "If yes → part of the content model. If no → stays in the documentation.",
      },
    },
    step2: {
      title: "Create reusable collections",
      paragraphs: [
        "Instead of repeating the same rules for every message, I stored each type of information separately.",
        "For example:",
      ],
      collections: [
        {
          name: "Writing Rules",
          content: "Plain language\nActive voice\nOne issue per message\nSentence case",
        },
        {
          name: "Voice & Tone",
          content: "Helpful\nDirect\nClear\nConfident",
        },
        {
          name: "Dictionary",
          content: "Password ✅\nPasscode ❌\n\nRewards ✅\nReward Points ❌",
        },
        {
          name: "Message Patterns",
          content:
            "Recoverable Error\n\nWhat happened\n↓\n\nHow to fix it\n\n---\n\nSuccess\n\nWhat happened",
        },
      ],
      closing: "Each collection could now be reused across hundreds of messages.",
    },
    step3: {
      title: "Connect everything together",
      paragraphs: [
        "Now I needed a way to tell AI which pieces belonged to each situation.",
        "Instead of copying all the rules into every prompt, I created a content model.",
        "Each scenario acts like an index.",
      ],
      exampleIntro: "For example:",
      contentModel: {
        scenario: "Password too short",
        inherits: "Recoverable Error",
        usesPattern: "What happened → Next step",
        voice: "Default Product Voice",
        writingRules: ["Plain language", "One issue", "Active voice"],
        dictionary: ["Password"],
        examples: ["Use at least 8 characters."],
      },
      closing: [
        "Notice that the model doesn't contain every rule.",
        "It simply points to the right collections.",
        "That keeps the content reusable and much easier to maintain.",
      ],
    },
    step4: {
      title: "Build the prompt",
      paragraphs: [
        "When someone asks AI to write a password error, the system doesn't send the request straight to AI.",
        "It first looks up the content model.",
      ],
      lookupIntro: "Using the model above, it gathers:",
      gathered: [
        "Recoverable error pattern",
        "Product voice",
        "Writing rules",
        "Approved terminology",
        "Example messages",
      ],
      closing:
        "Those pieces are combined into one prompt automatically. AI receives all the context it needs before writing.",
    },
    step5: {
      title: "Add guardrails",
      paragraphs: [
        "Even after AI generates a message, the work isn't finished.",
        "The message is checked against the same content model.",
        "For example:",
      ],
      groups: [
        {
          title: "Terminology",
          prompt: "Did AI say Password instead of Passcode?",
        },
        {
          title: "Pattern",
          detail: "Did it follow What happened → Next step, or did it invent a different structure?",
        },
        {
          title: "Writing rules",
          items: ["Is it active voice?", "Is it one issue?", "Is it concise?"],
        },
      ],
      closing:
        "If something doesn't match the guidelines, the system can regenerate the message or flag it for review.",
    },
    step6: {
      title: "Add fallbacks",
      paragraphs: ["AI won't always have every piece of information.", "So I designed fallback rules."],
      fallbacks: [
        {
          condition: "If there isn't a password-specific example,",
          action: "use the general recoverable error example.",
        },
        {
          condition: "If a feature doesn't have its own voice,",
          action: "use the default product voice.",
        },
        {
          condition: "If a component doesn't define a pattern,",
          action: "use the default pattern for that message type.",
        },
      ],
      closing: "This keeps the system working even when new features are added.",
    },
    step7: {
      title: "Scale the library",
      paragraphs: [
        "Now adding a new feature doesn't mean rewriting prompts.",
        "For example, adding payment errors only requires:",
      ],
      requires: ["New examples", "New approved terminology", "Any feature-specific rules"],
      closing: "Everything else is already shared through the content model. The workflow stays exactly the same.",
    },
  },
  tryIt: {
    title: "Try it",
    intro:
      "Choose a scenario to see how AI gathers the right context before generating UI copy.",
  },
  whyItMatters: {
    title: "Why this matters",
    paragraphs: [
      "Content modeling makes AI more predictable.",
      "Instead of rewriting prompts for every new situation, teams add reusable content to the library.",
      "This makes the output more consistent, easier to maintain, and better aligned with the product's writing standards.",
    ],
  },
  learning: {
    title: "Learning",
    paragraphs: [
      "AI doesn't struggle because prompts are too short.",
      "It struggles because it lacks context.",
      "By treating writing guidelines as structured content instead of static documentation, the same knowledge can support both people and AI.",
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
Recoverable Error: help the user fix an issue they can resolve right away.

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
"Use at least 8 characters." leads with a clear action and states the length requirement in plain language.

Task
Write one clear inline error message. Match the example messages in quality, not necessarily in exact wording.`,
  },
};

export const contentSystemsSections = [
  { id: "overview", label: "Overview" },
  { id: "where-it-started", label: "Where it started" },
  { id: "content-model", label: "Content model" },
  { id: "try-it", label: "Try it" },
  { id: "why-it-matters", label: "Why this matters" },
  { id: "learning", label: "Learning" },
] as const;
