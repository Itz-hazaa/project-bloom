import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  surface = false,
}: {
  children: ReactNode;
  className?: string;
  surface?: boolean;
}) {
  return (
    <section className={`${surface ? "bg-surface" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-32">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
        {title}
      </h2>
      {desc && <p className="mt-5 text-lg text-muted-foreground text-pretty">{desc}</p>}
    </div>
  );
}
