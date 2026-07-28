"use client";

import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import {
  prerequisitesVariants,
  type PrerequisitesCopy,
  type PrerequisitesVariant,
} from "./prerequisites-content";

function PrerequisitesPanel({ copy }: { copy: PrerequisitesCopy }) {
  return (
    <div
      className="rounded-md border border-[#c7d2fe] bg-[#eef2ff] px-5 py-4 sm:px-8 sm:py-6"
      role="img"
      aria-label={copy.title}
    >
      <div className="flex items-center gap-2.5 border-b border-[#c7d2fe]/70 pb-3">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563eb] sm:h-6 sm:w-6">
          <Info className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" strokeWidth={2.75} aria-hidden />
        </span>
        <h4 className="text-base font-semibold text-[#1e3a8a] sm:text-lg md:text-xl">{copy.title}</h4>
      </div>

      <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[#374151] sm:mt-4 sm:space-y-3.5 sm:text-base md:text-[1.0625rem] md:leading-[1.65]">
        {copy.items.map((item) => (
          <li key={item.text.slice(0, 40)}>
            {item.text}
            {item.link ? (
              <>
                {" "}
                <span className="font-medium text-[#2563eb]">{item.link}</span>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PrerequisitesMockup({
  variant,
  className,
}: {
  variant: PrerequisitesVariant;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <PrerequisitesPanel copy={prerequisitesVariants[variant]} />
    </div>
  );
}

export function PrerequisitesMockupById({
  mockupId,
  side,
  className,
}: {
  mockupId?: string;
  side: "before" | "after";
  className?: string;
}) {
  const variant: PrerequisitesVariant =
    mockupId === "prerequisites-before" || mockupId === "existing"
      ? "existing"
      : mockupId === "prerequisites-after" || mockupId === "revised"
        ? "revised"
        : side === "before"
          ? "existing"
          : "revised";

  return <PrerequisitesMockup variant={variant} className={className} />;
}
