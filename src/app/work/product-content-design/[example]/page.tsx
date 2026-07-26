import { WritingExampleDetail } from "@/components/case-studies/product-content-design/WritingExampleDetail";
import { WritingExampleSampleNav } from "@/components/case-studies/product-content-design/WritingExampleSampleNav";
import { WritingExampleScrollReset } from "@/components/case-studies/product-content-design/WritingExampleScrollReset";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { getProductContentExampleNav } from "@/data/product-content-design-nav";
import {
  getWritingExample,
  productContentDesignHub,
  writingExamples,
} from "@/data/product-content-design";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

const uiComponentRedirects: Record<string, string> = {
  "dropdown-labels": "/work/product-content-design/ui-components#dropdown-labels",
  snackbars: "/work/product-content-design/ui-components#snackbars",
  "call-to-action": "/work/product-content-design/ui-components#call-to-action",
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

  const nav = getProductContentExampleNav(slug);

  if (!nav) notFound();

  return (
    <>
      <Header />
      <main className="writing-case-study case-study-main-with-nav flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 pb-8 sm:pb-10">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <WritingExampleScrollReset slug={slug}>
              <WritingExampleDetail example={example} />
            </WritingExampleScrollReset>
          </div>
        </section>
      </main>
      <WritingExampleSampleNav
        current={nav.current}
        prev={nav.prev}
        next={nav.next}
        index={nav.index}
        total={nav.total}
      />
      <Footer />
    </>
  );
}
