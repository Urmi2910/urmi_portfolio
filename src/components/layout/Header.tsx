"use client";

import { profile } from "@/data/portfolio";
import { ResumeDownloadLink } from "@/components/ui/ResumeDownloadLink";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#case-studies", label: "Portfolio" },
  { href: "/#experience", label: "Experience" },
  { href: "/#learning", label: "Learning" },
] as const;

const headerHeight = "calc(3rem + env(safe-area-inset-top, 0px))";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [introNameVisible, setIntroNameVisible] = useState(pathname === "/");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const showName = pathname !== "/" || !introNameVisible;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setIntroNameVisible(false);
      return;
    }

    const introName = document.getElementById("about-intro-name");
    if (!introName) {
      setIntroNameVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIntroNameVisible(entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(introName);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.split("#")[1] ?? "");
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const firstLink = menuRef.current?.querySelector("a");
    firstLink?.focus();

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navLinkClass = (href: string, mobile = false) =>
    cn(
      mobile
        ? "flex min-h-[36px] items-center rounded-[var(--radius-md)] px-3 text-[0.8125rem] font-medium transition-md hover:bg-primary/5 active:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation"
        : "tap-link rounded-full px-3 py-2.5 text-label transition-md hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:px-4",
      activeSection === href || href.endsWith(activeSection)
        ? "bg-primary/8 text-primary font-medium"
        : mobile
          ? "text-foreground"
          : "text-muted-foreground"
    );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-md safe-top",
        "bg-background/70 backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60",
        scrolled || menuOpen
          ? "border-border/30 shadow-sm bg-background/80"
          : "border-border/20"
      )}
    >
      <div className="container-page flex h-12 min-h-[3rem] items-center justify-between gap-2 sm:h-14 sm:min-h-[3.5rem] sm:gap-3 md:h-16">
        <Link
          href="/"
          onClick={closeMenu}
          aria-hidden={!showName}
          tabIndex={showName ? 0 : -1}
          className={cn(
            "min-w-0 flex-1 truncate font-heading text-sm font-bold tracking-tight text-foreground transition-md hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full py-1 pr-2 sm:text-[0.9375rem] md:text-lg",
            !showName && "pointer-events-none opacity-0"
          )}
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex lg:gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ResumeDownloadLink className="btn-primary hidden shrink-0 gap-1 md:inline-flex md:min-h-9 md:px-3 md:py-2 md:text-xs lg:min-h-[44px] lg:gap-1.5 lg:px-5 lg:py-2.5 lg:text-sm">
            Download resume
          </ResumeDownloadLink>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-md hover:bg-primary/5 active:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-4 w-4" strokeWidth={2.5} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 z-40 border-b border-border bg-background/98 backdrop-blur-lg transition-all duration-300 md:hidden safe-bottom overflow-y-auto",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        )}
        style={{
          top: headerHeight,
          maxHeight: `calc(100dvh - ${headerHeight})`,
        }}
        aria-hidden={!menuOpen}
      >
        <nav
          className="container-page py-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu} className={navLinkClass(link.href, true)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-x-0 bottom-0 z-30 bg-foreground/20 md:hidden touch-manipulation"
          style={{ top: headerHeight }}
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
