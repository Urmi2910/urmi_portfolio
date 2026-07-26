import type { WritingExample } from "@/data/product-content-design";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function WritingExampleCard({
  example,
  index,
}: {
  example: WritingExample;
  index: number;
}) {
  return (
    <Link
      href={`/work/product-content-design/${example.slug}`}
      aria-label={`Read case study: ${example.title}`}
      style={{ animationDelay: `${index * 60}ms` }}
      className="writing-example-card group flex touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <article
        className={cn(
          "flex w-full flex-col rounded-[var(--radius-lg)] border border-outline/10 bg-surface/60 p-5 shadow-sm transition-md",
          "hover:-translate-y-0.5 hover:border-primary/20 hover:bg-surface hover:shadow-md",
          "motion-reduce:hover:translate-y-0"
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="font-heading text-sm font-bold tabular-nums text-primary/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-foreground ring-1 ring-outline/10 transition-md group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </div>
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {example.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{example.teaser}</p>
      </article>
    </Link>
  );
}
