import { IconBadge } from "@/components/ui/IconBadge";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  tone?: "surface" | "background";
  sticky?: boolean;
  /** When "title", only the icon + headline stick on mobile — not the description. */
  stickyScope?: "all" | "title";
  className?: string;
};

export function SectionHeading({
  icon,
  title,
  description,
  tone = "background",
  sticky = true,
  stickyScope = "all",
  className,
}: SectionHeadingProps) {
  const stickyClasses = cn(
    sticky && "section-heading-sticky",
    sticky && tone === "surface" && "section-heading-sticky-surface",
    sticky && tone === "background" && "section-heading-sticky-background"
  );

  const descriptionClass =
    "max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg";

  if (stickyScope === "title" && description) {
    return (
      <>
        <div className={cn("flex gap-3 sm:gap-4", stickyClasses, className)}>
          <IconBadge icon={icon} tone={tone} className="icon-align-headline shrink-0" />
          <div className="min-w-0 flex-1">
            <h2 className="text-headline font-heading leading-[1.2]">{title}</h2>
            <div className="heading-rule mt-3" aria-hidden="true" />
          </div>
        </div>
        <p className={cn("mt-2", descriptionClass)}>{description}</p>
      </>
    );
  }

  return (
    <div className={cn("flex gap-3 sm:gap-4", stickyClasses, className)}>
      <IconBadge icon={icon} tone={tone} className="icon-align-headline shrink-0" />
      <div className="min-w-0 flex-1">
        <h2 className="text-headline font-heading leading-[1.2]">{title}</h2>
        {description && <p className={cn("mt-2", descriptionClass)}>{description}</p>}
        <div className="heading-rule mt-3" aria-hidden="true" />
      </div>
    </div>
  );
}
