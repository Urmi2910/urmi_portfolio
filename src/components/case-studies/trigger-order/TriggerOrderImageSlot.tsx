"use client";

import { UiScreenshotPlaceholder } from "@/components/case-studies/product-content-design/UiScreenshotPlaceholder";
import type { ImageSetLabel, TriggerOrderImage } from "@/data/trigger-order-case-study";
import { cn } from "@/lib/utils";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type { ImageSetLabel, TriggerOrderImage };

const PHONE_NATIVE_WIDTH = 412;
const PHONE_NATIVE_HEIGHT = 920;

const layoutDimensions = {
  phone: { width: PHONE_NATIVE_WIDTH, height: PHONE_NATIVE_HEIGHT },
  wide: { width: 1024, height: 784 },
} as const;

function CaseStudyImage({
  image,
  priority = false,
  zoom = 1,
  inLightbox = false,
}: {
  image: TriggerOrderImage & { src: string };
  priority?: boolean;
  zoom?: number;
  inLightbox?: boolean;
}) {
  const isWide = image.layout === "wide";
  const layout = isWide ? layoutDimensions.wide : layoutDimensions.phone;
  const nativeWidth = image.width ?? layout.width;
  const nativeHeight = image.height ?? layout.height;
  const zoomed = inLightbox && zoom !== 1;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      alt={image.alt}
      width={nativeWidth}
      height={nativeHeight}
      loading={priority ? "eager" : "lazy"}
      decoding="sync"
      draggable={false}
      style={
        zoomed
          ? { width: nativeWidth * zoom, height: "auto", maxWidth: "none" }
          : undefined
      }
      className={cn(
        "trigger-order-screenshot block",
        isWide && !inLightbox && "mx-auto h-auto w-full max-w-[1024px] object-contain object-top",
        isWide &&
          inLightbox &&
          zoom === 1 &&
          "mx-auto h-auto w-full max-w-[min(1024px,calc(100vw-3rem))] object-contain object-top",
        !isWide && !inLightbox && "h-full w-full object-contain object-top",
        !isWide &&
          inLightbox &&
          zoom === 1 &&
          "mx-auto h-auto w-full max-w-[min(412px,calc(100vw-3rem))] object-contain object-top",
      )}
    />
  );
}

function ImageLightbox({
  image,
  onClose,
}: {
  image: TriggerOrderImage & { src: string };
  onClose: () => void;
}) {
  const isWide = image.layout === "wide";
  const [zoom, setZoom] = useState(1);

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

  const lightboxTitle = [image.setLabel, image.caption ?? image.alt].filter(Boolean).join(" · ");

  return createPortal(
    <div
      className="fixed inset-0 z-[500] flex flex-col bg-foreground/80"
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
            onClick={() => setZoom((value) => Math.min(isWide ? 4 : 3, value + 0.25))}
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
            zoom === 1 && isWide ? "w-full" : "w-max max-w-none",
          )}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <CaseStudyImage image={image} zoom={zoom} inLightbox />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function TriggerOrderImageSlot({
  image,
  variant = "default",
  className,
  priority = false,
  inRow = false,
  showSetLabel = true,
}: {
  image: TriggerOrderImage;
  variant?: "default" | "before" | "after";
  className?: string;
  priority?: boolean;
  inRow?: boolean;
  showSetLabel?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (image.src) {
    const isWide = image.layout === "wide";

    return (
      <>
        <figure
          className={cn(
            "w-full",
            isWide && "mx-auto max-w-[1024px]",
            !isWide && "mx-auto max-w-[375px]",
            className,
          )}
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label={`Expand ${image.alt}`}
          >
            {!isWide ? (
              <div
                className="w-full"
                style={{
                  aspectRatio: `${image.width ?? PHONE_NATIVE_WIDTH} / ${image.height ?? PHONE_NATIVE_HEIGHT}`,
                }}
              >
                <CaseStudyImage image={{ ...image, src: image.src }} priority={priority} />
              </div>
            ) : (
              <CaseStudyImage image={{ ...image, src: image.src }} priority={priority} />
            )}
          </button>
          {showSetLabel && image.setLabel ? (
            <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {image.setLabel}
            </figcaption>
          ) : null}
          {image.caption ? (
            <figcaption className="mt-1 text-center text-sm leading-relaxed text-muted-foreground">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>

        {open && mounted ? (
          <ImageLightbox image={{ ...image, src: image.src }} onClose={() => setOpen(false)} />
        ) : null}
      </>
    );
  }

  return (
    <figure className={cn("w-full", className)}>
      <UiScreenshotPlaceholder label={image.alt} variant={variant} className="min-h-[16rem] sm:min-h-[18rem]" />
      <figcaption className="mt-3 space-y-1 text-center text-sm text-muted-foreground">
        {image.caption ? <p>{image.caption}</p> : null}
      </figcaption>
    </figure>
  );
}

export function LabeledImageSet({
  label,
  images,
  columns = 3,
  showLabel = true,
  className,
}: {
  label: ImageSetLabel;
  images: readonly TriggerOrderImage[];
  columns?: 2 | 3;
  showLabel?: boolean;
  className?: string;
}) {
  if (images.length === 0) return null;

  const gridClass =
    columns === 2
      ? "trigger-order-image-grid grid grid-cols-1 items-stretch justify-items-center gap-4 sm:grid-cols-2"
      : "trigger-order-image-grid grid grid-cols-1 items-stretch justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("trigger-order-image-set space-y-3", className)}>
      {showLabel ? (
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{label}</h4>
      ) : null}
      <div className={gridClass}>
        {images.map((image) => (
          <TriggerOrderImageSlot
            key={image.filename}
            image={{ ...image, setLabel: label }}
            inRow
            showSetLabel={false}
            className={cn("w-full", image.layout === "wide" ? "sm:col-span-2 lg:col-span-3" : "max-w-[375px]")}
          />
        ))}
      </div>
    </div>
  );
}

export function PairedLabeledImages({
  images,
  priority = false,
  className,
}: {
  images: readonly TriggerOrderImage[];
  priority?: boolean;
  className?: string;
}) {
  if (images.length === 0) return null;

  return (
    <div className={cn("trigger-order-media-pair space-y-3", className)}>
      <div className="grid grid-cols-1 items-start justify-items-center gap-5 sm:grid-cols-2 sm:gap-4">
        {images.map((image, index) => (
          <TriggerOrderImageSlot
            key={image.filename}
            image={image}
            inRow
            priority={priority && index === 0}
            className="w-full max-w-[375px]"
          />
        ))}
      </div>
    </div>
  );
}
