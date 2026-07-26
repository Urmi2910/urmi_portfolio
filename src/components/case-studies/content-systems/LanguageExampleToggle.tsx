"use client";

import type { SystemExample } from "@/data/content-systems";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function LanguageExampleToggle({ examples }: { examples: SystemExample[] }) {
  const [active, setActive] = useState(0);
  const current = examples[active];

  return (
    <div className="system-language-toggle rounded-[var(--radius-lg)] border border-outline/15 bg-surface/30 p-4 sm:p-5">
      <div className="flex flex-wrap gap-2">
        {examples.map((example, index) => (
          <button
            key={`${example.label}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-md",
              active === index
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground ring-1 ring-outline/10 hover:text-foreground"
            )}
          >
            {example.label}
          </button>
        ))}
      </div>
      {current ? (
        <div className="mt-4 rounded-[var(--radius-md)] bg-background p-4 ring-1 ring-outline/10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {current.context}
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground">{current.output}</p>
        </div>
      ) : null}
    </div>
  );
}
