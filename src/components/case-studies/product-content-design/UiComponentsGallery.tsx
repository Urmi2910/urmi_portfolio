"use client";

import type { UiComponentExample } from "@/data/ui-components";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { UiComponentBeforeAfter } from "./UiComponentBeforeAfter";

function ItemToggle({
  title,
  description,
  open,
  onToggle,
  compact,
}: {
  title: string;
  description: string;
  open: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={cn(
        "group flex w-full items-start justify-between gap-4 text-left transition-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        compact ? "py-3.5" : "py-4",
      )}
    >
      <div className="min-w-0">
        <span className="font-heading text-base font-medium text-foreground transition-colors group-hover:text-primary">
          {title}
        </span>
        {!open ? (
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <ChevronDown
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50 transition-md group-hover:text-primary",
          open && "rotate-180 text-primary",
        )}
        strokeWidth={2.5}
        aria-hidden
      />
    </button>
  );
}

function UiComponentPanel({
  item,
  embedded = false,
  open,
  onToggle,
}: {
  item: UiComponentExample;
  embedded?: boolean;
  open?: boolean;
  onToggle?: () => void;
}) {
  if (embedded) {
    return (
      <article id={item.id} className="ui-component-panel scroll-mt-28 border-t border-outline/10 first:border-t-0">
        <ItemToggle
          title={item.title}
          description={item.description}
          open={Boolean(open)}
          onToggle={onToggle ?? (() => {})}
          compact
        />
        {open ? (
          <div className="pb-5 pt-1">
            <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] mt-4 w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)]">
              <UiComponentBeforeAfter mockup={item.id} />
            </div>
          </div>
        ) : null}
      </article>
    );
  }

  return (
    <article id={item.id} className="ui-component-panel scroll-mt-28 pb-2">
      <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{item.title}</h2>
      <p className="mt-2 max-w-prose text-base leading-[1.65] text-muted-foreground">{item.description}</p>
      <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] mt-5 w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)] sm:mt-6">
        <UiComponentBeforeAfter mockup={item.id} />
      </div>
    </article>
  );
}

export function UiComponentsGallery({
  items,
  embedded = false,
  openItemId = null,
  onToggleItem,
}: {
  items: UiComponentExample[];
  embedded?: boolean;
  openItemId?: string | null;
  onToggleItem?: (id: string) => void;
}) {
  if (embedded) {
    return (
      <div className="ui-components-gallery ui-components-gallery--embedded">
        {items.map((item) => (
          <UiComponentPanel
            key={item.id}
            item={item}
            embedded
            open={openItemId === item.id}
            onToggle={() => onToggleItem?.(item.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="ui-components-gallery space-y-10 sm:space-y-12">
      {items.map((item) => (
        <UiComponentPanel key={item.id} item={item} />
      ))}
    </div>
  );
}
