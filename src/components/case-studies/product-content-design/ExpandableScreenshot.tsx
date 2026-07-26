"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { UiScreenshotPlaceholder } from "./UiScreenshotPlaceholder";

export function ExpandableScreenshot({
  label,
  caption,
  variant = "default",
}: {
  label: string;
  caption?: string;
  variant?: "default" | "before" | "after";
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <UiScreenshotPlaceholder
          label={label}
          variant={variant}
          className="transition-md group-hover:-translate-y-0.5 group-hover:shadow-md motion-reduce:group-hover:translate-y-0"
        />
        {caption ? (
          <p className="mt-2 text-sm text-muted-foreground">{caption}</p>
        ) : null}
        <p className="mt-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Tap to expand
        </p>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={caption ?? label}
          onClick={() => setOpen(false)}
        >
          <div
            className="writing-lightbox relative w-full max-w-3xl overflow-hidden rounded-[var(--radius-xl)] bg-background shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm ring-1 ring-outline/15 transition-md hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close expanded view"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <UiScreenshotPlaceholder label={label} variant={variant} className="rounded-none border-0" />
            {caption ? (
              <p className="border-t border-outline/10 px-4 py-3 text-sm text-muted-foreground">{caption}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
