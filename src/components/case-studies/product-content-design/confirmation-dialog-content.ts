export interface ConfirmationDialogCopy {
  title: string;
  body: string;
  primary?: string;
  secondary?: string;
  link?: string;
  showActions?: boolean;
}

export type ConfirmationDialogVariant =
  | "save-changes"
  | "leave-page"
  | "sample-before"
  | "sample-after";

export const confirmationDialogVariants: Record<ConfirmationDialogVariant, ConfirmationDialogCopy> = {
  "save-changes": {
    title: "Save changes?",
    body: "Changes will be lost if you leave without saving.",
    primary: "Save",
    secondary: "Discard",
    showActions: true,
  },
  "leave-page": {
    title: "Leave page?",
    body: "You will lose unsaved changes on leaving the page.",
    primary: "Leave Anyway",
    secondary: "Stay on Page",
    showActions: true,
  },
  "sample-before": {
    title: "Add sample content",
    body: "For WhatsApp to understand the kind of content you want to send, provide samples. Add sample for one or more languages.",
    link: "How it works?",
    showActions: false,
  },
  "sample-after": {
    title: "Continue without sample?",
    body: "To increase chances of approval, you should add a sample for at least one language.",
    secondary: "Cancel",
    primary: "Continue",
    showActions: true,
  },
};

export function isConfirmationDialogVariant(value?: string): value is ConfirmationDialogVariant {
  return (
    value === "save-changes" ||
    value === "leave-page" ||
    value === "sample-before" ||
    value === "sample-after"
  );
}
