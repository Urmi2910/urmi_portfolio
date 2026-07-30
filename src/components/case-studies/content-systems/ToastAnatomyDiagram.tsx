import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error" | "information";

type AnatomyRow = {
  template: string;
  example: string;
};

type AnatomySection = {
  label: string;
  variant: ToastVariant;
  rows: readonly AnatomyRow[];
};

const sections: readonly AnatomySection[] = [
  {
    label: "Success",
    variant: "success",
    rows: [{ template: "Object + past tense action", example: "Team 1 saved" }],
  },
  {
    label: "Error",
    variant: "error",
    rows: [
      {
        template: "<What happened>. <How to fix it>.",
        example: "Reward isn't available for now. Check again later.",
      },
      {
        template: "<Action to do> to <continue/Save>",
        example: "Select 2 more players to Save",
      },
    ],
  },
  {
    label: "Information",
    variant: "information",
    rows: [{ template: "Neutral update", example: "Lineups are announced 30 mins before match starts" }],
  },
];

const variantAccent: Record<ToastVariant, string> = {
  success: "border-l-[#2f7d52] text-[#2f7d52]",
  error: "border-l-[#e8590c] text-[#e8590c]",
  information: "border-l-[#228be6] text-[#228be6]",
};

function AnatomyRowItem({ row, variant }: { row: AnatomyRow; variant: ToastVariant }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-3">
      <p className="rounded-[var(--radius-md)] border border-outline/10 bg-white px-3 py-2.5 text-sm text-muted-foreground">
        {row.template}
      </p>
      <span className="hidden text-center text-sm text-muted-foreground/50 sm:block" aria-hidden>
        →
      </span>
      <span className="text-center text-xs text-muted-foreground/50 sm:hidden" aria-hidden>
        ↓
      </span>
      <p
        className={cn(
          "rounded-[var(--radius-md)] border border-outline/10 border-l-[3px] bg-white px-3 py-2.5 text-sm font-medium text-foreground",
          variantAccent[variant],
        )}
      >
        {row.example}
      </p>
    </div>
  );
}

export function ToastAnatomySection() {
  return (
    <div className="content-systems-toast-anatomy max-w-3xl space-y-8">
      <div className="space-y-3">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          Toast
        </h3>
        <p className="content-systems-body-copy text-base leading-relaxed text-muted-foreground">
          Toasts are brief, subtle notifications. They confirm actions, flag errors, or share
          neutral updates—without interrupting the flow.
        </p>
        <p className="text-sm text-muted-foreground">Display duration: 3–5 seconds</p>
      </div>

      <div className="space-y-6">
        <h4 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          Anatomy
        </h4>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="text-sm font-semibold text-foreground">{section.label}</p>
              <div className="mt-3 space-y-2.5">
                {section.rows.map((row) => (
                  <AnatomyRowItem key={row.template} row={row} variant={section.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
