"use client";

import { productContentDesignHubPath } from "@/data/product-content-design-nav";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

type AllExamplesLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  direction?: "back" | "forward";
  children?: ReactNode;
};

function goToAllExamples(
  event: MouseEvent<HTMLAnchorElement>,
  router: ReturnType<typeof useRouter>
) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
    return;
  }

  event.preventDefault();
  router.push(productContentDesignHubPath);
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function AllExamplesLink({
  className,
  direction = "back",
  children = "All Examples",
  onClick,
  ...props
}: AllExamplesLinkProps) {
  const router = useRouter();
  const Icon = direction === "back" ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={productContentDesignHubPath}
      scroll
      className={cn(
        "relative z-10 inline-flex min-h-[44px] touch-manipulation items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        goToAllExamples(event, router);
      }}
      {...props}
    >
      {direction === "back" ? (
        <>
          <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          <span>{children}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
        </>
      )}
    </Link>
  );
}
