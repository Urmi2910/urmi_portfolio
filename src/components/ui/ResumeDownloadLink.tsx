"use client";

import { profile } from "@/data/portfolio";
import { downloadResume } from "@/lib/download-resume";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ResumeDownloadLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "download"> & {
  showIcon?: boolean;
  children: ReactNode;
};

export function ResumeDownloadLink({
  className,
  showIcon = false,
  children,
  onClick,
  ...props
}: ResumeDownloadLinkProps) {
  return (
    <a
      href={profile.resumeDownloadUrl}
      download={profile.resumeFilename}
      className={cn(className)}
      onClick={async (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        event.preventDefault();

        try {
          await downloadResume();
        } catch {
          window.location.assign(profile.resumeDownloadUrl);
        }
      }}
      {...props}
    >
      {showIcon ? <Download className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" /> : null}
      {children}
    </a>
  );
}
