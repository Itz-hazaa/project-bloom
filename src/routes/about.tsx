// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Section, SectionHeader, Eyebrow } from "@/components/Section";
// import { ArrowUpRight, ArrowRight } from "lucide-react";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About · WEE PAL" },
//       { name: "description", content: "Founded by Mohammed Hassaan Ali — taught engineers at age 11, featured on NDTV. Ethics-first AI & Robotics education." },
//       { property: "og:title", content: "About — Meet the founder of WEE PAL" },
//       { property: "og:description", content: "Mohammed Hassaan Ali — taught engineers at 11, featured on NDTV." },
//     ],
//   }),
//   component: AboutPage,
// });

// const achievements = [
//   { n: "01", text: "Started teaching B.Tech & M.Tech engineers at age 11 — featured on NDTV", url: "https://share.google/58DdcppJO8XFlX1fm" },
//   { n: "02", text: "Built TechShala reaching 500+ students through hands-on robotics", url: "https://www.techshala.org" },
//   { n: "03", text: "Developed a voice-controlled humanoid + autonomous serving robot", url: "https://youtu.be/7X1w3YLOLsk" },
//   { n: "04", text: "Created a robotics curriculum used in 5+ Hyderabad schools", url: "https://www.instagram.com/techshala.official" },
// ];

// const values = [
//   { e: "📚", t: "Learning by doing", d: "Hands-on projects over textbooks. Always." },
//   { e: "💡", t: "Innovation first", d: "Original thinking and creative problem-solving." },
//   { e: "🛡️", t: "Ethical AI", d: "Technology built with responsibility and purpose." },
//   { e: "🧠", t: "Curiosity", d: "Nurturing the natural wonder that drives discovery." },
//   { e: "🚀", t: "Lifelong learning", d: "Building habits that compound for an entire career." },
// ];

// const testimonials = [
//   { q: "WEE PAL changed how I think about technology. Built my first robot in week 2 — now I'm confident about engineering.", a: "Arjun Sharma", r: "Class 10 student" },
//   { q: "My son's problem-solving skills improved dramatically. He actually looks forward to class.", a: "Priya Reddy", r: "Parent" },
//   { q: "The Advanced AI course helped me build a portfolio and land my first job. Genuinely industry-relevant.", a: "Rahul Krishnamurthy", r: "Engineering graduate" },
// ];

// function AboutPage() {
//   return (
//     <>
//       <Section>
//         <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
//           <div>
//             <Eyebrow>The person behind WEE PAL</Eyebrow>
//             <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-balance md:text-6xl">
//               Started teaching engineers <span className="text-primary">at age 11</span>.
//             </h1>
//             <p className="mt-6 text-lg text-muted-foreground text-pretty">
//               Mohammed Hassaan Ali didn't wait to grow up before changing the world. At 11 he was teaching
//               B.Tech and M.Tech engineers robotics — and NDTV took notice. At 19 he built TechShala,
//               reaching 500+ students. Today he leads WEE PAL, making world-class AI & Robotics education
//               accessible to every child in Hyderabad.
//             </p>

//             <div className="mt-10 space-y-2">
//               {achievements.map((a, i) => (
//                 <motion.a
//                   key={a.n}
//                   href={a.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.06 }}
//                   className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition hover:border-foreground"
//                 >
//                   <span className="font-mono text-xs text-primary">{a.n}</span>
//                   <span className="flex-1 text-sm">{a.text}</span>
//                   <ArrowUpRight size={16} className="text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
//                 </motion.a>
//               ))}
//             </div>

//             <blockquote className="mt-8 rounded-2xl border-l-2 border-primary bg-surface px-6 py-5">
//               <p className="font-display text-lg italic">"Let your child be the next Hassaan."</p>
//               <footer className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
//                 — Arsheena Rahman, Co-founder
//               </footer>
//             </blockquote>
//           </div>

//           <div className="relative">
//             <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
//               <div
//                 className="grid h-full w-full place-items-center text-[9rem]"
//                 style={{
//                   background:
//                     "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 60%)",
//                 }}
//               >
//                 👨‍💻
//               </div>
//             </div>
//             <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-soft)]">
//               <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
//                 Founder · 19
//               </div>
//               <div className="mt-1 font-display text-lg font-semibold">Mohammed Hassaan Ali</div>
//               <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-primary">
//                 NDTV Featured
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>

//       <Section surface>
//         <SectionHeader
//           align="center"
//           eyebrow="What we stand for"
//           title={<>Five values that <span className="text-primary">guide every class</span>.</>}
//         />
//         <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
//           {values.map((v) => (
//             <div key={v.t} className="bg-background p-7 text-center">
//               <div className="text-3xl">{v.e}</div>
//               <div className="mt-4 font-display font-semibold">{v.t}</div>
//               <div className="mt-2 text-sm text-muted-foreground">{v.d}</div>
//             </div>
//           ))}
//         </div>
//       </Section>

//       <Section>
//         <SectionHeader
//           align="center"
//           eyebrow="Student stories"
//           title={<>Real results from <span className="text-primary">real students</span>.</>}
//         />
//         <div className="mt-14 grid gap-6 md:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <motion.figure
//               key={t.a}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.08 }}
//               className="rounded-3xl border border-border bg-card p-7"
//             >
//               <div className="font-display text-5xl leading-none text-primary">"</div>
//               <blockquote className="mt-3 text-sm leading-relaxed">{t.q}</blockquote>
//               <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
//                 <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground font-mono text-xs font-semibold text-background">
//                   {t.a.split(" ").map((s) => s[0]).join("")}
//                 </div>
//                 <div>
//                   <div className="text-sm font-semibold">{t.a}</div>
//                   <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.r}</div>
//                 </div>
//               </figcaption>
//             </motion.figure>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background btn-glow"
//           >
//             Visit our lab <ArrowRight size={16} />
//           </Link>
//         </div>
//       </Section>
//     </>
//   );
// }


