"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ConfirmationDialogMockup,
  isConfirmationDialogMockup,
} from "./ConfirmationDialogMockup";
import { UiScreenshotPlaceholder } from "./UiScreenshotPlaceholder";

function ScreenshotPreview({
  label,
  caption,
  variant,
  src,
  mockup,
  className,
}: {
  label: string;
  caption?: string;
  variant?: "default" | "before" | "after";
  src?: string;
  mockup?: string;
  className?: string;
}) {
  if (isConfirmationDialogMockup(mockup)) {
    return (
      <div className={cn("overflow-hidden rounded-[var(--radius-lg)] border border-outline/15 shadow-sm", className)}>
        <ConfirmationDialogMockup variant={mockup} className="min-h-[280px] rounded-none sm:min-h-[320px]" />
        {caption ? <p className="border-t border-outline/10 px-4 py-3 text-sm text-muted-foreground">{caption}</p> : null}
      </div>
    );
  }

  if (src) {
    return (
      <div className={cn("overflow-hidden rounded-[var(--radius-lg)] border border-outline/15 bg-background shadow-sm", className)}>
        <div className="relative aspect-[9/19] w-full max-h-[520px] sm:max-h-[560px]">
          <Image src={src} alt={label} fill className="object-contain object-top" sizes="(max-width: 768px) 100vw, 672px" />
        </div>
        {caption ? <p className="border-t border-outline/10 px-4 py-3 text-sm text-muted-foreground">{caption}</p> : null}
      </div>
    );
  }

  return (
    <>
      <UiScreenshotPlaceholder label={label} variant={variant} className={className} />
      {caption ? <p className="mt-2 text-sm text-muted-foreground">{caption}</p> : null}
    </>
  );
}

export function ExpandableScreenshot({
  label,
  caption,
  variant = "default",
  src,
  mockup,
}: {
  label: string;
  caption?: string;
  variant?: "default" | "before" | "after";
  src?: string;
  mockup?: string;
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
        <ScreenshotPreview
          label={label}
          caption={caption}
          variant={variant}
          src={src}
          mockup={mockup}
          className="transition-md group-hover:-translate-y-0.5 group-hover:shadow-md motion-reduce:group-hover:translate-y-0"
        />
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
            className="writing-lightbox relative w-full max-w-3xl overflow-hidden rounded-[var(--radius-lg)] bg-background shadow-lg"
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
            <ScreenshotPreview
              label={label}
              variant={variant}
              src={src}
              mockup={mockup}
              className="rounded-none border-0 shadow-none"
            />
            {(src || mockup) && caption ? (
              <p className="border-t border-outline/10 px-4 py-3 text-sm text-muted-foreground">{caption}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
