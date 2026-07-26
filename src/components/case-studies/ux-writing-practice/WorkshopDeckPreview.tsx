"use client";

import { cn } from "@/lib/utils";
import type { WorkshopDeckVariant } from "@/data/ux-writing-practice";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Layers,
  MessageSquare,
  Sparkles,
} from "lucide-react";

function SlideFrame({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[18px] border border-[#e8e8e8] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="flex items-center gap-1.5 border-b border-[#efefef] bg-[#fafafa] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 text-[10px] font-medium text-[#94a3b8]">Workshop deck</span>
      </div>
      {children}
    </div>
  );
}

function IntroDeck() {
  const principles = ["Clarity", "Usefulness", "Consistency", "Accessibility", "Plain language"];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <SlideFrame label="Introduction to UX Writing cover slide">
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] px-6 py-10 sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">CleverTap · Onboarding</p>
          <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
            Introduction to UX Writing
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Principles, patterns, and how content design supports usability and trust.
          </p>
        </div>
      </SlideFrame>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <SlideFrame label="UX writing principles slide" className="h-full">
          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">Core principles</p>
            <ul className="mt-3 space-y-2">
              {principles.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#334155]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2563eb]" strokeWidth={2.25} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </SlideFrame>

        <SlideFrame label="Design system connection slide" className="h-full">
          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">In the system</p>
            <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
              How UX writing connects to components, voice, terminology, and review workflows.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Voice & tone", "Patterns", "Governance"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-medium text-[#1d4ed8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </SlideFrame>
      </div>
    </div>
  );
}

function UiComponentsDeck() {
  const components = [
    "Labels & placeholders",
    "Snackbars",
    "Confirmation dialogs",
    "Empty states",
    "Tooltips",
    "Buttons & CTAs",
    "Selection controls",
    "System emails",
  ];

  return (
    <SlideFrame label="UI Components and microcopy deck">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-[#efefef] px-6 py-8 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">UI Components</p>
          <h3 className="mt-2 font-heading text-xl font-bold text-[#0f172a] sm:text-2xl">Writing for microcopy</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
            When to use each component, common mistakes, and principles behind effective interface copy.
          </p>
        </div>
        <div className="grid gap-2 p-5 sm:grid-cols-2 sm:p-6">
          {components.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 rounded-xl border border-[#eef2f7] bg-[#fafafa] px-3 py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#2563eb] shadow-sm">
                <Layers className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <span className="text-sm font-medium text-[#334155]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

function CollaborationDeck() {
  const steps = [
    { label: "Understand PRD", detail: "Goals, constraints, user intent" },
    { label: "Review Figma", detail: "Flows, states, edge cases" },
    { label: "Write copydoc", detail: "Drafts, rationale, variants" },
    { label: "Collaborate", detail: "PM, design, engineering" },
    { label: "Validate & ship", detail: "Review, test, release" },
  ];

  return (
    <SlideFrame label="Collaboration process deck">
      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">Collaboration Process</p>
        <h3 className="mt-2 font-heading text-xl font-bold text-[#0f172a] sm:text-2xl">
          End-to-end content design workflow
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.label} className="relative rounded-xl border border-[#eef2f7] bg-[#fafafa] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
                Step {index + 1}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#0f172a]">{step.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#64748b]">{step.detail}</p>
              {index < steps.length - 1 ? (
                <ArrowRight
                  className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[#cbd5e1] lg:block"
                  aria-hidden
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#dbeafe] bg-[#eff6ff] px-4 py-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" strokeWidth={2.25} />
          <p className="text-sm leading-relaxed text-[#334155]">
            Includes guidance on using AI responsibly during drafting and review.
          </p>
        </div>
      </div>
    </SlideFrame>
  );
}

function ResourcesDeck() {
  const resources = [
    { title: "UX Writing articles", type: "Articles", icon: FileText },
    { title: "Design system references", type: "Systems", icon: Layers },
    { title: "Style guides & terminology", type: "Guides", icon: BookOpen },
    { title: "Workshop follow-ups", type: "Internal", icon: MessageSquare },
  ];

  return (
    <SlideFrame label="Learning resources document">
      <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
        <div className="border-b border-[#efefef] px-6 py-8 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">Resource library</p>
          <h3 className="mt-2 font-heading text-xl font-bold text-[#0f172a] sm:text-2xl">Keep learning beyond the workshop</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
            Curated references for new writers, designers, and PMs to continue building content design fluency.
          </p>
        </div>
        <div className="space-y-2 p-5 sm:p-6">
          {resources.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center justify-between gap-3 rounded-xl border border-[#eef2f7] bg-[#fafafa] px-4 py-3"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#2563eb] shadow-sm">
                    <Icon className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[#334155]">{item.title}</p>
                    <p className="text-xs text-[#94a3b8]">{item.type}</p>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-medium text-[#2563eb]">Open</span>
              </div>
            );
          })}
        </div>
      </div>
    </SlideFrame>
  );
}

export function WorkshopDeckPreview({
  variant,
  className,
}: {
  variant: WorkshopDeckVariant;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {variant === "intro" ? <IntroDeck /> : null}
      {variant === "ui-components" ? <UiComponentsDeck /> : null}
      {variant === "collaboration" ? <CollaborationDeck /> : null}
      {variant === "resources" ? <ResourcesDeck /> : null}
    </div>
  );
}