import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import founderHassaan from "./founder-hassaan.png";
import founderKhaliq from "./Founder.jpeg";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · WEE PAL" },
      { name: "description", content: "Founded by [Founder Name] — ethics-first AI & Robotics education, mentored by Mohammed Hassaan Ali." },
      { property: "og:title", content: "About — Meet the team behind WEE PAL" },
      { property: "og:description", content: "WEE PAL — world-class AI & Robotics education for every child." },
    ],
  }),
  component: AboutPage,
});

const achievements = [
  { n: "01", text: "Started teaching B.Tech & M.Tech engineers at age 11 — featured on NDTV", url: "https://share.google/58DdcppJO8XFlX1fm" },
  { n: "02", text: "Built TechShala reaching 500+ students through hands-on robotics", url: "https://www.techshala.org" },
  { n: "03", text: "Developed a voice-controlled humanoid + autonomous serving robot", url: "https://youtu.be/7X1w3YLOLsk" },
  { n: "04", text: "Created a robotics curriculum used in 5+ Hyderabad schools", url: "https://www.instagram.com/techshala.official" },
];

const values = [
  { e: "📚", t: "Learning by doing", d: "Hands-on projects over textbooks. Always." },
  { e: "💡", t: "Innovation first", d: "Original thinking and creative problem-solving." },
  { e: "🛡️", t: "Ethical AI", d: "Technology built with responsibility and purpose." },
  { e: "🧠", t: "Curiosity", d: "Nurturing the natural wonder that drives discovery." },
  { e: "🚀", t: "Lifelong learning", d: "Building habits that compound for an entire career." },
];

const testimonials = [
  { q: "WEE PAL changed how I think about technology. Built my first robot in week 2 — now I'm confident about engineering.", a: "Arjun Sharma", r: "Class 10 student" },
  { q: "My son's problem-solving skills improved dramatically. He actually looks forward to class.", a: "Priya Reddy", r: "Parent" },
  { q: "The Advanced AI course helped me build a portfolio and land my first job. Genuinely industry-relevant.", a: "Rahul Krishnamurthy", r: "Engineering graduate" },
];

function AboutPage() {
  return (
    <>
      {/* ── Founder Hero ── */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>The person behind WEE PAL</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-balance md:text-6xl">
              Building the future of <span className="text-primary">AI education</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              {/* TODO: Replace with real founder bio */}
              Mohammed Abdul Khaliq is just 10 yr. old and is driving force behind WEE PAL, on a mission to make world-class
              AI & Robotics education accessible to every child in World. With a passion for
              hands-on learning and a vision for ethical technology, he is shaping the next
              generation of innovators.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background btn-glow"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
               <img src={founderKhaliq} alt="Mohammed Abdul Khaliq" 
                 className="h-full w-full object-contain object-center"/>
            </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-soft)]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Jr. Founder & CEO
              </div>
              {/* TODO: Replace with real founder name */}
              <div className="mt-1 font-display text-lg font-semibold">Mohammed Abdul Khaliq</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                WEE PAL
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Advisor & Mentor ── */}
      <Section surface>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
              <img src={founderHassaan} alt="Mohammed Hassaan Ali" 
                 className="h-full w-full object-contain object-center"/>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-soft)]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Founder & CEO · Age 19
              </div>
              <div className="mt-1 font-display text-lg font-semibold">Mohammed Hassaan Ali</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                WeePal | TechShala
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Founder & CEO</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Started teaching engineers <span className="text-primary">at age 11</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Mohammed Hassaan Ali didn't wait to grow up before changing the world. At 11 he was
              teaching B.Tech and M.Tech engineers robotics — and NDTV took notice. At 19 he built
              TechShala, reaching 500+ students. Today he lends his expertise to WEE PAL as Advisor
              & Mentor, guiding the curriculum and vision.
            </p>

            <div className="mt-10 space-y-2">
              {achievements.map((a, i) => (
                <motion.a
                  key={a.n}
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition hover:border-foreground"
                >
                  <span className="font-mono text-xs text-primary">{a.n}</span>
                  <span className="flex-1 text-sm">{a.text}</span>
                  <ArrowUpRight size={16} className="text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </motion.a>
              ))}
            </div>

            <blockquote className="mt-8 rounded-2xl border-l-2 border-primary bg-surface px-6 py-5">
              <p className="font-display text-lg italic">"Let your child be the next Hassaan."</p>
              {/* <footer className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                — Arsheena Rahman, Co-founder
              </footer> */}
            </blockquote>
          </div>
        </div>
      </Section>

      {/* ── Values ── */}
      <Section>
        <SectionHeader
          align="center"
          eyebrow="What we stand for"
          title={<>Five values that <span className="text-primary">guide every class</span>.</>}
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.t} className="bg-background p-7 text-center">
              <div className="text-3xl">{v.e}</div>
              <div className="mt-4 font-display font-semibold">{v.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{v.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section surface>
        <SectionHeader
          align="center"
          eyebrow="Student stories"
          title={<>Real results from <span className="text-primary">real students</span>.</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="font-display text-5xl leading-none text-primary">"</div>
              <blockquote className="mt-3 text-sm leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground font-mono text-xs font-semibold text-background">
                  {t.a.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.a}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background btn-glow"
          >
            Contact Us<ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
