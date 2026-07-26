"use client";

import { useState } from "react";

export function ExpandableBlock({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="ai-expandable rounded-[var(--radius-lg)] border border-outline/15 bg-background">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full min-h-[44px] items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
      >
        <span className="font-heading text-sm font-semibold text-foreground">{title}</span>
        <span className="text-xs font-medium text-primary">{open ? "Hide" : "Show"}</span>
      </button>
      {open ? <div className="border-t border-outline/10 px-4 pb-4 pt-3 sm:px-5">{children}</div> : null}
    </div>
  );
}

export function PromptExample({
  system,
  user,
  assistant,
}: {
  system: string;
  user: string;
  assistant: string;
}) {
  return (
    <ExpandableBlock title="Prompt stack example" defaultOpen>
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        <div className="rounded-[var(--radius-md)] bg-surface/60 p-3">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-primary">System</p>
          <p className="leading-relaxed text-muted-foreground">{system}</p>
        </div>
        <div className="rounded-[var(--radius-md)] bg-primary/5 p-3">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-primary">User</p>
          <p className="leading-relaxed text-foreground">{user}</p>
        </div>
        <div className="rounded-[var(--radius-md)] bg-surface/60 p-3">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-primary">Assistant</p>
          <p className="leading-relaxed text-foreground">{assistant}</p>
        </div>
      </div>
    </ExpandableBlock>
  );
}

export function BeforeAfterPair({
  user,
  before,
  after,
}: {
  user: string;
  before: string;
  after: string;
}) {
  return (
    <div className="ai-before-after grid gap-3 sm:grid-cols-2">
      <div className="rounded-[var(--radius-lg)] border border-outline/10 bg-muted/20 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Before</p>
        <p className="mt-2 text-xs text-muted-foreground">User: {user}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">{before}</p>
      </div>
      <div className="rounded-[var(--radius-lg)] border border-primary/20 bg-primary/5 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">After</p>
        <p className="mt-2 text-xs text-muted-foreground">User: {user}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground">{after}</p>
      </div>
    </div>
  );
}
