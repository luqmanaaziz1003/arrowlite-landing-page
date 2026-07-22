import { cn } from "@/lib/utils";

export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

export function StatGrid({
  stats,
  tone = "default",
  className,
}: {
  stats: readonly StatItem[];
  tone?: "default" | "ink";
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden rounded-xl border",
        tone === "ink" ? "border-white/12 bg-white/12" : "border-border bg-border",
        stats.length % 3 === 0
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col p-6",
            tone === "ink" ? "bg-ink" : "bg-card"
          )}
        >
          {/* `dt` precedes `dd` for semantics; CSS order puts the value on top. */}
          <dt
            className={cn(
              "order-2 mt-2 text-sm font-medium",
              tone === "ink" ? "text-ink-foreground" : "text-foreground"
            )}
          >
            {stat.label}
          </dt>
          <dd className="order-1 text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
            {stat.value}
          </dd>
          {stat.note ? (
            <p
              className={cn(
                "order-3 mt-1.5 text-xs leading-relaxed",
                tone === "ink" ? "text-ink-muted" : "text-muted-foreground"
              )}
            >
              {stat.note}
            </p>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
