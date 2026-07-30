import {
  aiTrustCaseStudy,
  aiTrustCollaboration,
  aiTrustContent,
  beforeAfterResponses,
  promptExample,
} from "@/data/ai-trust-case-study";
import {
  CollaborationNote,
  DeepDive,
  InsightCallout,
  StoryChapter,
  StoryList,
  StoryProse,
  StorySection,
} from "@/components/case-studies/shared/StoryComponents";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BeforeAfterPair, PromptExample } from "./AiTrustInteractive";
import {
  ContentModelVisual,
  ConversationTreeVisual,
  DecisionMatrixVisual,
  FlowchartVisual,
  GuardrailDiagramVisual,
  IntentMapVisual,
  PrincipleCards,
  ResponseTemplateVisual,
  ToneComparisonVisual,
} from "./AiTrustVisuals";
import { ConversationPreview } from "./ConversationPreview";

export function AiTrustCaseStudy() {
  return (
    <div className="ai-trust-case-study">
      <div className="case-study-band case-study-band--flat-surface">
        <GeometricDecor variant="section" />
        <div className="case-study-band-inner">
          <Link
            href="/#case-studies"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-2 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            Back to portfolio
          </Link>

          <header className="ai-trust-hero mt-8 max-w-3xl lg:mt-10">
            <p className="text-sm font-medium text-primary">
              {aiTrustCaseStudy.product} · {aiTrustCaseStudy.company}
            </p>
            <h1 className="case-study-hero-title mt-3 text-balance">{aiTrustCaseStudy.title}</h1>
            <p className="case-study-hero-subtitle mt-3">{aiTrustCaseStudy.subtitle}</p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">{aiTrustContent.overview}</p>

            <dl className="mt-8 grid grid-cols-1 gap-4 border-y border-border/60 py-6 sm:grid-cols-3">
              {aiTrustCaseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-heading text-xl font-semibold text-primary sm:text-2xl">{metric.value}</dd>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </dl>
          </header>
        </div>
      </div>

      <StoryChapter
        id="context"
        title="Trust was breaking before the model was"
        lead="Users did not distrust the AI because answers were wrong. They distrusted it because they could not predict what it would do next."
        tone="background"
      >
        <StorySection label="The problem">
          <StoryProse>{aiTrustContent.problem}</StoryProse>
        </StorySection>
        <StorySection label="Who we were designing for">
          <StoryProse>{aiTrustContent.audience}</StoryProse>
        </StorySection>
        <InsightCallout label="Content strategy bet">
          Treat the assistant as a product surface with explicit states, not a chat window with personality
          layered on top.
        </InsightCallout>
        <ConversationPreview />
      </StoryChapter>

      <StoryChapter
        id="discovery"
        title="Start with intent, not prompts"
        lead="Research showed that most sessions mapped to a small set of jobs-to-be-done. The design work was routing users to the right response pattern early."
        tone="surface"
      >
        <StorySection label="What users were trying to do">
          <StoryProse>{aiTrustContent.intent}</StoryProse>
          <IntentMapVisual />
        </StorySection>
        <StorySection label="How we learned">
          <StoryList items={aiTrustContent.research} />
        </StorySection>
      </StoryChapter>

      <StoryChapter
        id="system"
        title="Build the system teams could ship against"
        lead="I translated research into principles, conversation architecture, and twelve reusable response frameworks."
        tone="background"
      >
        <StorySection label="Principles">
          <PrincipleCards principles={aiTrustContent.principles} />
        </StorySection>
        <StorySection label="Conversation architecture">
          <StoryProse>{aiTrustContent.ia}</StoryProse>
          <ConversationTreeVisual />
        </StorySection>
        <StorySection label="Response frameworks">
          <StoryProse>{aiTrustContent.frameworks}</StoryProse>
          <ResponseTemplateVisual />
        </StorySection>
        <DeepDive title="Content modeling & flows">
          <div className="space-y-6">
            <StoryProse>{aiTrustContent.modeling}</StoryProse>
            <ContentModelVisual />
            <StoryProse>{aiTrustContent.flows}</StoryProse>
            <FlowchartVisual />
          </div>
        </DeepDive>
      </StoryChapter>

      <StoryChapter
        id="trust"
        title="Design trust into every response"
        lead="Voice, prompts, and guardrails had to work as one system so teams did not improvise under pressure."
        tone="surface"
      >
        <StorySection label="Voice & tone">
          <StoryProse>{aiTrustContent.voice}</StoryProse>
          <ToneComparisonVisual />
        </StorySection>
        <DeepDive title="Prompt design">
          <StoryProse>{aiTrustContent.prompts}</StoryProse>
          <div className="mt-4">
            <PromptExample
              system={promptExample.system}
              user={promptExample.user}
              assistant={promptExample.assistant}
            />
          </div>
        </DeepDive>
        <StorySection label="Guardrails">
          <StoryProse>{aiTrustContent.guardrails}</StoryProse>
          <GuardrailDiagramVisual />
          <DecisionMatrixVisual />
        </StorySection>
        <StorySection label="Edge cases we planned for">
          <StoryProse>{aiTrustContent.edgeCases}</StoryProse>
        </StorySection>
      </StoryChapter>

      <StoryChapter
        id="proof"
        title="Show the work before you ask users to rely on it"
        lead="We evaluated responses for clarity, policy compliance, and recoverability before scaling to production flows."
        tone="background"
      >
        <StorySection label="Evaluation">
          <StoryProse>{aiTrustContent.evaluation}</StoryProse>
        </StorySection>
        <StorySection label="What shipped">
          <StoryProse>{aiTrustContent.final}</StoryProse>
          <div className="space-y-4">
            {beforeAfterResponses.map((pair) => (
              <BeforeAfterPair key={pair.user} user={pair.user} before={pair.before} after={pair.after} />
            ))}
          </div>
        </StorySection>
      </StoryChapter>

      <StoryChapter
        id="outcomes"
        title="What changed for users and teams"
        lead="The outcome was not a smarter chatbot. It was a product teams could extend without re-litigating trust every sprint."
        tone="surface"
        last
      >
        <StorySection label="Impact">
          <StoryList items={aiTrustContent.impact} />
        </StorySection>
        <CollaborationNote
          partners={aiTrustCollaboration.partners}
          quote={aiTrustCollaboration.quote}
        />
        <StorySection label="What I'd carry forward">
          <StoryList items={aiTrustContent.learnings} />
        </StorySection>

        <footer className="mt-10 border-t border-border/60 pt-6">
          <Link
            href="/#case-studies"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary transition-md hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            All case studies
          </Link>
        </footer>
      </StoryChapter>
    </div>
  );
}
