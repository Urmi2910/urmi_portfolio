import type { WritingExample } from "@/data/product-content-design";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WritingExampleSampleNav({
  current,
  prev,
  next,
  index,
  total,
}: {
  current: WritingExample;
  prev?: WritingExample;
  next?: WritingExample;
  index: number;
  total: number;
}) {
  return (
    <nav
      aria-label="Example navigation"
      className="writing-sample-nav fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto flex max-w-2xl items-stretch gap-2 px-[clamp(1rem,4vw,1.5rem)] py-3">
        {prev ? (
          <Link
            href={`/work/product-content-design/${prev.slug}`}
            scroll
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-3 py-2",
              "text-sm text-muted-foreground transition-md hover:bg-surface hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="min-w-0 truncate font-medium">{prev.title}</span>
          </Link>
        ) : (
          <Link
            href="/work/product-content-design"
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-3 py-2",
              "text-sm text-muted-foreground transition-md hover:bg-surface hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="font-medium">All Examples</span>
          </Link>
        )}

        <p className="hidden shrink-0 items-center px-1 text-xs tabular-nums text-muted-foreground sm:flex">
          {index + 1}/{total}
        </p>

        {next ? (
          <Link
            href={`/work/product-content-design/${next.slug}`}
            scroll
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center justify-end gap-2 rounded-[var(--radius-md)] px-3 py-2",
              "bg-primary/10 text-sm font-medium text-primary transition-md hover:bg-primary/15",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            <span className="min-w-0 truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        ) : (
          <Link
            href="/work/product-content-design"
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center justify-end gap-2 rounded-[var(--radius-md)] px-3 py-2",
              "bg-primary/10 text-sm font-medium text-primary transition-md hover:bg-primary/15",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            <span className="font-medium">All Examples</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        )}
      </div>
      <p className="sr-only">Currently reading: {current.title}</p>
    </nav>
  );
}
