import * as React from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function Section({
  className,
  tone = "default",
  ...props
}: React.ComponentProps<"section"> & {
  tone?: "default" | "muted" | "ink";
}) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "muted" && "bg-muted/50",
        tone === "ink" && "bg-ink text-ink-foreground",
        className
      )}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase",
        className
      )}
      {...props}
    >
      <span aria-hidden className="h-px w-6 bg-brand" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "start",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "start" | "center";
  tone?: "default" | "ink";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Eyebrow
          className={cn(
            "mb-4",
            tone === "ink" ? "text-brand" : "text-muted-foreground",
            align === "center" && "justify-center"
          )}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/**
 * The faint technical grid used behind dark sections. Purely decorative.
 */
export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid text-white/[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        className
      )}
    />
  );
}
