import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ · WEE PAL" },
      { name: "description", content: "Answers about ages, prerequisites, equipment, demo classes, school workshops, location, and online options at WEE PAL." },
      { property: "og:title", content: "FAQ — WEE PAL" },
      { property: "og:description", content: "Everything parents and students ask before enrolling." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What age groups do you accept?", a: "Class 5 (~age 10) all the way to engineering graduates. Each program is designed for its age group's learning style and cognitive stage." },
  { q: "Do students need prior coding experience?", a: "No. Beginner programs start from zero with visual tools, then gradually move to text-based programming. Advanced programs benefit from basic logic but don't require it." },
  { q: "What equipment do students need to bring?", a: "Nothing. All robotics kits, Arduino boards, sensors, computers and materials are provided at our labs." },
  { q: "Can we try a class before enrolling?", a: "Yes — a completely free demo class for every prospective student. Book via the contact form or WhatsApp." },
  { q: "Do you offer workshops for schools and colleges?", a: "Yes — on-campus across Hyderabad. We bring equipment, curriculum and instructors. Contact us to design a custom program." },
  { q: "Where are you located?", a: "16-9-423/c Old Malakpet, Near Khairunnisa Masjid, Hyderabad. Easy public transport access. Visit any weekday." },
  { q: "Do you offer online classes for international students?", a: "Yes — live Zoom sessions across all time zones. Robotics kits ship globally. Switch to International at the top of the page for USD pricing." },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title={<>Got <span className="text-primary">questions</span>?</>}
        desc="Everything parents and students ask before enrolling."
      />

      <div className="mx-auto mt-14 max-w-3xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 p-6 text-left transition hover:bg-surface"
              >
                <span className="font-display text-base font-semibold md:text-lg">{f.q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background btn-glow"
        >
          Still curious? Talk to us <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
