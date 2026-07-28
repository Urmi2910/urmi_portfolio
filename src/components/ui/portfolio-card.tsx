import type { CaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  BookOpen,
  CandlestickChart,
  Layers,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const accentIcon: Record<CaseStudy["accentColor"], string> = {
  primary: "bg-primary/10 text-primary ring-primary/15",
  accent: "bg-accent/10 text-accent ring-accent/15",
  tertiary: "bg-tertiary/10 text-tertiary ring-tertiary/15",
  warm: "bg-accent-warm/10 text-accent-warm ring-accent-warm/15",
};

const studyIcons: Record<string, LucideIcon> = {
  "product-content-design": PenLine,
  "trigger-order-vs-gtt": CandlestickChart,
  "content-systems": Layers,
  guidelines: BookOpen,
};

export function PortfolioCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const StudyIcon = studyIcons[study.slug] ?? PenLine;

  return (
    <Link
      href={study.href ?? `/work/${study.slug}`}
      aria-label={`Read case study: ${study.title}`}
      style={{ animationDelay: `${index * 80}ms` }}
      className="portfolio-card-enter group flex h-full min-h-[15.5rem] touch-manipulation md:min-h-[17rem]"
    >
      <article
        className={cn(
          "flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-sm ring-1 ring-outline/10 transition-md",
          "hover:-translate-y-1 hover:shadow-md",
          "motion-reduce:hover:translate-y-0"
        )}
      >
        <div className="flex flex-1 flex-col px-[clamp(1.125rem,3.5vw,1.5rem)] py-[clamp(1.125rem,3.5vw,1.5rem)]">
          <div className="mb-4 flex items-start justify-between gap-3">
            <span
              className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] ring-1",
                accentIcon[study.accentColor]
              )}
            >
              <StudyIcon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground ring-1 ring-outline/10 transition-md group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/20">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>

          <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
            {study.title}
          </h3>
          {study.subtitle ? (
            <p className="mt-1.5 font-heading text-sm font-semibold leading-snug text-primary sm:text-base">
              {study.subtitle}
            </p>
          ) : null}
          <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {study.excerpt}
          </p>
          {study.metrics.length > 0 ? (
            <p className="mt-4 font-heading text-lg font-bold text-primary">
              {study.metrics[0]?.value}
              <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                {study.metrics[0]?.label}
              </span>
            </p>
          ) : (
            <p className="mt-4 border-t border-outline/10 pt-4 text-xs font-medium tracking-wide text-muted-foreground">
              {study.tags.join(" • ")}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
