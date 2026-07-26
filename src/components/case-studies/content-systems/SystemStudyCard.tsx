import type { SystemStudy } from "@/data/content-systems";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const layoutPreview: Record<SystemStudy["layout"], string> = {
  framework: "Decision tree + severity table",
  language: "Taxonomy + register matrix",
  voice: "Tone spectrum + governance doc",
};

const layoutAccent: Record<SystemStudy["layout"], string> = {
  framework: "border-l-accent-warm",
  language: "border-l-accent",
  voice: "border-l-tertiary",
};

export function SystemStudyCard({ study, index }: { study: SystemStudy; index: number }) {
  return (
    <Link
      href={`/work/content-systems/${study.slug}`}
      style={{ animationDelay: `${index * 80}ms` }}
      className="system-study-card group block touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <article
        className={cn(
          "overflow-hidden rounded-[var(--radius-xl)] border border-outline/10 bg-surface/50 shadow-sm transition-md",
          "hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0",
          "border-l-[3px]",
          layoutAccent[study.layout]
        )}
      >
        <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(12rem,16rem)]">
          <div className="p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {layoutPreview[study.layout]}
            </p>
            <h3 className="mt-2 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
              {study.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.teaser}</p>
          </div>
          <div className="flex items-center justify-between border-t border-outline/10 bg-background/50 px-5 py-4 md:flex-col md:items-end md:justify-center md:border-l md:border-t-0 md:px-6">
            <span className="text-xs font-medium text-primary">Read case study</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-foreground ring-1 ring-outline/10 transition-md group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
