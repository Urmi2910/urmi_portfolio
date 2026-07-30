import {
  DoDontExamples,
  GuidelinesDocumentLink,
  GuidelinesRulesList,
  GuidelinesTypeCards,
} from "@/components/case-studies/guidelines/GuidelinesVisuals";
import {
  StoryChapter,
  StoryProse,
} from "@/components/case-studies/shared/StoryComponents";
import {
  guidelinesCaseStudy,
} from "@/data/guidelines-case-study";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function GuidelinesCaseStudy() {
  const cs = guidelinesCaseStudy;

  return (
    <div className="guidelines-case-study">
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

      <div className="guidelines-sections case-study-sections mt-12 sm:mt-14">
            <StoryChapter id="overview" title="Overview">
              <div className="guidelines-prose-group">
                {cs.overview.paragraphs.map((paragraph) => (
                  <StoryProse key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </StoryProse>
                ))}
              </div>
            </StoryChapter>

            <StoryChapter id="document" title={cs.document.title} lead={cs.document.description}>
              <GuidelinesDocumentLink
                href={cs.document.href}
                downloadFilename={cs.document.downloadFilename}
              />
            </StoryChapter>

            <StoryChapter id="letter-case" title={cs.letterCase.title} lead={cs.letterCase.purpose}>
              <StoryProse className="guidelines-body-copy">{cs.letterCase.intro}</StoryProse>
              <GuidelinesTypeCards items={cs.letterCase.styles} />
              <GuidelinesRulesList rules={cs.letterCase.rules} />
              <DoDontExamples examples={cs.letterCase.examples} />
            </StoryChapter>

            <StoryChapter id="text-fields" title={cs.textFields.title} lead={cs.textFields.purpose}>
              <StoryProse className="guidelines-body-copy">{cs.textFields.intro}</StoryProse>
              <GuidelinesRulesList rules={cs.textFields.rules} />
              <DoDontExamples examples={cs.textFields.examples} />
            </StoryChapter>

            <StoryChapter id="numerals" title={cs.numerals.title}>
              <GuidelinesRulesList rules={cs.numerals.rules} />
              <DoDontExamples examples={cs.numerals.examples} />
            </StoryChapter>

            <StoryChapter id="percent" title={cs.percent.title}>
              <GuidelinesRulesList rules={cs.percent.rules} />
              <DoDontExamples examples={cs.percent.examples} />
            </StoryChapter>

            <StoryChapter id="content-types" title={cs.contentTypes.title} lead={cs.contentTypes.intro}>
              <GuidelinesTypeCards items={cs.contentTypes.types} />
            </StoryChapter>

            <StoryChapter id="error-patterns" title={cs.errorPatterns.title} lead={cs.errorPatterns.intro}>
              <div className="guidelines-table-wrap overflow-x-auto">
                <table className="guidelines-table w-full min-w-[20rem] text-left text-sm">
                  <thead>
                    <tr>
                      <th className="w-[44%] px-4 py-3 font-semibold text-foreground">Pattern</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cs.errorPatterns.patterns.map((item) => (
                      <tr key={`${item.template}-${item.example}`}>
                        <td className="px-4 py-3 align-top font-mono text-xs text-muted-foreground sm:text-sm">
                          {item.template}
                        </td>
                        <td className="px-4 py-3 align-top text-foreground">{item.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </StoryChapter>
          </div>
    </div>
  );
}
