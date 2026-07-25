"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type CompanyLogoProps = {
  company: string;
  logoSrc: string;
  logoSrcSet?: string;
  logoFit?: "contain" | "cover";
  size?: "sm" | "md";
  className?: string;
};

const LOGO_PX = 48;

const sizeStyles = {
  sm: {
    box: "h-6 w-6 rounded",
    image: "object-contain p-0.5",
    fallback: "text-[10px]",
    px: 24,
  },
  md: {
    box: "h-12 w-12 shrink-0 rounded-lg",
    image: "object-contain",
    fallback: "text-sm",
    px: LOGO_PX,
  },
} as const;

export function CompanyLogo({
  company,
  logoSrc,
  logoSrcSet,
  logoFit = "contain",
  size = "md",
  className,
}: CompanyLogoProps) {
  const [error, setError] = useState(false);
  const styles = sizeStyles[size];

  if (error) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center bg-background font-bold uppercase text-primary ring-1 ring-border/30",
          styles.box,
          styles.fallback,
          className
        )}
        aria-hidden="true"
      >
        {company.charAt(0)}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center overflow-hidden bg-background ring-1 ring-border/25",
        styles.box,
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        srcSet={logoSrcSet}
        alt=""
        width={styles.px}
        height={styles.px}
        className={cn(
          "size-full",
          logoFit === "cover" ? "object-cover" : styles.image
        )}
        loading="lazy"
        decoding="async"
        onError={() => setError(true)}
      />
    </span>
  );
}
