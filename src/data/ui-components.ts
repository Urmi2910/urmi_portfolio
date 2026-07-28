import type { UiComponentMockupId } from "@/components/case-studies/product-content-design/UiComponentMockups";
import type { WritingExampleSection } from "@/data/product-content-design";

export interface UiComponentExample {
  id: UiComponentMockupId;
  title: string;
  description: string;
}

export const uiComponentsGallery = {
  slug: "microcopy-examples",
  title: "Microcopy examples",
  description:
    "Small copy changes that make products easier to understand, use, and trust. Each example compares the original with the improved version and explains the thinking behind the change.",
  items: [
    {
      id: "dropdown-labels",
      title: "Dropdown Labels",
      description:
        "Replaced technical sorting labels with familiar language like A to Z, Z to A, Most Recent, and Oldest, making the options easier to understand at a glance.",
    },
    {
      id: "snackbars",
      title: "Snackbars",
      description:
        "Simplified snackbar messages to focus on the outcome of the user's action, making feedback shorter, clearer, and easier to scan.",
    },
    {
      id: "call-to-action",
      title: "Call to Action",
      description:
        "Rewrote CTAs to clearly communicate the next step. Using specific, action-oriented language made actions easier to understand and more consistent across the product.",
    },
    {
      id: "whatsapp-sample",
      title: "Confirmation Dialog",
      description:
        "Reframed the dialog from instructions to a confirmation. The updated copy explains why adding a sample matters and makes the primary action clear.",
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
