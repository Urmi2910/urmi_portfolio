"use client";

import { ResumeDownloadLink } from "@/components/ui/ResumeDownloadLink";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ResumeToolbar() {
  return (
    <div className="resume-toolbar sticky top-0 z-50 border-b border-border/30 bg-background/85 backdrop-blur-lg safe-top">
      <div className="container-page flex h-14 items-center justify-between gap-3 sm:h-16">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-sm font-medium text-muted-foreground transition-md hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          Back to site
        </Link>
        <ResumeDownloadLink showIcon className="btn-primary gap-1.5 px-4 text-sm">
          Download resume
        </ResumeDownloadLink>
      </div>
    </div>
  );
}
