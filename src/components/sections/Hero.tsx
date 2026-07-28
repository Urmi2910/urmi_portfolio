import { AboutHeroDecor } from "@/components/ui/AboutHeroDecor";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { HighlightText } from "@/components/ui/HighlightText";
import { profile } from "@/data/portfolio";
import Image from "next/image";

export function Hero() {
  const firstName = profile.name.split(" ")[0];

  return (
    <section
      id="about"
      className="section-about scroll-section section-spacing section-spacing-about-top"
    >
      <GeometricDecor variant="hero" />
      <div className="container-page">
        <div className="about-hero-card">
          <AboutHeroDecor />

          <div className="about-hero-layout">
            <div className="about-hero-intro">
              <h1 id="about-intro-name" className="about-hero-name">
                <span className="about-hero-name-lead">Hi, I&apos;m</span>{" "}
                <span className="about-hero-name-main">{firstName}</span>
              </h1>
              <p className="about-hero-role">A {profile.about.roleLabel}</p>
              <p className="about-hero-tagline">{profile.tagline}</p>
            </div>

            <aside className="about-hero-aside" aria-label="Portrait illustration">
              <div className="about-hero-portrait">
                <Image
                  src="/about/urmi-illustration.png"
                  alt="Illustrated portrait of Urmi Shah"
                  width={1024}
                  height={1024}
                  priority
                  className="about-hero-portrait-image"
                />
              </div>
            </aside>

            <div className="about-hero-body">
              <div className="about-hero-copy">
                {profile.about.introParagraphs.map((paragraph) => (
                  <p key={paragraph.text.slice(0, 40)}>
                    <HighlightText text={paragraph.text} highlights={paragraph.highlights} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
