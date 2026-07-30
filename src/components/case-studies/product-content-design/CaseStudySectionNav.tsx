"use client";

import type { WritingExampleSection } from "@/data/product-content-design";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function CaseStudySectionNav({
  sections,
  variant = "desktop",
}: {
  sections: WritingExampleSection[];
  variant?: "mobile" | "desktop";
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  if (variant === "mobile") {
    return (
      <nav
        aria-label="Case study sections"
        className="writing-section-nav-mobile sticky top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-20 -mx-[clamp(1rem,4vw,1.5rem)] mb-6 border-b border-border/60 bg-background/95 px-[clamp(1rem,4vw,1.5rem)] py-3 backdrop-blur-md md:hidden"
      >
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                activeId === section.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-muted-foreground"
              )}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Case study sections"
      className="writing-section-nav hidden md:block md:sticky md:top-24 md:max-h-[calc(100vh-7rem)] md:overflow-y-auto md:overscroll-contain"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Index
      </p>
      <ol className="space-y-1 border-l border-outline/15 pl-3">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "flex items-baseline gap-2 rounded-r-[var(--radius-sm)] py-1.5 pl-3 text-sm transition-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                activeId === section.id
                  ? "border-l-2 border-primary bg-primary/5 font-medium text-primary"
                  : "border-l-2 border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="shrink-0 text-xs font-semibold tabular-nums tracking-wide opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{section.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
