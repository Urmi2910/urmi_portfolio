export type ImageSetLabel = "GTT" | "StopLoss";

export type TriggerOrderImage = {
  src?: string;
  alt: string;
  caption?: string;
  setLabel?: ImageSetLabel;
  filename: string;
  layout?: "phone" | "wide";
  width?: number;
  height?: number;
};

const phone = (src: string, alt: string, filename: string, setLabel: ImageSetLabel): TriggerOrderImage => ({
  src,
  alt,
  filename,
  setLabel,
  layout: "phone",
  width: 412,
  height: 920,
});

const wide = (
  src: string,
  alt: string,
  filename: string,
  setLabel: ImageSetLabel,
  width = 1024,
  height = 784,
): TriggerOrderImage => ({
  src,
  alt,
  filename,
  setLabel,
  layout: "wide",
  width,
  height,
});

export const triggerOrderCaseStudy = {
  slug: "trigger-order-vs-gtt",
  title: "Simplifying Advanced Trading",
  subtitle:
    "A content-led approach to improving discoverability, comprehension, and adoption of advanced trading features.",
  tags: ["Content Design", "Information Architecture", "UX Research"],
  overview: [
    "DreamStreet is an investing platform that helps people build wealth through a simple investing experience. It serves both new and experienced investors.",
    "I worked on simplifying two advanced trading features to make them easier to discover and understand.",
  ],
  problem: {
    title: "Problem",
    lead: "Make it simple for new investors without losing experienced traders.",
    paragraphs: [
      "DreamStreet wanted to make advanced trading easier for newer investors, especially users from Tier 2 and Tier 3 cities, without changing the experience for experienced traders.",
      "Many new users found terms like GTT, StopLoss, and Target difficult to understand. As a result, advanced trading features were hard to discover and saw low adoption.",
      "The challenge was to simplify the language without removing the terminology experienced investors already knew.",
    ],
    areas: [
      {
        title: "Trigger Orders",
        screenshot: phone(
          "/work/product-content-design/trigger-order-gtt-buy-screen.png",
          "GTT buy screen showing technical labels like GTT order, GTT trigger price, and GTT limit price",
          "trigger-order-gtt-buy-screen.png",
          "GTT",
        ),
      },
      {
        title: "Advanced Exit Orders",
        screenshot: phone(
          "/work/product-content-design/trigger-order-sl-problem.png",
          "Buy screen with StopLoss and Target sections showing technical SL and TGT labels",
          "trigger-order-sl-problem.png",
          "StopLoss",
        ),
      },
    ],
  },
  research: {
    title: "Research",
    lead: "How do users think?",
    intro: "To understand where users were getting stuck, we spoke with both new and experienced investors.",
    findingsIntro: "We found three things:",
    findings: [
      "Users thought in goals, not trading terms.",
      "Technical labels created confusion for new investors.",
      "Experienced investors still relied on familiar trading terms.",
    ],
    quotes: [
      "I want to buy when the price reaches this price.",
      "I don't know what GTT means.",
    ],
    explorationBoard: {
      src: "/work/product-content-design/trigger-order-exploration-board.png",
      alt: "Research board comparing GTT order flow with proposed Trigger Order changes",
      setLabel: "GTT" as const,
      filename: "trigger-order-exploration-board.png",
      layout: "wide" as const,
      width: 1024,
      height: 784,
    },
  },
  exploration: {
    title: "Exploration",
    lead: "Looking for simpler ways to explain advanced trading",
    intro: "We explored different ways to reduce jargon without removing functionality.",
    triggerOrders: {
      title: "Trigger Orders",
      items: [
        "Simpler names",
        "Better placement",
        "Progressive disclosure",
        "Helper text",
      ],
      setLabel: "GTT" as const,
      screenshots: [
        phone(
          "/work/product-content-design/trigger-order-gtt-exploration-1.png",
          "Buy screen with extend order validity checkbox and trigger price field",
          "trigger-order-gtt-exploration-1.png",
          "GTT",
        ),
        phone(
          "/work/product-content-design/trigger-order-gtt-exploration-2.png",
          "Trigger Order buy screen for Suzlon Energy with limit price and trigger price",
          "trigger-order-gtt-exploration-2.png",
          "GTT",
        ),
        phone(
          "/work/product-content-design/trigger-order-gtt-exploration-3.png",
          "Trigger Order buy screen with limit price, trigger price, and validity guidance",
          "trigger-order-gtt-exploration-3.png",
          "GTT",
        ),
      ],
    },
    exitOrders: {
      title: "Advanced Exit Orders",
      items: [
        "Clearer labels",
        "Outcome-based copy",
        "Helper text",
        "Amount vs Percentage",
        "Contextual guidance",
      ],
      setLabel: "StopLoss" as const,
      screenshots: [],
    },
  },
  solution: {
    title: "Solution",
    lead: "Speak the user's language",
    triggerOrders: {
      title: "Trigger Orders",
      intro:
        "Instead of introducing users to GTT, we focused on what they wanted to do.",
      outcomes: ["When price reaches this, buy", "When price reaches this, sell"],
      closing:
        "The feature became easier to discover because users no longer had to learn a new term.",
      setLabel: "GTT" as const,
      screenshots: [
        phone(
          "/work/product-content-design/trigger-order-solution-trigger-buy.png",
          "Trigger buy screen with If price reaches and then buy flow for Suzlon Energy",
          "trigger-order-solution-trigger-buy.png",
          "GTT",
        ),
      ],
    },
    exitOrders: {
      title: "Advanced Exit Orders",
      intro: "Instead of relying on trading terms, we explained the outcome.",
      outcomes: ["Exit if price falls to...", "Exit when price reaches..."],
      closing: "Small changes in language made advanced orders much easier to understand.",
      setLabel: "StopLoss" as const,
      screenshots: [
        phone(
          "/work/product-content-design/trigger-order-options-stoploss-target.png",
          "Buy screen with StopLoss and Target sections showing exit guidance copy",
          "trigger-order-options-stoploss-target.png",
          "StopLoss",
        ),
      ],
    },
  },
  impact: {
    title: "Impact",
    lead: "Easier to find. Easier to understand.",
    intro: "We tested the updated language with users to see if the clearer copy actually landed.",
    highlight: {
      value: "8 out of 10",
      detail: "users understood what the features meant. Usability testing showed an 80% success rate.",
    },
    items: [
      "Users understood advanced features with little or no explanation.",
      "Made advanced trading feel more approachable.",
      "Kept the experience simple without reducing functionality.",
    ],
  },
  learning: {
    title: "Learning",
    body: "People don't think in product terms. They think about what they want to do. Designing around those goals made advanced trading easier to understand.",
  },
};

export const triggerOrderSections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "exploration", label: "Exploration" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "learning", label: "Learning" },
] as const;
