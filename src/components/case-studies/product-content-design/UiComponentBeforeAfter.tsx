"use client";

import { cn } from "@/lib/utils";
import {
  CallToActionPairedMockup,
  SnackbarsPairedMockup,
  UiComponentMockupPanel,
  type UiComponentMockupId,
} from "./UiComponentMockups";

export function ComparisonColumn({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("min-w-0", className)}>
      <figcaption className="mb-1.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </figcaption>
      {children}
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
        "ui-component-before-after grid gap-5 sm:grid-cols-2 sm:gap-8",
        className,
      )}
    >
      <ComparisonColumn label={beforeLabel}>
        <UiComponentMockupPanel mockup={mockup} variant="before" />
      </ComparisonColumn>
      <ComparisonColumn label={afterLabel}>
        <UiComponentMockupPanel mockup={mockup} variant="after" />
      </ComparisonColumn>
    </div>
  );
}
