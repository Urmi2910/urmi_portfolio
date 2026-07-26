import { uiComponentsGallery } from "@/data/ui-components";
import { writingExamples } from "@/data/product-content-design";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function WritingExampleIndex() {
  return (
    <div className="writing-example-index">
      <ul className="divide-y divide-outline/10">
        <li>
          <Link
            href={`/work/product-content-design/${uiComponentsGallery.slug}`}
            className={cn(
              "group block py-5 transition-md hover:pl-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <span className="font-heading text-base font-medium text-foreground transition-colors group-hover:text-primary sm:text-lg">
                  {uiComponentsGallery.title}
                </span>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {uiComponentsGallery.description}
                </p>
              </div>
              <ChevronRight
                className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-md group-hover:translate-x-0.5 group-hover:text-primary"
                strokeWidth={2.5}
                aria-hidden
              />
            </div>
          </Link>
        </li>
        {writingExamples.map((example) => (
          <li key={example.slug}>
            <Link
              href={`/work/product-content-design/${example.slug}`}
              className={cn(
                "group block py-5 transition-md hover:pl-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="font-heading text-base font-medium text-foreground transition-colors group-hover:text-primary sm:text-lg">
                    {example.title}
                  </span>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{example.teaser}</p>
                </div>
                <ChevronRight
                  className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-md group-hover:translate-x-0.5 group-hover:text-primary"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
