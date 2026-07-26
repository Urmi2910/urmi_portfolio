"use client";

import { cn } from "@/lib/utils";
import { useCallback, useRef, useState } from "react";
import { UiScreenshotPlaceholder } from "./UiScreenshotPlaceholder";

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    dragging.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div className={cn("writing-before-after", className)}>
      <div className="mb-3 flex items-center justify-between text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-[var(--radius-lg)] border border-outline/15 touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="absolute inset-0">
          <UiScreenshotPlaceholder label={after} variant="after" className="h-full rounded-none border-0" />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <UiScreenshotPlaceholder label={before} variant="before" className="h-full rounded-none border-0" />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-primary shadow-[0_0_0_1px_rgb(255_255_255_/_0.8)]"
          style={{ left: `${position}%` }}
          aria-hidden
        />

        <button
          type="button"
          className="absolute top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-outline/20 bg-background shadow-md transition-md hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          style={{ left: `${position}%` }}
          aria-label="Drag to compare before and after"
          onPointerDown={onPointerDown}
        >
          <span className="flex gap-0.5" aria-hidden>
            <span className="h-3 w-0.5 rounded-full bg-muted-foreground/60" />
            <span className="h-3 w-0.5 rounded-full bg-muted-foreground/60" />
          </span>
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-muted-foreground">Drag to compare</p>
    </div>
  );
}
