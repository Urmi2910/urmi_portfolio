import { CaseStudySectionNav } from "@/components/case-studies/product-content-design/CaseStudySectionNav";
import {
  CollectFlowchart,
  ContentApproachesTable,
  InstructionBuilderFlow,
  KnowledgeShiftDiagram,
  PromptMaintenanceProblems,
  PromptOnlyFlow,
  ScalingScopeDiagram,
  ScenarioJsonBlock,
  TodayTomorrowProcessDiagram,
} from "@/components/case-studies/content-systems/ContentSystemsVisuals";
import {
  ErrorPatternCallout,
  RealWorldArtifacts,
} from "@/components/case-studies/content-systems/RealWorldContext";
import {
  PrototypeGeneratedPanel,
  PrototypePromptPanel,
  PrototypeRetrievedStack,
  PrototypeScenarioSelector,
  PrototypeValidationPanel,
} from "@/components/case-studies/content-systems/PrototypeShowcase";
import { LiveDemoEmbed } from "@/components/case-studies/content-systems/LiveDemoEmbed";
import {
  StoryChapter,
  StoryProse,
} from "@/components/case-studies/shared/StoryComponents";
import {
  contentSystemsCaseStudy,
  contentSystemsSections,
} from "@/data/content-systems-case-study";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ContentSystemsCaseStudy() {
  const cs = contentSystemsCaseStudy;
  const navSections = contentSystemsSections.map((section) => ({
    id: section.id,
    label: section.label,
  }));

  return (
    <div className="content-systems-case-study">
      <Link
        href="/#case-studies"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-2 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        Back to portfolio
      </Link>

      <header className="content-systems-hero mt-6 md:mt-8">
        <p className="text-sm font-medium text-[#ea580c]">{cs.projectType}</p>
        <h1 className="mt-2 max-w-5xl text-[clamp(1.875rem,5vw,2.75rem)] font-heading font-bold leading-[1.1] tracking-tight text-foreground">
          {cs.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
          {cs.subtitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#ea580c]/15 bg-[#fff7ed] px-3 py-1 text-xs font-medium text-[#ea580c]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="content-systems-layout mt-12 lg:mt-14 lg:grid lg:grid-cols-[minmax(11rem,13rem)_minmax(0,1fr)] lg:gap-x-12 xl:gap-x-16">
        <aside className="hidden md:block">
          <CaseStudySectionNav sections={navSections} variant="desktop" />
        </aside>

        <article className="min-w-0">
          <CaseStudySectionNav sections={navSections} variant="mobile" />

          <div className="content-systems-sections">
            <StoryChapter id="overview" title="Overview">
              <blockquote className="content-systems-card rounded-[var(--radius-lg)] border border-[#ea580c]/15 bg-[#fff7ed] px-5 py-4 sm:px-6 sm:py-5">
                <div className="content-systems-prose-group">
                  {cs.overview.paragraphs.map((paragraph) => (
                    <StoryProse key={paragraph} className="text-base font-medium leading-relaxed text-foreground">
                      {paragraph}
                    </StoryProse>
                  ))}
                </div>
              </blockquote>
              <TodayTomorrowProcessDiagram
                today={cs.overview.todayFlow}
                tomorrow={cs.overview.tomorrowFlow}
              />
            </StoryChapter>

            <StoryChapter id="real-world" title={cs.realWorld.title} lead={cs.realWorld.intro}>
              <ErrorPatternCallout
                label={cs.realWorld.errorPattern.label}
                template={cs.realWorld.errorPattern.template}
                description={cs.realWorld.errorPattern.description}
                examples={cs.realWorld.errorPattern.examples}
              />
              <RealWorldArtifacts artifacts={cs.realWorld.artifacts} />
            </StoryChapter>

            <StoryChapter id="try-it" title={cs.tryIt.title} lead={cs.tryIt.lead}>
              <LiveDemoEmbed />
              <StoryProse className="content-systems-body-copy">{cs.tryIt.followUp}</StoryProse>
            </StoryChapter>

            <StoryChapter id="prompts-alone" title="Why prompts alone don't scale">
              <PromptOnlyFlow task={cs.promptsAlone.task} />
              <PromptMaintenanceProblems problems={cs.promptsAlone.problems} />
              <StoryProse className="content-systems-body-copy">{cs.promptsAlone.closing}</StoryProse>
            </StoryChapter>

            <StoryChapter id="content-library" title={cs.contentLibrary.title} lead={cs.contentLibrary.lead}>
              <KnowledgeShiftDiagram />
              <ScenarioJsonBlock data={cs.contentLibrary.scenarioJson} />
              <StoryProse className="content-systems-body-copy">{cs.contentLibrary.body}</StoryProse>
            </StoryChapter>

            <StoryChapter id="collect" title={cs.collect.title} lead={cs.collect.intro}>
              <CollectFlowchart steps={cs.collect.steps} />
              <PrototypeScenarioSelector />
              <PrototypeRetrievedStack />
            </StoryChapter>

            <StoryChapter id="build-instructions" title={cs.buildInstructions.title} lead={cs.buildInstructions.intro}>
              <InstructionBuilderFlow steps={cs.buildInstructions.steps} />
              <PrototypePromptPanel />
            </StoryChapter>

            <StoryChapter id="generate" title={cs.generate.title} lead={cs.generate.intro}>
              <PrototypeGeneratedPanel />
            </StoryChapter>

            <StoryChapter id="validate" title={cs.validate.title} lead={cs.validate.intro}>
              <PrototypeValidationPanel />
            </StoryChapter>

            <StoryChapter id="scaling" title={cs.scaling.title} lead={cs.scaling.intro}>
              <ScalingScopeDiagram today={cs.scaling.today} tomorrow={cs.scaling.tomorrow} />
              <StoryProse className="content-systems-body-copy">{cs.scaling.principle}</StoryProse>
            </StoryChapter>

            <StoryChapter id="shift" title={cs.shift.title}>
              <ContentApproachesTable headers={cs.shift.headers} rows={cs.shift.rows} />
            </StoryChapter>
          </div>
        </article>
      </div>
    </div>
  );
}
