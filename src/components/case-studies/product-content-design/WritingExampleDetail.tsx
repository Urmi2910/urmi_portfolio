import { productContentDesignHub, type WritingExample } from "@/data/product-content-design";
import {
  DeepDive,
  StoryChapter,
  StoryList,
  StoryProse,
  StorySection,
} from "@/components/case-studies/shared/StoryComponents";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ImageGallery } from "./ImageGallery";

export function WritingExampleDetail({ example }: { example: WritingExample }) {
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
    </div>
  );
}
