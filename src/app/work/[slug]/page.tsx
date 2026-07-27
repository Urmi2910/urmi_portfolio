import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { getCaseStudy, profile, type CaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const accentBorder: Record<CaseStudy["accentColor"], string> = {
  primary: "border-l-primary",
  accent: "border-l-accent",
  tertiary: "border-l-tertiary",
  warm: "border-l-accent-warm",
};

export async function generateStaticParams() {
  const { caseStudies } = await import("@/data/portfolio");
  return caseStudies
    .filter(
      (cs) =>
        cs.slug !== "product-content-design" &&
        cs.slug !== "ai-design" &&
        cs.slug !== "writing-beyond-products"
    )
    .map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | ${profile.name}`,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative overflow-hidden border-b border-border/50 pb-12 sm:pb-16 md:pb-20">
          <GeometricDecor variant="section" />

          <div className="relative mx-auto w-full max-w-6xl px-[clamp(1rem,4vw,1.5rem)]">
            <Link
              href="/#case-studies"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              Back to portfolio
            </Link>

            <div className="mt-8 md:mt-10 md:grid md:grid-cols-[minmax(11rem,13rem)_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-x-14 xl:grid-cols-[16rem_minmax(0,1fr)] xl:gap-x-20">
              <aside className="mb-8 space-y-5 md:sticky md:top-24 md:mb-0 md:self-start lg:space-y-6">
                <div className={cn("border-l-[3px] pl-4", accentBorder[study.accentColor])}>
                  <p className="font-heading text-sm font-semibold text-primary">{study.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{study.role}</p>
                  <p className="mt-2 text-sm tabular-nums text-muted-foreground">
                    {study.year} · {study.duration}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {study.metrics.length > 0 ? (
                  <dl className="space-y-4 border-t border-border/60 pt-5">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="sr-only">{metric.label}</dt>
                        <dd className="font-heading text-2xl font-bold text-foreground">{metric.value}</dd>
                        <p className="mt-1 text-xs leading-snug text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </aside>

              <article className="min-w-0">
                <header>
                  <h1 className="text-[clamp(1.75rem,5vw,3.25rem)] font-heading font-bold leading-[1.12] tracking-tight text-foreground text-balance">
                    {study.title}
                  </h1>
                  {study.subtitle ? (
                    <p className="mt-3 text-base font-medium leading-snug text-foreground/90 sm:mt-4 sm:text-lg md:text-xl">
                      {study.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                    {study.excerpt}
                  </p>
                </header>

                <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16">
                  <section>
                    <h2 className="text-label font-semibold uppercase tracking-[0.12em] text-primary">
                      The challenge
                    </h2>
                    <p className="mt-4 max-w-prose text-base leading-[1.75] text-muted-foreground sm:text-lg">
                      {study.challenge}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-label font-semibold uppercase tracking-[0.12em] text-primary">
                      What I did
                    </h2>
                    <ul className="mt-5 space-y-4 border-l-2 border-primary/15 pl-5 sm:pl-6">
                      {study.approach.map((step, i) => (
                        <li
                          key={i}
                          className="text-base leading-[1.75] text-muted-foreground sm:text-lg"
                        >
                          {step}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-label font-semibold uppercase tracking-[0.12em] text-primary">
                      Results
                    </h2>
                    <p className="mt-4 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                      {study.outcome}
                    </p>
                  </section>

                  {study.testimonial && (
                    <figure
                      className={cn(
                        "rounded-[var(--radius-lg)] border bg-surface/60 p-6 sm:p-8",
                        accentBorder[study.accentColor],
                        "border-l-[3px]"
                      )}
                    >
                      <blockquote className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-5 text-sm">
                        <p className="font-medium text-foreground">{study.testimonial.author}</p>
                        <p className="mt-0.5 text-muted-foreground">{study.testimonial.role}</p>
                      </figcaption>
                    </figure>
                  )}
                </div>

                <footer className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-8 sm:mt-14 md:flex-row md:items-center md:justify-between">
                  <Link
                    href="/#case-studies"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary transition-md hover:text-primary/80"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                    All case studies
                  </Link>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-[44px] items-center break-anywhere text-sm text-muted-foreground transition-md hover:text-primary"
                  >
                    {profile.email}
                  </a>
                </footer>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
