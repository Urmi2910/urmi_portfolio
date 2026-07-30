import { PortfolioCaseStudyNav } from "@/components/case-studies/shared/PortfolioCaseStudyNav";
import { TriggerOrderCaseStudy } from "@/components/case-studies/trigger-order/TriggerOrderCaseStudy";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { triggerOrderCaseStudy } from "@/data/trigger-order-case-study";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${triggerOrderCaseStudy.title} | ${profile.name}`,
  description: triggerOrderCaseStudy.subtitle,
};

export default function TriggerOrderCaseStudyPage() {
  return (
    <>
      <Header />
      <main className="writing-case-study flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <TriggerOrderCaseStudy />
      </main>
      <PortfolioCaseStudyNav slug="trigger-order-vs-gtt" />
      <Footer />
    </>
  );
}
