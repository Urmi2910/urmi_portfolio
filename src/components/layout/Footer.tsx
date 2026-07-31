import { ContactLinks } from "@/components/layout/ContactLinks";
import { PenLine } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="mt-auto scroll-mt-20 border-t border-border/20 bg-surface safe-bottom"
    >
      <div className="container-page py-6 sm:py-7">
        <div className="flex flex-col gap-5 text-xs text-muted-foreground sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:text-sm">
          <p className="inline-flex min-w-0 items-start gap-2 sm:max-w-md sm:items-center">
            <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-primary/80 sm:mt-0" strokeWidth={2.5} aria-hidden="true" />
            <span>
              Built with Cursor, written by a human (so far). {year}.
            </span>
          </p>

          <div className="min-w-0 border-t border-border/25 pt-4 sm:border-t-0 sm:pt-0">
            <ContactLinks className="sm:justify-end" />
          </div>
        </div>
      </div>
    </footer>
  );
}
