import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PresentationSlide({
  id,
  children,
  className,
  variant = "presentation",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "presentation" | "preview";
}) {
  const canvas = (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden bg-white [font-family:Inter,ui-sans-serif,system-ui,sans-serif]",
        variant === "presentation" && "shadow-[0_8px_48px_rgba(0,0,0,0.07)] ring-1 ring-[#EAEAEA]",
        className
      )}
    >
      {children}
    </div>
  );

  if (variant === "preview") {
    return canvas;
  }

  return (
    <section id={id} className="scroll-mt-24">
      {canvas}
    </section>
  );
}

export function SlideCanvas({
  children,
  className,
  center = false,
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col p-[6%]",
        center && "items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SlideTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.032em] text-[#0a0a0a]">
      {children}
    </h2>
  );
}

export function SlideSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 max-w-[90%] text-[clamp(1rem,1.5vw,1.25rem)] font-normal leading-[1.45] tracking-[-0.008em] text-[#737373]">
      {children}
    </p>
  );
}

export function SlideBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[clamp(0.9375rem,1.25vw,1.125rem)] font-normal leading-[1.5] tracking-[-0.006em] text-[#404040]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SlideCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-[#EAEAEA] bg-[#FAFAFA]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SlideChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-[#EAEAEA] bg-[#FAFAFA] px-4 py-2.5 text-center text-[clamp(0.8125rem,1.1vw,0.9375rem)] font-medium leading-tight tracking-[-0.01em] text-[#0a0a0a]">
      {children}
    </span>
  );
}
