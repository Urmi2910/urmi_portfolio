import {
  LabeledImageSet,
  PairedLabeledImages,
  TriggerOrderImageSlot,
} from "@/components/case-studies/trigger-order/TriggerOrderImageSlot";
import {
  PairedGttSlLists,
  PairedGttSlTracks,
} from "@/components/case-studies/trigger-order/PairedGttSlTracks";
import {
  StoryChapter,
  StoryList,
  StoryProse,
} from "@/components/case-studies/shared/StoryComponents";
import {
  triggerOrderCaseStudy,
} from "@/data/trigger-order-case-study";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function QuoteList({ quotes }: { quotes: readonly string[] }) {
  return (
    <div className="trigger-order-quote-list max-w-prose">
      {quotes.map((quote) => (
        <blockquote
          key={quote}
          className="border-l-2 border-primary/25 pl-4 text-base italic leading-relaxed text-foreground/85"
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
      ))}
    </div>
  );
}

export function TriggerOrderCaseStudy() {
  const cs = triggerOrderCaseStudy;

  return (
    <div className="trigger-order-case-study">
      <Link
        href="/#case-studies"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-2 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        Back to portfolio
      </Link>

      <header className="writing-case-study-hero mt-6 max-w-prose md:mt-8">
        <p className="text-sm font-medium text-primary">DreamStreet</p>
        <h1 className="case-study-hero-title mt-2">{cs.title}</h1>
        <p className="case-study-hero-subtitle mt-3">{cs.subtitle}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="trigger-order-sections case-study-sections mt-12 sm:mt-14">
            <StoryChapter id="overview" title="Overview">
              <div className="story-text-group">
                {cs.overview.map((paragraph) => (
                  <StoryProse key={paragraph}>{paragraph}</StoryProse>
                ))}
              </div>
            </StoryChapter>

            <StoryChapter id="problem" title={cs.problem.title} lead={cs.problem.lead}>
              <div className="story-text-group">
                {cs.problem.paragraphs.map((paragraph) => (
                  <StoryProse key={paragraph}>{paragraph}</StoryProse>
                ))}
              </div>
              <PairedLabeledImages
                images={cs.problem.areas.map((area) => area.screenshot)}
                priority
              />
            </StoryChapter>

            <StoryChapter id="research" title={cs.research.title} lead={cs.research.lead}>
              <StoryProse>{cs.research.intro}</StoryProse>
              <div className="story-text-group">
                <StoryProse>{cs.research.findingsIntro}</StoryProse>
                <StoryList items={cs.research.findings} />
                <QuoteList quotes={cs.research.quotes} />
              </div>
            </StoryChapter>

            <StoryChapter id="exploration" title={cs.exploration.title} lead={cs.exploration.lead}>
              <StoryProse>{cs.exploration.intro}</StoryProse>
              <TriggerOrderImageSlot image={cs.exploration.explorationBoard} priority />
              <PairedGttSlLists
                gttItems={cs.exploration.triggerOrders.items}
                stopLossItems={cs.exploration.exitOrders.items}
              />
              <LabeledImageSet
                label={cs.exploration.triggerOrders.setLabel}
                images={cs.exploration.triggerOrders.screenshots}
              />
            </StoryChapter>

            <StoryChapter id="solution" title={cs.solution.title} lead={cs.solution.lead}>
              <PairedGttSlTracks
                rows={[
                  {
                    gtt: (
                      <StoryProse className="max-w-none">{cs.solution.triggerOrders.intro}</StoryProse>
                    ),
                    stopLoss: (
                      <StoryProse className="max-w-none">{cs.solution.exitOrders.intro}</StoryProse>
                    ),
                  },
                  {
                    gtt: (
                      <StoryList
                        items={[...cs.solution.triggerOrders.outcomes]}
                        className="max-w-none"
                      />
                    ),
                    stopLoss: (
                      <StoryList items={[...cs.solution.exitOrders.outcomes]} className="max-w-none" />
                    ),
                  },
                  {
                    gtt: (
                      <StoryProse className="max-w-none">{cs.solution.triggerOrders.closing}</StoryProse>
                    ),
                    stopLoss: (
                      <StoryProse className="max-w-none">{cs.solution.exitOrders.closing}</StoryProse>
                    ),
                  },
                ]}
              />
              <PairedLabeledImages
                images={[
                  ...cs.solution.triggerOrders.screenshots,
                  ...cs.solution.exitOrders.screenshots,
                ]}
              />
            </StoryChapter>

            <StoryChapter id="impact" title={cs.impact.title} lead={cs.impact.lead}>
              <StoryProse>{cs.impact.intro}</StoryProse>
              <div className="trigger-order-impact-stat">
                <p className="font-heading text-[clamp(1.375rem,3vw,1.75rem)] font-semibold leading-none text-primary">
                  {cs.impact.highlight.value}
                </p>
                <StoryProse className="max-w-none">{cs.impact.highlight.detail}</StoryProse>
              </div>
              <StoryList items={cs.impact.items} />
            </StoryChapter>

            <StoryChapter id="learning" title={cs.learning.title}>
              <StoryProse>{cs.learning.body}</StoryProse>
            </StoryChapter>
          </div>
    </div>
  );
}
