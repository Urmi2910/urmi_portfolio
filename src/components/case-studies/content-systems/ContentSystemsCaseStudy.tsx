import { ContentModelSection } from "@/components/case-studies/content-systems/ContentModelSection";
import {
  MessageTypeList,
} from "@/components/case-studies/content-systems/ContentSystemsVisuals";
import { LiveDemoEmbed } from "@/components/case-studies/content-systems/LiveDemoEmbed";
import { RealWorldArtifacts } from "@/components/case-studies/content-systems/RealWorldContext";
import { ToastAnatomySection } from "@/components/case-studies/content-systems/ToastAnatomyDiagram";
import {
  StoryChapter,
  StoryProse,
} from "@/components/case-studies/shared/StoryComponents";
import {
  contentSystemsCaseStudy,
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
        <h1 className="case-study-hero-title mt-2 max-w-5xl">
          {cs.title}
        </h1>
        <p className="case-study-hero-subtitle mt-3 max-w-3xl">
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

      <div className="content-systems-sections case-study-sections mt-12 sm:mt-14">
            <StoryChapter id="overview" title="Overview">
              <ProseGroup paragraphs={cs.overview.paragraphs} />
            </StoryChapter>

            <StoryChapter id="where-it-started" title={cs.whereItStarted.title}>
              <div className="content-systems-subsection">
                <ProseGroup paragraphs={cs.whereItStarted.audit.paragraphs} />
                <RealWorldArtifacts
                  priority
                  artifacts={[
                    cs.whereItStarted.audit.artifact,
                    ...cs.whereItStarted.guidelines.artifacts,
                  ]}
                />
              </div>

              <div className="content-systems-subsection content-systems-subsection--divided">
                <ProseGroup paragraphs={cs.whereItStarted.guidelines.intro} />
                <StoryProse className="content-systems-body-copy max-w-3xl">For example:</StoryProse>
                <MessageTypeList items={cs.whereItStarted.guidelines.messageTypes} />
                <ToastAnatomySection />
                <StoryProse className="content-systems-body-copy max-w-3xl">
                  {cs.whereItStarted.guidelines.closing}
                </StoryProse>
              </div>
            </StoryChapter>

            <StoryChapter id="content-model" title={cs.contentModel.title}>
              <ContentModelSection />
            </StoryChapter>

            <StoryChapter id="try-it" title={cs.tryIt.title}>
              <StoryProse className="content-systems-body-copy max-w-3xl">
                {cs.tryIt.intro}
              </StoryProse>
              <LiveDemoEmbed />
            </StoryChapter>

            <StoryChapter id="why-it-matters" title={cs.whyItMatters.title}>
              <ProseGroup paragraphs={cs.whyItMatters.paragraphs} />
            </StoryChapter>

            <StoryChapter id="learning" title={cs.learning.title}>
              <ProseGroup paragraphs={cs.learning.paragraphs} />
            </StoryChapter>
          </div>
    </div>
  );
}
