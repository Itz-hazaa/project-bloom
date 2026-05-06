import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/programs", label: "Programs" },
  { to: "/bootcamps", label: "Bootcamps" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-10 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background font-display text-sm font-bold transition group-hover:rotate-6">W</span>
          <span className="font-display text-lg font-semibold tracking-tight">
            WEE <span className="text-primary">PAL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm bg-surface text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background btn-glow"
        >
          Book Free Demo →
        </Link>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              Book Free Demo →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
