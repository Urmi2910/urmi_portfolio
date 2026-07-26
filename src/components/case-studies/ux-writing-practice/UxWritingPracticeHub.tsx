import {
  uxWritingPracticeHub,
  uxWritingPracticeSections,
  type UxWritingPracticeSection,
} from "@/data/ux-writing-practice";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { WorkshopDeckPreview } from "./WorkshopDeckPreview";

function SectionBlock({
  section,
  index,
}: {
  section: UxWritingPracticeSection;
  index: number;
}) {
  const imageFirst = index % 2 === 1;

  return (
    <article
      id={section.id}
      className="scroll-mt-28 rounded-[20px] bg-[#fafafa] p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#efefef] sm:p-6 lg:p-8"
    >
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-10",
          imageFirst && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
        )}
      >
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2563eb] ring-1 ring-[#e8eef7]">
            {section.chip}
          </span>
          <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-foreground sm:text-2xl">
            {section.title}
          </h2>
          <p className="mt-3 text-base leading-[1.75] text-muted-foreground">{section.description}</p>
        </div>

        <div className="min-w-0">
          <WorkshopDeckPreview variant={section.deck} />
        </div>
      </div>
    </article>
  );
}

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
        <p className="text-sm font-medium text-primary">{uxWritingPracticeHub.company}</p>
        <h1 className="mt-2 text-[clamp(2rem,6vw,3.25rem)] font-heading font-bold leading-[1.08] tracking-tight text-foreground text-balance">
          {uxWritingPracticeHub.title}
        </h1>
        <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-lg">
          {uxWritingPracticeHub.overview}
        </p>
      </header>

      <div className="mt-12 space-y-8 sm:mt-14 sm:space-y-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">What I created</p>
          <div className="mt-6 space-y-8 sm:space-y-10">
            {uxWritingPracticeSections.map((section, index) => (
              <SectionBlock key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>

        <section className="max-w-3xl">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">Impact</h2>
          <p className="mt-4 text-base leading-[1.75] text-muted-foreground sm:text-lg">
            {uxWritingPracticeHub.impact}
          </p>
        </section>

        <aside className="rounded-[20px] border border-primary/15 bg-primary/[0.04] px-6 py-7 sm:px-8 sm:py-8">
          <h2 className="font-heading text-lg font-semibold text-foreground sm:text-xl">Key takeaway</h2>
          <p className="mt-3 max-w-3xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
            &ldquo;{uxWritingPracticeHub.keyTakeaway}&rdquo;
          </p>
        </aside>
      </div>
    </div>
  );
}
