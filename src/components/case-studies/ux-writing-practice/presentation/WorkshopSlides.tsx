import { workshopPresentation } from "@/data/workshop-presentation";
import { cn } from "@/lib/utils";
import {
  PresentationSlide,
  SlideBody,
  SlideCanvas,
  SlideCard,
  SlideChip,
  SlideSubtitle,
  SlideTitle,
} from "./PresentationSlide";

type SlideVariant = "presentation" | "preview";

function CoverSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { cover } = workshopPresentation;

  return (
    <PresentationSlide id="cover" variant={variant}>
      <SlideCanvas center>
        <div className="max-w-[85%] text-center">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-[#0a0a0a]">
            {cover.title}
          </h1>
          <p className="mt-4 text-[clamp(1.125rem,2vw,1.5rem)] font-normal leading-[1.45] tracking-[-0.012em] text-[#737373]">
            {cover.subtitle}
          </p>
        </div>
      </SlideCanvas>
      <div className="absolute bottom-[8%] left-[8%] text-left">
        <p className="text-[clamp(1rem,1.5vw,1.25rem)] font-semibold tracking-[-0.015em] text-[#0a0a0a]">
          {cover.author}
        </p>
        <p className="mt-1 text-[clamp(0.875rem,1.25vw,1rem)] font-normal text-[#737373]">
          {cover.role}
        </p>
      </div>
    </PresentationSlide>
  );
}

function AgendaSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { agenda } = workshopPresentation;

  return (
    <PresentationSlide id="agenda" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{agenda.title}</SlideTitle>
        <SlideSubtitle>{agenda.subtitle}</SlideSubtitle>
        <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-3">
          {agenda.items.map((item) => (
            <SlideCard key={item.number} className="flex flex-col px-5 py-4">
              <span className="text-sm font-medium tabular-nums tracking-[0.04em] text-[#a3a3a3]">
                {item.number}
              </span>
              <h3 className="mt-2 text-[clamp(0.9375rem,1.2vw,1.125rem)] font-bold leading-[1.15] tracking-[-0.018em] text-[#0a0a0a]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[clamp(0.8125rem,1vw,0.9375rem)] leading-[1.35] text-[#737373]">
                {item.description}
              </p>
            </SlideCard>
          ))}
        </div>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function UnderstandingSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { understanding } = workshopPresentation;

  return (
    <PresentationSlide id="understanding" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{understanding.title}</SlideTitle>
        <SlideSubtitle>{understanding.subtitle}</SlideSubtitle>
        <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-4">
            {understanding.paragraphs.map((paragraph) => (
              <SlideBody key={paragraph}>{paragraph}</SlideBody>
            ))}
          </div>
          <div className="grid grid-cols-2 content-center gap-2.5">
            {understanding.components.map((item) => (
              <SlideChip key={item}>{item}</SlideChip>
            ))}
          </div>
        </div>
        <SlideCard className="mt-5 shrink-0 px-5 py-4">
          <SlideBody>
            <span className="font-semibold text-[#0a0a0a]">Key takeaway.</span> {understanding.takeaway}
          </SlideBody>
        </SlideCard>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function ProcessSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { process } = workshopPresentation;

  return (
    <PresentationSlide id="process" variant={variant}>
      <SlideCanvas className="justify-center">
        <div className="grid h-full w-full grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              {process.steps.map((step, index) => (
                <div key={step} className="flex flex-col items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex min-w-[14rem] items-center justify-center rounded-full border px-6 py-3 text-center text-[clamp(0.9375rem,1.2vw,1.0625rem)] font-medium tracking-[-0.012em]",
                      step === "Content Design"
                        ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                        : "border-[#EAEAEA] bg-white text-[#0a0a0a]"
                    )}
                  >
                    {step}
                  </span>
                  {index < process.steps.length - 1 ? (
                    <span className="text-xl font-light leading-none text-[#c4c4c4]" aria-hidden>
                      ↓
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            {process.questions.map((question) => (
              <SlideCard key={question} className="px-5 py-4">
                <SlideBody>{question}</SlideBody>
              </SlideCard>
            ))}
          </div>
        </div>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function PrinciplesSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { principles } = workshopPresentation;

  return (
    <PresentationSlide id="principles" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{principles.title}</SlideTitle>
        <SlideSubtitle>{principles.subtitle}</SlideSubtitle>
        <div className="mt-6 grid flex-1 grid-cols-2 grid-rows-3 gap-3">
          {principles.items.map((item) => (
            <SlideCard key={item.title} className="flex flex-col justify-center px-5 py-4">
              <h3 className="text-[clamp(0.9375rem,1.2vw,1.125rem)] font-bold tracking-[-0.018em] text-[#0a0a0a]">
                {item.title}
              </h3>
              <p className="mt-2 text-[clamp(0.8125rem,1vw,0.9375rem)] leading-[1.4] text-[#737373]">
                {item.description}
              </p>
            </SlideCard>
          ))}
        </div>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function EnterpriseSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { enterprise } = workshopPresentation;

  return (
    <PresentationSlide id="enterprise" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{enterprise.title}</SlideTitle>
        <SlideSubtitle>{enterprise.subtitle}</SlideSubtitle>
        <div className="mt-8 flex flex-1 flex-col justify-center space-y-5">
          {enterprise.points.map((point) => (
            <SlideCard key={point} className="px-6 py-4">
              <SlideBody>{point}</SlideBody>
            </SlideCard>
          ))}
        </div>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function UiComponentsSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { uiComponents } = workshopPresentation;

  return (
    <PresentationSlide id="ui-components" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{uiComponents.title}</SlideTitle>
        <SlideSubtitle>{uiComponents.subtitle}</SlideSubtitle>
        <SlideBody className="mt-4 max-w-[85%]">{uiComponents.description}</SlideBody>
        <div className="mt-8 grid flex-1 grid-cols-2 content-start gap-3 sm:grid-cols-4">
          {uiComponents.components.map((item) => (
            <SlideCard
              key={item}
              className="flex items-center justify-center px-4 py-5 text-center"
            >
              <span className="text-[clamp(0.875rem,1.1vw,1rem)] font-semibold leading-snug tracking-[-0.012em] text-[#0a0a0a]">
                {item}
              </span>
            </SlideCard>
          ))}
        </div>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function CollaborationSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { collaboration } = workshopPresentation;

  return (
    <PresentationSlide id="collaboration" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{collaboration.title}</SlideTitle>
        <SlideSubtitle>{collaboration.subtitle}</SlideSubtitle>
        <div className="mt-6 grid flex-1 grid-cols-5 gap-3 content-center">
          {collaboration.steps.map((step, index) => (
            <SlideCard key={step.label} className="flex flex-col px-4 py-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3]">
                Step {index + 1}
              </span>
              <p className="mt-2 text-[clamp(0.875rem,1.1vw,1rem)] font-bold text-[#0a0a0a]">
                {step.label}
              </p>
              <p className="mt-1.5 text-[clamp(0.75rem,0.95vw,0.875rem)] leading-[1.4] text-[#737373]">
                {step.detail}
              </p>
            </SlideCard>
          ))}
        </div>
        <SlideCard className="mt-4 shrink-0 px-5 py-4">
          <SlideBody>{collaboration.note}</SlideBody>
        </SlideCard>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function ProductExamplesSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { productExamples } = workshopPresentation;

  return (
    <PresentationSlide id="product-examples" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{productExamples.title}</SlideTitle>
        <SlideSubtitle>{productExamples.subtitle}</SlideSubtitle>
        <div className="mt-10 flex flex-1 flex-col justify-center space-y-5">
          {productExamples.prompts.map((prompt, index) => (
            <SlideCard key={prompt} className="flex items-start gap-4 px-6 py-5">
              <span className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold tabular-nums leading-none text-[#EAEAEA]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <SlideBody className="pt-0.5">{prompt}</SlideBody>
            </SlideCard>
          ))}
        </div>
      </SlideCanvas>
    </PresentationSlide>
  );
}

function ResourcesSlide({ variant = "presentation" }: { variant?: SlideVariant }) {
  const { resources } = workshopPresentation;

  return (
    <PresentationSlide id="resources" variant={variant}>
      <SlideCanvas>
        <SlideTitle>{resources.title}</SlideTitle>
        <SlideSubtitle>{resources.subtitle}</SlideSubtitle>
        <SlideBody className="mt-4 max-w-[85%]">{resources.description}</SlideBody>
        <div className="mt-8 grid flex-1 grid-cols-2 gap-3 content-start">
          {resources.items.map((item) => (
            <SlideCard key={item.title} className="flex flex-col justify-center px-5 py-5">
              <p className="text-[clamp(0.9375rem,1.2vw,1.0625rem)] font-semibold text-[#0a0a0a]">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-[#a3a3a3]">{item.type}</p>
            </SlideCard>
          ))}
        </div>
      </SlideCanvas>
    </PresentationSlide>
  );
}

export function WorkshopPresentationDeck({ variant = "presentation" }: { variant?: SlideVariant }) {
  return (
    <>
      <CoverSlide variant={variant} />
      <AgendaSlide variant={variant} />
      <UnderstandingSlide variant={variant} />
      <ProcessSlide variant={variant} />
      <PrinciplesSlide variant={variant} />
      <EnterpriseSlide variant={variant} />
      <UiComponentsSlide variant={variant} />
      <CollaborationSlide variant={variant} />
      <ProductExamplesSlide variant={variant} />
      <ResourcesSlide variant={variant} />
    </>
  );
}

export function WorkshopCoverPreview() {
  return <CoverSlide variant="preview" />;
}

export function WorkshopAgendaPreview() {
  return <AgendaSlide variant="preview" />;
}

export function WorkshopUiComponentsPreview() {
  return <UiComponentsSlide variant="preview" />;
}

export function WorkshopCollaborationPreview() {
  return <CollaborationSlide variant="preview" />;
}

export function WorkshopResourcesPreview() {
  return <ResourcesSlide variant="preview" />;
}
