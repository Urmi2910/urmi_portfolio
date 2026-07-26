import {
  contentModel,
  conversationTree,
  decisionMatrix,
  flowSteps,
  guardrailLayers,
  intentMap,
  responseTemplate,
  toneComparisons,
} from "@/data/ai-trust-case-study";

export function IntentMapVisual() {
  return (
    <div className="ai-intent-map grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {intentMap.map((item) => (
        <div key={item.intent} className="rounded-[var(--radius-md)] border border-outline/10 bg-background p-3">
          <p className="font-heading text-sm font-semibold text-foreground">{item.intent}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{item.volume} volume</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">{item.route}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ConversationTreeVisual() {
  return (
    <div className="ai-conversation-tree rounded-[var(--radius-lg)] border border-outline/15 bg-surface/30 p-5 font-mono text-xs sm:text-sm">
      <p className="font-heading text-sm font-semibold text-foreground">{conversationTree.root}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {conversationTree.branches.map((branch) => (
          <div key={branch.label} className="rounded-[var(--radius-md)] bg-background p-3 ring-1 ring-outline/10">
            <p className="font-semibold text-primary">{branch.label}</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              {branch.children.map((child) => (
                <li key={child}>→ {child}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ToneComparisonVisual() {
  return (
    <div className="space-y-3">
      {toneComparisons.map((item) => (
        <div key={item.context} className="rounded-[var(--radius-lg)] border border-outline/10 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.context}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <p className="text-sm text-muted-foreground line-through decoration-muted-foreground/40">{item.before}</p>
            <p className="text-sm font-medium text-foreground">{item.after}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DecisionMatrixVisual() {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-outline/15">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead className="bg-surface/80">
          <tr>
            <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Signal</th>
            {decisionMatrix.headers.slice(1).map((h) => (
              <th key={h} className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {decisionMatrix.rows.map((row) => (
            <tr key={row[0]} className="border-t border-outline/8">
              <td className="px-4 py-3 font-medium text-foreground">{row[0]}</td>
              <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
              <td className="px-4 py-3 text-foreground">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GuardrailDiagramVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {guardrailLayers.map((layer) => (
        <div key={layer.layer} className="rounded-[var(--radius-lg)] border border-outline/15 bg-surface/40 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{layer.layer}</p>
          <ul className="mt-3 space-y-2">
            {layer.rules.map((rule) => (
              <li key={rule} className="rounded-[var(--radius-sm)] bg-background px-2.5 py-1.5 text-xs text-foreground ring-1 ring-outline/10">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function FlowchartVisual() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {flowSteps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-[var(--radius-md)] border border-primary/20 bg-background px-3 py-2 text-xs font-medium text-foreground sm:text-sm">
            {step}
          </span>
          {index < flowSteps.length - 1 ? <span className="text-muted-foreground/50">→</span> : null}
        </div>
      ))}
    </div>
  );
}

export function ResponseTemplateVisual() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-outline/15 bg-background p-4 sm:p-5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Template slots</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {responseTemplate.slots.map((slot) => (
          <span key={slot} className="rounded-full bg-surface px-2.5 py-1 text-xs text-foreground ring-1 ring-outline/10">
            {slot}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-2 border-l-2 border-primary/20 pl-4 text-sm">
        <p><span className="text-muted-foreground">Ack:</span> {responseTemplate.example.acknowledgment}</p>
        <p><span className="text-muted-foreground">Answer:</span> {responseTemplate.example.answer}</p>
        <p><span className="text-muted-foreground">Source:</span> {responseTemplate.example.attribution}</p>
        <p><span className="text-muted-foreground">Next:</span> {responseTemplate.example.next}</p>
      </div>
    </div>
  );
}

export function ContentModelVisual() {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-outline/15">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead className="bg-surface/80">
          <tr>
            {["Field", "Type", "Purpose"].map((h) => (
              <th key={h} className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contentModel.map((row) => (
            <tr key={row.field} className="border-t border-outline/8">
              <td className="px-4 py-3 font-mono text-xs text-primary">{row.field}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.type}</td>
              <td className="px-4 py-3 text-foreground">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PrincipleCards({
  principles,
}: {
  principles: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {principles.map((p, i) => (
        <article key={p.title} className="rounded-[var(--radius-lg)] border border-outline/10 bg-surface/40 p-4">
          <span className="text-xs font-bold tabular-nums text-primary/60">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-1 font-heading text-base font-semibold text-foreground">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        </article>
      ))}
    </div>
  );
}
