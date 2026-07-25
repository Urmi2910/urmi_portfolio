import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { LearningSection } from "@/components/sections/LearningSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="about-portfolio-flow">
          <GeometricDecor variant="hero" />
          <Hero />
          <CaseStudiesSection />
        </div>
        <ExperienceSection />
        <LearningSection />
      </main>
      <Footer />
    </>
  );
}
