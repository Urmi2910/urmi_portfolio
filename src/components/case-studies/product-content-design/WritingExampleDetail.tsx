import { productContentDesignHub, type WritingExample } from "@/data/product-content-design";
import {
  DeepDive,
  StoryChapter,
  StoryList,
  StoryProse,
  StorySection,
} from "@/components/case-studies/shared/StoryComponents";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ImageGallery } from "./ImageGallery";

export function WritingExampleDetail({
  example,
  prev,
  next,
}: {
  example: WritingExample;
  prev?: WritingExample;
  next?: WritingExample;
}) {
  return (
    <div className="writing-example-detail mx-auto max-w-2xl pb-6">
      <Link
        href="/work/product-content-design"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-2 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        All Examples
      </Link>

      <header className="mt-6 max-w-prose">
        <p className="text-sm font-medium text-primary">{productContentDesignHub.title}</p>
        <h1 className="mt-2 text-[clamp(1.75rem,5vw,2.5rem)] font-heading font-bold leading-[1.12] tracking-tight text-foreground text-balance">
          {example.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{example.teaser}</p>
      </header>

      <div className="mt-10 space-y-14 sm:space-y-16">
        <StoryChapter id="moment" title="The user moment" lead={example.overview}>
          <StoryProse>{example.problem}</StoryProse>
        </StoryChapter>

        <StoryChapter id="approach" title="How I approached it" lead={example.myRole}>
          <StorySection label="Constraints">
            <StoryList items={example.constraints} />
          </StorySection>
          <StorySection label="Content decisions">
            <StoryList items={example.contentDecisions} />
          </StorySection>
          <DeepDive title="Research & options explored">
            <div className="space-y-6">
              <StoryList items={example.research} />
              <ul className="space-y-3">
                {example.optionsExplored.map((option) => (
                  <li
                    key={option.label}
                    className={cn(
                      "rounded-[var(--radius-md)] border p-4",
                      option.rejected ? "border-outline/10 bg-muted/20 opacity-75" : "border-primary/15 bg-primary/5"
                    )}
                  >
                    <p className="font-heading text-sm font-semibold text-foreground">{option.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </DeepDive>
        </StoryChapter>

        <StoryChapter id="solution" title="What we shipped">
          <StorySection label="Before & after">
            <BeforeAfterSlider
              before={example.comparison.before}
              after={example.comparison.after}
              beforeLabel={example.comparison.beforeLabel}
              afterLabel={example.comparison.afterLabel}
            />
          </StorySection>
          <StoryProse>{example.finalSolution}</StoryProse>
          <ImageGallery items={example.gallery} title="In context" />
        </StoryChapter>

        <StoryChapter id="outcome" title="What changed">
          <StoryList items={example.impact} />
        </StoryChapter>
      </div>

      <footer className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-8 sm:mt-16 sm:flex-row sm:items-stretch sm:justify-between">
        {prev ? (
          <Link
            href={`/work/product-content-design/${prev.slug}`}
            className="group flex min-h-[44px] flex-1 flex-col rounded-[var(--radius-md)] border border-outline/10 bg-surface/40 p-4 transition-md hover:border-primary/20 hover:bg-surface"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Previous</span>
            <span className="mt-1 inline-flex items-center gap-1 font-heading text-sm font-semibold text-foreground group-hover:text-primary">
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/work/product-content-design/${next.slug}`}
            className="group flex min-h-[44px] flex-1 flex-col rounded-[var(--radius-md)] border border-outline/10 bg-surface/40 p-4 text-right transition-md hover:border-primary/20 hover:bg-surface sm:items-end"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Next</span>
            <span className="mt-1 inline-flex items-center gap-1 font-heading text-sm font-semibold text-foreground group-hover:text-primary">
              {next.title}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </Link>
        ) : null}
      </footer>
    </div>
  );
}
