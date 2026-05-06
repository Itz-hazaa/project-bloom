// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { Section, Eyebrow } from "@/components/Section";
// import { Phone, MessageCircle, Mail, MapPin, Check } from "lucide-react";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact · Book a free demo · WEE PAL" },
//       { name: "description", content: "Book a free AI & Robotics demo class. Call, WhatsApp, email or visit our Old Malakpet lab in Hyderabad." },
//       { property: "og:title", content: "Contact WEE PAL — Book a free demo" },
//       { property: "og:description", content: "Call, WhatsApp, email or visit our Hyderabad lab." },
//     ],
//   }),
//   component: ContactPage,
// });

// const contacts = [
//   { icon: Phone, label: "Call us", value: "+91 6300974920", href: "tel:+917842012006" },
//   { icon: Phone, label: "Call us", value: "+971-582887447", href: "tel:+971-582887447" },
//   { icon: MessageCircle, label: "WhatsApp", value: "+91 6300974920", href: "https://wa.me/916300974920" },
//   { icon: MessageCircle, label: "WhatsApp", value: "+971-582887447", href: "https://wa.me/971582887447" },
//   { icon: Mail, label: "Email", value: "weepalindia@gmail.com", href: "mailto:weepalindia@gmail.com" },
//   { icon: MapPin, label: "Visit our lab", value: "16-9-423/c Old Malakpet, Hyderabad" },
// ];

// function ContactPage() {
//   const [sent, setSent] = useState(false);
//   return (
//     <Section>
//       <div className="grid gap-16 lg:grid-cols-2">
//         <div>
//           <Eyebrow>Contact & enroll</Eyebrow>
//           <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-6xl text-balance">
//             Start your <span className="text-primary">AI journey</span> today.
//           </h1>
//           <p className="mt-6 text-lg text-muted-foreground text-pretty">
//             Whether you're a student, parent or institution — we'll guide you to the perfect program.
//             Book a free demo, call us, or drop a message. We reply within 24 hours.
//           </p>

//           <div className="mt-10 space-y-3">
//             {contacts.map((c) => {
//               const inner = (
//                 <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-foreground">
//                   <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background">
//                     <c.icon size={18} />
//                   </div>
//                   <div>
//                     <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
//                       {c.label}
//                     </div>
//                     <div className="mt-0.5 text-sm font-medium">{c.value}</div>
//                   </div>
//                 </div>
//               );
//               return c.href ? (
//                 <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
//                   {inner}
//                 </a>
//               ) : (
//                 <div key={c.label}>{inner}</div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="lg:sticky lg:top-32 lg:self-start">
//           <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
//             <div className="font-display text-2xl font-semibold tracking-tight">Book a free demo class</div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Fill in your details — we'll reach out within 24 hours.
//             </p>

//             {sent ? (
//               <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-surface p-5 text-sm">
//                 <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
//                   <Check size={16} />
//                 </span>
//                 Thank you! We'll contact you shortly.
//               </div>
//             ) : (
//               <form
//                 className="mt-6 space-y-4"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   setSent(true);
//                 }}
//               >
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <Field label="Full name *" required type="text" placeholder="Your name" />
//                   <Field label="Phone *" required type="tel" placeholder="+91 98765 43210" />
//                 </div>
//                 <Field label="Email" type="email" placeholder="you@example.com" />
//                 <div>
//                   <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
//                     Interested program
//                   </label>
//                   <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground">
//                     <option>Select a program…</option>
//                     <option>AI & Robotics — Class 5–7</option>
//                     <option>AI & Robotics — Class 8–10</option>
//                     <option>Advanced AI — Class 11–12</option>
//                     <option>Engineering / Graduate Program</option>
//                     <option>Bootcamp / Workshop</option>
//                     <option>School / College Partnership</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
//                     Message
//                   </label>
//                   <textarea
//                     rows={4}
//                     placeholder="Tell us about your goals…"
//                     className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background btn-glow"
//                 >
//                   Book my free demo class →
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

// function Field({
//   label,
//   ...props
// }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
//   return (
//     <div>
//       <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
//         {label}
//       </label>
//       <input
//         {...props}
//         className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
//       />
//     </div>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { Phone, MessageCircle, Mail, MapPin, Check } from "lucide-react";
import { useRegion } from "@/lib/region";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Book a free demo · WEE PAL" },
      { name: "description", content: "Book a free AI & Robotics demo class. Call, WhatsApp, email or visit our Old Malakpet lab in Hyderabad." },
      { property: "og:title", content: "Contact WEE PAL — Book a free demo" },
      { property: "og:description", content: "Call, WhatsApp, email or visit our Hyderabad lab." },
    ],
  }),
  component: ContactPage,
});

const indiaContacts = [
  { icon: Phone, label: "Call us", value: "+91 6300974920", href: "tel:+916300974920" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 6300974920", href: "https://wa.me/916300974920" },
  { icon: Mail, label: "Email", value: "weepalindia@gmail.com", href: "mailto:weepalindia@gmail.com" },
  { icon: MapPin, label: "Visit our lab", value: "16-9-423/c Old Malakpet, Hyderabad" },
];

const intlContacts = [
  { icon: Phone, label: "Call us", value: "+971-582887447", href: "tel:+971582887447" },
  { icon: MessageCircle, label: "WhatsApp", value: "+971-582887447", href: "https://wa.me/971582887447" },
  { icon: Mail, label: "Email", value: "weepalindia@gmail.com", href: "mailto:weepalindia@gmail.com" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { region } = useRegion();
  const contacts = region === "intl" ? intlContacts : indiaContacts;

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact & enroll</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-6xl text-balance">
            Start your <span className="text-primary">AI journey</span> today.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Whether you're a student, parent or institution — we'll guide you to the perfect program.
            Book a free demo, call us, or drop a message. We reply within 24 hours.
          </p>

          <div className="mt-10 space-y-3">
            {contacts.map((c) => {
              const inner = (
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-foreground">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-0.5 text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.value} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={c.value}>{inner}</div>
              );
            })}
          </div>
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
            <div className="font-display text-2xl font-semibold tracking-tight">Book a free demo class</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details — we'll reach out within 24 hours.
            </p>

            {sent ? (
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-surface p-5 text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check size={16} />
                </span>
                Thank you! We'll contact you shortly.
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name *" required type="text" placeholder="Your name" />
                  <Field label="Phone *" required type="tel" placeholder={region === "intl" ? "+971 xx xxx xxxx" : "+91 98765 43210"} />
                </div>
                <Field label="Email" type="email" placeholder="you@example.com" />
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Interested program
                  </label>
                  <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground">
                    <option>Select a program…</option>
                    <option>AI & Robotics — Class 5–7</option>
                    <option>AI & Robotics — Class 8–10</option>
                    <option>Advanced AI — Class 11–12</option>
                    <option>Engineering / Graduate Program</option>
                    <option>Bootcamp / Workshop</option>
                    <option>School / College Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals…"
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background btn-glow"
                >
                  Book my free demo class →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
      />
    </div>
  );
}
