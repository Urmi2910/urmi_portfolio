import { CaseStudySectionNav } from "@/components/case-studies/product-content-design/CaseStudySectionNav";
import {
  BulletGrid,
  ContentTypesTable,
  EditorialTree,
  KnowledgeTypesList,
  WalkthroughStep,
  WorkflowBoard,
} from "@/components/case-studies/content-systems/ContentSystemsVisuals";
import {
  ComparisonTable,
  ContextFormulaBoard,
  PrototypeGeneratedPanel,
  PrototypeHero,
  PrototypePromptPanel,
  PrototypeRetrievedGrid,
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
  const walk = cs.walkthrough;

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
                <StoryProse className="text-base font-medium leading-relaxed text-foreground">
                  {cs.lead}
                </StoryProse>
              </blockquote>
              <PrototypeHero />
              <StoryProse>{cs.overview[0]}</StoryProse>
            </StoryChapter>

            <StoryChapter id="challenge" title={cs.challenge.title} lead={cs.challenge.intro}>
              <KnowledgeTypesList items={cs.challenge.knowledgeTypes} />
              <StoryProse>{cs.challenge.body}</StoryProse>
            </StoryChapter>

            <StoryChapter id="approach" title={cs.approach.title} lead={cs.approach.intro}>
              <EditorialTree root="Editorial Knowledge" items={cs.approach.tree} />
              <StoryProse className="content-systems-body-copy">{cs.approach.closing}</StoryProse>
            </StoryChapter>

            <StoryChapter id="content-model" title={cs.contentModel.title} lead={cs.contentModel.intro}>
              <ContentTypesTable rows={cs.contentModel.rows} />
              <PrototypeRetrievedGrid />
            </StoryChapter>

            <StoryChapter id="workflow" title={cs.workflow.title} lead={cs.workflow.intro}>
              <WorkflowBoard steps={cs.workflow.steps} />

              <div className="content-systems-steps mt-10 space-y-10">
                <WalkthroughStep title={walk.scenario.title} intro={walk.scenario.intro}>
                  <PrototypeScenarioSelector />
                </WalkthroughStep>

                <WalkthroughStep title={walk.retrieve.title} intro={walk.retrieve.intro}>
                  <PrototypeRetrievedStack />
                  <div className="mt-6">
                    <PrototypeRetrievedGrid />
                  </div>
                </WalkthroughStep>

                <WalkthroughStep title={walk.context.title} intro={walk.context.intro}>
                  <ContextFormulaBoard items={walk.context.formula} />
                  <div className="mt-6">
                    <PrototypePromptPanel />
                  </div>
                </WalkthroughStep>

                <WalkthroughStep title={walk.generate.title} intro={walk.generate.intro}>
                  <PrototypeGeneratedPanel />
                </WalkthroughStep>

                <WalkthroughStep title={walk.validate.title} intro={walk.validate.intro}>
                  <PrototypeValidationPanel />
                </WalkthroughStep>
              </div>
            </StoryChapter>

            <StoryChapter
              id="live-demo"
              title="Try the live demo"
              lead="The walkthrough above shows the concept. This is the working prototype you can interact with on the site."
            >
              <LiveDemoEmbed />
            </StoryChapter>

            <StoryChapter id="learning" title={cs.learning.title}>
              <BulletGrid items={cs.learning.items} />
            </StoryChapter>

            <StoryChapter id="takeaway" title={cs.takeaway.title}>
              <StoryProse className="content-systems-body-copy">{cs.takeaway.body}</StoryProse>
              <ComparisonTable {...cs.takeaway.comparison} />
            </StoryChapter>
          </div>
        </article>
      </div>
    </div>
  );
}
