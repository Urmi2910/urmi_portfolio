export type WorkshopDeckVariant = "intro" | "ui-components" | "collaboration" | "resources";

export type WorkshopSectionChip = "Workshop" | "Training" | "Documentation" | "Resources";

export interface UxWritingPracticeSection {
  id: string;
  chip: WorkshopSectionChip;
  title: string;
  description: string;
  deck: WorkshopDeckVariant;
}

export const uxWritingPracticeHub = {
  slug: "ux-writing-practice",
  title: "Building a UX Writing Practice",
  company: "CleverTap",
  overview:
    "As one of the content designers at CleverTap, I created and delivered a structured onboarding program to help designers, product managers, and new UX writers build a shared understanding of UX writing principles, microcopy, and collaboration. The program combined practical examples, reusable resources, and hands-on guidance to improve content quality across teams.",
  impact:
    "The workshop gave new team members a consistent foundation for content design and reduced the learning curve for onboarding. It also established a shared vocabulary and reusable guidelines that made collaboration between writers, designers, and product managers more efficient.",
  keyTakeaway:
    "Content design isn't just about writing interfaces. It's also about building shared principles, reusable systems, and enabling teams to create consistent user experiences at scale.",
};

export const uxWritingPracticeSections: UxWritingPracticeSection[] = [
  {
    id: "intro",
    chip: "Workshop",
    title: "Introduction to UX Writing",
    description:
      "I introduced the fundamentals of UX writing, including core principles such as clarity, usefulness, consistency, accessibility, progressive disclosure, and plain language. I also covered how content design contributes to usability, product adoption, and user trust, while explaining how writing fits within a broader design system.",
    deck: "intro",
  },
  {
    id: "ui-components",
    chip: "Training",
    title: "UI Components & Microcopy",
    description:
      "I created a practical guide for writing across reusable interface components, including labels, placeholders, snackbars, confirmation dialogs, empty states, tooltips, buttons, selection controls, and system emails. Instead of focusing only on copy examples, I explained when each component should be used, common mistakes, and the principles behind effective microcopy.",
    deck: "ui-components",
  },
  {
    id: "collaboration",
    chip: "Documentation",
    title: "Collaboration Process",
    description:
      "To help writers work more effectively with product teams, I documented the end-to-end content design workflow—from understanding PRDs and reviewing Figma files to collaborating with PMs and engineers, writing copydocs, using AI responsibly, and validating copy before release.",
    deck: "collaboration",
  },
  {
    id: "learning-resources",
    chip: "Resources",
    title: "Learning Resources",
    description:
      "I also curated an internal resource library with articles, design systems, UX writing references, style guides, and learning materials so new team members could continue learning beyond the workshop.",
    deck: "resources",
  },
];
