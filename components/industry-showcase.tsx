"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";

const SHOWCASE_ITEMS = [
  {
    id: "security",
    industry: "Security",
    name: "Security Services",
    domain: "securityservices.co.za",
    features: ["24/7 Dispatch", "Armed Response", "CCTV Monitoring", "Access Control"],
    accent: "#3B82F6",
    image: "/showcase/security.png",
  },
  {
    id: "bakery",
    industry: "Bakery & Catering",
    name: "Cakes & Catering",
    domain: "cakesandcatering.co.za",
    features: ["Online Ordering", "Menu Gallery", "Event Booking", "WhatsApp Orders"],
    accent: "#F59E0B",
    image: "/showcase/bakery.png",
  },
  {
    id: "photography",
    industry: "Photography",
    name: "Photography Studio",
    domain: "photography.co.za",
    features: ["Portfolio Gallery", "Online Booking", "Package Pricing", "Client Portal"],
    accent: "#EC4899",
    image: "/showcase/photography.png",
  },
  {
    id: "realestate",
    industry: "Real Estate",
    name: "Real Estate Agency",
    domain: "realestate.co.za",
    features: ["Property Listings", "Virtual Tours", "Mortgage Calculator", "Agent Profiles"],
    accent: "#10B981",
    image: "/showcase/realestate.png",
  },
  {
    id: "engineering",
    industry: "Engineering",
    name: "Engineering Firm",
    domain: "engineering.co.za",
    features: ["Project Portfolio", "Service Directory", "Quote Requests", "Compliance Docs"],
    accent: "#8B5CF6",
    image: "/showcase/engineering.png",
  },
];

function ShowcaseCard({
  item,
  index,
}: {
  item: (typeof SHOWCASE_ITEMS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group"
    >
      <div
        className="overflow-hidden rounded-xl transition-all duration-500"
        style={{
          boxShadow: `0 0 0 1px ${item.accent}10, 0 4px 24px rgba(0,0,0,0.4)`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${item.accent}40, 0 0 40px ${item.accent}12, 0 8px 32px rgba(0,0,0,0.5)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${item.accent}10, 0 4px 24px rgba(0,0,0,0.4)`;
        }}
      >
        {/* macOS Window Frame */}
        <div className="flex h-[420px] flex-col overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111111]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-[#1F1F1F] bg-[#0D0D0D] px-3 py-2">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
            </div>
            <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md bg-[#1A1A1A] px-2.5 py-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="font-mono text-[9px] text-[#888]">{item.domain}</span>
            </div>
          </div>

          {/* Scrollable Screenshot */}
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <img
              src={item.image}
              alt={`${item.name} website preview`}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="mt-3 px-1">
        <div className="mb-1.5 flex items-center justify-between">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider"
            style={{ background: `${item.accent}15`, color: item.accent }}
          >
            {item.industry}
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {item.features.map((feat) => (
            <span
              key={feat}
              className="rounded border border-[#1F1F1F] bg-[#111] px-2 py-0.5 text-[9px] text-[#A3A3A3]"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function IndustryShowcase() {
  return (
    <section id="showcase" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Our Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Websites We&apos;ve Built.
            <br />
            <span className="text-text-secondary">Industries We Serve.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Every site is custom-built by our team. Scroll through each preview
            to see the quality and detail that goes into every project.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE_ITEMS.map((item, i) => (
            <ShowcaseCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="/contact">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
