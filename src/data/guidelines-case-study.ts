export const guidelinesCaseStudy = {
  slug: "guidelines",
  title: "UX Writing Guidelines",
  subtitle: "A reusable guide for writing clear, consistent product copy across UI components and content types.",
  projectType: "CleverTap",
  tags: ["UX Writing", "Content Systems", "Guidelines"],
  overview: {
    paragraphs: [
      "There are countless writing guidelines online. But every product has a different audience, voice, and goals.",
      "I created research-backed guidelines that turned subjective advice into clear, objective rules. Each guideline was tested, documented, and supported with examples, giving both writers and AI the context needed to produce consistent, high-quality content.",
      "These guidelines define how we write across headings, form fields, labels, empty states, confirmations, and errors.",
    ],
  },
  document: {
    title: "Full guidelines document",
    description: "View or download the complete UX Writing Guidelines PDF.",
    href: "/work/guidelines/ux-writing-guidelines.pdf",
    downloadFilename: "UX-writing-guidelines.pdf",
  },
  letterCase: {
    title: "Letter case",
    purpose: "Create a visual hierarchy that improves readability and navigation.",
    intro:
      "Two letter case styles are used for product microcopy: title case and sentence case.",
    styles: [
      {
        name: "Title case",
        description: "Capitalize the first letter of every word.",
        example: "Campaigns - Engage Your Audiences",
      },
      {
        name: "Sentence case",
        description: "Capitalize the first letter of the first word and proper nouns.",
        example: "Campaigns - engage your audiences",
      },
    ],
    rules: [
      "Use title case for headings, titles, and main captions. Use sentence case for descriptive text, subtitles, options, and nested choices.",
      "When titles are nested, keep title case and use typography (size, weight, color) to show hierarchy.",
      "In title case, don't capitalize articles (a, an, the), conjunctions, short words (fewer than 4 letters), or prepositions — unless they start the sentence.",
      "Capitalize nouns, verbs, adverbs, adjectives, and pronouns in title case. Apply discretion for visual balance.",
      "Use title case for proper nouns, product names, feature names, and button labels. Don't use quotation marks around them.",
    ],
    examples: [
      { do: "Journeys - Reach Wider Audiences at Scale", dont: "Journeys - Reach Wider Audiences At Scale" },
      { do: "Click Continue to proceed.", dont: 'Click "Continue" to proceed.' },
      { do: "Okay, Got It", dont: "Okay, Got it" },
    ],
  },
  textFields: {
    title: "Text input fields and text areas",
    purpose: "Help people enter accurate information while reducing cognitive load and errors.",
    intro:
      "Text fields use labels, hints, and placeholder text. Avoid overloading self-explanatory fields with extra nudges. Include qualifying information only when format or restrictions matter.",
    rules: [
      "Avoid placeholder text when the label already describes the action. Use action-oriented labels instead.",
      "Place qualifying or restrictive information under the field — character limits, date format, etc. For complex rules like passwords, show them in a persistent pop-up while the user types.",
      "Use placeholder text only when the input isn't intuitive or the label is missing.",
      "Pre-fill fields when values can be auto-fetched — country, city, time zone, country code.",
    ],
    examples: [
      { do: "Upload Image URL\n(no placeholder text)", dont: "Image URL\nEnter image URL" },
    ],
  },
  numerals: {
    title: "Numerals vs words",
    rules: [
      "Spell out zero through nine. Use numerals for 10 or greater for days, weeks, and other time units.",
      "Use numerals in snack bars, validation errors, headers, labels, and space-constrained UI.",
      "If one item in a list needs a numeral, use numerals for all items of that type.",
      "When two numbers refer to different things, spell out one and use a numeral for the other.",
      "Hyphenate compound numbers when spelled out — twenty-five fonts, the twenty-first day.",
      "Use from and through for number ranges — from 9 through 17. Use an en dash in tables and UI — 2016–2020. Use to for time ranges — 10:00 AM to 2:00 PM.",
    ],
    examples: [
      { do: "You're in the top 5", dont: "You're in the top five" },
      { do: "This folder has 16 images, 7 templates, and 3 videos.", dont: "This folder has sixteen images, seven templates, and three videos." },
    ],
  },
  percent: {
    title: "Percent and percentage",
    rules: [
      "Percent means per hundred and is tied to a specific number. Use the % symbol with numerals — no space before the symbol.",
      "Percentage refers to a general relationship, not a specific measure.",
      "Don't use % to refer to the symbol itself — say percent sign.",
      "Don't start a sentence with the percent sign.",
      "Don't use % to mean percentage.",
    ],
    examples: [
      { do: "Only 20 percent of the votes counted.", dont: "Only 20% of the votes counted at the start of a sentence." },
      { do: "A large percentage of people voted.", dont: "A large % of people voted." },
    ],
  },
  contentTypes: {
    title: "Content types",
    intro: "Guidelines for UI content beyond individual components.",
    types: [
      {
        name: "Titles",
        purpose: "Provide immediate clarity of context and the action to take.",
        note: "Titles sit at the top of the information hierarchy. Often they're the only text a user reads — provide context.",
      },
      {
        name: "Descriptions",
        purpose: "Help people move forward knowing what to expect, establish the brand, and reduce liability.",
        note: "Descriptions are often skipped as a wall of text. When needed, keep them clear and concise.",
      },
      {
        name: "Empty states",
        purpose: "Set expectations and build excitement while showing the space is intentional.",
        note: 'Use "To do X, do Y" to emphasize the function (X) and the action (Y). Types: first use, user cleared, no results/no data.',
      },
      {
        name: "Labels",
        purpose: "Minimize the effort required to understand the experience.",
        note: "Labels name or describe things — sections, categories, status, quantity, progress. Use specific terms, avoid jargon. Stats labels use title case.",
      },
      {
        name: "Transitional text",
        purpose: "Reassure users that a delay is expected while an action processes.",
        note: 'Use present continuous tense — "is uploading", "are sending". Add an ellipsis for brief delays.',
      },
      {
        name: "Confirmation messages",
        purpose: "Reassure users that expected progress or results are complete.",
        note: "Especially useful when an action is delayed. Set expectations in the description first.",
      },
      {
        name: "Errors",
        purpose: "Help people move forward when something blocks their path.",
        note: "Stay focused on what the user was trying to do. Use verb-first, brief instructions. Never assign blame. Categories: inline errors, detour errors, blocking errors.",
      },
    ],
  },
  errorPatterns: {
    title: "Error message patterns",
    intro: "When writing errors, tell the user what went wrong, why (if helpful), and how to fix it. Use a positive tone — lead with the action, not the failure.",
    patterns: [
      { template: "Enter a/an (the thing)", example: "Enter a company name" },
      { template: "Enter a/an (the thing)", example: "Enter a campaign name" },
      { template: "This (thing) is (status). (Action to take)", example: "This name is taken. Try another." },
    ],
  },
} as const;

export const guidelinesSections = [
  { id: "overview", label: "Overview" },
  { id: "document", label: "Full document" },
  { id: "letter-case", label: "Letter case" },
  { id: "text-fields", label: "Text fields" },
  { id: "numerals", label: "Numerals" },
  { id: "percent", label: "Percent" },
  { id: "content-types", label: "Content types" },
  { id: "error-patterns", label: "Error patterns" },
] as const;
