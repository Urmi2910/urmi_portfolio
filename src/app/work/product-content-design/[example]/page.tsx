import { WritingExampleDetail } from "@/components/case-studies/product-content-design/WritingExampleDetail";
import { WritingExampleScrollReset } from "@/components/case-studies/product-content-design/WritingExampleScrollReset";
import { PortfolioCaseStudyNav } from "@/components/case-studies/shared/PortfolioCaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import {
  getWritingExample,
  productContentDesignHub,
  writingExamples,
} from "@/data/product-content-design";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

const uiComponentRedirects: Record<string, string> = {
  "dropdown-labels": "/work/product-content-design#microcopy-examples",
  snackbars: "/work/product-content-design#microcopy-examples",
  "call-to-action": "/work/product-content-design#microcopy-examples",
};

interface PageProps {
  params: Promise<{ example: string }>;
}

export async function generateStaticParams() {
  return writingExamples.map((example) => ({ example: example.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { example: slug } = await params;
  const example = getWritingExample(slug);
  if (!example) return { title: "Example Not Found" };
  return {
    title: `${example.title} | ${productContentDesignHub.title} | ${profile.name}`,
    description: example.teaser,
  };
}

export default async function WritingExamplePage({ params }: PageProps) {
  const { example: slug } = await params;

  if (uiComponentRedirects[slug]) {
    redirect(uiComponentRedirects[slug]);
  }

  const example = getWritingExample(slug);

  if (!example) notFound();

  return (
    <>
      <Header />
      <main className="writing-case-study flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 bg-surface pb-8 sm:pb-10">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <WritingExampleScrollReset slug={slug}>
              <WritingExampleDetail example={example} />
            </WritingExampleScrollReset>
          </div>
        </section>
      </main>
      <PortfolioCaseStudyNav slug="product-content-design" />
      <Footer />
    </>
  );
}
