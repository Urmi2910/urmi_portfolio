"use client";

import { cn } from "@/lib/utils";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

export type ContentSystemsImageData = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export function ContentSystemsImage({
  image,
  priority = false,
  className,
}: {
  image: ContentSystemsImageData;
  priority?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className={cn("content-systems-figure w-full", className)}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] focus-visible:ring-offset-2"
          aria-label={`Expand ${image.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="block h-auto w-full rounded-[var(--radius-md)] border border-outline/10 bg-white"
          />
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
            Tap to zoom
          </span>
        </button>
        {image.caption ? (
          <figcaption className="mt-1 text-sm leading-relaxed text-muted-foreground">{image.caption}</figcaption>
        ) : null}
      </figure>

      {open ? (
        <div
          className="fixed inset-0 z-[500] flex items-start justify-center overflow-auto bg-foreground/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="mx-auto h-auto w-full max-w-[min(1200px,calc(100vw-2rem))] rounded-[var(--radius-md)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
