import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  featured?: boolean;
}

export function Card({ children, className, hover = false, featured = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] bg-surface p-5 shadow-sm sm:p-6 md:p-8",
        hover &&
          "transition-md cursor-pointer group hover-card",
        featured && "ring-2 ring-primary/20 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
