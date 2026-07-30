"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function CollapsibleStoryChapter({
  id,
  title,
  lead,
  defaultOpen = false,
  children,
  className,
  heading = "h2",
}: {
  id: string;
  title: string;
  lead?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
  heading?: "h2" | "h3";
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const Heading = heading;

  useEffect(() => {
    const openIfTarget = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash === id) {
        detailsRef.current?.setAttribute("open", "");
      }
    };

    openIfTarget();
    window.addEventListener("hashchange", openIfTarget);
    return () => window.removeEventListener("hashchange", openIfTarget);
  }, [id]);

  return (
    <details
      ref={detailsRef}
      id={id}
      open={defaultOpen}
      className={cn("story-chapter-collapsible scroll-mt-28 group", className)}
    >
      <summary className="story-chapter-collapsible__summary cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-start justify-between gap-4">
          <span className="min-w-0">
            <Heading className="font-heading text-[clamp(1.25rem,3vw,1.625rem)] font-bold leading-snug tracking-tight text-foreground text-balance">
              {title}
            </Heading>
            {lead ? (
              <p className="story-chapter-collapsible__lead mt-2 text-base leading-relaxed text-muted-foreground group-open:hidden sm:text-lg">
                {lead}
              </p>
            ) : null}
          </span>
          <ChevronDown
            className="mt-1.5 h-4 w-4 shrink-0 text-muted-foreground/60 transition-md group-open:rotate-180 group-open:text-primary"
            strokeWidth={2.5}
            aria-hidden
          />
        </span>
      </summary>
      <div className="story-chapter-body mt-4 space-y-5">{children}</div>
    </details>
  );
}
