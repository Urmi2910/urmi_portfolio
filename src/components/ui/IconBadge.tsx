import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  size?: "sm" | "md";
  tone?: "surface" | "background";
  className?: string;
};

const sizes = {
  sm: { wrap: "h-8 w-8", icon: "h-3.5 w-3.5" },
  md: { wrap: "h-10 w-10", icon: "h-5 w-5" },
};

const tones = {
  surface: "bg-background text-primary ring-outline/15",
  background: "bg-surface text-primary ring-primary/15",
};

export function IconBadge({
  icon: Icon,
  size = "md",
  tone = "background",
  className,
}: IconBadgeProps) {
  const s = sizes[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full ring-1 shadow-sm leading-none",
        s.wrap,
        tones[tone],
        className
      )}
    >
      <Icon className={cn(s.icon, "block shrink-0")} strokeWidth={2} aria-hidden="true" />
    </span>
  );
}
