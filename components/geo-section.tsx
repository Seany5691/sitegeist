"use client";

import { motion } from "framer-motion";
import { GeoVisualization } from "@/components/geo-visualization";
import { TrendingUp, Globe, Search } from "lucide-react";

const BENEFITS = [
  {
    icon: Search,
    title: "Found Everywhere, Not Just Google",
    description:
      "When someone asks ChatGPT, Gemini, or Perplexity for a local plumber, dentist, or lawyer — your business shows up. We structure your site so every AI platform can find and recommend you.",
  },
  {
    icon: Globe,
    title: "Built for How People Search Today",
    description:
      "Over 40% of consumers now use AI tools to find local services. Traditional SEO only covers Google. Our approach covers every platform your customers are using.",
  },
  {
    icon: TrendingUp,
    title: "More Visibility, More Customers",
    description:
      "Sites optimised for generative search see 3x more referral traffic from AI platforms. That means more phone calls, more bookings, and more revenue for your business.",
  },
] as const;

export function GeoSection() {
  return (
    <section id="geo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Search Visibility
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Your Customers Are
                <br />
                <span className="text-text-secondary">
                  Asking AI for You.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                Search has evolved. People no longer only Google &ldquo;plumber
                near me&rdquo; — they ask ChatGPT, Gemini, and Perplexity for
                recommendations. We make sure your site is built to be found and
                recommended by every one of them.
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="mt-10 space-y-6">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/5">
                    <benefit.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {benefit.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — SVG Visualization */}
          <GeoVisualization />
        </div>
      </div>
    </section>
  );
}
