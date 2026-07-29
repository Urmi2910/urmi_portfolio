"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const MIN_HEIGHT = 200;
const MAX_HEIGHT_RATIO = 0.72;

export function LiveDemoEmbed() {
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) {
        return;
      }

      const data = event.data as { type?: string; height?: number };

      if (data?.type !== "playground-resize" || typeof data.height !== "number") {
        return;
      }

      const maxHeight = Math.floor(window.innerHeight * MAX_HEIGHT_RATIO);
      setHeight(Math.min(Math.max(data.height, MIN_HEIGHT), maxHeight));
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

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
          title="Content Modeling for AI demo"
          className="content-systems-live-demo__iframe block w-full bg-white"
          style={{ height: `${height}px` }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
