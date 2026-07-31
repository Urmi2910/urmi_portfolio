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
              "rounded-[var(--radius-md)] px-3.5 py-2.5 text-left text-sm transition-md active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activeId === item.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-surface text-muted-foreground ring-1 ring-outline/10 hover:bg-primary/5 hover:text-foreground hover:shadow-sm"
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
