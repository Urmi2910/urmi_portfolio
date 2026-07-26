import { uxWritingPracticeHub } from "@/data/ux-writing-practice";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function UxWritingPracticeHub() {
  return (
    <div className="ux-writing-practice-hub">
      <Link
        href="/#case-studies"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        Back to portfolio
      </Link>

      <header className="mt-8 max-w-3xl md:mt-10">
        <h1 className="text-[clamp(2rem,6vw,3.25rem)] font-heading font-bold leading-[1.08] tracking-tight text-foreground text-balance">
          {uxWritingPracticeHub.title}
        </h1>
        <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-lg">
          {uxWritingPracticeHub.overview}
        </p>
      </header>

      <article className="mt-10 flex max-w-3xl flex-col rounded-[20px] bg-[#fafafa] p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#efefef] sm:mt-12 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary ring-1 ring-primary/15">
            <BookOpen className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Published article
            </p>
            <h2 className="mt-2 font-heading text-xl font-bold leading-snug text-foreground sm:text-2xl">
              {uxWritingPracticeHub.blog.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {uxWritingPracticeHub.blog.publisher}
            </p>
          </div>
        </div>
        <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
          {uxWritingPracticeHub.blog.summary}
        </p>
        <a
          href={uxWritingPracticeHub.blog.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-md hover:text-primary/80 sm:text-base"
        >
          Read the article
          <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
        </a>
      </article>
    </div>
  );
}
