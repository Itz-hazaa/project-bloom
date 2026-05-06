import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { useRegion, price } from "@/lib/region";
import { Plus, Minus, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/bootcamps")({
  head: () => ({
    meta: [
      { title: "Bootcamps & Workshops · WEE PAL" },
      { name: "description", content: "5 progressive bootcamp levels — from Robotics Starter to Humanoid Prototype. Weekend, holiday, and on-campus formats." },
      { property: "og:title", content: "Bootcamps — From Zero to Humanoid" },
      { property: "og:description", content: "Five intensive levels for weekends, holidays, and school visits." },
    ],
  }),
  component: BootcampsPage,
});

const levels = [
  {
    n: 0,
    title: "Robotics Starter",
    sub: "Absolute beginner · Class 5+",
    learn: ["Basics of motors, wheels, sensors", "Visual coding & beginner logic", "Simple circuits & safety"],
    project: "Mini obstacle bot, light-sensor model",
    india: "₹799",
    intl: "$15",
  },
  {
    n: 1,
    title: "Robotics Builder",
    sub: "Core skills · Class 7+",
    learn: ["Arduino + electronic components", "IR, ultrasonic, LDR sensors", "Building & debugging real robots"],
    project: "Line follower, obstacle avoider, smart parking demo",
    india: "₹999",
    intl: "$19",
  },
  {
    n: 2,
    title: "Smart Robotics + IoT",
    sub: "Connected systems · Class 9+",
    learn: ["IoT fundamentals (Wi-Fi/Bluetooth)", "Mobile-controlled robots", "Home automation basics"],
    project: "Smart home model, IoT monitoring system",
    india: "₹1,299",
    intl: "$25",
  },
  {
    n: 3,
    title: "AI + Robotics Integration",
    sub: "Intelligent systems · Class 11+",
    learn: ["Python for AI projects", "Computer vision (camera + detection)", "AI decision-making for robots"],
    project: "Face detection, object tracking bot",
    india: "₹1,799",
    intl: "$35",
  },
  {
    n: 4,
    title: "Humanoid Robotics",
    sub: "Concept to prototype · Advanced",
    learn: ["Servo control + motion concepts", "Humanoid body structure & balance", "Wired/wireless control systems"],
    project: "Guided path toward humanoid robot prototypes",
    india: "₹2,499",
    intl: "$49",
  },
];

function BootcampsPage() {
  const { region } = useRegion();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeader
        eyebrow="Bootcamps & workshops"
        title={<>From zero to <span className="text-primary">humanoid</span>.</>}
        desc="Intensive short programs for weekends, holidays, and school visits. Five progressive levels — anyone can start, everyone can grow."
      />

      <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card">
        {levels.map((l) => {
          const isOpen = open === l.n;
          return (
            <div key={l.n} className="border-b border-border last:border-b-0">
              <button
                onClick={() => setOpen(isOpen ? null : l.n)}
                className="flex w-full items-center gap-5 p-6 text-left transition hover:bg-surface md:p-8"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-foreground font-mono text-sm font-semibold text-background md:h-14 md:w-14">
                  {String(l.n).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className="font-display text-lg font-semibold tracking-tight md:text-xl">
                    {l.title}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {l.sub}
                  </div>
                </div>
                <div className="hidden items-baseline gap-1 sm:flex">
                  <span className="font-display text-lg font-semibold">{price(l.india, l.intl, region)}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">/session</span>
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-full border border-border">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 px-6 pb-8 md:grid-cols-2 md:px-8 md:pb-10">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          Students learn
                        </div>
                        <ul className="mt-3 space-y-2">
                          {l.learn.map((x) => (
                            <li key={x} className="flex items-start gap-2 text-sm">
                              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {x}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          Project example
                        </div>
                        <div className="mt-3 inline-block rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                          {l.project}
                        </div>
                        <div className="mt-5 flex items-baseline gap-1 sm:hidden">
                          <span className="font-display text-xl font-semibold">{price(l.india, l.intl, region)}</span>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">/session</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background btn-glow"
        >
          Join a bootcamp <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
