"use client";

import type { ConfirmationDialogCopy } from "./confirmation-dialog-content";
import { ConfirmationDialogExplorationGrid } from "./ConfirmationDialogMockup";

export function ConfirmationDialogExplorations({
  explorations,
  pair,
}: {
  explorations: ConfirmationDialogCopy[];
  pair?: ConfirmationDialogCopy[];
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-outline/15 bg-[#faf8f5] p-4 sm:p-5">
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        Six copy directions explored during iteration.
      </p>
      <ConfirmationDialogExplorationGrid explorations={explorations} pair={pair} />
    </div>
  );
}
