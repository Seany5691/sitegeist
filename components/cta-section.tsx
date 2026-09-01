"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/button";

export function CtaSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-accent/20 bg-bg-card p-8 text-center sm:p-12 glow-accent"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Let&apos;s Work Together
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready for a Website
            <br />
            <span className="text-text-secondary">That Actually Works?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Tell us about your business. Our team will get back to you within
            24 hours with a custom plan — no obligations, no pressure.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/contact">
              <Button size="lg" className="group">
                Get Your Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Contact methods */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-text-muted">
            <a
              href="tel:+27686128512"
              className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>068 612 8512</span>
            </a>
            <a
              href="mailto:hello@sitespire.co.za"
              className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>hello@sitespire.co.za</span>
            </a>
            <a
              href="https://wa.me/27686128512"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
