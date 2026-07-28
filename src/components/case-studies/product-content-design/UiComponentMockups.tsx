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
      className={cn("mx-auto w-full max-w-[15rem] rounded-md border border-[#e5e7eb] bg-white px-4 py-4 shadow-sm sm:max-w-[16.5rem]", className)}
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
    <div className="flex w-full items-center gap-4 rounded-full bg-[#111827] px-6 py-3.5 text-lg text-white shadow-md sm:px-8 sm:py-4 sm:text-xl">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ef4444]">
        <AlertCircle className="h-4 w-4 text-white" strokeWidth={2.5} />
      </span>
      <span className="min-w-0 flex-1 leading-snug">{message}</span>
      <X className="h-4 w-4 shrink-0 text-white/70" strokeWidth={2.25} aria-hidden />
    </div>
  );
}

function SuccessSnackbar({ message }: { message: string }) {
  return (
    <div className="flex w-full items-center gap-4 rounded-full border border-[#e5e7eb] bg-white px-6 py-3.5 text-lg text-[#374151] shadow-sm sm:px-8 sm:py-4 sm:text-xl">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
        <Check className="h-4 w-4 text-white" strokeWidth={3} aria-hidden />
      </span>
      <span className="min-w-0 flex-1 leading-snug">{message}</span>
      <X className="h-4 w-4 shrink-0 text-[#9ca3af]" strokeWidth={2.25} aria-hidden />
    </div>
  );
}

export function SnackbarsMockup({ variant }: { variant: "before" | "after" }) {
  if (variant === "before") {
    return (
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4" role="img" aria-label="Existing snackbar copy">
        <ErrorSnackbar message="Error: Failed to saved template. Please retry" />
        <SuccessSnackbar message="Template updated" />
        <SuccessSnackbar message="Link has been copied" />
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4" role="img" aria-label="Revised snackbar copy">
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
    <div className="w-full rounded-md border border-[#e5e7eb] bg-white px-6 py-5 text-lg leading-relaxed text-[#374151] shadow-sm sm:px-10 sm:py-6 sm:text-xl">
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
      <div className="w-1.5 shrink-0 bg-[#ef4444]" aria-hidden />
      <div className="flex gap-4 px-6 py-5 sm:gap-5 sm:px-10 sm:py-6">
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ef4444] sm:h-8 sm:w-8">
          <AlertCircle className="h-4 w-4 text-white sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2.5} aria-hidden />
        </span>
        <div className="min-w-0 text-lg leading-relaxed sm:text-xl">
          <p className="font-semibold text-[#374151]">{title}</p>
          <p className="mt-1 text-[#6b7280]">
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

function UiComponentPair({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-[var(--radius-lg)] border border-outline/15 bg-[#faf8f5] p-5 sm:gap-6 sm:p-6">
      <figure className="min-w-0">
        <figcaption className="mb-2.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {beforeLabel}
        </figcaption>
        {before}
      </figure>
      <figure className="min-w-0">
        <figcaption className="mb-2.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
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
      className={cn("mx-auto flex w-full max-w-4xl flex-col gap-5 sm:gap-6", className)}
      role="img"
      aria-label="Snackbar copy comparisons"
    >
      {snackbarPairs.map((pair, index) => (
        <UiComponentPair
          key={index}
          before={pair.before}
          after={pair.after}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
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
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 sm:gap-6" role="img" aria-label="Call-to-action copy comparisons">
      {callToActionPairs.map((pair, index) => (
        <UiComponentPair
          key={index}
          before={pair.before}
          after={pair.after}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
        />
      ))}
    </div>
  );
}

export function CallToActionMockup({ variant }: { variant: "before" | "after" }) {
  if (variant === "before") {
    return (
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 sm:gap-6" role="img" aria-label="Existing call-to-action copy">
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
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 sm:gap-6" role="img" aria-label="Revised call-to-action copy">
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
        <div className="flex w-full justify-center">
          <SortDropdownMockup variant="existing" className="sm:max-w-[18rem]" />
        </div>
      );
    }

    return (
      <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
        <SortDropdownMockup variant="revised-text" className="w-full max-w-[16.5rem] shrink-0" />
        <SortDropdownMockup variant="revised-date" className="w-full max-w-[16.5rem] shrink-0" />
      </div>
    );
  }

  if (mockup === "snackbars") {
    return <SnackbarsMockup variant={variant} />;
  }

  if (mockup === "whatsapp-sample") {
    return (
      <div className="mx-auto w-full max-w-lg">
        <ConfirmationDialogMockup
          variant={variant === "before" ? "sample-before" : "sample-after"}
          bare
        />
      </div>
    );
  }

  return <CallToActionMockup variant={variant} />;
}
