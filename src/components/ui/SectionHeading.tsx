import { IconBadge } from "@/components/ui/IconBadge";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  tone?: "surface" | "background";
  sticky?: boolean;
  className?: string;
};

export function SectionHeading({
  icon,
  title,
  description,
  tone = "background",
  sticky = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex gap-3 sm:gap-4",
        sticky && "section-heading-sticky",
        sticky && tone === "surface" && "section-heading-sticky-surface",
        sticky && tone === "background" && "section-heading-sticky-background",
        className
      )}
    >
      <IconBadge icon={icon} tone={tone} className="icon-align-headline shrink-0" />
      <div className="min-w-0 flex-1">
        <h2 className="text-headline font-heading leading-[1.2]">{title}</h2>
        {description && (
          <p className="mt-2 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        <div className="heading-rule mt-3" aria-hidden="true" />
      </div>
    </div>
  );
}
