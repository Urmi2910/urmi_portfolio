import { cn } from "@/lib/utils";

export function AboutHeroDecor({ className }: { className?: string }) {
  return (
    <div className={cn("about-hero-decor", className)} aria-hidden="true">
      <div
        className="about-hero-dot-grid"
        style={{
          backgroundImage: `radial-gradient(circle, color-mix(in srgb, var(--color-primary) 22%, transparent) 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
      />

      <svg className="about-hero-lines" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMaxYMid slice">
        <circle cx="280" cy="220" r="120" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path d="M40 180 H360" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <path d="M220 40 V360" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path
          d="M320 80 C360 140, 360 220, 300 300"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>

      <div className="about-hero-glow" />
    </div>
  );
}
