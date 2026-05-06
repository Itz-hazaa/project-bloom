import { useRegion } from "@/lib/region";

export function RegionBar() {
  const { region, setRegion } = useRegion();
  return (
    <div className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-5 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
        <span className="hidden sm:inline">// Hyderabad → Worldwide</span>
        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-0.5">
          <button
            onClick={() => setRegion("india")}
            className={`rounded-full px-3 py-1 transition ${region === "india" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
          >
            🇮🇳 India
          </button>
          <button
            onClick={() => setRegion("intl")}
            className={`rounded-full px-3 py-1 transition ${region === "intl" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
          >
            🌍 International
          </button>
        </div>
        <span>{region === "india" ? "₹ INR" : "$ USD"}</span>
      </div>
    </div>
  );
}
