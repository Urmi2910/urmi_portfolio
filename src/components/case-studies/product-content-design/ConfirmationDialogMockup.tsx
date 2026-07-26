"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import {
  confirmationDialogVariants,
  isConfirmationDialogVariant,
  type ConfirmationDialogCopy,
  type ConfirmationDialogVariant,
} from "./confirmation-dialog-content";

export type { ConfirmationDialogCopy, ConfirmationDialogVariant };

export function DialogCard({
  copy,
  compact = false,
  highlighted = false,
  className,
}: {
  copy: ConfirmationDialogCopy;
  compact?: boolean;
  highlighted?: boolean;
  className?: string;
}) {
  const showActions = copy.showActions !== false && copy.primary && copy.secondary;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-white shadow-sm",
        highlighted ? "border-primary/25 ring-1 ring-primary/10" : "border-[#e3e8ef]",
        className
      )}
      role="img"
      aria-label={`${copy.title} ${copy.body}`}
    >
      <div className="flex items-start justify-between gap-3 border-b border-[#edf1f5] px-5 py-4">
        <h4
          className={cn(
            "font-semibold tracking-tight text-[#111827]",
            compact ? "text-base leading-snug" : "text-lg sm:text-xl"
          )}
        >
          {copy.title}
        </h4>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#9aa3af]" aria-hidden>
          <X className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </div>

      <div className={cn(compact ? "px-5 py-4" : "px-6 py-5 sm:px-7 sm:py-6")}>
        <p
          className={cn(
            "leading-relaxed text-[#374151]",
            compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
          )}
        >
          {copy.body}
        </p>
        {copy.link ? (
          <p className={cn("mt-2.5 font-medium text-[#2563eb]", compact ? "text-sm" : "text-base")}>{copy.link}</p>
        ) : null}
      </div>

      {showActions ? (
        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[#edf1f5] px-5 py-4">
          <span className={cn("font-medium text-[#6b7280]", compact ? "text-sm" : "text-base")}>{copy.secondary}</span>
          <span
            className={cn(
              "inline-flex items-center rounded-full bg-[#2563eb] font-semibold text-white shadow-sm",
              compact ? "min-h-[36px] px-4 text-sm" : "min-h-[44px] px-6 text-base"
            )}
          >
            {copy.primary}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function ConfirmationDialogMockup({
  variant,
  copy,
  className,
  compact = false,
  highlighted = false,
  bare = false,
}: {
  variant?: ConfirmationDialogVariant;
  copy?: ConfirmationDialogCopy;
  className?: string;
  compact?: boolean;
  highlighted?: boolean;
  bare?: boolean;
}) {
  const dialog =
    copy ??
    (variant && confirmationDialogVariants[variant]
      ? confirmationDialogVariants[variant]
      : confirmationDialogVariants["leave-page"]);

  if (bare) {
    return (
      <DialogCard copy={dialog} compact={compact} highlighted={highlighted} className={cn("w-full", className)} />
    );
  }

  return (
    <div
      className={cn(
        "writing-dialog-mockup relative flex h-full w-full items-center justify-center overflow-hidden bg-[#f4f6f8] p-5 sm:p-8",
        className
      )}
    >
      <DialogCard copy={dialog} compact={compact} highlighted={highlighted} className="relative z-10 w-full max-w-lg" />
    </div>
  );
}

export function isConfirmationDialogMockup(value?: string): value is ConfirmationDialogVariant {
  return isConfirmationDialogVariant(value);
}

export function ConfirmationDialogExplorationGrid({
  explorations,
  pair,
}: {
  explorations: ConfirmationDialogCopy[];
  pair?: ConfirmationDialogCopy[];
}) {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {explorations.map((item) => (
          <DialogCard key={`${item.title}-${item.primary}-${item.secondary}`} copy={item} compact />
        ))}
      </div>

      {pair && pair.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {pair.map((item) => (
            <DialogCard key={`${item.title}-${item.primary}`} copy={item} compact />
          ))}
        </div>
      ) : null}
    </div>
  );
}
