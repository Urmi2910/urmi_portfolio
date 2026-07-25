import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

function LinkedInFilled({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  {
    href: `mailto:${profile.email}`,
    label: profile.email,
    mobileLabel: profile.email,
    icon: "mail" as const,
    external: false,
  },
  {
    href: profile.linkedin,
    label: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
    mobileLabel: "LinkedIn",
    icon: "linkedin" as const,
    external: true,
  },
] as const;

export function ContactLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Contact links" className={cn("w-full min-w-0", className)}>
      <ul className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
        {contactLinks.map(({ href, label, mobileLabel, icon, external }) => (
          <li key={label} className="min-w-0">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex min-h-[36px] w-full min-w-0 items-center gap-1.5 rounded-[var(--radius-sm)] text-xs font-medium text-foreground transition-md hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation sm:min-h-[44px] sm:gap-2 sm:text-sm sm:w-auto"
            >
              {icon === "mail" ? (
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden="true" />
              ) : (
                <LinkedInFilled className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
              )}
              <span className="min-w-0 break-all sm:hidden">{mobileLabel}</span>
              <span className="hidden min-w-0 break-all sm:inline">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
