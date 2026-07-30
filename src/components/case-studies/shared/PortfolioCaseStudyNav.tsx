import { CaseStudyBottomNav } from "@/components/case-studies/shared/CaseStudyBottomNav";
import { getCaseStudyNav } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PortfolioCaseStudyNav({ slug }: { slug: string }) {
  const nav = getCaseStudyNav(slug);
  if (!nav) return null;

  const { current, prev, next } = nav;

  const pillClass = cn(
    "inline-flex max-w-[46%] min-w-0 items-center gap-2 rounded-full px-4 py-2",
    "bg-primary/10 text-sm font-medium text-primary transition-md hover:bg-primary/15",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
  );

  return (
    <CaseStudyBottomNav aria-label="Portfolio navigation" className="portfolio-case-study-nav">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-[clamp(1rem,4vw,1.5rem)] py-3">
        {prev ? (
          <Link href={prev.href} className={pillClass}>
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="min-w-0 truncate">{prev.title}</span>
          </Link>
        ) : (
          <Link href="/#case-studies" className={pillClass}>
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
            <span className="min-w-0 truncate">Back to portfolio</span>
          </Link>
        )}

        {next ? (
          <Link href={next.href} className={pillClass}>
            <span className="min-w-0 truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        ) : (
          <Link href="/#case-studies" className={pillClass}>
            <span className="min-w-0 truncate">Back to portfolio</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        )}
      </div>
      <p className="sr-only">Currently reading: {current.title}</p>
    </CaseStudyBottomNav>
  );
}
