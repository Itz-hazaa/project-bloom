import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { useRegion, price } from "@/lib/region";
import { ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs · WEE PAL" },
      { name: "description", content: "AI & Robotics programs from Class 5 to engineering — Foundations, Technical Builders, Advanced AI, Industry-Ready track." },
      { property: "og:title", content: "Programs — WEE PAL" },
      { property: "og:description", content: "Four progressive programs from beginner to industry-ready engineer." },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    emoji: "🌱",
    age: "Class 5–7 · Beginner",
    name: "AI & Robotics Foundations",
    sub: "Building curiosity & logic",
    desc: "Visual coding, sensors, simple circuits. A joyful first encounter with robotics.",
    india: "₹2,999",
    intl: "$49",
    tags: ["Visual coding", "Simple robotics", "Logic"],
    featured: false,
  },
  {
    emoji: "⚙️",
    age: "Class 8–10 · Intermediate",
    name: "Technical Builders Program",
    sub: "Python · Arduino · AI intro",
    desc: "Build real robots with Arduino, write Python, and explore the foundations of AI.",
    india: "₹3,999",
    intl: "$69",
    tags: ["Python", "Arduino", "AI fundamentals"],
    featured: true,
  },
  {
    emoji: "🔥",
    age: "Class 11–12 · Advanced",
    name: "Advanced AI & Robotics",
    sub: "College-ready technology",
    desc: "Machine Learning, IoT, Raspberry Pi and full robotics system design.",
    india: "₹4,999",
    intl: "$89",
    tags: ["Machine Learning", "IoT", "Raspberry Pi"],
    featured: false,
  },
  {
    emoji: "🎓",
    age: "Engineering · Professional",
    name: "Industry-Ready AI Track",
    sub: "Data Science · CV · NLP",
    desc: "Turn your degree into a career. Real industry projects build a hireable portfolio.",
    india: "₹6,999",
    intl: "$119",
    tags: ["Data Science", "Computer Vision", "Industry projects"],
    featured: false,
  },
];

function ProgramsPage() {
  const { region } = useRegion();
  return (
    <Section>
      <SectionHeader
        align="center"
        eyebrow="Our courses"
        title={<>Programs for <span className="text-primary">every level</span>.</>}
        desc="Whether you're 10 or 22 — we have a runway built for your stage."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`relative flex flex-col rounded-3xl border p-7 ${
              p.featured ? "border-foreground bg-foreground text-background" : "border-border bg-card"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary-foreground">
                <Star size={10} fill="currentColor" /> Most popular
              </div>
            )}
            <div className="text-3xl">{p.emoji}</div>
            <div className={`mt-5 font-mono text-[10px] uppercase tracking-[0.18em] ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>
              {p.age}
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{p.name}</h3>
            <div className={`mt-1 text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>{p.sub}</div>

            <p className={`mt-5 text-sm leading-relaxed ${p.featured ? "text-background/80" : "text-muted-foreground"}`}>
              {p.desc}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold">
                {price(p.india, p.intl, region)}
              </span>
              <span className={`text-sm ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>
                /month
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                    p.featured ? "border-background/20 text-background/80" : "border-border text-muted-foreground"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${
                p.featured ? "bg-background text-foreground" : "border border-border hover:border-foreground"
              }`}
            >
              Enroll now <ArrowRight size={14} />
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted-foreground">
          🇮🇳 <strong className="text-foreground">Hyderabad students</strong> — in-person at our Old Malakpet lab. Online options for outstation.
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted-foreground">
          🌍 <strong className="text-foreground">International students</strong> — live online via Zoom, all time zones. Kit shipping available.
        </div>
      </div>
    </Section>
  );
}
