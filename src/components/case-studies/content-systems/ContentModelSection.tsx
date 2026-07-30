import { ContentModelStep1 } from "@/components/case-studies/content-systems/ContentModelStep1";
import {
  BulletGrid,
  CollectionGrid,
  ContentModelJsonBlock,
  FallbackFlow,
  GatheredContextList,
  GuardrailChecks,
} from "@/components/case-studies/content-systems/ContentSystemsVisuals";
import {
  PrototypePromptPanel,
  PrototypeRetrievedStack,
} from "@/components/case-studies/content-systems/PrototypeShowcase";
import { StoryProse } from "@/components/case-studies/shared/StoryComponents";
import { contentSystemsCaseStudy } from "@/data/content-systems-case-study";

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

function ModelStep({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="content-systems-model-step scroll-mt-28">
      <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        Step {number}. {title}
      </h3>
      <div className="content-systems-model-step__body mt-3 space-y-4">{children}</div>
    </section>
  );
}

export function ContentModelSection() {
  const model = contentSystemsCaseStudy.contentModel;

  return (
    <>
      <ProseGroup paragraphs={model.intro} />

      <div className="content-systems-model-steps mt-6 space-y-8 sm:space-y-10">
        <ModelStep number={1} title={model.step1.title}>
          <ContentModelStep1 />
        </ModelStep>

        <ModelStep number={2} title={model.step2.title}>
          <ProseGroup paragraphs={model.step2.paragraphs} />
          <CollectionGrid collections={model.step2.collections} />
          <StoryProse className="content-systems-body-copy max-w-3xl">
            {model.step2.closing}
          </StoryProse>
        </ModelStep>

        <ModelStep number={3} title={model.step3.title}>
          <ProseGroup paragraphs={model.step3.paragraphs} />
          <StoryProse className="content-systems-body-copy max-w-3xl">
            {model.step3.exampleIntro}
          </StoryProse>
          <ContentModelJsonBlock data={model.step3.contentModel} />
          <ProseGroup paragraphs={model.step3.closing} />
        </ModelStep>

        <ModelStep number={4} title={model.step4.title}>
          <ProseGroup paragraphs={model.step4.paragraphs} />
          <StoryProse className="content-systems-body-copy max-w-3xl">
            {model.step4.lookupIntro}
          </StoryProse>
          <GatheredContextList items={model.step4.gathered} />
          <StoryProse className="content-systems-body-copy max-w-3xl">
            {model.step4.closing}
          </StoryProse>
          <div className="content-systems-prototype-panels grid items-start gap-6 xl:grid-cols-2">
            <PrototypeRetrievedStack />
            <PrototypePromptPanel />
          </div>
        </ModelStep>

        <ModelStep number={5} title={model.step5.title}>
          <ProseGroup paragraphs={model.step5.paragraphs} />
          <GuardrailChecks groups={model.step5.groups} />
          <StoryProse className="content-systems-body-copy max-w-3xl">
            {model.step5.closing}
          </StoryProse>
        </ModelStep>

        <ModelStep number={6} title={model.step6.title}>
          <ProseGroup paragraphs={model.step6.paragraphs} />
          <FallbackFlow items={model.step6.fallbacks} />
          <StoryProse className="content-systems-body-copy max-w-3xl">
            {model.step6.closing}
          </StoryProse>
        </ModelStep>

        <ModelStep number={7} title={model.step7.title}>
          <ProseGroup paragraphs={model.step7.paragraphs} />
          <BulletGrid items={model.step7.requires} />
          <StoryProse className="content-systems-body-copy max-w-3xl">
            {model.step7.closing}
          </StoryProse>
        </ModelStep>
      </div>
    </>
  );
}
