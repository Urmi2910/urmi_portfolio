"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export type FirstRunExperienceVariant = "existing" | "revised" | "final";

const variants: Record<
  FirstRunExperienceVariant,
  {
    label: string;
    heading: string;
    body: string;
    showDropdown: boolean;
  }
> = {
  existing: {
    label: "Existing",
    heading: "Looks like no NPS campaign is created yet",
    body: "Click below to quickly create a NPS campaign using readily available templates in the campaign creater.",
    showDropdown: false,
  },
  revised: {
    label: "Revised",
    heading: "Create your first NPS Campaign",
    body: "NPS Campaigns are easy to create with our ready to use templates under In-app message and Web Pop-up.",
    showDropdown: false,
  },
  final: {
    label: "Final version",
    heading: "Create your first NPS Campaign",
    body: "NPS Campaigns are easy to create with our ready to use templates.",
    showDropdown: true,
  },
};

const iterationOrder: FirstRunExperienceVariant[] = ["existing", "revised", "final"];

function CampaignButton({ showDropdown }: { showDropdown: boolean }) {
  return (
    <div className={cn("relative inline-flex flex-col items-stretch", showDropdown && "pb-1")}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center gap-2 bg-[#336bff] px-5 py-2.5 text-base font-medium text-white shadow-sm transition-colors",
          showDropdown ? "rounded-t-md" : "rounded-md"
        )}
      >
        <Plus className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
        NPS Campaign
      </button>
      {showDropdown ? (
        <div className="overflow-hidden rounded-b-md border border-t-0 border-[#e5e7eb] bg-white shadow-md">
          <div className="px-4 py-2.5 text-sm text-[#64748b]">In-app</div>
          <div className="border-t border-[#e5e7eb] px-4 py-2.5 text-sm text-[#64748b]">Web Pop-up</div>
        </div>
      ) : null}
    </div>
  );
}

function EmptyStateCard({ variant }: { variant: FirstRunExperienceVariant }) {
  const copy = variants[variant];

  return (
    <div
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-8 text-center sm:px-10 sm:py-10"
      role="img"
      aria-label={copy.label}
    >
      <h3 className="max-w-2xl text-xl font-semibold leading-snug text-[#1e293b] sm:text-2xl">{copy.heading}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#94a3b8] sm:text-base">{copy.body}</p>
      <div className="mt-6">
        <CampaignButton showDropdown={copy.showDropdown} />
      </div>
    </div>
  );
}

export function FirstRunExperienceMockup({
  variant,
  className,
}: {
  variant: FirstRunExperienceVariant;
  className?: string;
}) {
  const copy = variants[variant];

  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "flex w-full items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-outline/15 bg-white",
          copy.showDropdown
            ? "min-h-[14rem] py-4 sm:min-h-[15rem]"
            : "aspect-[16/5] min-h-[10.5rem] sm:min-h-[11.5rem]"
        )}
      >
        <EmptyStateCard variant={variant} />
      </div>
      <figcaption className="mt-3 text-center text-base font-medium text-foreground">{copy.label}</figcaption>
    </figure>
  );
}

export function FirstRunExperienceIterations({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6 sm:gap-8", className)}>
      {iterationOrder.map((variant) => (
        <FirstRunExperienceMockup key={variant} variant={variant} />
      ))}
    </div>
  );
}
