"use client";

import { motion } from "framer-motion";
import { Phone, Wrench, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "We Talk",
    description:
      "A quick call to understand your business, your style, and what you need. Our team gets the details — you get back to running your business.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "We Build",
    description:
      "Our designers and developers get to work. Custom layout, professional copy, search optimisation — all handled by our team. You'll see a preview within 48 hours.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "You Go Live",
    description:
      "Love it? We push it live. Want changes? We revise until it's perfect. No contracts, no pressure — just a website that works for your business.",
  },
] as const;

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Our Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A Professional Website.
            <br />
            <span className="text-text-secondary">
              Zero Hassle. Delivered Fast.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:block" />

          <div className="space-y-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-8"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center">
                  <div className="absolute inset-0 rounded-xl border border-accent/30 bg-bg-card" />
                  <step.icon className="relative z-10 h-6 w-6 text-accent" aria-hidden="true" />
                  <span className="relative z-10 mt-0.5 font-mono text-[10px] text-accent">
                    {step.number}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
