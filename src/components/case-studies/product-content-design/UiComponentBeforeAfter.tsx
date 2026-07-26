"use client";

import { cn } from "@/lib/utils";
import {
  CallToActionPairedMockup,
  SnackbarsPairedMockup,
  UiComponentMockupPanel,
  type UiComponentMockupId,
} from "./UiComponentMockups";

function ComparisonPanel({
  label,
  children,
  mockup,
}: {
  label: string;
  children: React.ReactNode;
  mockup: UiComponentMockupId;
}) {
  const isDropdown = mockup === "dropdown-labels";
  const isDialog = mockup === "whatsapp-sample";

  return (
    <figure className="w-full">
      <figcaption className="mb-2.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </figcaption>
      <div
        className={cn(
          "flex w-full rounded-[var(--radius-lg)] border border-outline/15 bg-[#faf8f5] p-6 sm:p-8",
          isDropdown || isDialog
            ? "min-h-[11rem] items-center justify-center"
            : "aspect-[16/9] min-h-[12rem] items-center justify-center"
        )}
      >
        <div className="w-full max-w-full">{children}</div>
      </div>
    </figure>
  );
}

export function UiComponentBeforeAfter({
  mockup,
  className,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  mockup: UiComponentMockupId;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const isPairedLayout = mockup === "snackbars" || mockup === "call-to-action";
  const isStackedLayout = mockup === "dropdown-labels" || mockup === "whatsapp-sample";

  if (isPairedLayout) {
    return (
      <div className={cn("ui-component-before-after w-full", className)}>
        {mockup === "snackbars" ? (
          <SnackbarsPairedMockup beforeLabel={beforeLabel} afterLabel={afterLabel} />
        ) : (
          <CallToActionPairedMockup beforeLabel={beforeLabel} afterLabel={afterLabel} />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "ui-component-before-after",
        isStackedLayout
          ? "flex flex-col gap-6 sm:gap-8"
          : "grid gap-5 sm:grid-cols-2 sm:gap-6",
        className
      )}
    >
      <ComparisonPanel label={beforeLabel} mockup={mockup}>
        <UiComponentMockupPanel mockup={mockup} variant="before" />
      </ComparisonPanel>
      <ComparisonPanel label={afterLabel} mockup={mockup}>
        <UiComponentMockupPanel mockup={mockup} variant="after" />
      </ComparisonPanel>
    </div>
  );
}
