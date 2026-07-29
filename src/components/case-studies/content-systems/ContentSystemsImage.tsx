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
      <figure className={cn("content-systems-figure", className)}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] focus-visible:ring-offset-2"
          aria-label={`Expand ${image.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={priority ? "eager" : "lazy"}
            decoding="sync"
            fetchPriority={priority ? "high" : undefined}
            className="content-systems-figure__img"
          />
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
            Tap to zoom
          </span>
        </button>
        {image.caption ? (
          <figcaption className="content-systems-figure__caption">{image.caption}</figcaption>
        ) : null}
      </figure>

      {open ? (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center overflow-auto bg-foreground/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto max-h-[calc(100vh-4rem)] w-auto max-w-[min(100%,1200px)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
