import { StoryList, StoryProse } from "@/components/case-studies/shared/StoryComponents";
import { cn } from "@/lib/utils";

type PairedRow = {
  gtt: React.ReactNode;
  stopLoss: React.ReactNode;
};

export function PairedGttSlTracks({
  rows,
  showLabels = true,
  className,
}: {
  rows: PairedRow[];
  showLabels?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("story-paired-tracks", className)}>
      {showLabels ? (
        <div className="story-paired-row story-paired-labels" aria-hidden="true">
          <p className="story-subhead">GTT</p>
          <p className="story-subhead">StopLoss</p>
        </div>
      ) : null}
      <div className="story-paired-rows">
        {rows.map((row, index) => (
          <div key={index} className="story-paired-row">
            <div className="story-paired-cell">{row.gtt}</div>
            <div className="story-paired-cell">{row.stopLoss}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PairedGttSlQuote({
  gtt,
  stopLoss,
  className,
}: {
  gtt: string;
  stopLoss: string;
  className?: string;
}) {
  const quoteClass =
    "border-l-2 border-primary/25 pl-4 text-base italic leading-relaxed text-foreground/85";

  return (
    <PairedGttSlTracks
      className={className}
      rows={[
        {
          gtt: <blockquote className={quoteClass}>&ldquo;{gtt}&rdquo;</blockquote>,
          stopLoss: <blockquote className={quoteClass}>&ldquo;{stopLoss}&rdquo;</blockquote>,
        },
      ]}
    />
  );
}

export function PairedGttSlLists({
  gttItems,
  stopLossItems,
  className,
}: {
  gttItems: readonly string[];
  stopLossItems: readonly string[];
  className?: string;
}) {
  return (
    <PairedGttSlTracks
      className={className}
      rows={[
        {
          gtt: <StoryList items={[...gttItems]} className="max-w-none" />,
          stopLoss: <StoryList items={[...stopLossItems]} className="max-w-none" />,
        },
      ]}
    />
  );
}

export function PairedGttSlProse({
  gtt,
  stopLoss,
  className,
}: {
  gtt: string;
  stopLoss: string;
  className?: string;
}) {
  return (
    <PairedGttSlTracks
      className={className}
      rows={[
        {
          gtt: <StoryProse className="max-w-none">{gtt}</StoryProse>,
          stopLoss: <StoryProse className="max-w-none">{stopLoss}</StoryProse>,
        },
      ]}
    />
  );
}
