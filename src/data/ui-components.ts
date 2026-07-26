import type { UiComponentMockupId } from "@/components/case-studies/product-content-design/UiComponentMockups";
import type { WritingExampleSection } from "@/data/product-content-design";

export interface UiComponentExample {
  id: UiComponentMockupId;
  title: string;
  description: string;
}

export const uiComponentsGallery = {
  slug: "ui-components",
  title: "UI Components",
  description:
    "Short-form copy improvements across common UI patterns. Each comparison shows the before and after; the text explains the thinking behind the change.",
  items: [
    {
      id: "dropdown-labels",
      title: "Dropdown Labels",
      description:
        "The original dropdowns used technical terms like Ascending and Descending, which required users to interpret how the system sorted information. I replaced them with familiar labels like A to Z, Z to A, Most Recent, and Oldest, making the options easier to understand and scan.",
    },
    {
      id: "snackbars",
      title: "Snackbars",
      description:
        "Snackbars are designed to communicate feedback in just a few seconds. I rewrote the messages to focus on the outcome of the user's action, removing unnecessary words and making each notification concise, consistent, and easy to scan.",
    },
    {
      id: "call-to-action",
      title: "Call to Action",
      description:
        "I refined CTAs across different workflows to make the next step immediately clear. By using specific, action-oriented language and maintaining consistency across similar screens, the buttons became easier to understand and encouraged confident action.",
    },
    {
      id: "whatsapp-sample",
      title: "WhatsApp Sample",
      description:
        "The existing text didn't fit as a confirmation dialogue — it gave instructions instead of asking for confirmation. I revised it to ask a clear question, explain why adding a sample helps, and make the primary button reinforce that question.",
    },
  ] satisfies UiComponentExample[],
};

export function getUiComponentExample(id: string): UiComponentExample | undefined {
  return uiComponentsGallery.items.find((item) => item.id === id);
}

export const uiComponentSections: WritingExampleSection[] = uiComponentsGallery.items.map((item) => ({
  id: item.id,
  label: item.title,
}));
