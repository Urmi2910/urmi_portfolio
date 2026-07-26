import type { UiComponentExample } from "@/data/ui-components";
import { UiComponentBeforeAfter } from "./UiComponentBeforeAfter";

function UiComponentPanel({ item }: { item: UiComponentExample }) {
  return (
      <article id={item.id} className="ui-component-panel scroll-mt-28 pb-2">
      <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{item.title}</h2>
      <p className="mt-3 max-w-prose text-base leading-[1.75] text-muted-foreground">{item.description}</p>
      <div className="writing-mockup-breakout -mx-[clamp(1rem,4vw,1.5rem)] mt-6 w-[calc(100%+2*clamp(1rem,4vw,1.5rem))] px-[clamp(1rem,4vw,1.5rem)] sm:mt-8">
        <UiComponentBeforeAfter mockup={item.id} />
      </div>
    </article>
  );
}

export function UiComponentsGallery({ items }: { items: UiComponentExample[] }) {
  return (
    <div className="ui-components-gallery space-y-16 sm:space-y-20">
      {items.map((item) => (
        <UiComponentPanel key={item.id} item={item} />
      ))}
    </div>
  );
}
