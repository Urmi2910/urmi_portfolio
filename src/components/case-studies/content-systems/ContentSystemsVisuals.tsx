"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function DocTable({
  headers,
  rows,
  className,
}: {
  headers: readonly [string, string];
  rows: { col1: string; col2: string }[];
  className?: string;
}) {
  return (
    <div className={cn("content-systems-table-wrap overflow-x-auto", className)}>
      <table className="content-systems-table w-full min-w-[20rem] text-left text-sm">
        <thead>
          <tr>
            <th className="w-[38%] px-4 py-3 font-semibold text-foreground">{headers[0]}</th>
            <th className="px-4 py-3 font-semibold text-foreground">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.col1}>
              <td className="px-4 py-3 align-top font-medium text-foreground">{row.col1}</td>
              <td className="px-4 py-3 align-top text-muted-foreground">{row.col2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ContentTypesTable({
  rows,
}: {
  rows: { type: string; purpose: string }[];
}) {
  return (
    <DocTable
      headers={["Model", "Purpose"]}
      rows={rows.map((item) => ({ col1: item.type, col2: item.purpose }))}
    />
  );
}

export function KnowledgeTypesList({ items }: { items: string[] }) {
  return (
    <pre className="content-systems-mono rounded-[var(--radius-md)] border border-outline/12 bg-[#1c1b1f] px-4 py-4 text-sm leading-relaxed text-[#f5f5f4] sm:px-5">
      {items.join("\n\n")}
    </pre>
  );
}

export function EditorialTree({ root, items }: { root: string; items: string[] }) {
  return (
    <pre className="content-systems-mono rounded-[var(--radius-md)] border border-outline/12 bg-[#1c1b1f] px-4 py-4 text-sm leading-relaxed text-[#f5f5f4] sm:px-5">
      {`${root}\n\n${items.map((item) => `├── ${item}`).join("\n")}`}
    </pre>
  );
}

export function WorkflowBoard({ steps }: { steps: string[] }) {
  return (
    <div className="content-systems-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-3">
        {steps.map((step, index) => (
          <div key={step} className="flex w-full flex-col items-center gap-3">
            <div className="w-full rounded-[var(--radius-md)] border border-[#ea580c]/20 bg-white px-4 py-3 text-center text-sm font-medium text-foreground shadow-sm">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <span className="text-muted-foreground/50" aria-hidden>
                ↓
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IdeaFlowDiagram({ steps }: { steps: readonly string[] }) {
  return <WorkflowBoard steps={[...steps]} />;
}

export function BuildingBlockList({
  items,
}: {
  items: readonly { example: string; label: string }[];
}) {
  return (
    <ul className="grid max-w-3xl gap-3">
      {items.map((item) => (
        <li
          key={item.label}
          className="grid gap-3 rounded-[var(--radius-md)] border border-outline/10 bg-white px-4 py-3 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:items-center sm:gap-4"
        >
          <p className="text-sm font-medium text-[#ea580c]">{item.example}</p>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ea580c]" strokeWidth={2.5} aria-hidden />
            {item.label}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function BulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 rounded-[var(--radius-md)] border border-outline/10 bg-white px-4 py-3 text-sm text-muted-foreground"
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ea580c]" strokeWidth={2.5} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function MessageTypeList({
  items,
}: {
  items: readonly { name: string; description: string }[];
}) {
  return (
    <ul className="content-systems-message-types max-w-3xl space-y-2 pl-1">
      {items.map((item) => (
        <li key={item.name} className="content-systems-body-copy text-base leading-relaxed text-foreground">
          <strong>{item.name}</strong> {item.description}
        </li>
      ))}
    </ul>
  );
}

export function WalkthroughStep({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <article className="content-systems-step scroll-mt-28 border-t border-outline/10 pt-8 first:border-t-0 first:pt-0">
      <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
      <p className="content-systems-step-intro mt-3 text-base text-muted-foreground">{intro}</p>
      <div className="mt-6">{children}</div>
    </article>
  );
}

function FlowDiagram({
  lines,
  variant = "light",
  className,
}: {
  lines: string[];
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <pre
      className={cn(
        "content-systems-mono whitespace-pre-wrap rounded-[var(--radius-md)] border px-4 py-4 text-sm leading-relaxed sm:px-5",
        variant === "dark"
          ? "border-outline/12 bg-[#1c1b1f] text-[#f5f5f4]"
          : "border-[#dfe3e8] bg-white text-[#1a1a1a]",
        className,
      )}
    >
      {lines.join("\n")}
    </pre>
  );
}

export function PromptOnlyFlow({ task }: { task: string }) {
  return (
    <FlowDiagram
      lines={["Prompt", "", "↓", "", task, "", "↓", "", "🤖 AI"]}
      variant="dark"
    />
  );
}

export function PromptMaintenanceProblems({ problems }: { problems: string[] }) {
  return (
    <FlowDiagram
      lines={[
        "Every new requirement means changing the prompt.",
        "",
        ...problems.map((item) => `❌ ${item}`),
      ]}
      variant="dark"
    />
  );
}

export function KnowledgeShiftDiagram() {
  return (
    <div className="content-systems-shift-grid grid gap-6 md:grid-cols-2">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Instead of this
        </p>
        <FlowDiagram
          lines={[
            "Prompt",
            "",
            "+ Writing Rules",
            "+ Approved words",
            "+ Examples",
            "+ Message style",
            "+ Tone",
            "+ Message types",
          ]}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Do this
        </p>
        <FlowDiagram lines={["Prompt", "", "↓", "", "Gather the right information", "", "↓", "", "Generate UI copy"]} />
      </div>
    </div>
  );
}

export function ScenarioJsonBlock({
  data,
}: {
  data: Record<string, string | string[]>;
}) {
  const formatted = JSON.stringify(data, null, 2);

  return (
    <pre className="content-systems-mono overflow-x-auto rounded-[var(--radius-md)] border border-outline/12 bg-[#1c1b1f] px-4 py-4 text-sm leading-relaxed text-[#f5f5f4] sm:px-5">
      {formatted}
    </pre>
  );
}

export function ContentModelJsonBlock({
  data,
}: {
  data: Record<string, string | string[]>;
}) {
  const formatted = JSON.stringify(data, null, 2);

  return (
    <div className="content-systems-content-model-json max-w-3xl rounded-[var(--radius-lg)] border border-[#ea580c]/15 bg-[#fff7ed] p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#ea580c]">
        Content model
      </p>
      <pre className="content-systems-mono mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed text-[#1a1a1a] sm:text-[0.9375rem]">
        {formatted}
      </pre>
    </div>
  );
}

export function CollectionGrid({
  collections,
}: {
  collections: readonly { name: string; content: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {collections.map((collection) => (
        <div
          key={collection.name}
          className="content-systems-collection rounded-[var(--radius-lg)] border border-outline/12 bg-white p-4 sm:p-5"
        >
          <p className="text-sm font-semibold text-foreground">{collection.name}</p>
          <pre className="content-systems-mono mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
            {collection.content}
          </pre>
        </div>
      ))}
    </div>
  );
}

export function GatheredContextList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid max-w-3xl gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 rounded-[var(--radius-md)] border border-outline/10 bg-white px-4 py-3 text-sm text-foreground"
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ea580c]" strokeWidth={2.5} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function GuardrailChecks({
  groups,
}: {
  groups: readonly {
    title: string;
    prompt?: string;
    detail?: string;
    items?: readonly string[];
  }[];
}) {
  return (
    <div className="grid max-w-3xl gap-4">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] px-5 py-4 sm:px-6 sm:py-5"
        >
          <p className="text-sm font-semibold text-foreground">{group.title}</p>
          {group.prompt ? (
            <p className="content-systems-body-copy mt-2 text-base text-foreground">{group.prompt}</p>
          ) : null}
          {group.detail ? (
            <p className="content-systems-body-copy mt-2 text-base italic text-muted-foreground">
              {group.detail}
            </p>
          ) : null}
          {group.items ? (
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function FallbackFlow({
  items,
}: {
  items: readonly { condition: string; action: string }[];
}) {
  return (
    <div className="content-systems-card max-w-3xl rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2">
        {items.map((item, index) => (
          <div key={item.condition} className="flex w-full flex-col items-center gap-2">
            <p className="w-full rounded-[var(--radius-md)] border border-outline/10 bg-white px-4 py-3 text-center text-sm text-foreground">
              {item.condition}
            </p>
            <span className="text-muted-foreground/60" aria-hidden>
              ↓
            </span>
            <p className="w-full rounded-[var(--radius-md)] border border-[#ea580c]/15 bg-[#fff7ed] px-4 py-3 text-center text-sm font-medium text-foreground">
              {item.action}
            </p>
            {index < items.length - 1 ? (
              <span className="my-1 text-muted-foreground/40" aria-hidden>
                ···
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CollectFlowchart({ steps }: { steps: string[] }) {
  return <WorkflowBoard steps={steps} />;
}

export function InstructionBuilderFlow({ steps }: { steps: string[] }) {
  return <WorkflowBoard steps={steps} />;
}

export function TodayTomorrowProcessDiagram({
  today,
  tomorrow,
}: {
  today: {
    label: string;
    productArea: string;
    inputs: string[];
    output: string;
  };
  tomorrow: {
    label: string;
    productAreas: string[];
    bridge: string;
    output: string;
  };
}) {
  return (
    <div className="content-systems-shift-grid grid gap-6 md:grid-cols-2">
      <div className="content-systems-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {today.label}
        </p>
        <div className="flex flex-col items-center gap-2">
          <FlowBlock>{today.productArea}</FlowBlock>
          <FlowArrow />
          {today.inputs.map((item) => (
            <FlowBlock key={item} muted>
              {item}
            </FlowBlock>
          ))}
          <FlowArrow />
          <FlowBlock accent>AI</FlowBlock>
          <FlowArrow />
          <FlowBlock>{today.output}</FlowBlock>
        </div>
      </div>

      <div className="content-systems-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {tomorrow.label}
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="grid w-full grid-cols-2 gap-2">
            {tomorrow.productAreas.map((item) => (
              <FlowBlock key={item} compact>
                {item}
              </FlowBlock>
            ))}
          </div>
          <FlowArrow />
          <FlowBlock accent>{tomorrow.bridge}</FlowBlock>
          <FlowArrow />
          <FlowBlock accent>AI</FlowBlock>
          <FlowArrow />
          <FlowBlock>{tomorrow.output}</FlowBlock>
        </div>
      </div>
    </div>
  );
}

function FlowBlock({
  children,
  accent = false,
  muted = false,
  compact = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
  muted?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-full rounded-[var(--radius-md)] border px-4 text-center text-sm text-foreground",
        compact ? "py-2 text-xs sm:text-sm" : "py-2.5",
        accent
          ? "border-[#3b5bdb]/25 bg-[#edf2ff] font-medium text-[#364fc7]"
          : muted
            ? "border-[#ea580c]/15 bg-white"
            : "border-[#ea580c]/20 bg-white font-medium",
      )}
    >
      {children}
    </div>
  );
}

function FlowArrow() {
  return (
    <span className="text-muted-foreground/50" aria-hidden>
      ↓
    </span>
  );
}

export function ContentApproachesTable({
  headers,
  rows,
}: {
  headers: readonly [string, string];
  rows: { oneLongPrompt: string; organisedContent: string }[];
}) {
  return (
    <DocTable
      headers={headers}
      rows={rows.map((row) => ({
        col1: row.oneLongPrompt,
        col2: row.organisedContent,
      }))}
    />
  );
}

export function ScalingScopeDiagram({
  today,
  tomorrow,
}: {
  today: { label: string; steps: string[] };
  tomorrow: { label: string; areas: string[] };
}) {
  return (
    <div className="content-systems-shift-grid grid gap-6 md:grid-cols-2">
      <div className="content-systems-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-6">
        <p className="text-sm font-medium text-foreground">{today.label}</p>
        <div className="mt-4 flex flex-col items-center gap-2">
          {today.steps.map((step, index) => (
            <div key={step} className="flex w-full flex-col items-center gap-2">
              <div className="w-full rounded-[var(--radius-md)] border border-[#ea580c]/20 bg-white px-4 py-2.5 text-center text-sm text-foreground">
                {step}
              </div>
              {index < today.steps.length - 1 ? (
                <span className="text-muted-foreground/50" aria-hidden>
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="content-systems-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-6">
        <p className="text-sm font-medium text-foreground">{tomorrow.label}</p>
        <div className="mt-4 flex flex-col gap-2">
          {tomorrow.areas.map((area) => (
            <div
              key={area}
              className="rounded-[var(--radius-md)] border border-[#ea580c]/15 bg-white px-4 py-2.5 text-sm text-foreground"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ScalingArchitectureDiagram({
  today,
  tomorrow,
  shared,
}: {
  today: string[];
  tomorrow: string[];
  shared: string[];
}) {
  return (
    <div className="content-systems-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-5 sm:p-8">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4">
        <div className="w-full">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Today
          </p>
          <div className="flex flex-col items-center gap-2">
            {today.map((item) => (
              <div
                key={item}
                className="w-full rounded-[var(--radius-md)] border border-[#ea580c]/20 bg-white px-4 py-2.5 text-center text-sm text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <span className="text-muted-foreground/50" aria-hidden>
          ↓
        </span>

        <div className="w-full">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Tomorrow
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tomorrow.map((item) => (
              <div
                key={item}
                className="rounded-[var(--radius-md)] border border-[#ea580c]/15 bg-white px-3 py-2 text-center text-xs text-foreground sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <span className="text-muted-foreground/50" aria-hidden>
          ↓
        </span>

        {shared.map((item, index) => (
          <div key={item} className="flex w-full flex-col items-center gap-4">
            <div className="w-full rounded-[var(--radius-md)] border border-[#3b5bdb]/25 bg-[#edf2ff] px-4 py-3 text-center text-sm font-medium text-[#364fc7]">
              {item}
            </div>
            {index < shared.length - 1 ? (
              <span className="text-muted-foreground/50" aria-hidden>
                ↓
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PromptVsContentEngineeringTable({
  rows,
}: {
  rows: { promptEngineering: string; contentEngineering: string }[];
}) {
  return (
    <DocTable
      headers={["One long prompt", "Organised content"]}
      rows={rows.map((row) => ({
        col1: row.promptEngineering,
        col2: row.contentEngineering,
      }))}
    />
  );
}
