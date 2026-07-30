import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PublishedWritingHighlight } from "@/components/case-studies/product-content-design/PublishedWritingHighlight";
import { WritingExampleIndex } from "@/components/case-studies/product-content-design/WritingExampleIndex";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { productContentDesignHub } from "@/data/product-content-design";
import { profile } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${productContentDesignHub.title} | ${profile.name}`,
  description: productContentDesignHub.description,
};

export default function ProductContentDesignPage() {
  return (
    <>
      <Header />
      <main className="writing-case-study-hub flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative overflow-hidden border-b border-border/50 pb-12 sm:pb-16 md:pb-20">
          <GeometricDecor variant="section" />

          <div className="relative mx-auto w-full max-w-5xl px-[clamp(1rem,4vw,1.5rem)]">
            <Link
              href="/#case-studies"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              Back to portfolio
            </Link>

            <header className="writing-hub-hero mt-8 md:mt-10">
              <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-heading font-bold leading-[1.08] tracking-tight text-foreground text-balance">
                {productContentDesignHub.title}
              </h1>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                {productContentDesignHub.description}
              </p>
            </header>

            <div className="mt-12 sm:mt-14">
              <WritingExampleIndex />
              <PublishedWritingHighlight />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
