import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function CaseStudyBottomNav({
  children,
  className,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  "aria-label": string;
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn("case-study-bottom-nav border-t border-border/60 bg-background", className)}
    >
      {children}
    </nav>
  );
}
