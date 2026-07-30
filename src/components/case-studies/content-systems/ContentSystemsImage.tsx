"use client";

import { cn } from "@/lib/utils";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ContentSystemsImageData = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

function ContentSystemsLightbox({
  image,
  onClose,
}: {
  image: ContentSystemsImageData;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const lightboxTitle = image.caption ?? image.alt;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[500] flex flex-col bg-foreground/90"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <div
        className="flex shrink-0 items-center justify-between gap-3 border-b border-background/10 px-4 py-3 sm:px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="truncate text-sm font-medium text-background">{lightboxTitle}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom(1)}
            className="inline-flex h-9 rounded-full px-3 text-xs font-medium text-background hover:bg-background/10"
            aria-label="Fit image to screen"
          >
            Fit
          </button>
          <button
            type="button"
            onClick={() => setZoom((value) => Math.max(1, value - 0.25))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="min-w-[3rem] text-center text-xs tabular-nums text-background/80">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((value) => Math.min(4, value + 0.25))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20"
            aria-label="Close expanded view"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <div
        className="min-h-0 flex-1 overflow-auto overscroll-contain p-4 sm:p-6"
        onClick={onClose}
      >
        <div
          className={cn(
            "mx-auto flex min-h-full min-w-full items-start justify-center",
            zoom === 1 ? "w-full" : "w-max max-w-none",
          )}
        >
          <div onClick={(event) => event.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              draggable={false}
              style={
                zoom !== 1
                  ? { width: image.width * zoom, height: "auto", maxWidth: "none" }
                  : undefined
              }
              className={cn(
                "rounded-[var(--radius-md)] bg-white shadow-lg",
                zoom === 1 &&
                  "mx-auto h-auto w-full max-w-[min(1200px,calc(100vw-3rem))] object-contain",
              )}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function ContentSystemsImage({
  image,
  priority = false,
  className,
  size = "full",
}: {
  image: ContentSystemsImageData;
  priority?: boolean;
  className?: string;
  size?: "full" | "thumbnail";
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isThumbnail = size === "thumbnail";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <figure
        className={cn(
          "content-systems-figure",
          isThumbnail && "content-systems-figure--thumbnail",
          className,
        )}
      >
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
            draggable={false}
            className="content-systems-figure__img pointer-events-none"
          />
        </button>
        {image.caption ? (
          <figcaption className="content-systems-figure__caption">{image.caption}</figcaption>
        ) : null}
      </figure>

      {open && mounted ? (
        <ContentSystemsLightbox image={image} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
