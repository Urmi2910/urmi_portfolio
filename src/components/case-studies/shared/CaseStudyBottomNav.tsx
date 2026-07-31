"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, type ReactNode } from "react";

export function CaseStudyBottomNav({
  children,
  className,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  "aria-label": string;
}) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = document.getElementById("contact");
    const nav = navRef.current;
    if (!footer || !nav) return;

    let frame = 0;

    const updatePosition = () => {
      frame = 0;
      const footerTop = footer.getBoundingClientRect().top;
      const offset = Math.max(0, window.innerHeight - footerTop);

      nav.style.transform = offset > 0 ? `translate3d(0, -${offset}px, 0)` : "";
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      nav.style.transform = "";
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label={ariaLabel}
      className={cn(
        "case-study-bottom-nav fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md",
        className
      )}
    >
      {children}
    </nav>
  );
}
