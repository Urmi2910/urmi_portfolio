"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  ConfirmationDialogMockup,
  isConfirmationDialogMockup,
} from "./ConfirmationDialogMockup";
import { PrerequisitesMockupById } from "./PrerequisitesMockup";
import { isPrerequisitesMockupId } from "./prerequisites-content";
import { UiScreenshotPlaceholder } from "./UiScreenshotPlaceholder";

function ComparisonPanel({
  label,
  heading,
  imageSrc,
  mockup,
  variant,
  stacked,
}: {
  label: string;
  heading: string;
  imageSrc?: string;
  mockup?: string;
  variant: "before" | "after";
  stacked?: boolean;
}) {
  const isPhone = Boolean(imageSrc);
  const isDialog = isConfirmationDialogMockup(mockup);
  const isPrerequisites = isPrerequisitesMockupId(mockup);

  return (
    <figure className={cn(stacked ? "w-full" : "min-w-0")}>
      <figcaption className="mb-2.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {heading}
      </figcaption>
      <div
        className={cn(
          "rounded-[var(--radius-lg)] border border-outline/15",
          isPrerequisites && stacked
            ? "w-full bg-[#faf8f5] p-4 sm:p-6"
            : "overflow-hidden",
          isPhone && "aspect-[9/19] max-h-[640px]",
          !isPrerequisites && !isPhone && (isDialog ? "bg-[#faf8f5] p-5 sm:p-6" : "aspect-[16/10]")
        )}
      >
        {isConfirmationDialogMockup(mockup) ? (
          <ConfirmationDialogMockup variant={mockup} bare />
        ) : isPrerequisites ? (
          <PrerequisitesMockupById
            mockupId={mockup}
            side={variant}
            className="mx-auto w-full max-w-none"
          />
        ) : imageSrc ? (
          <div className="relative h-full w-full bg-background">
            <Image
              src={imageSrc}
              alt={label}
              fill
              className="object-contain object-top"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        ) : (
          <UiScreenshotPlaceholder label={label} variant={variant} className="h-full rounded-none border-0" />
        )}
      </div>
    </figure>
  );
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeImage,
  afterImage,
  beforeMockup,
  afterMockup,
  className,
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeMockup?: string;
  afterMockup?: string;
  className?: string;
}) {
  const isStacked =
    isPrerequisitesMockupId(beforeMockup) || isPrerequisitesMockupId(afterMockup);

  return (
    <div
      className={cn(
        "writing-before-after",
        isStacked && "writing-before-after--stacked",
        isStacked
          ? "flex w-full max-w-none flex-col gap-6 sm:gap-8"
          : "grid gap-5 sm:grid-cols-2 sm:gap-6",
        className
      )}
    >
      <ComparisonPanel
        label={before}
        heading={beforeLabel}
        imageSrc={beforeImage}
        mockup={beforeMockup}
        variant="before"
        stacked={isStacked}
      />
      <ComparisonPanel
        label={after}
        heading={afterLabel}
        imageSrc={afterImage}
        mockup={afterMockup}
        variant="after"
        stacked={isStacked}
      />
    </div>
  );
}
