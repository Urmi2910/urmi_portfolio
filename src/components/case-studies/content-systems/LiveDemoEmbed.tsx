import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function LiveDemoEmbed() {
  return (
    <div className="content-systems-live-demo">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Try the full walkthrough below. Work through steps 1 to 3 to see what happens behind
          the scenes. Your finished message appears at the bottom in step 4.
        </p>
        <Link
          href="/playground/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#3b5bdb] transition-md hover:text-[#364fc7]"
        >
          Open in new tab
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-5 overflow-hidden rounded-[var(--radius-lg)] border border-[#dfe3e8] bg-[#f4f5f7] shadow-sm">
        <iframe
          src="/playground/"
          title="AI Content Context Engine live demo"
          className="block w-full bg-white"
          style={{ minHeight: "920px" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
