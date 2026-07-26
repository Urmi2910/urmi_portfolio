import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function AllExamplesLink({ className }: { className?: string }) {
  return (
    <Link
      href="/work/product-content-design"
      className={cn(
        "inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-2 py-2 text-xs text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary",
        className
      )}
    >
      <ArrowLeft className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
      All Examples
    </Link>
  );
}
