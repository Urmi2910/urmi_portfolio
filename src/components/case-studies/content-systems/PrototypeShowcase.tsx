"use client";

import { cn } from "@/lib/utils";
import { contentSystemsCaseStudy } from "@/data/content-systems-case-study";
import { Check } from "lucide-react";

function PrototypeFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-lg)] border border-[#dfe3e8] bg-[#f4f5f7] shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

function StepBadge({ step }: { step: number }) {
  return (
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf2ff] text-xs font-semibold text-[#3b5bdb]">
      {step}
    </span>
  );
}

function PanelTitle({ step, title }: { step?: number; title: string }) {
  return (
    <div className="flex items-start gap-3">
      {step ? <StepBadge step={step} /> : null}
      <p className="text-sm font-semibold text-[#1a1a1a]">{title}</p>
    </div>
  );
}

export function PrototypeHero() {
  return (
    <PrototypeFrame>
      <div className="border-b border-[#dfe3e8] bg-white px-5 py-5 sm:px-6">
        <p className="text-lg font-semibold tracking-tight text-[#1a1a1a] sm:text-xl">
          AI Content Context Engine
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5c6370]">
          Help AI write consistent UI copy by gathering writing rules, approved words, message style,
          and examples before it starts writing.
        </p>
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <PrototypeScenarioSelector compact />
        <PrototypeRetrievedStack compact />
      </div>
    </PrototypeFrame>
  );
}

