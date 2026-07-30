"use client";

import { cn } from "@/lib/utils";
import { AlertCircle, Check, X } from "lucide-react";
import { ConfirmationDialogMockup } from "./ConfirmationDialogMockup";

function RadioOption({ label, selected }: { label: string; selected?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
          selected ? "border-[#2563eb]" : "border-[#cbd5e1]"
        )}
        aria-hidden
      >
        {selected ? <span className="h-2 w-2 rounded-full bg-[#2563eb]" /> : null}
      </span>
      <span className="text-base text-[#374151]">{label}</span>
    </div>
  );
}

function SortSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-[#2563eb] sm:text-sm">{title}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}

export function SortDropdownMockup({
  variant,
  className,
}: {
  variant: "existing" | "revised-text" | "revised-date";
  className?: string;
}) {
  const sortBy =
    variant === "revised-date"
      ? [
          { label: "Template Name", selected: false },
          { label: "Created On", selected: true },
          { label: "Edited On", selected: false },
        ]
      : variant === "revised-text"
        ? [
            { label: "Template Name", selected: true },
            { label: "Created On", selected: false },
            { label: "Edited On", selected: false },
          ]
        : [
            { label: "Template Name", selected: true },
            { label: "Created date", selected: false },
            { label: "Last Modified date", selected: false },
          ];

  const sortOrder =
    variant === "existing"
      ? [
          { label: "Ascending", selected: true },
          { label: "Descending", selected: false },
        ]
      : variant === "revised-text"
        ? [
            { label: "A to Z", selected: true },
            { label: "Z to A", selected: false },
          ]
        : [
            { label: "Most recent", selected: true },
            { label: "Oldest", selected: false },
          ];

  return (
    <div
      className={cn(
        "w-full max-w-[16.5rem] rounded-md border border-[#e5e7eb] bg-white px-4 py-4 shadow-sm",
        className,
      )}
      role="img"
      aria-label={`Sort dropdown ${variant}`}
    >
      <SortSection title="Sort by">
        {sortBy.map((option) => (
          <RadioOption key={option.label} label={option.label} selected={option.selected} />
        ))}
      </SortSection>
      <div className="my-2.5 border-t border-[#e5e7eb]" />
      <SortSection title="Sort order">
        {sortOrder.map((option) => (
          <RadioOption key={option.label} label={option.label} selected={option.selected} />
        ))}
      </SortSection>
    </div>
  );
}

function ErrorSnackbar({ message }: { message: string }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-full bg-[#111827] px-4 py-2 text-sm text-white shadow-md sm:px-5 sm:py-2.5 sm:text-base">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ef4444] sm:h-7 sm:w-7">
        <AlertCircle className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={2.5} />
      </span>
      <span className="min-w-0 flex-1 leading-snug">{message}</span>
      <X className="h-3.5 w-3.5 shrink-0 text-white/70 sm:h-4 sm:w-4" strokeWidth={2.25} aria-hidden />
    </div>
  );
}

function SuccessSnackbar({ message }: { message: string }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm text-[#374151] shadow-sm sm:px-5 sm:py-2.5 sm:text-base">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e] sm:h-7 sm:w-7">
        <Check className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={3} aria-hidden />
      </span>
      <span className="min-w-0 flex-1 leading-snug">{message}</span>
      <X className="h-3.5 w-3.5 shrink-0 text-[#9ca3af] sm:h-4 sm:w-4" strokeWidth={2.25} aria-hidden />
    </div>
  );
}

export function SnackbarsMockup({ variant }: { variant: "before" | "after" }) {
  if (variant === "before") {
    return (
      <div className="flex w-full flex-col gap-4" role="img" aria-label="Existing snackbar copy">
        <ErrorSnackbar message="Error: Failed to saved template. Please retry" />
        <SuccessSnackbar message="Template updated" />
        <SuccessSnackbar message="Link has been copied" />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4" role="img" aria-label="Revised snackbar copy">
      <ErrorSnackbar message="Failed to save the template. Try again." />
      <SuccessSnackbar message="Edits to template saved" />
      <SuccessSnackbar message="Link copied" />
    </div>
  );
}

const snackbarPairs = [
  {
    before: <ErrorSnackbar message="Error: Failed to saved template. Please retry" />,
    after: <ErrorSnackbar message="Failed to save the template. Try again." />,
  },
  {
    before: <SuccessSnackbar message="Template updated" />,
    after: <SuccessSnackbar message="Edits to template saved" />,
  },
  {
    before: <SuccessSnackbar message="Link has been copied" />,
    after: <SuccessSnackbar message="Link copied" />,
  },
];

function InfoBanner({ body, link }: { body: string; link: string }) {
  return (
    <div className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-3 text-sm leading-relaxed text-[#374151] shadow-sm sm:px-5 sm:py-3.5 sm:text-base">
      {body}{" "}
      <span className="font-medium text-[#2563eb]">{link}</span>
    </div>
  );
}

function ErrorBanner({
  title,
  body,
  link,
}: {
  title: string;
  body: string;
  link: string;
}) {
  return (
    <div className="flex w-full overflow-hidden rounded-md border border-[#e5e7eb] bg-white shadow-sm">
      <div className="w-1 shrink-0 bg-[#ef4444]" aria-hidden />
      <div className="flex gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-3.5">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ef4444] sm:h-7 sm:w-7">
          <AlertCircle className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden />
        </span>
        <div className="min-w-0 text-sm leading-relaxed sm:text-base">
          <p className="font-semibold text-[#374151]">{title}</p>
          <p className="mt-0.5 text-[#6b7280]">
            {body} <span className="font-medium text-[#ef4444]">{link}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const callToActionPairs = [
  {
    before: (
      <InfoBanner
        body="Stats may be inflated because CC recipients were added to this campaign."
        link="Learn more"
      />
    ),
    after: (
      <InfoBanner
        body="Stats may be inflated because CC recipients were added to this campaign."
        link="Why does this happen?"
      />
    ),
  },
  {
    before: (
      <ErrorBanner
        title="Liquid syntax error(s):"
        body="Missing a closing bracket %}"
        link="View documentation"
      />
    ),
    after: (
      <ErrorBanner
        title="Liquid syntax error(s):"
        body="Missing a closing bracket %}"
        link="How to fix it?"
      />
    ),
  },
];

function ComparisonPairRow({
  beforeLabel,
  afterLabel,
  before,
  after,
}: {
  beforeLabel: string;
  afterLabel: string;
  before: React.ReactNode;
  after: React.ReactNode;
}) {
  return (
    <div className="grid w-full gap-5 sm:grid-cols-2 sm:gap-8">
      <figure className="min-w-0">
        <figcaption className="mb-1.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {beforeLabel}
        </figcaption>
        {before}
      </figure>
      <figure className="min-w-0">
        <figcaption className="mb-1.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {afterLabel}
        </figcaption>
        {after}
      </figure>
    </div>
  );
}

export function SnackbarsPairedMockup({
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("flex w-full flex-col gap-5 sm:gap-6", className)}
      role="img"
      aria-label="Snackbar copy comparisons"
    >
      {snackbarPairs.map((pair, index) => (
        <ComparisonPairRow
          key={index}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
          before={pair.before}
          after={pair.after}
        />
      ))}
    </div>
  );
}

export function CallToActionPairedMockup({
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-5 sm:gap-6" role="img" aria-label="Call-to-action copy comparisons">
      {callToActionPairs.map((pair, index) => (
        <ComparisonPairRow
          key={index}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
          before={pair.before}
          after={pair.after}
        />
      ))}
    </div>
  );
}

export function CallToActionMockup({ variant }: { variant: "before" | "after" }) {
  if (variant === "before") {
    return (
      <div className="flex w-full flex-col gap-5 sm:gap-6" role="img" aria-label="Existing call-to-action copy">
        <InfoBanner
          body="Stats may be inflated because CC recipients were added to this campaign."
          link="Learn more"
        />
        <ErrorBanner
          title="Liquid syntax error(s):"
          body="Missing a closing bracket %}"
          link="View documentation"
        />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5 sm:gap-6" role="img" aria-label="Revised call-to-action copy">
      <InfoBanner
        body="Stats may be inflated because CC recipients were added to this campaign."
        link="Why does this happen?"
      />
      <ErrorBanner
        title="Liquid syntax error(s):"
        body="Missing a closing bracket %}"
        link="How to fix it?"
      />
    </div>
  );
}

export type UiComponentMockupId =
  | "dropdown-labels"
  | "snackbars"
  | "call-to-action"
  | "whatsapp-sample";

export function UiComponentMockupPanel({
  mockup,
  variant,
}: {
  mockup: UiComponentMockupId;
  variant: "before" | "after";
}) {
  if (mockup === "dropdown-labels") {
    if (variant === "before") {
      return (
        <div className="flex w-full justify-start">
          <SortDropdownMockup variant="existing" />
        </div>
      );
    }

    return (
      <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:gap-6">
        <SortDropdownMockup variant="revised-text" />
        <SortDropdownMockup variant="revised-date" />
      </div>
    );
  }

  if (mockup === "snackbars") {
    return <SnackbarsMockup variant={variant} />;
  }

  if (mockup === "whatsapp-sample") {
    return (
      <ConfirmationDialogMockup
        variant={variant === "before" ? "sample-before" : "sample-after"}
        bare
        compact
      />
    );
  }

  return <CallToActionMockup variant={variant} />;
}
