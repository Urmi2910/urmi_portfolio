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
}: {
  label: string;
  heading: string;
  imageSrc?: string;
  mockup?: string;
  variant: "before" | "after";
}) {
  const isPhone = Boolean(imageSrc);

  return (
    <figure className="min-w-0">
      <figcaption className="mb-1.5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {heading}
      </figcaption>
      {isConfirmationDialogMockup(mockup) ? (
        <ConfirmationDialogMockup variant={mockup} bare />
      ) : isPrerequisitesMockupId(mockup) ? (
        <PrerequisitesMockupById
          mockupId={mockup}
          side={variant}
          className="mx-auto w-full max-w-none"
        />
      ) : imageSrc ? (
        <div className={cn("relative w-full", isPhone && "aspect-[9/19] max-h-[640px]")}>
          <Image
            src={imageSrc}
            alt={label}
            fill
            className="object-contain object-top"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      ) : (
        <UiScreenshotPlaceholder label={label} variant={variant} />
      )}
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
  return (
    <div
      className={cn(
        "writing-before-after grid gap-5 sm:grid-cols-2 sm:gap-8",
        className,
      )}
    >
      <ComparisonPanel
        label={before}
        heading={beforeLabel}
        imageSrc={beforeImage}
        mockup={beforeMockup}
        variant="before"
      />
      <ComparisonPanel
        label={after}
        heading={afterLabel}
        imageSrc={afterImage}
        mockup={afterMockup}
        variant="after"
      />
    </div>
  );
}
