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
        cs.slug !== "trigger-order-vs-gtt" &&
        cs.slug !== "content-systems" &&
        cs.slug !== "guidelines" &&
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

          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <Link
              href="/#case-studies"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              Back to portfolio
            </Link>

            <header className="writing-case-study-hero mt-6 md:mt-8">
              <p className="text-sm font-medium text-primary">{study.company}</p>
              <h1 className="case-study-hero-title mt-2 text-balance">{study.title}</h1>
              {study.subtitle ? (
                <p className="case-study-hero-subtitle mt-3">{study.subtitle}</p>
              ) : null}
              <p className="case-study-hero-subtitle mt-3">{study.excerpt}</p>
              <p className="mt-3 text-sm tabular-nums text-muted-foreground">
                {study.role} · {study.year} · {study.duration}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {study.metrics.length > 0 ? (
                <dl className="mt-8 grid grid-cols-1 gap-4 border-y border-border/60 py-6 sm:grid-cols-3">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="sr-only">{metric.label}</dt>
                      <dd className="font-heading text-xl font-semibold text-primary sm:text-2xl">{metric.value}</dd>
                      <p className="mt-1 text-sm leading-snug text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </dl>
              ) : null}
            </header>

            <div className="case-study-sections mt-12 sm:mt-14">
              <section className="story-chapter scroll-mt-28">
                <h2 className="case-study-chapter-title">The challenge</h2>
                <p className="case-study-chapter-lead mt-4 text-base leading-[1.75] sm:text-lg">
                  {study.challenge}
                </p>
              </section>

              <section className="story-chapter scroll-mt-28">
                <h2 className="case-study-chapter-title">What I did</h2>
                <ul className="mt-6 space-y-4 border-l-2 border-primary/15 pl-5 sm:pl-6">
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

              <section className="story-chapter scroll-mt-28">
                <h2 className="case-study-chapter-title">Results</h2>
                <p className="case-study-chapter-lead mt-4 text-base leading-[1.75] sm:text-lg">
                  {study.outcome}
                </p>
              </section>

              {study.testimonial ? (
                <section className="story-chapter scroll-mt-28">
                  <figure
                    className={cn(
                      "rounded-[var(--radius-lg)] border bg-surface/60 p-6 sm:p-8",
                      accentBorder[study.accentColor],
                      "border-l-[3px]",
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
                </section>
              ) : null}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
