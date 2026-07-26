import { contentSystemsHub, type SystemStudy } from "@/data/content-systems";
import {
  CollaborationNote,
  DeepDive,
  InsightCallout,
  StoryChapter,
  StoryList,
  StoryProse,
  StorySection,
} from "@/components/case-studies/shared/StoryComponents";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LanguageExampleToggle } from "./LanguageExampleToggle";
import {
  DataTable,
  DecisionTree,
  FlowDiagram,
  GovernancePanel,
  PatternCards,
  PrincipleGrid,
  SystemMetaGrid,
  TaxonomyDiagram,
  ToneSpectrum,
} from "./SystemPrimitives";

function StudyHero({ study }: { study: SystemStudy }) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-medium text-primary">{contentSystemsHub.title}</p>
      <h1 className="mt-2 text-[clamp(1.75rem,5vw,2.75rem)] font-heading font-bold leading-[1.1] tracking-tight text-foreground text-balance">
        {study.title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{study.teaser}</p>
    </header>
  );
}

function SystemStudyStory({
  study,
  frameworkVisual,
  examplesVisual,
}: {
  study: SystemStudy;
  frameworkVisual: React.ReactNode;
  examplesVisual: React.ReactNode;
}) {
  return (
    <div className="system-layout pb-6">
      <Link
        href="/work/content-systems"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted-foreground transition-md hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
        All systems
      </Link>

      <div className="mt-6">
        <StudyHero study={study} />
      </div>

      <div className="mt-12 space-y-16 sm:space-y-20">
        <StoryChapter
          id="stakes"
          title="Why this could not stay a screen-by-screen fix"
          lead={study.problem}
        >
          <StoryProse>{study.whySystemNeeded}</StoryProse>
          <InsightCallout label="Systems thinking">
            The cost was not inconsistent copy. It was repeated debate, rework, and user confusion every time a new
            team shipped a surface.
          </InsightCallout>
        </StoryChapter>

        <StoryChapter id="discovery" title="How we understood the problem" lead="Research focused on where teams and users lost alignment.">
          <StoryList items={study.research} />
        </StoryChapter>

        <StoryChapter
          id="framework"
          title="The model we put in front of teams"
          lead={study.framework}
        >
          <StorySection label="Principles">
            <PrincipleGrid principles={study.principles} />
          </StorySection>
          <StorySection label="Framework in practice">{frameworkVisual}</StorySection>
        </StoryChapter>

        <StoryChapter id="examples" title="What it looked like in the product" lead="Examples grounded the rules in real UI moments teams could reference.">
          {examplesVisual}
        </StoryChapter>

        <StoryChapter id="rollout" title="Making it stick across teams" lead="A system only works when design, engineering, and support know who owns what.">
          <StorySection label="Implementation">
            <StoryList items={study.implementation} />
          </StorySection>
          <StorySection label="Cross-functional collaboration">
            <GovernancePanel />
            <div className="mt-4">
              <StoryList items={study.collaboration} />
            </div>
          </StorySection>
          {study.collaborationQuote ? (
            <CollaborationNote partners={study.collaborationPartners ?? "Cross-functional partners"} quote={study.collaborationQuote} />
          ) : null}
        </StoryChapter>

        <StoryChapter id="outcomes" title="What changed" lead="Impact showed up as fewer debates, faster reviews, and clearer user experiences.">
          <StoryList items={study.impact} />
          <DeepDive title="Lessons I'd apply again">
            <StoryList items={study.lessonsLearned} />
          </DeepDive>
        </StoryChapter>
      </div>
    </div>
  );
}

export function ErrorMessageFrameworkLayout({ study }: { study: SystemStudy }) {
  return (
    <SystemStudyStory
      study={study}
      frameworkVisual={
        <div className="grid gap-6 lg:grid-cols-2">
          <FlowDiagram nodes={study.frameworkNodes ?? []} />
          <DecisionTree />
          {study.patternTable ? <div className="lg:col-span-2"><DataTable rows={study.patternTable} /></div> : null}
        </div>
      }
      examplesVisual={<PatternCards examples={study.examples} />}
    />
  );
}

export function HinglishFrameworkLayout({ study }: { study: SystemStudy }) {
  return (
    <SystemStudyStory
      study={study}
      frameworkVisual={
        <div className="space-y-6">
          <SystemMetaGrid
            items={[
              { label: "Markets", value: "India-first" },
              { label: "Registers", value: "3" },
              { label: "Scripts", value: "Latin + Devanagari" },
              { label: "Surfaces", value: "12+" },
            ]}
          />
          {study.taxonomyLevels ? <TaxonomyDiagram levels={study.taxonomyLevels} /> : null}
          {study.patternTable ? <DataTable rows={study.patternTable} /> : null}
        </div>
      }
      examplesVisual={<LanguageExampleToggle examples={study.examples} />}
    />
  );
}

export function VoiceToneSystemLayout({ study }: { study: SystemStudy }) {
  return (
    <SystemStudyStory
      study={study}
      frameworkVisual={
        <div className="space-y-6">
          {study.frameworkNodes ? <FlowDiagram nodes={study.frameworkNodes} /> : null}
          {study.toneDimensions ? (
            <div className="rounded-[var(--radius-lg)] border border-outline/15 bg-surface/30 p-5">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Tone by context
              </p>
              <ToneSpectrum dimensions={study.toneDimensions} />
            </div>
          ) : null}
        </div>
      }
      examplesVisual={<PatternCards examples={study.examples} />}
    />
  );
}

export function SystemStudyDetail({ study }: { study: SystemStudy }) {
  if (study.layout === "language") return <HinglishFrameworkLayout study={study} />;
  if (study.layout === "voice") return <VoiceToneSystemLayout study={study} />;
  return <ErrorMessageFrameworkLayout study={study} />;
}
