"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, Headphones, RefreshCw, Users, Shield } from "lucide-react";

const REASONS = [
  {
    icon: DollarSign,
    title: "No Huge Upfront Costs",
    description:
      "Traditional agencies charge R15,000–R50,000 before you see a single page. We don't. You get a fully built, professional website with zero upfront investment.",
  },
  {
    icon: Clock,
    title: "Delivered in Days, Not Months",
    description:
      "While agencies drag projects out for weeks with back-and-forth emails, our team gets your site built, reviewed, and live within 48 hours.",
  },
  {
    icon: Users,
    title: "A Real Team Behind Every Site",
    description:
      "Every website is designed and built by our in-house team — designers, developers, and copywriters who know what converts visitors into customers.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    description:
      "Want to change text? Swap images? Adjust colours? Just ask. Unlimited edits are included, handled by our team, not a clunky DIY editor.",
  },
  {
    icon: Headphones,
    title: "Priority Support, Always",
    description:
      "You get a dedicated point of contact. No ticket systems. No chatbots. Real people who know your site and respond within hours.",
  },
  {
    icon: Shield,
    title: "Risk-Free Guarantee",
    description:
      "If you're not happy with your site, walk away. No contracts, no cancellation fees, no hard feelings. We earn your business every month.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Why SiteGeist
          </span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The Agency Model Is Broken.
            <br />
            <span className="text-text-secondary">We Fixed It.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Big agencies charge big money and deliver slow results. We built
            SiteGeist to give local businesses the same quality — faster,
            simpler, and without the price tag.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-hover hover:shadow-[0_0_30px_rgba(223,255,0,0.06)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/20 bg-accent/5 transition-colors group-hover:bg-accent/10">
                <reason.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
