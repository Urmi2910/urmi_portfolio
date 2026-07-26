import { cn } from "@/lib/utils";

export function UiScreenshotPlaceholder({
  label,
  variant = "default",
  className,
}: {
  label: string;
  variant?: "default" | "before" | "after";
  className?: string;
}) {
  const variantStyles = {
    default: "from-surface to-surface-low",
    before: "from-muted/40 to-muted/20",
    after: "from-primary/8 to-secondary/40",
  };

  return (
    <div
      className={cn(
        "writing-screenshot relative overflow-hidden rounded-[var(--radius-lg)] border border-outline/15 bg-gradient-to-br shadow-sm",
        variantStyles[variant],
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="flex items-center gap-2 border-b border-outline/10 bg-background/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-accent-warm/70" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-pop-yellow/70" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-pop-mint/70" aria-hidden />
        <span className="ml-2 truncate text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {variant === "before" ? "Before" : variant === "after" ? "After" : "Preview"}
        </span>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <div className="h-2.5 w-2/5 rounded-full bg-foreground/10" />
        <div className="h-2 w-full rounded-full bg-foreground/6" />
        <div className="h-2 w-11/12 rounded-full bg-foreground/6" />
        <div
          className={cn(
            "mt-4 rounded-[var(--radius-md)] border border-outline/10 p-3",
            variant === "after" ? "bg-primary/5" : "bg-background/70"
          )}
        >
          <p className="text-sm font-medium leading-snug text-foreground/85 sm:text-base">{label}</p>
        </div>
      </div>
    </div>
  );
}
