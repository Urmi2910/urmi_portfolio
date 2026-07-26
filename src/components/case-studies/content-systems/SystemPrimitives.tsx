import { cn } from "@/lib/utils";

export function SystemSection({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("system-section", className)}>
      <h2 className="system-section-label">{label}</h2>
      <div className="system-section-body mt-4">{children}</div>
    </section>
  );
}

export function SystemProse({ children }: { children: React.ReactNode }) {
  return <p className="max-w-prose text-base leading-[1.75] text-muted-foreground">{children}</p>;
}

export function SystemList({ items }: { items: string[] }) {
  return (
    <ul className="system-list space-y-2">
      {items.map((item) => (
        <li key={item} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SystemMetaGrid({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="system-meta-grid grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-[var(--radius-md)] border border-outline/10 bg-surface/50 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{item.label}</dt>
          <dd className="mt-1 font-heading text-sm font-semibold text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FlowDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="system-flow overflow-x-auto rounded-[var(--radius-lg)] border border-outline/15 bg-surface/40 p-4 sm:p-5">
      <div className="flex min-w-max items-center gap-2 sm:gap-3">
        {nodes.map((node, index) => (
          <div key={node} className="flex items-center gap-2 sm:gap-3">
            <div className="rounded-[var(--radius-md)] border border-primary/20 bg-background px-3 py-2 font-heading text-xs font-semibold text-foreground sm:text-sm">
              {node}
            </div>
            {index < nodes.length - 1 ? (
              <span className="text-muted-foreground/50" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DecisionTree() {
  return (
    <div className="system-decision-tree rounded-[var(--radius-lg)] border border-outline/15 bg-surface/30 p-5 font-mono text-xs sm:text-sm">
      <div className="text-muted-foreground">Error detected</div>
      <div className="ml-4 mt-2 border-l border-outline/20 pl-4">
        <div className="text-foreground">Can user continue?</div>
        <div className="ml-4 mt-2 space-y-2 border-l border-outline/20 pl-4">
          <div>
            <span className="text-primary">Yes →</span>{" "}
            <span className="rounded bg-primary/10 px-1.5 py-0.5 text-foreground">Recoverable pattern</span>
          </div>
          <div>
            <span className="text-primary">No →</span>{" "}
            <span className="rounded bg-accent-warm/10 px-1.5 py-0.5 text-foreground">Critical pattern</span>
          </div>
        </div>
        <div className="ml-4 mt-3 border-l border-outline/20 pl-4">
          <div className="text-foreground">User action required?</div>
          <div className="ml-4 mt-2 border-l border-outline/20 pl-4 text-muted-foreground">
            Select CTA + optional support link
          </div>
        </div>
      </div>
    </div>
  );
}

export function DataTable({ rows }: { rows: { cells: string[] }[] }) {
  if (rows.length === 0) return null;
  const [header, ...body] = rows;

  return (
    <div className="system-table-wrap overflow-x-auto rounded-[var(--radius-lg)] border border-outline/15">
      <table className="system-table w-full min-w-[32rem] text-left text-sm">
        <thead className="bg-surface/80">
          <tr>
            {header.cells.map((cell) => (
              <th
                key={cell}
                className="border-b border-outline/10 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-outline/8 last:border-0">
              {row.cells.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cn(
                    "px-4 py-3 text-muted-foreground",
                    cellIndex === 0 && "font-medium text-foreground"
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TaxonomyDiagram({
  levels,
}: {
  levels: { label: string; items: string[] }[];
}) {
  return (
    <div className="system-taxonomy grid gap-3 sm:grid-cols-3">
      {levels.map((level) => (
        <div key={level.label} className="rounded-[var(--radius-lg)] border border-outline/15 bg-surface/40 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">{level.label}</p>
          <ul className="mt-3 space-y-2">
            {level.items.map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius-sm)] bg-background px-2.5 py-1.5 text-sm text-foreground ring-1 ring-outline/10"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ToneSpectrum({
  dimensions,
}: {
  dimensions: { label: string; left: string; right: string }[];
}) {
  return (
    <div className="system-tone space-y-4">
      {dimensions.map((dim) => (
        <div key={dim.label}>
          <div className="mb-2 flex justify-between text-xs text-muted-foreground">
            <span>{dim.left}</span>
            <span className="font-medium text-foreground">{dim.label}</span>
            <span>{dim.right}</span>
          </div>
          <div className="relative h-2 rounded-full bg-gradient-to-r from-muted/60 via-primary/30 to-primary/60">
            <div className="absolute left-[62%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-sm" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PrincipleGrid({ principles }: { principles: { title: string; description: string }[] }) {
  return (
    <div className="system-principles grid gap-3 sm:grid-cols-2">
      {principles.map((principle, index) => (
        <article
          key={principle.title}
          className="rounded-[var(--radius-lg)] border border-outline/10 bg-surface/40 p-4 sm:p-5"
        >
          <span className="font-heading text-xs font-bold tabular-nums text-primary/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-heading text-base font-semibold text-foreground">{principle.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
        </article>
      ))}
    </div>
  );
}

export function PatternCards({ examples }: { examples: { label: string; context: string; output: string }[] }) {
  return (
    <div className="system-patterns grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {examples.map((example) => (
        <article key={`${example.label}-${example.context}`} className="system-pattern-card rounded-[var(--radius-lg)] border border-outline/15 bg-background p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">{example.label}</p>
          <p className="mt-2 text-xs text-muted-foreground">{example.context}</p>
          <p className="mt-3 rounded-[var(--radius-md)] bg-surface/60 px-3 py-2 font-mono text-xs leading-relaxed text-foreground sm:text-sm">
            {example.output}
          </p>
        </article>
      ))}
    </div>
  );
}

export function GovernancePanel() {
  return (
    <div className="system-governance rounded-[var(--radius-lg)] border border-outline/15 bg-surface/30 p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Governance model</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { role: "Content", owns: "Rules, docs, review" },
          { role: "Design", owns: "Patterns in Figma" },
          { role: "Engineering", owns: "Keys, fallbacks, i18n" },
        ].map((item) => (
          <div key={item.role} className="rounded-[var(--radius-md)] bg-background p-3 ring-1 ring-outline/10">
            <p className="font-heading text-sm font-semibold text-foreground">{item.role}</p>
            <p className="mt-1 text-xs text-muted-foreground">{item.owns}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
