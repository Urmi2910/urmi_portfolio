import type { DoDontPair, GuidelinePage, IncludedItem, PrincipleItem } from "@/data/guidelines-case-study";
import { StoryProse } from "@/components/case-studies/shared/StoryComponents";
import { cn } from "@/lib/utils";
import { Check, ExternalLink } from "lucide-react";

export function GuidelinesDocumentLink({
  href,
  downloadFilename,
}: {
  href: string;
  downloadFilename: string;
}) {
  return (
    <div className="guidelines-card rounded-[var(--radius-lg)] border border-primary/15 bg-primary/5 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Open the full PDF in your browser or download a copy to read offline.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-md hover:bg-primary/5 hover:shadow-md active:scale-[0.97]"
          >
            View PDF
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={href}
            download={downloadFilename}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-md hover:bg-white/80 hover:text-foreground active:scale-[0.97]"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

const guidelinesSectionCardClass =
  "guidelines-section-card mt-6 rounded-[var(--radius-lg)] border border-primary/15 bg-surface p-5 sm:p-6";
const guidelinesSectionLabelClass =
  "text-xs font-semibold uppercase tracking-[0.14em] text-primary";
const guidelinesSectionTileBaseClass =
  "rounded-[var(--radius-md)] border border-primary/10 px-4 py-3.5 shadow-sm";
const guidelinesSectionTileClass = guidelinesSectionTileBaseClass + " bg-surface";
const guidelinesSectionTileSimpleClass =
  "flex items-start gap-2.5 " + guidelinesSectionTileClass;
const guidelinesSectionTileRichClass = guidelinesSectionTileClass + " p-4 sm:p-5";

function GuidelinesDocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary transition-md hover:underline"
    >
      {label}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function GuidelinesSectionShell({
  label,
  children,
  reference,
  className,
}: {
  label?: string;
  children: React.ReactNode;
  reference?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div className={cn(guidelinesSectionCardClass, className)}>
      {label ? <p className={guidelinesSectionLabelClass}>{label}</p> : null}
      <div className={label ? "mt-4" : undefined}>{children}</div>
      {reference ? (
        <div className="mt-5 border-t border-primary/10 pt-4">
          <GuidelinesDocLink href={reference.href} label={reference.label} />
        </div>
      ) : null}
    </div>
  );
}

export function GuidelinesIncludedCard({
  items,
  reference,
}: {
  items: readonly IncludedItem[];
  reference?: { href: string; label: string };
}) {
  const hasRichItems = items.some((item) => typeof item !== "string" && item.examples?.length);

  return (
    <div className="guidelines-included-content space-y-4">
      <ul className={cn("grid gap-3", hasRichItems ? "grid-cols-1" : "sm:grid-cols-2")}>
        {items.map((item) => {
          const title = typeof item === "string" ? item : item.title;
          const description = typeof item === "string" ? undefined : item.description;
          const examples = typeof item === "string" ? undefined : item.examples;
          const isRich = Boolean(examples?.length);

          if (!isRich) {
            return (
              <li key={title} className={guidelinesSectionTileSimpleClass}>
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                  {description ? (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  ) : null}
                </div>
              </li>
            );
          }

          return (
            <li key={title} className={guidelinesSectionTileRichClass}>
              <p className="font-heading text-base font-semibold text-foreground">{title}</p>
              {description ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              ) : null}
              {examples?.length ? (
                <div className="mt-3">
                  <p className="text-sm font-medium text-primary">
                    {examples.length > 1 ? "Examples" : "Example"}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {examples.map((example) => (
                      <li key={example} className="text-base leading-relaxed text-foreground">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
      {reference ? (
        <div>
          <GuidelinesDocLink href={reference.href} label={reference.label} />
        </div>
      ) : null}
    </div>
  );
}

export function GuidelinesProseGroup({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="guidelines-prose-group">
      {paragraphs.map((paragraph) => (
        <StoryProse key={paragraph} className="guidelines-body-copy">
          {paragraph}
        </StoryProse>
      ))}
    </div>
  );
}

export function SystemCategoryCards({
  categories,
}: {
  categories: readonly { icon: string; title: string; description: string; sectionId: string }[];
}) {
  return (
    <div className="guidelines-system-categories mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <a
          key={category.title}
          href={`#${category.sectionId}`}
          className="guidelines-card group block rounded-[var(--radius-lg)] border border-outline/12 bg-surface p-4 transition-md hover:-translate-y-0.5 hover:border-primary/25 hover:bg-surface-low hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:p-5"
        >
          <p className="text-xl" aria-hidden="true">
            {category.icon}
          </p>
          <p className="mt-3 font-heading text-base font-semibold text-foreground transition-md group-hover:text-primary">
            {category.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
        </a>
      ))}
    </div>
  );
}

export function DoDontExamples({ examples }: { examples: readonly DoDontPair[] }) {
  return (
    <div className="space-y-3">
      {examples.map((item) => (
        <div key={item.do} className="grid gap-2.5 sm:grid-cols-2">
          <div className={cn("flex items-start gap-2.5", guidelinesSectionTileBaseClass, "border-[#15803d]/20 bg-white")}>
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#15803d]" strokeWidth={2.5} aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#15803d]">Do</p>
              <p className="mt-1 whitespace-pre-line text-sm text-foreground">{item.do}</p>
            </div>
          </div>
          <div className={cn("flex items-start gap-2.5", guidelinesSectionTileBaseClass, "border-[#b91c1c]/20 bg-white")}>
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-xs font-bold text-[#b91c1c]" aria-hidden="true">
              ×
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#b91c1c]">Don&apos;t</p>
              <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{item.dont}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LetterCaseVisual({
  styles,
  examples,
}: {
  styles: readonly { name: string; description: string; example: string }[];
  examples: readonly DoDontPair[];
}) {
  return (
    <div className="space-y-4">
      <div className="grid gap-2.5 sm:grid-cols-2">
        {styles.map((style) => (
          <div key={style.name} className={guidelinesSectionTileSimpleClass}>
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-foreground">{style.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{style.description}</p>
              <p className="mt-2 rounded-[var(--radius-md)] border border-primary/10 bg-surface px-3 py-2 text-sm text-foreground">
                {style.example}
              </p>
            </div>
          </div>
        ))}
      </div>
      <DoDontExamples examples={examples} />
    </div>
  );
}

export function NumeralsVisual({
  rules,
  examples,
}: {
  rules: readonly string[];
  examples: readonly DoDontPair[];
}) {
  return (
    <div className="space-y-4">
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {rules.map((rule) => (
          <li key={rule} className={guidelinesSectionTileSimpleClass}>
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
            <p className="text-sm leading-snug text-foreground">{rule}</p>
          </li>
        ))}
      </ul>
      <DoDontExamples examples={examples} />
    </div>
  );
}

export function EmptyStatesVisual({
  patterns,
}: {
  patterns: readonly { label: string; example: string }[];
}) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {patterns.map((pattern) => (
        <li key={pattern.label} className={guidelinesSectionTileSimpleClass}>
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-foreground">{pattern.label}</p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">{pattern.example}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ErrorMessagesVisual({
  patterns,
  examples,
}: {
  patterns: readonly { template: string; example: string }[];
  examples: readonly DoDontPair[];
}) {
  return (
    <div className="space-y-4">
      <ul className="grid gap-2.5">
        {patterns.map((item) => (
          <li key={`${item.template}-${item.example}`} className={guidelinesSectionTileSimpleClass}>
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-mono text-xs text-muted-foreground sm:text-sm">{item.template}</p>
              <p className="mt-1 text-sm text-foreground">{item.example}</p>
            </div>
          </li>
        ))}
      </ul>
      <DoDontExamples examples={examples} />
    </div>
  );
}

export function ConfirmationVisual({ examples }: { examples: readonly string[] }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {examples.map((example) => (
        <li key={example} className={guidelinesSectionTileSimpleClass}>
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
          <p className="text-sm leading-snug text-foreground">{example}</p>
        </li>
      ))}
    </ul>
  );
}

export function GuidelinePageBlock({
  page,
  featured = false,
  children,
}: {
  page: GuidelinePage;
  featured?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="guidelines-page-block mt-10 first:mt-0 sm:mt-12">
      <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {page.heading}
      </h3>
      <GuidelinesProseGroup paragraphs={page.paragraphs} />
      <GuidelinesSectionShell
        className={cn(featured && "border-primary/25 ring-1 ring-primary/10")}
      >
        {children}
      </GuidelinesSectionShell>
    </article>
  );
}
