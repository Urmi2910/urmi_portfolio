import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function ExplorationComparisonTable({
  rows,
}: {
  rows: { label: string; rationale: string; selected?: boolean }[];
}) {
  return (
    <div className="writing-exploration-table overflow-x-auto rounded-[var(--radius-md)] border border-outline/15">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead>
          <tr className="border-b border-outline/10 bg-surface/60">
            <th className="px-4 py-3 font-heading text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
              Explored
            </th>
            <th className="px-4 py-3 font-heading text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
              Why I didn&apos;t choose it
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className={cn(
                "border-b border-outline/10 last:border-0",
                row.selected ? "bg-primary/5" : "bg-background"
              )}
            >
              <td className="px-4 py-3.5 align-top font-medium text-foreground">
                <span className="inline-flex items-center gap-2">
                  {row.label}
                  {row.selected ? (
                    <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden />
                  ) : null}
                </span>
              </td>
              <td
                className={cn(
                  "px-4 py-3.5 align-top leading-relaxed",
                  row.selected ? "font-medium text-foreground" : "text-muted-foreground"
                )}
              >
                {row.rationale}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
