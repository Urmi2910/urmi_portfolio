"use client";

import type { contentSystemsCaseStudy } from "@/data/content-systems-case-study";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function DocTable({
  headers,
  rows,
  className,
}: {
  headers: [string, string];
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
