import { cn } from "@/lib/utils";

export function StoryChapter({
  id,
  title,
  lead,
  children,
  className,
  tone,
  last = false,
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternates the chapter's full-bleed background, matching the homepage's band pattern. */
  tone?: "surface" | "background";
  /** The final chapter fades to a flat color instead of blending into the next band. */
  last?: boolean;
}) {
  const toneClass = tone
    ? last
      ? tone === "surface"
        ? "case-study-band--flat-surface"
        : "case-study-band--flat-background"
      : tone === "surface"
        ? "case-study-band--surface"
        : "case-study-band--background"
    : null;

  return (
    <section
      id={id}
      className={cn("story-chapter scroll-mt-28", tone && "case-study-band", toneClass, className)}
    >
      <div className={tone ? "case-study-band-inner" : undefined}>
        <div className="story-chapter-header max-w-prose">
          <h2 className="case-study-chapter-title">{title}</h2>
          {lead ? <p className="case-study-chapter-lead mt-2">{lead}</p> : null}
        </div>
        <div className="story-chapter-body mt-6 space-y-6 sm:mt-7">{children}</div>
      </div>
    </section>
  );
}

export function StorySection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="story-section">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{label}</h3>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  );
}

export function StoryProse({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("story-prose max-w-prose text-base leading-[1.6] text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function StoryList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("story-list max-w-prose space-y-1.5 border-l-2 border-primary/20 pl-4", className)}>
      {items.map((item) => (
        <li key={item} className="text-base leading-[1.6] text-muted-foreground">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function InsightCallout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="rounded-[var(--radius-lg)] border border-primary/15 bg-surface p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{label}</p>
      <div className="mt-2 text-base leading-relaxed text-foreground/90">{children}</div>
    </aside>
  );
}

export function CollaborationNote({
  partners,
  quote,
}: {
  partners: string;
  quote: string;
}) {
  return (
    <blockquote className="rounded-[var(--radius-lg)] border border-outline/10 bg-surface/50 p-5 sm:p-6">
      <p className="text-base leading-relaxed text-foreground/90">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-3 text-sm text-muted-foreground">{partners}</footer>
    </blockquote>
  );
}

export function DeepDive({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="story-deep-dive group rounded-[var(--radius-lg)] border border-outline/10 bg-background" open={defaultOpen}>
      <summary className="cursor-pointer list-none px-4 py-3.5 sm:px-5 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-3">
          <span className="font-heading text-sm font-semibold text-foreground">{title}</span>
          <span className="text-xs font-medium text-primary group-open:hidden">Expand</span>
          <span className="hidden text-xs font-medium text-primary group-open:inline">Collapse</span>
        </span>
      </summary>
      <div className="border-t border-outline/10 px-4 pb-5 pt-4 sm:px-5">{children}</div>
    </details>
  );
}

export function OutcomeStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-[var(--radius-md)] border border-outline/10 bg-surface/40 p-4">
          <dt className="sr-only">{item.label}</dt>
          <dd className="font-heading text-xl font-bold text-primary">{item.value}</dd>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </dl>
  );
}
