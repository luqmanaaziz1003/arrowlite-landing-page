import Link from "next/link";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Placeholder wordmark. Replace the SVG with the real logo asset when it
 * exists — the surrounding layout only relies on the height.
 */
export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "ink";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
      aria-label={`${site.name} — home`}
    >
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        aria-hidden
        fill="none"
      >
        <rect width="32" height="32" rx="7" className="fill-primary" />
        <path
          d="M16 6.5 24.5 25h-5.2L16 17.4 12.7 25H7.5L16 6.5Z"
          className="fill-primary-foreground"
        />
        <circle cx="16" cy="24" r="2.2" className="fill-brand" />
      </svg>
      <span
        className={cn(
          "text-[0.95rem] font-semibold tracking-tight",
          tone === "ink" && "text-ink-foreground"
        )}
      >
        {site.name}
      </span>
    </Link>
  );
}