export function PrototypeScenarioSelector({ compact = false }: { compact?: boolean }) {
  const demo = contentSystemsCaseStudy.prototype;

  return (
    <div className="rounded-[var(--radius-md)] border border-[#dfe3e8] bg-white p-4 sm:p-5">
      {!compact ? <PanelTitle step={1} title="Scenario Selector" /> : null}
      <label className="mt-3 block text-xs font-medium uppercase tracking-[0.08em] text-[#5c6370]">
        Scenario
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex-1 rounded-md border border-[#dfe3e8] bg-[#f4f5f7] px-3 py-2.5 text-sm text-[#1a1a1a]">
          {demo.scenarioTitle}
        </div>
        <button
          type="button"
          className="rounded-md bg-[#3b5bdb] px-4 py-2.5 text-sm font-medium text-white"
          tabIndex={-1}
        >
          Collect information
        </button>
      </div>
      <p className="mt-3 text-sm text-[#5c6370]">{demo.scenarioDescription}</p>
    </div>
  );
}

export function PrototypeRetrievedStack({ compact = false }: { compact?: boolean }) {
  const p = contentSystemsCaseStudy.prototype;
  const demo = [
    { label: "Situation", value: p.scenarioTitle },
    { label: "Message style", value: p.messageType.name },
    { label: "How to write it", value: p.pattern.name },
    { label: "Writing rules", value: p.writingRules.join(", ") },
    { label: "Approved words", value: p.terminology.preferred },
    { label: "Example message", value: p.approvedExample.message },
  ];

  return (
    <div className="rounded-[var(--radius-md)] border border-[#dfe3e8] bg-white p-4 sm:p-5">
      {!compact ? <PanelTitle step={2} title="Information collected for this situation" /> : null}
      <div className="mt-4 space-y-2">
        {demo.map((item, index) => (
          <div key={item.label}>
            <div className="rounded-md border border-[#dfe3e8] bg-[#f4f5f7] px-3 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5c6370]">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-[#1a1a1a]">{item.value}</p>
            </div>
            {index < demo.length - 1 ? (
              <p className="py-1 text-center text-xs text-[#5c6370]/70" aria-hidden>
                ↓
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PrototypeRetrievedGrid() {
  const p = contentSystemsCaseStudy.prototype;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <ContextCard title="Scenario">
        <Field label="Title" value={p.scenarioTitle} />
        <Field label="Description" value={p.scenarioDescription} />
        <Field label="User Goal" value={p.userGoal} />
      </ContextCard>
      <ContextCard title="Message Type">
        <Field label="Name" value={p.messageType.name} />
        <Field label="Purpose" value={p.messageType.purpose} />
        <Field label="Tone" value={p.messageType.tone} />
      </ContextCard>
      <ContextCard title="Pattern">
        <Field label="Name" value={p.pattern.name} />
        <Field label="Description" value={p.pattern.description} />
        <Field label="Structure" value={p.pattern.structure} />
      </ContextCard>
      <ContextCard title="Writing Rules">
        <ul className="mt-1 space-y-1">
          {p.writingRules.map((rule) => (
            <li key={rule} className="text-sm text-[#1a1a1a]">
              • {rule}
            </li>
          ))}
        </ul>
      </ContextCard>
      <ContextCard title="Terminology">
        <span className="inline-flex rounded-full bg-[#edf2ff] px-2.5 py-1 text-xs font-medium text-[#3b5bdb]">
          {p.terminology.preferred}
        </span>
        <p className="mt-2 text-sm text-[#5c6370]">{p.terminology.definition}</p>
        <p className="mt-1 text-xs text-[#5c6370]">Avoid: {p.terminology.avoid.join(", ")}</p>
      </ContextCard>
      <ContextCard title="Approved Example">
        <div className="rounded-md border border-[#dfe3e8] bg-[#f4f5f7] px-3 py-2.5">
          <p className="text-sm font-medium text-[#1a1a1a]">{p.approvedExample.message}</p>
        </div>
        <p className="mt-2 text-sm text-[#5c6370]">{p.approvedExample.why}</p>
      </ContextCard>
    </div>
  );
}

function ContextCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[#dfe3e8] bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#3b5bdb]">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-2 first:mt-0">
      <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#5c6370]">{label}</p>
      <p className="mt-0.5 text-sm text-[#1a1a1a]">{value}</p>
    </div>
  );
}

export function PrototypePromptPanel() {
  const prompt = contentSystemsCaseStudy.prototype.promptExcerpt;

  return (
    <PrototypeFrame>
      <div className="border-b border-[#dfe3e8] bg-white px-4 py-3">
        <PanelTitle step={3} title="Instructions sent to AI" />
      </div>
      <div className="p-4 sm:p-5">
        <pre className="content-systems-mono max-h-80 overflow-auto whitespace-pre-wrap rounded-md border border-[#dfe3e8] bg-white p-4 text-xs leading-relaxed text-[#1a1a1a] sm:text-sm">
          {prompt}
        </pre>
      </div>
    </PrototypeFrame>
  );
}

export function PrototypeGeneratedPanel() {
  const message = contentSystemsCaseStudy.prototype.generatedMessage;

  return (
    <PrototypeFrame>
      <div className="border-b border-[#dfe3e8] bg-white px-4 py-3">
        <PanelTitle step={4} title="Generated UI Copy" />
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <button
          type="button"
          className="rounded-md bg-[#3b5bdb] px-4 py-2.5 text-sm font-medium text-white"
          tabIndex={-1}
        >
          Generate UI Copy
        </button>
        <div className="rounded-md border border-[#dfe3e8] bg-white p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5c6370]">
            Generated UI Copy
          </p>
          <p className="mt-2 text-base font-medium text-[#1a1a1a]">{message}</p>
        </div>
      </div>
    </PrototypeFrame>
  );
}

export function PrototypeValidationPanel() {
  const checks = contentSystemsCaseStudy.prototype.validationChecks;

  return (
    <div className="rounded-[var(--radius-md)] border border-[#dfe3e8] bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[#1a1a1a]">Message check</p>
        <p className="text-xs font-medium text-[#16a34a]">All checks passed</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {checks.map((check) => (
          <span
            key={check}
            className="inline-flex items-center gap-1 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-2.5 py-1 text-xs font-medium text-[#166534]"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden /> {check}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ContextFormulaBoard({
  items,
}: {
  items: string[];
}) {
  const inputs = items.slice(0, -1);
  const output = items[items.length - 1];

  return (
    <div className="content-systems-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-6">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2">
        {inputs.map((item) => (
          <div key={item} className="flex w-full flex-col items-center gap-2">
            <div className="w-full rounded-[var(--radius-md)] border border-outline/12 bg-white px-4 py-2.5 text-center text-sm font-medium text-foreground">
              {item}
            </div>
            <span className="text-sm font-medium text-muted-foreground" aria-hidden>
              +
            </span>
          </div>
        ))}
        <span className="text-muted-foreground/50" aria-hidden>
          ↓
        </span>
        <div className="w-full rounded-[var(--radius-md)] border border-[#ea580c]/25 bg-[#fff7ed] px-4 py-2.5 text-center text-sm font-medium text-[#ea580c]">
          {output}
        </div>
      </div>
    </div>
  );
}

export function ComparisonTable({
  without,
  withoutLabel,
  with: withCopy,
  withLabel,
}: {
  without: string;
  withoutLabel: string;
  with: string;
  withLabel: string;
}) {
  return (
    <div className="content-systems-table-wrap overflow-x-auto">
      <table className="content-systems-table w-full min-w-[20rem] text-left text-sm">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-3 font-semibold text-foreground">Without structured context</th>
            <th className="px-4 py-3 font-semibold text-foreground">With structured context</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 align-top">
              <p className="font-medium text-foreground">&ldquo;{without}&rdquo;</p>
              <p className="mt-1 text-muted-foreground">{withoutLabel}</p>
            </td>
            <td className="px-4 py-3 align-top">
              <p className="font-medium text-[#ea580c]">&ldquo;{withCopy}&rdquo;</p>
              <p className="mt-1 text-muted-foreground">{withLabel}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
