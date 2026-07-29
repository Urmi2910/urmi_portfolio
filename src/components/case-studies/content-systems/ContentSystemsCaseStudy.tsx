import { CaseStudySectionNav } from "@/components/case-studies/product-content-design/CaseStudySectionNav";
import {
  BulletGrid,
  IdeaFlowDiagram,
  ScenarioJsonBlock,
} from "@/components/case-studies/content-systems/ContentSystemsVisuals";
import { LiveDemoEmbed } from "@/components/case-studies/content-systems/LiveDemoEmbed";
import { RealWorldArtifacts } from "@/components/case-studies/content-systems/RealWorldContext";
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

function ProseGroup({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="content-systems-prose-group max-w-3xl">
      {paragraphs.map((paragraph) => (
        <StoryProse key={paragraph} className="content-systems-body-copy">
          {paragraph}
        </StoryProse>
      ))}
    </div>
  );
}

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
                <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
                  {cs.thesis}
                </p>
              </blockquote>
              <ProseGroup paragraphs={cs.overview.paragraphs} />
            </StoryChapter>

            <StoryChapter id="where-it-started" title={cs.whereItStarted.title}>
              <ProseGroup paragraphs={cs.whereItStarted.paragraphs} />
              <RealWorldArtifacts artifacts={cs.whereItStarted.artifacts} />
            </StoryChapter>

            <StoryChapter id="idea" title={cs.idea.title}>
              <ProseGroup paragraphs={cs.idea.paragraphs} />
              <IdeaFlowDiagram steps={cs.idea.flow} />
            </StoryChapter>

            <StoryChapter id="organising-content" title={cs.organisingContent.title}>
              <ProseGroup paragraphs={cs.organisingContent.paragraphs} />
              <ScenarioJsonBlock data={cs.organisingContent.scenarioJson} />
              <BulletGrid items={cs.organisingContent.includes} />
              <StoryProse className="content-systems-body-copy max-w-3xl">
                {cs.organisingContent.closing}
              </StoryProse>
            </StoryChapter>

            <StoryChapter id="try-it" title={cs.tryIt.title}>
              <LiveDemoEmbed />
            </StoryChapter>

            <StoryChapter id="scaling" title={cs.scaling.title}>
              <ProseGroup paragraphs={cs.scaling.paragraphs} />
              <BulletGrid items={cs.scaling.examples} />
            </StoryChapter>

            <StoryChapter id="learning" title={cs.learning.title}>
              <ProseGroup paragraphs={cs.learning.paragraphs} />
            </StoryChapter>
          </div>
        </article>
      </div>
    </div>
  );
}
