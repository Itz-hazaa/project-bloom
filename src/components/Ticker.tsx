const items = [
  "AI & ROBOTICS EDUCATION",
  "HYDERABAD · OLD MALAKPET",
  "CLASS 5 → ENGINEERING",
  "FREE DEMO CLASS",
  "ARDUINO · PYTHON · ML",
  "500+ STUDENTS TRAINED",
  "WEEKEND BOOTCAMPS",
  "HUMANOID ROBOTICS",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-foreground py-4 overflow-hidden">
      <div className="marquee flex whitespace-nowrap gap-12 font-mono text-xs uppercase tracking-[0.22em] text-background/80">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
