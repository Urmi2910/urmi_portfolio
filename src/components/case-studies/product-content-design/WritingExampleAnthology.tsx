"use client";

import { UiComponentsGallery } from "@/components/case-studies/product-content-design/UiComponentsGallery";
import { WritingExampleDetail } from "@/components/case-studies/product-content-design/WritingExampleDetail";
import { PortfolioCaseStudyNav } from "@/components/case-studies/shared/PortfolioCaseStudyNav";
import { productContentExampleNav } from "@/data/product-content-design-nav";
import { getWritingExample, getWritingExampleIntro } from "@/data/product-content-design";
import { uiComponentsGallery } from "@/data/ui-components";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

function scrollToAnthologyEntry(slug: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(slug);
  if (!target) return;

  target.scrollIntoView({ behavior, block: "start" });
  window.history.replaceState(null, "", `#${slug}`);
}

function writingHubBandTone(bandIndex: number) {
  return bandIndex % 2 === 1 ? "writing-hub-band--alt" : "writing-hub-band--base";
}

function AnthologyTagList({
  items,
  activeSlug,
  onSelect,
}: {
  items: readonly { slug: string; title: string }[];
  activeSlug?: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="writing-anthology-tags flex flex-wrap gap-2" aria-label="Samples in this collection">
      {items.map((item) => {
        const isActive = item.slug === activeSlug;
        return (
          <button
            key={item.slug}
            type="button"
            aria-current={isActive || undefined}
            onClick={() => onSelect(item.slug)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-md active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-primary/5 text-primary hover:bg-primary/10 hover:shadow-sm",
            )}
          >
            {item.title}
          </button>
        );
      })}
    </div>
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

  return (
    <>
      <div className="writing-hub-band writing-hub-band--hero">
        <div className="writing-hub-inner pb-3 pt-1 sm:pb-4">
          <AnthologyTagList
            items={entries}
            activeSlug={entries[activeIndex]?.slug}
            onSelect={(slug) => scrollToEntry(slug)}
          />
        </div>
      </div>

      {entries.map((entry, index) => {
        const example = entry.slug === uiComponentsGallery.slug ? null : getWritingExample(entry.slug);
        const bandIndex = index + 1;

        return (
          <section
            key={entry.slug}
            id={entry.slug}
            ref={(node) => {
              entryRefs.current[index] = node;
            }}
            className={cn(
              "writing-hub-band writing-anthology-entry story-chapter scroll-mt-[calc(var(--site-header-height)+4.25rem)]",
              writingHubBandTone(bandIndex),
              index === activeIndex && "writing-anthology-entry--active",
            )}
            aria-label={entry.title}
          >
            <div
              className={cn(
                "writing-hub-inner pb-12 sm:pb-16 md:pb-20",
                index === 0 ? "pt-4 sm:pt-6" : "pt-12 sm:pt-16 md:pt-20",
              )}
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
            </div>
          </section>
        );
      })}

      <PortfolioCaseStudyNav slug="product-content-design" />
    </>
  );
}
