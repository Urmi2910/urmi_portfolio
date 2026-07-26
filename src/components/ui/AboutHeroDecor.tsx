import { cn } from "@/lib/utils";

export function AboutHeroDecor({ className }: { className?: string }) {
  return (
    <div className={cn("about-hero-decor", className)} aria-hidden="true">
      <div className="about-hero-glow" />
    </div>
  );
}
