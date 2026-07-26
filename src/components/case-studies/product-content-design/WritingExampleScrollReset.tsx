"use client";

import { useEffect } from "react";

export function WritingExampleScrollReset({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return <div key={slug}>{children}</div>;
}
