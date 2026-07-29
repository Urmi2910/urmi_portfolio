import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function LiveDemoEmbed() {
  return (
    <div className="content-systems-live-demo">
      <div className="flex justify-end">
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

      <div className="content-systems-live-demo__frame mt-3 overflow-hidden rounded-[var(--radius-lg)] border border-[#dfe3e8] bg-[#f4f5f7] shadow-sm">
        <iframe
          src="/playground/?embed=1"
          title="AI Content Context Engine demo"
          className="content-systems-live-demo__iframe block w-full bg-white"
          loading="lazy"
        />
      </div>
    </div>
  );
}
