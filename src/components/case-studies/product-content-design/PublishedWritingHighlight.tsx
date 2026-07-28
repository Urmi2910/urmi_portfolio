import { uxWritingPracticeHub } from "@/data/ux-writing-practice";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function PublishedWritingHighlight() {
  const { blog } = uxWritingPracticeHub;

  return (
    <section id="writing" className="scroll-mt-28 mt-16 border-t border-outline/10 pt-12 sm:mt-20 sm:pt-14">
      <header className="max-w-prose">
        <h2 className="font-heading text-[clamp(1.5rem,4vw,2rem)] font-bold leading-snug text-foreground">
          Published Writing
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{uxWritingPracticeHub.overview}</p>
      </header>

      <article className="mt-8 rounded-[var(--radius-lg)] bg-surface p-6 ring-1 ring-outline/10 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary ring-1 ring-primary/15">
            <BookOpen className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Blog · {blog.publisher}
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold leading-snug text-foreground sm:text-2xl">
              {blog.title}
            </h3>
          </div>
        </div>

        <p className="mt-6 text-base leading-[1.75] text-muted-foreground">{blog.summary}</p>

        <a
          href={blog.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-md hover:bg-primary/90"
        >
          Read on UX Content Collective
          <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
        </a>
      </article>
    </section>
  );
}
