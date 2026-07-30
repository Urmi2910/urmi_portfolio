"use client";

import { WritingExampleDetail } from "@/components/case-studies/product-content-design/WritingExampleDetail";
import { UiComponentBeforeAfter } from "@/components/case-studies/product-content-design/UiComponentBeforeAfter";
import { uiComponentsGallery } from "@/data/ui-components";
import { writingExamples } from "@/data/product-content-design";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DEFAULT_OPEN_SLUG = uiComponentsGallery.items[0]?.id ?? null;

function isMicrocopyItemId(value: string): value is (typeof uiComponentsGallery.items)[number]["id"] {
  return uiComponentsGallery.items.some((item) => item.id === value);
}

function ExampleToggle({
  title,
  teaser,
  open,
  onToggle,
}: {
  title: string;
  teaser: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={cn(
        "group flex w-full items-start justify-between gap-4 py-4 text-left transition-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        open && "pb-3",
      )}
    >
      <div className="min-w-0">
        <span className="font-heading text-base font-medium text-foreground transition-colors group-hover:text-primary sm:text-lg">
          {title}
        </span>
        {!open ? (
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{teaser}</p>
        ) : null}
      </div>
      <ChevronDown
        className={cn(
          "mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-md group-hover:text-primary",
          open && "rotate-180 text-primary",
        )}
        strokeWidth={2.5}
        aria-hidden
      />
    </button>
  );
}

function updateUrl(slug: string | null) {
  if (slug) {
    window.history.replaceState(null, "", `#${slug}`);
    return;
  }
  window.history.replaceState(null, "", window.location.pathname);
}

export function WritingExampleIndex() {
  const [openSlug, setOpenSlug] = useState<string | null>(DEFAULT_OPEN_SLUG);
  const openPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const openParam = params.get("open");
    const itemParam = params.get("item");
    const hash = window.location.hash.replace(/^#/, "");

    if (itemParam && isMicrocopyItemId(itemParam)) {
      setOpenSlug(itemParam);
      return;
    }

    if (openParam === uiComponentsGallery.slug) {
      setOpenSlug(itemParam && isMicrocopyItemId(itemParam) ? itemParam : DEFAULT_OPEN_SLUG);
      return;
    }

    if (isMicrocopyItemId(hash)) {
      setOpenSlug(hash);
      return;
    }

    if (writingExamples.some((example) => example.slug === hash)) {
      setOpenSlug(hash);
      return;
    }

    if (!hash && !openParam) {
      setOpenSlug(DEFAULT_OPEN_SLUG);
    }
  }, []);

  useEffect(() => {
    if (!openSlug || !openPanelRef.current) return;
    openPanelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openSlug]);

  const toggleExample = (slug: string) => {
    setOpenSlug((current) => {
      const next = current === slug ? null : slug;
      updateUrl(next);
      return next;
    });
  };

  return (
    <div className="writing-example-index">
      <h2 className="font-heading text-lg font-semibold text-foreground sm:text-xl">Examples</h2>
      <ul className="mt-3 divide-y divide-outline/10 sm:mt-4">
        <li className="px-0 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            {uiComponentsGallery.title}
          </p>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {uiComponentsGallery.description}
          </p>
        </li>

        {uiComponentsGallery.items.map((item) => {
          const open = openSlug === item.id;

          return (
            <li key={item.id} id={item.id} className="scroll-mt-28">
              <ExampleToggle
                title={item.title}
                teaser={item.description}
                open={open}
                onToggle={() => toggleExample(item.id)}
              />
              {open ? (
                <div
                  ref={openPanelRef}
                  className="border-t border-outline/10 pb-6 pt-1 sm:pb-8"
                >
                  <p className="mb-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)]">
                    <UiComponentBeforeAfter mockup={item.id} />
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}

        {writingExamples.map((example) => {
          const open = openSlug === example.slug;

          return (
            <li key={example.slug} id={example.slug} className="scroll-mt-28">
              <ExampleToggle
                title={example.title}
                teaser={example.teaser}
                open={open}
                onToggle={() => toggleExample(example.slug)}
              />
              {open ? (
                <div
                  ref={openSlug === example.slug ? openPanelRef : undefined}
                  className="border-t border-outline/10 pb-6 pt-1 sm:pb-8"
                >
                  <WritingExampleDetail example={example} embedded />
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
