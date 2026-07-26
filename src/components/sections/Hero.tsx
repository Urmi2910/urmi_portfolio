import { AboutHeroDecor } from "@/components/ui/AboutHeroDecor";
import { profile } from "@/data/portfolio";
import { Quote } from "lucide-react";
import { Fragment } from "react";

function HighlightText({ text, highlights = [] }: { text: string; highlights?: string[] }) {
  if (!highlights.length) {
    return <>{text}</>;
  }

  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
        return isHighlight ? (
          <strong key={`${part}-${index}`} className="font-semibold text-primary">
            {part}
          </strong>
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        );
      })}
    </>
  );
}

export function Hero() {
  const firstName = profile.name.split(" ")[0];

  return (
    <section
      id="about"
      className="section-flow-child scroll-section pb-2 pt-[calc(3.25rem+env(safe-area-inset-top,0px))] sm:pb-4 sm:pt-[calc(4.5rem+env(safe-area-inset-top,0px))] md:pt-24"
    >
      <div className="container-page py-3 sm:py-4">
        <div className="about-hero-card">
          <AboutHeroDecor />

          <div className="about-hero-layout">
            <div className="about-hero-main">
              <div className="about-hero-intro">
                <h1 className="about-hero-name">
                  <span className="about-hero-name-lead">Hi, I&apos;m</span>{" "}
                  <span className="about-hero-name-main">{firstName}</span>
                </h1>
                <p className="about-hero-role">
                  A{" "}
                  {profile.about.roleLabel.split(" • ").map((part, index) => (
                    <Fragment key={part}>
                      {index > 0 && (
                        <span className="about-hero-role-sep" aria-hidden="true">
                          {" "}
                          •{" "}
                        </span>
                      )}
                      {part}
                    </Fragment>
                  ))}
                </p>
                <p className="about-hero-tagline">{profile.tagline}</p>
              </div>

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

            <aside className="about-hero-aside" aria-label="Belief">
              <blockquote className="about-hero-quote">
                <Quote className="about-hero-quote-icon" strokeWidth={2} aria-hidden="true" />
                <p>
                  <HighlightText
                    text={profile.about.beliefQuote.text}
                    highlights={profile.about.beliefQuote.highlights}
                  />
                </p>
              </blockquote>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
