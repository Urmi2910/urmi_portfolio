import { cn } from "@/lib/utils";

interface GeometricDecorProps {
  className?: string;
  variant?: "hero" | "section";
}

/** Soft atmospheric shapes only — no sharp triangles or squiggles */
export function GeometricDecor({ className, variant = "section" }: GeometricDecorProps) {
  if (variant === "hero") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.04] blur-[80px] sm:-left-32 sm:-top-32 sm:h-96 sm:w-96" />
        <div className="absolute -right-20 top-1/3 h-56 w-56 rounded-full bg-secondary/12 blur-[72px] sm:h-72 sm:w-72" />
        <div className="absolute left-1/2 top-[58%] h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/8 blur-[88px] sm:h-80 sm:w-80" />
        <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-primary/[0.03] blur-[64px]" />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-primary/[0.05] blur-[64px] sm:h-48 sm:w-48" />
      <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-secondary/15 blur-[56px]" />
    </div>
  );
}

export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 opacity-[0.18]", className)}
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(circle, var(--color-outline) 0.75px, transparent 0.75px)`,
        backgroundSize: "28px 28px",
      }}
    />
  );
}
