import { StoryList } from "@/components/case-studies/shared/StoryComponents";
import { ExternalLink } from "lucide-react";

export function GuidelinesDocumentLink({
  href,
  downloadFilename,
}: {
  href: string;
  downloadFilename: string;
}) {
  return (
    <div className="guidelines-card rounded-[var(--radius-lg)] border border-primary/15 bg-primary/5 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Open the full PDF in your browser or download a copy to read offline.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-medium text-primary transition-md hover:bg-primary/5"
          >
            View PDF
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={href}
            download={downloadFilename}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-md hover:bg-white/80 hover:text-foreground"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export function GuidelinesRulesList({ rules }: { rules: readonly string[] }) {
  return <StoryList items={[...rules]} className="mt-6" />;
}

export function GuidelinesTypeCards({
  items,
}: {
  items: readonly {
    name: string;
    description?: string;
    example?: string;
    purpose?: string;
    note?: string;
  }[];
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="guidelines-card rounded-[var(--radius-lg)] border border-outline/12 bg-[#faf8f5] p-4 sm:p-5"
        >
          <p className="font-medium text-foreground">{item.name}</p>
          {item.purpose ? (
            <p className="mt-1 text-sm font-medium text-primary">{item.purpose}</p>
          ) : null}
          {item.description ? (
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          ) : null}
          {item.example ? (
            <p className="mt-2 text-sm text-foreground">&ldquo;{item.example}&rdquo;</p>
          ) : null}
          {item.note ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function DoDontExamples({
  examples,
}: {
  examples: readonly { do: string; dont: string }[];
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {examples.map((item) => (
        <div key={item.do} className="grid gap-3 sm:col-span-2 sm:grid-cols-2">
          <div className="guidelines-card rounded-[var(--radius-lg)] border border-[#15803d]/20 bg-[#f0fdf4] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#15803d]">Do</p>
            <p className="mt-2 whitespace-pre-line text-sm text-foreground">{item.do}</p>
          </div>
          <div className="guidelines-card rounded-[var(--radius-lg)] border border-[#b91c1c]/20 bg-[#fef2f2] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#b91c1c]">Don&apos;t</p>
            <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{item.dont}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
