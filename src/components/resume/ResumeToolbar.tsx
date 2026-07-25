"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

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
        <button
          type="button"
          onClick={() => window.print()}
          className="btn-primary px-4 text-sm"
        >
          <Printer className="h-4 w-4" strokeWidth={2.5} />
          Save as PDF
        </button>
      </div>
    </div>
  );
}
