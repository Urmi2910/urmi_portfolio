"use client";

import { aiTrustChapters } from "@/data/ai-trust-case-study";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function AiTrustSectionNav({ variant = "desktop" }: { variant?: "mobile" | "desktop" }) {
  const [activeId, setActiveId] = useState<string>(aiTrustChapters[0]?.id ?? "context");

  useEffect(() => {
    const elements = aiTrustChapters
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (variant === "mobile") {
    return (
      <nav
        aria-label="Case study chapters"
        className="sticky top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-20 -mx-[clamp(1rem,4vw,1.5rem)] mb-8 flex gap-2 overflow-x-auto border-b border-border/60 bg-background/95 px-[clamp(1rem,4vw,1.5rem)] py-3 backdrop-blur-md lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {aiTrustChapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-md",
              activeId === chapter.id ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground"
            )}
          >
            {chapter.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Case study chapters"
      className="hidden lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Story</p>
      <ol className="space-y-1 border-l border-outline/15 pl-3">
        {aiTrustChapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              className={cn(
                "block rounded-r-[var(--radius-sm)] py-1.5 pl-3 text-sm transition-md",
                activeId === chapter.id
                  ? "border-l-2 border-primary bg-primary/5 font-medium text-primary"
                  : "border-l-2 border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {chapter.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
