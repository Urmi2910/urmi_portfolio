import { CaseStudySectionNav } from "@/components/case-studies/product-content-design/CaseStudySectionNav";
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
  guidelinesSections,
} from "@/data/guidelines-case-study";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function GuidelinesCaseStudy() {
  const cs = guidelinesCaseStudy;
  const navSections = guidelinesSections.map((section) => ({
    id: section.id,
    label: section.label,
  }));

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
              className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="guidelines-layout mt-12 lg:mt-14 lg:grid lg:grid-cols-[minmax(11rem,13rem)_minmax(0,1fr)] lg:gap-x-12 xl:gap-x-16">
        <aside className="hidden md:block">
          <CaseStudySectionNav sections={navSections} variant="desktop" />
        </aside>

        <article className="min-w-0">
          <CaseStudySectionNav sections={navSections} variant="mobile" />

          <div className="guidelines-sections">
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
        </article>
      </div>
    </div>
  );
}
