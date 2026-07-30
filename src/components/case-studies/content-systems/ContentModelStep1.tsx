import { StoryProse } from "@/components/case-studies/shared/StoryComponents";
import { contentSystemsCaseStudy } from "@/data/content-systems-case-study";
import { cn } from "@/lib/utils";

type ExampleVariant = "bullet" | "approved" | "avoided" | "quote";

function ExampleSide({
  examples,
  patterns,
  variant = "bullet",
}: {
  examples?: readonly string[];
  patterns?: readonly { label: string; pattern: string }[];
  variant?: ExampleVariant;
}) {
  if (patterns) {
    return (
      <dl className="space-y-2">
        {patterns.map((item) => (
          <div key={item.label}>
            <dt className="text-base font-medium text-foreground">{item.label}</dt>
            <dd className="mt-0.5 font-mono text-base text-muted-foreground">{item.pattern}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (!examples) return null;

  if (variant === "quote") {
    return (
      <ul className="space-y-2">
        {examples.map((item) => (
          <li
            key={item}
            className="border-l-2 border-[#ea580c]/30 pl-3 text-base italic leading-relaxed text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  const prefix = variant === "approved" ? "✓ " : variant === "avoided" ? "✗ " : "· ";

  return (
    <ul className="space-y-1.5">
      {examples.map((item) => (
        <li key={item} className="text-base leading-relaxed text-foreground">
          <span className={cn(variant === "approved" && "text-emerald-700", variant === "avoided" && "text-red-700")}>
            {prefix}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ContentModelStep1() {
  const step = contentSystemsCaseStudy.contentModel.step1;

  return (
    <>
      <StoryProse className="content-systems-body-copy max-w-3xl">{step.intro}</StoryProse>
      <p className="content-systems-body-copy mt-3 max-w-3xl text-base font-semibold leading-relaxed text-foreground">
        {step.question}
      </p>
      <StoryProse className="content-systems-body-copy mt-3 max-w-3xl">{step.approach}</StoryProse>

      <div className="content-model-step1-rows mt-6 max-w-4xl space-y-3">
        {step.blocks.map((block) => (
          <div
            key={block.title}
            className="content-model-step1-row grid items-start gap-3 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:gap-4"
          >
            <div className="content-model-step1-question rounded-[var(--radius-md)] border border-outline/12 bg-[#faf8f5] px-4 py-3.5">
              <h4 className="text-base font-semibold leading-snug text-foreground">{block.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{block.summary}</p>
            </div>

            <div className="content-model-step1-examples px-1 py-1 sm:px-0 sm:py-3.5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:sr-only">
                Examples
              </p>
              <ExampleSide
                examples={block.examples}
                patterns={block.patterns}
                variant={block.examplesVariant ?? "bullet"}
              />
            </div>
          </div>
        ))}
      </div>

      <section className="content-model-step1-framework mt-6 max-w-4xl rounded-[var(--radius-md)] border border-[#ea580c]/15 bg-[#fff7ed]/60 px-4 py-3.5 sm:px-5">
        <h4 className="text-base font-semibold text-foreground">{step.decisionFramework.title}</h4>
        <ol className="mt-2.5 space-y-2">
          {step.decisionFramework.questions.map((question, index) => (
            <li key={question} className="flex gap-2 text-sm leading-relaxed text-foreground">
              <span className="font-semibold tabular-nums text-[#ea580c]">{index + 1}.</span>
              {question}
            </li>
          ))}
        </ol>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {step.decisionFramework.closing}
        </p>
      </section>
    </>
  );
}
