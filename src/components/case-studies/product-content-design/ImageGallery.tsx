"use client";

import type { WritingExampleGalleryItem } from "@/data/product-content-design";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ExpandableScreenshot } from "./ExpandableScreenshot";

export function ImageGallery({
  items,
  title,
}: {
  items: WritingExampleGalleryItem[];
  title: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  return (
    <div className="writing-gallery">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h3 className="text-label font-semibold uppercase tracking-[0.12em] text-primary">{title}</h3>
        <p className="text-xs text-muted-foreground">{items.length} views</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={cn(
              "rounded-[var(--radius-md)] border px-3 py-2 text-left text-sm transition-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activeId === item.id
                ? "border-primary/30 bg-primary/5 text-foreground"
                : "border-outline/10 bg-surface/50 text-muted-foreground hover:border-outline/20"
            )}
          >
            <span className="font-medium">{String(index + 1).padStart(2, "0")}</span>
            <span className="mt-0.5 block text-xs leading-snug">{item.caption}</span>
          </button>
        ))}
      </div>

      <div className="mt-4">
        {items.map((item) =>
          item.id === activeId ? (
            <ExpandableScreenshot
              key={item.id}
              label={item.alt}
              caption={item.caption}
              variant={item.id === "final" ? "after" : "default"}
              src={item.src}
              mockup={item.mockup}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
