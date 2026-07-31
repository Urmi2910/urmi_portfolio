import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PublishedWritingHighlight } from "@/components/case-studies/product-content-design/PublishedWritingHighlight";
import { WritingExampleAnthology } from "@/components/case-studies/product-content-design/WritingExampleAnthology";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { productContentExampleNav } from "@/data/product-content-design-nav";
import { productContentDesignHub } from "@/data/product-content-design";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${productContentDesignHub.title} | ${profile.name}`,
  description: productContentDesignHub.description,
};

export default function ProductContentDesignPage() {
  const publishedBandIsAlt = (productContentExampleNav.length + 1) % 2 === 1;

  return (
    <>
      <Header />
      <main className="writing-case-study flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="writing-hub-band writing-hub-band--hero relative overflow-hidden pb-0">
          <GeometricDecor variant="section" />

          <div className="writing-hub-inner relative pt-8 pb-4 md:pt-10 md:pb-5">
            <Link
              href="/#case-studies"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              Back to portfolio
            </Link>

            <header className="writing-hub-hero mt-6 md:mt-8">
              <h1 className="case-study-hero-title text-balance">{productContentDesignHub.title}</h1>
              <p className="case-study-hero-subtitle mt-3 max-w-3xl">
                {productContentDesignHub.description}
              </p>
            </header>
          </div>
        </section>

        <WritingExampleAnthology />

        <section
          className={cn(
            "writing-hub-band",
            publishedBandIsAlt ? "writing-hub-band--alt" : "writing-hub-band--base",
          )}
        >
          <div className="writing-hub-inner py-12 sm:py-16 md:py-20">
            <PublishedWritingHighlight />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
