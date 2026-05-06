import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background font-display text-sm font-bold">W</span>
              <span className="font-display text-lg font-semibold">WEE <span className="text-primary">PAL</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground text-pretty">
              AI & Robotics education for the next generation of builders. From Class 5 to engineering — hands-on, ethical, world-class.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                ["Instagram", "https://www.instagram.com/littleweepal"],
                ["WhatsApp", "https://wa.me/917842012006"],
                ["YouTube", "https://youtu.be/7X1w3YLOLsk"],
                ["Email", "mailto:weepalairobotics@gmail.com"],
              ].map(([n, u]) => (
                <a
                  key={n}
                  href={u}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground transition hover:border-foreground hover:text-foreground"
                >
                  {n}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Explore</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/programs" className="hover:text-primary">Programs</Link></li>
              <li><Link to="/bootcamps" className="hover:text-primary">Bootcamps</Link></li>
              <li><Link to="/about" className="hover:text-primary">About & Founder</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="tel:+916300974920" className="hover:text-primary">+91 6300974920</a></li>
              <li><a href="tel:+971-582887447" className="hover:text-primary">+971-582887447</a></li>
              <li><a href="mailto:weepalairobotics@gmail.com" className="hover:text-primary break-all">weepalindia@gmail.com</a></li>
              <li><Link to="/contact" className="hover:text-primary">Book a free demo</Link></li>
              <li className="text-muted-foreground">Hyderabad, Telangana (India)</li>
              <li className="text-muted-foreground">#VILLA NO 45, BANIYAS EAST 7TH, ABU DHABI (U. A. E)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row">
          <div>© 2026 WEE PAL · All rights reserved</div>
          <div>Crafted in Hyderabad · Shipping worldwide</div>
        </div>
      </div>
    </footer>
  );
}
