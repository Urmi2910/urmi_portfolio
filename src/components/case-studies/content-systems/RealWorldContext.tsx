import {
  ContentSystemsImage,
  type ContentSystemsImageData,
} from "@/components/case-studies/content-systems/ContentSystemsImage";

export function ErrorPatternCallout({
  label,
  template,
  description,
  examples,
}: {
  label: string;
  template: string;
  description: string;
  examples: readonly string[];
}) {
  return (
    <div className="content-systems-card rounded-[var(--radius-lg)] border border-[#ea580c]/20 bg-[#fff7ed] p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#ea580c]">{label}</p>
      <p className="mt-2 font-mono text-sm font-medium text-foreground sm:text-base">{template}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2">
        {examples.map((example) => (
          <li
            key={example}
            className="rounded-[var(--radius-md)] border border-[#ea580c]/10 bg-white px-4 py-2.5 text-sm text-foreground"
          >
            &ldquo;{example}&rdquo;
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RealWorldArtifacts({
  artifacts,
}: {
  artifacts: readonly ContentSystemsImageData[];
}) {
  return (
    <div className="content-systems-artifact-stack">
      {artifacts.map((artifact) => (
        <ContentSystemsImage key={artifact.src} image={artifact} />
      ))}
    </div>
  );
}
