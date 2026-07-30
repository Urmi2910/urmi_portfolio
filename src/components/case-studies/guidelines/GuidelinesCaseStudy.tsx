import {
  GuidelinesIncludedCard,
  GuidelinesProseGroup,
  SystemCategoryCards,
} from "@/components/case-studies/guidelines/GuidelinesVisuals";
import { StoryChapter, StoryProse, StorySection } from "@/components/case-studies/shared/StoryComponents";
import { guidelinesCaseStudy } from "@/data/guidelines-case-study";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function GuidelinesCaseStudy() {
  const cs = guidelinesCaseStudy;

  return (
    <div className="guidelines-case-study">
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

          <header className="guidelines-hero mt-6 md:mt-8">
            <p className="text-sm font-medium text-primary">{cs.projectType}</p>
            <h1 className="case-study-hero-title mt-2 max-w-5xl">{cs.title}</h1>
            <p className="case-study-hero-subtitle mt-3 max-w-3xl">{cs.subtitle}</p>
          </header>
        </div>
      </div>

      <StoryChapter id="overview" title="Overview" tone="background">
        <GuidelinesProseGroup paragraphs={cs.overview.paragraphs} />
        <SystemCategoryCards categories={cs.overview.categories} />
      </StoryChapter>

      <StoryChapter id="getting-started" title={cs.gettingStarted.heading} tone="surface">
        <GuidelinesProseGroup paragraphs={cs.gettingStarted.paragraphs} />
        <StorySection label="Included">
          <GuidelinesIncludedCard
            items={cs.gettingStarted.included}
            reference={cs.gettingStarted.reference}
          />
        </StorySection>
      </StoryChapter>

      <StoryChapter id="principles" title={cs.principles.heading} tone="background">
        <GuidelinesProseGroup paragraphs={cs.principles.paragraphs} />
        <GuidelinesIncludedCard
          items={cs.principles.items}
          reference={cs.principles.reference}
        />
      </StoryChapter>

      <StoryChapter id="voice-and-tone" title={cs.voiceAndTone.heading} tone="surface">
        <GuidelinesProseGroup paragraphs={cs.voiceAndTone.paragraphs} />
        <StorySection label="Included">
          <GuidelinesIncludedCard
            items={cs.voiceAndTone.included}
            reference={cs.voiceAndTone.reference}
          />
        </StorySection>
      </StoryChapter>

      <StoryChapter id="grammar" title={cs.grammar.heading} tone="background">
        <GuidelinesProseGroup paragraphs={cs.grammar.paragraphs} />
        <StorySection label="Included">
          <GuidelinesIncludedCard
            items={cs.grammar.included}
            reference={cs.grammar.reference}
          />
        </StorySection>
      </StoryChapter>

      <StoryChapter id="product-dictionary" title={cs.productDictionary.heading} tone="surface">
        <GuidelinesProseGroup paragraphs={cs.productDictionary.paragraphs} />
        <StorySection label="Included">
          <GuidelinesIncludedCard items={cs.productDictionary.included} />
        </StorySection>
      </StoryChapter>

      <StoryChapter id="ui-components" title={cs.uiComponents.heading} tone="background">
        <GuidelinesProseGroup paragraphs={cs.uiComponents.paragraphs} />
        <StorySection label="Included">
          <GuidelinesIncludedCard
            items={cs.uiComponents.included}
            reference={cs.uiComponents.reference}
          />
        </StorySection>
      </StoryChapter>

      <StoryChapter id="impact-and-learnings" title={cs.impactAndLearnings.heading} tone="surface" last>
        <div className="guidelines-prose-group">
          <StoryProse className="guidelines-body-copy">{cs.impactAndLearnings.intro}</StoryProse>
          <StoryProse className="guidelines-body-copy">
            <strong className="font-semibold text-foreground">{cs.impactAndLearnings.keyLearning}</strong>{" "}
            {cs.impactAndLearnings.keyLearningFollowUp}
          </StoryProse>
          <StoryProse className="guidelines-body-copy">{cs.impactAndLearnings.closing}</StoryProse>
        </div>
      </StoryChapter>
    </div>
  );
}
