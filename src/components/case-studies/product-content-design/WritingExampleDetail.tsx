import {
  getWritingExampleSections,
  productContentDesignHub,
  toWritingExampleSectionId,
  type WritingExample,
} from "@/data/product-content-design";
import { CaseStudySectionNav } from "./CaseStudySectionNav";
import { AllExamplesLink } from "./AllExamplesLink";
import {
  DeepDive,
  StoryChapter,
  StoryList,
  StoryProse,
  StorySection,
} from "@/components/case-studies/shared/StoryComponents";
import { cn } from "@/lib/utils";
import { FirstRunExperienceIterations } from "./FirstRunExperienceMockup";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ConfirmationDialogExplorations } from "./ConfirmationDialogExplorations";
import { ConfirmationDialogMockup } from "./ConfirmationDialogMockup";
import { isConfirmationDialogVariant } from "./confirmation-dialog-content";
import { ExplorationComparisonTable } from "./ExplorationComparisonTable";
import { ImageGallery } from "./ImageGallery";

export function WritingExampleDetail({ example }: { example: WritingExample }) {
  const sections = getWritingExampleSections(example);

  return (
    <div className="writing-example-detail pb-6">
      <AllExamplesLink />

      <header className="mt-6 max-w-prose">
        <p className="text-sm font-medium text-primary">{productContentDesignHub.title}</p>
        <h1 className="mt-2 text-[clamp(1.75rem,5vw,2.5rem)] font-heading font-bold leading-[1.12] tracking-tight text-foreground text-balance">
          {example.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{example.teaser}</p>
      </header>

      <div className="writing-example-layout mt-10 lg:grid lg:grid-cols-[minmax(10rem,12rem)_minmax(0,1fr)] lg:gap-x-10 xl:gap-x-14">
        <aside className="hidden md:block">
          <CaseStudySectionNav sections={sections} variant="desktop" />
        </aside>

        <div className="min-w-0">
          <CaseStudySectionNav sections={sections} variant="mobile" />

          <div className="space-y-14 sm:space-y-16">
        <StoryChapter
          id="moment"
          title={example.chapterTitles?.moment ?? "The user moment"}
          lead={example.overview}
        >
          {example.problem ? <StoryProse>{example.problem}</StoryProse> : null}
        </StoryChapter>

        {example.approachParagraphs && example.approachParagraphs.length > 0 ? (
          <StoryChapter id="approach" title={example.chapterTitles?.approach ?? "How I approached it"}>
            <div className="space-y-4">
              {example.approachParagraphs.map((paragraph) => (
                <StoryProse key={paragraph}>{paragraph}</StoryProse>
              ))}
              {example.findingsBullets && example.findingsBullets.length > 0 ? (
                <StoryList items={example.findingsBullets} />
              ) : null}
            </div>
          </StoryChapter>
        ) : (
        <StoryChapter
          id="approach"
          title={example.chapterTitles?.approach ?? "How I approached it"}
          lead={example.myRole || undefined}
        >
          {example.researchLead ? <StoryProse>{example.researchLead}</StoryProse> : null}
          {example.research.length > 0 && example.optionsComparisonTable ? (
            <StorySection label="Questions I asked">
              <StoryList items={example.research} />
            </StorySection>
          ) : example.research.length > 0 && (example.findings || example.researchLead) ? (
            <StoryList items={example.research} />
          ) : null}
          {example.collaboration ? <StoryProse>{example.collaboration}</StoryProse> : null}
          {example.constraints.length > 0 ? (
            <StorySection label="Constraints">
              <StoryList items={example.constraints} />
            </StorySection>
          ) : null}
          {example.contentDecisions.length > 0 ? (
            <StorySection label="Content decisions">
              <StoryList items={example.contentDecisions} />
            </StorySection>
          ) : null}
          {example.optionsComparisonTable ? (
            <StorySection label="What I explored">
              {example.explorationIntro ? <StoryProse>{example.explorationIntro}</StoryProse> : null}
              {example.dialogExplorations && example.dialogExplorations.length > 0 ? (
                <ConfirmationDialogExplorations
                  explorations={example.dialogExplorations}
                  pair={example.dialogExplorationPair}
                />
              ) : null}
              <ExplorationComparisonTable rows={example.optionsComparisonTable} />
            </StorySection>
          ) : null}
          {example.optionsExplored.length > 0 ||
          (example.research.length > 0 &&
            !example.optionsComparisonTable &&
            !example.findings &&
            !example.researchLead) ? (
            <DeepDive title="Research & options explored">
              <div className="space-y-6">
                {example.research.length > 0 && !example.optionsComparisonTable ? (
                  <StoryList items={example.research} />
                ) : null}
                {example.optionsExplored.length > 0 ? (
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
                ) : null}
              </div>
            </DeepDive>
          ) : null}
        </StoryChapter>
        )}

        {(example.findings && example.findings.length > 0) ||
        example.findingsIntro ||
        (example.findingsBullets && example.findingsBullets.length > 0 && !example.approachParagraphs?.length) ? (
          <StoryChapter id="findings" title={example.chapterTitles?.findings ?? "What I found"}>
            <div className="space-y-4">
              {example.findingsIntro ? <StoryProse>{example.findingsIntro}</StoryProse> : null}
              {example.findingsBullets && example.findingsBullets.length > 0 ? (
                <StoryList items={example.findingsBullets} />
              ) : null}
              {example.findingsClosing ? <StoryProse>{example.findingsClosing}</StoryProse> : null}
              {example.findings?.map((paragraph) => (
                <StoryProse key={paragraph}>{paragraph}</StoryProse>
              ))}
            </div>
          </StoryChapter>
        ) : null}

        <StoryChapter id="solution" title={example.chapterTitles?.solution ?? "What we shipped"}>
          {example.slug === "first-run-experience" ? (
            <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)]">
              <FirstRunExperienceIterations />
            </div>
          ) : null}
          {example.comparison.beforeMockup && example.comparison.afterMockup ? (
            <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)]">
              <BeforeAfterSlider
                before={example.comparison.before}
                after={example.comparison.after}
                beforeLabel={example.comparison.beforeLabel}
                afterLabel={example.comparison.afterLabel}
                beforeImage={example.comparison.beforeImage}
                afterImage={example.comparison.afterImage}
                beforeMockup={example.comparison.beforeMockup}
                afterMockup={example.comparison.afterMockup}
              />
            </div>
          ) : example.comparison.showSlider !== false ? (
            <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)]">
              <StorySection label="Before & after">
                <BeforeAfterSlider
                  before={example.comparison.before}
                  after={example.comparison.after}
                  beforeLabel={example.comparison.beforeLabel}
                  afterLabel={example.comparison.afterLabel}
                  beforeImage={example.comparison.beforeImage}
                  afterImage={example.comparison.afterImage}
                  beforeMockup={example.comparison.beforeMockup}
                  afterMockup={example.comparison.afterMockup}
                />
              </StorySection>
            </div>
          ) : isConfirmationDialogVariant(example.comparison.afterMockup) ? (
            <StorySection label="Final design">
              <ConfirmationDialogMockup variant={example.comparison.afterMockup} highlighted />
            </StorySection>
          ) : null}
          {example.solutionParagraphs && example.solutionParagraphs.length > 0 ? (
            <div className="space-y-4">
              {example.solutionParagraphs.map((paragraph) => (
                <StoryProse key={paragraph}>{paragraph}</StoryProse>
              ))}
            </div>
          ) : example.finalSolution ? (
            <StoryProse>{example.finalSolution}</StoryProse>
          ) : null}
          {example.additionalComparisons?.map((block) => (
            <div
              key={block.label ?? `${block.before}-${block.after}`}
              id={block.label ? toWritingExampleSectionId(block.label) : undefined}
              className="scroll-mt-28 mt-10 space-y-5 sm:mt-12"
            >
              {block.label ? (
                <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {block.label}
                </h3>
              ) : null}
              {block.intro?.map((paragraph) => (
                <StoryProse key={paragraph}>{paragraph}</StoryProse>
              ))}
              <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)]">
                <BeforeAfterSlider
                  before={block.before}
                  after={block.after}
                  beforeLabel={block.beforeLabel}
                  afterLabel={block.afterLabel}
                  beforeMockup={block.beforeMockup}
                  afterMockup={block.afterMockup}
                />
              </div>
            </div>
          ))}
          {example.gallery.length > 1 ? (
            <ImageGallery items={example.gallery} title="In context" />
          ) : null}
        </StoryChapter>

        {(example.chapterTitles?.outcome || example.impact.length > 0) ? (
        <StoryChapter id="outcome" title={example.chapterTitles?.outcome ?? "What changed"}>
          {example.impact.length === 1 ? (
            <StoryProse>{example.impact[0]}</StoryProse>
          ) : example.impact.length > 1 ? (
            <StoryList items={example.impact} />
          ) : null}
        </StoryChapter>
        ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
