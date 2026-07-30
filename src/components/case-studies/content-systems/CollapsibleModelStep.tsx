"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function CollapsibleModelStep({
  number,
  title,
  defaultOpen = false,
  children,
}: {
  number: number;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "content-systems-model-step group scroll-mt-28",
        "content-systems-model-step--collapsible",
      )}
    >
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            Step {number}. {title}
          </h3>
          <ChevronDown
            className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/60 transition-md group-open:rotate-180 group-open:text-[#ea580c]"
            strokeWidth={2.5}
            aria-hidden
          />
        </span>
      </summary>
      <div className="content-systems-model-step__body mt-3 space-y-4">{children}</div>
    </details>
  );
}
