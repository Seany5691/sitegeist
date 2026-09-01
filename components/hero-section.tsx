"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/terminal";
import { Button } from "@/components/button";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

const STATS = [
  { icon: Clock, value: "48hr", label: "preview delivery" },
  { icon: Shield, value: "14-day", label: "free trial" },
  { icon: Zap, value: "100%", label: "commitment" },
] as const;

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Copy */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-text-secondary">
                  Now accepting new clients
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                We Build Websites
                <br />
                <span className="text-text-secondary">That Work.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                Professional websites for local businesses — designed, built,
                and delivered by our team in days, not months. No templates. No
                shortcuts. Just results.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/contact">
                  <Button size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="/#showcase">
                  <Button variant="secondary" size="lg">
                    View Our Work
                  </Button>
                </a>
              </div>

              {/* Trust bar */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-text-muted">
                {STATS.map((stat) => (
                  <div key={stat.value} className="flex items-center gap-2">
                    <stat.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span className="font-mono text-lg text-accent">
                      {stat.value}
                    </span>
                    <span className="text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <div className="flex justify-center lg:justify-end">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
