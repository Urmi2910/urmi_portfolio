"use client";

import { UiComponentsGallery } from "@/components/case-studies/product-content-design/UiComponentsGallery";
import { WritingExampleDetail } from "@/components/case-studies/product-content-design/WritingExampleDetail";
import { CaseStudyBottomNav } from "@/components/case-studies/shared/CaseStudyBottomNav";
import {
  productContentExampleNav,
  type ProductContentExampleNavItem,
} from "@/data/product-content-design-nav";
import { getWritingExample, getWritingExampleIntro } from "@/data/product-content-design";
import { uiComponentsGallery } from "@/data/ui-components";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

function scrollToAnthologyEntry(slug: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(slug);
  if (!target) return;

  target.scrollIntoView({ behavior, block: "start" });
  window.history.replaceState(null, "", `#${slug}`);
}

function AnthologyProgressNav({
  items,
  activeIndex,
  onSelect,
}: {
  items: readonly ProductContentExampleNavItem[];
  activeIndex: number;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="writing-anthology-nav sticky top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-30 -mx-[clamp(1rem,4vw,1.5rem)] border-b border-outline/15 bg-background/95 px-[clamp(1rem,4vw,1.5rem)] py-3 backdrop-blur-md sm:py-4">
      <p className="mb-3 text-sm font-medium text-foreground">
        Sample {activeIndex + 1} of {items.length}
      </p>
      <div
        className="writing-anthology-nav__pills flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Writing samples in this collection"
      >
        {items.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => onSelect(item.slug)}
            className={cn(
              "writing-anthology-nav__pill shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-md",
              "min-h-[44px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "active:scale-[0.98]",
              index === activeIndex
                ? "border-primary bg-primary text-primary-foreground shadow-md"
                : "border-outline/20 bg-white text-foreground hover:border-primary/35 hover:bg-primary/5 hover:shadow-md",
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function AnthologySampleNav({
  current,
  prev,
  next,
  index,
  total,
  onNavigate,
}: {
  current: ProductContentExampleNavItem;
  prev?: ProductContentExampleNavItem;
  next?: ProductContentExampleNavItem;
  index: number;
  total: number;
  onNavigate: (slug: string) => void;
}) {
  return (
    <CaseStudyBottomNav aria-label="Sample navigation" className="writing-sample-nav">
      <div className="mx-auto flex max-w-5xl items-stretch gap-2 px-[clamp(1rem,4vw,1.5rem)] py-3">
        {prev ? (
          <button
            type="button"
            onClick={() => onNavigate(prev.slug)}
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-3 py-2 text-left",
              "text-sm text-muted-foreground transition-md hover:bg-surface hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="min-w-0 truncate font-medium">{prev.title}</span>
          </button>
        ) : (
          <Link
            href="/#case-studies"
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-3 py-2",
              "text-sm text-muted-foreground transition-md hover:bg-surface hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="min-w-0 truncate font-medium">Back to portfolio</span>
          </Link>
        )}

        <p className="hidden shrink-0 items-center px-1 text-xs tabular-nums text-muted-foreground sm:flex">
          {index + 1}/{total}
        </p>

        {next ? (
          <button
            type="button"
            onClick={() => onNavigate(next.slug)}
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center justify-end gap-2 rounded-[var(--radius-md)] px-3 py-2 text-right",
              "bg-primary/10 text-sm font-medium text-primary transition-md hover:bg-primary/15",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
          >
            <span className="min-w-0 truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </button>
        ) : (
          <Link
            href="#writing"
            className={cn(
              "flex min-h-[44px] min-w-0 flex-1 items-center justify-end gap-2 rounded-[var(--radius-md)] px-3 py-2",
              "bg-primary/10 text-sm font-medium text-primary transition-md hover:bg-primary/15",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
          >
            <span className="min-w-0 truncate">Published writing</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        )}
      </div>
      <p className="sr-only">Currently reading: {current.title}</p>
    </CaseStudyBottomNav>
  );
}

export function WritingExampleAnthology() {
  const entries = productContentExampleNav;
  const entryRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToEntry = useCallback((slug: string, behavior: ScrollBehavior = "smooth") => {
    scrollToAnthologyEntry(slug, behavior);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      requestAnimationFrame(() => scrollToEntry(hash, "auto"));
    }
  }, [scrollToEntry]);

  useEffect(() => {
    const sections = entryRefs.current.filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((record) => record.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const slug = visible[0].target.id;
        const index = entries.findIndex((entry) => entry.slug === slug);
        if (index >= 0) {
          setActiveIndex(index);
          window.history.replaceState(null, "", `#${slug}`);
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [entries]);

  const current = entries[activeIndex];
  const prev = activeIndex > 0 ? entries[activeIndex - 1] : undefined;
  const next = activeIndex < entries.length - 1 ? entries[activeIndex + 1] : undefined;

  return (
    <>
      <AnthologyProgressNav
        items={entries}
        activeIndex={activeIndex}
        onSelect={(slug) => scrollToEntry(slug)}
      />

      <div className="writing-anthology case-study-sections mt-8 sm:mt-10">
        {entries.map((entry, index) => {
          const example = entry.slug === uiComponentsGallery.slug ? null : getWritingExample(entry.slug);

          return (
            <section
              key={entry.slug}
              id={entry.slug}
              ref={(node) => {
                entryRefs.current[index] = node;
              }}
              className={cn(
                "writing-anthology-entry story-chapter scroll-mt-[calc(8.5rem+env(safe-area-inset-top,0px))]",
                index === activeIndex && "writing-anthology-entry--active",
              )}
              aria-label={entry.title}
            >
              <header className="writing-anthology-entry__header story-chapter-header">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  Sample {index + 1} of {entries.length}
                </p>
                <h2 className="writing-anthology-entry__title case-study-chapter-title mt-3">{entry.title}</h2>
                <div className="case-study-chapter-lead mt-3 space-y-3">
                  {example ? (
                    getWritingExampleIntro(example).map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  ) : (
                    <p>{entry.description}</p>
                  )}
                </div>
              </header>

              <div className="writing-anthology-entry__body mt-8 sm:mt-9">
                {entry.slug === uiComponentsGallery.slug ? (
                  <UiComponentsGallery items={uiComponentsGallery.items} />
                ) : example ? (
                  <WritingExampleDetail example={example} embedded idPrefix={example.slug} />
                ) : null}
              </div>
            </section>
          );
        })}
      </div>

      {current ? (
        <AnthologySampleNav
          current={current}
          prev={prev}
          next={next}
          index={activeIndex}
          total={entries.length}
          onNavigate={(slug) => scrollToEntry(slug)}
        />
      ) : null}
    </>
  );
}
