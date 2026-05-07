import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Bot, Brain } from "lucide-react";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Ticker } from "@/components/Ticker";

export const Route = createFileRoute("/")({
  head: () => ({
      links: [
    { rel: "icon", href: "data:," },
  ],
    meta: [
      { title: "WeePal" },
      {
        name: "description",
        content:
          "Live online tuition for Classes 4–10. Small batches, expert teachers, and weekly WhatsApp progress reports. Free trial class — no payment needed.",
      },
      { property: "og:title", content: "WeePal Where young minds master Learning" },
      { property: "og:description", content: "Indian and International students. Free demo." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "WeePal",
          description: "Live online tuition for Classes 4–10. Small batches, expert teachers, and weekly WhatsApp progress reports. Free trial class — no payment needed.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressLocality: "VILLA NO 45, BANIYAS EAST 7TH, ABU DHABI",
            addressCountry: "U. A. E",
          },
          telephone: "+91-78420-12006",
          email: "weepalindia@gmail.com",
        }),
      },
    ],
  }),
  component: HomePage,
});

const why = [
  { icon: Sparkles, title: "Project-Based", text: "Every concept is built with hands. Robots, AI models, smart systems — never just slides." },
  { icon: Brain, title: "Age-Tuned Curriculum", text: "Structured paths from Class 5 to engineering. Designed for each cognitive stage." },
  { icon: Cpu, title: "Industry Tools", text: "Arduino, Raspberry Pi, Python, scikit-learn — the same stack professionals ship with." },
  { icon: Bot, title: "Mentor-Led", text: "Led by Mohammed Hassaan Ali — taught engineers at age 11, featured on NDTV." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Section>
        <SectionHeader
          eyebrow="Why WEE PAL"
          title={<>Shaping <span className="text-primary">innovators</span>,<br />not just students.</>}
          desc="Most schools teach kids how to use technology. We teach them to create it — through real builds, deep mentorship, and an ethics-first lens."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative bg-background p-8 transition hover:bg-surface"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background">
                <w.icon size={20} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              <span className="absolute right-6 top-6 font-mono text-[11px] text-muted-foreground/60">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      <MethodStrip />
      <CTABand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-32 md:pt-32 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>Hyderabad's future-tech school · est. 2025</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-8 font-display text-5xl font-semibold tracking-tight text-balance md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]"
        >
          Where young minds <br />
          <span className="text-primary">master AI</span> and{" "}
          <span className="accent-underline">build robots</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl"
        >
          From Class 5 to engineering graduates — we prepare the next generation of creators
          through hands-on AI & Robotics, taught by mentors who've been building since they were 11.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background btn-glow"
          >
            Book a free demo class
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:border-foreground"
          >
            Explore programs
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {[
            ["500+", "Students taught"],
            ["5+", "Schools reached"],
            ["Cl.5 → Eng.", "Full learning path"],
            ["10 Yr. Old", "Founder"],
          ].map(([num, label]) => (
            <div key={label} className="bg-background p-6">
              <dt className="font-display text-2xl font-semibold md:text-3xl">{num}</dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function MethodStrip() {
  const steps = [
    ["01", "Understand", "Visual, jargon-free explanations build solid foundations."],
    ["02", "Build", "Every lesson ends with a working robot or AI artifact."],
    ["03", "Apply", "Real-world problems — smart homes, vision systems, automation."],
    ["04", "Iterate", "Mentor feedback turns curiosity into compounding skill."],
  ];
  return (
    <Section surface>
      <SectionHeader
        align="center"
        eyebrow="The method"
        title={<>Learn → Build → <span className="text-primary">Apply</span></>}
        desc="A repeatable system that turns curiosity into confidence — and confidence into careers."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([n, t, d], i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <div className="font-mono text-xs text-primary">{n}</div>
            <div className="mt-4 font-display text-xl font-semibold">{t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CTABand() {
  return (
    <section className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
              Ready when you are
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Your child's first robot/app is one demo class away.
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground"
          >
            Book free demo
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
