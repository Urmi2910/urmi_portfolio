"use client";

import type { SystemStudy } from "@/data/content-systems";
import { CaseStudyBottomNav } from "@/components/case-studies/shared/CaseStudyBottomNav";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SystemStudyNav({
  current,
  prev,
  next,
  index,
  total,
}: {
  current: SystemStudy;
  prev?: SystemStudy;
  next?: SystemStudy;
  index: number;
  total: number;
}) {
  return (
    <CaseStudyBottomNav aria-label="System study navigation" className="system-study-nav">
      <div className="mx-auto flex max-w-5xl items-stretch gap-2 px-[clamp(1rem,4vw,1.5rem)] py-3">
        {prev ? (
          <Link
            href={`/work/content-systems/${prev.slug}`}
            scroll
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-3 py-2",
              "text-sm text-muted-foreground transition-md hover:bg-surface hover:text-foreground"
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="min-w-0 truncate font-medium">{prev.title}</span>
          </Link>
        ) : (
          <Link
            href="/work/content-systems"
            className="flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-3 py-2 text-sm text-muted-foreground transition-md hover:bg-surface"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="font-medium">All systems</span>
          </Link>
        )}

        <p className="hidden shrink-0 items-center px-1 text-xs tabular-nums text-muted-foreground sm:flex">
          {index + 1}/{total}
        </p>

        {next ? (
          <Link
            href={`/work/content-systems/${next.slug}`}
            scroll
            className="flex min-h-[44px] min-w-0 flex-1 items-center justify-end gap-2 rounded-[var(--radius-md)] bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-md hover:bg-primary/15"
          >
            <span className="min-w-0 truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        ) : (
          <Link
            href="/work/content-systems"
            className="flex min-h-[44px] min-w-0 flex-1 items-center justify-end gap-2 rounded-[var(--radius-md)] bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
          >
            <span className="font-medium">All systems</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        )}
      </div>
      <p className="sr-only">Currently viewing: {current.title}</p>
    </CaseStudyBottomNav>
  );
}
