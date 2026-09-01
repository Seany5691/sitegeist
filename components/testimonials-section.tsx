"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  business: string;
  industry: string;
  quote: string;
  rating: number;
  initials: string;
  accentColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Johan van der Merwe",
    business: "Van der Merwe Plumbing",
    industry: "Plumbing",
    quote:
      "I was paying R2,000 a month to a marketing agency and getting nothing. SiteGeist had my new site live in two days. My phone hasn't stopped ringing since.",
    rating: 5,
    initials: "JM",
    accentColor: "#4da6ff",
  },
  {
    name: "Dr. Priya Naidoo",
    business: "SmileCraft Dental",
    industry: "Dental",
    quote:
      "The team understood exactly what I needed. Online booking, patient info, clean design — everything just works. And they handle all the updates for me.",
    rating: 5,
    initials: "PN",
    accentColor: "#4ddf8e",
  },
  {
    name: "Sipho Dlamini",
    business: "IronForge Gym",
    industry: "Fitness",
    quote:
      "We went from a Facebook page to a real website in 48 hours. Members can see the class schedule, book sessions, and sign up online. Game changer.",
    rating: 5,
    initials: "SD",
    accentColor: "#ff4d4d",
  },
  {
    name: "Marlize Botha",
    business: "Sterling & Associates",
    industry: "Legal",
    quote:
      "Professional, fast, and they actually listened to what we wanted. Our clients constantly compliment the new site. Best decision we made this year.",
    rating: 5,
    initials: "MB",
    accentColor: "#8b8bff",
  },
  {
    name: "Thabo Molefe",
    business: "Ember Kitchen",
    industry: "Restaurant",
    quote:
      "Reservations went up 40% in the first month. The online menu and booking system work perfectly on phones. Couldn't be happier with the result.",
    rating: 5,
    initials: "TM",
    accentColor: "#ffb74d",
  },
  {
    name: "Anika Pretorius",
    business: "Luxe Hair Studio",
    industry: "Beauty",
    quote:
      "I showed the team a few ideas and they nailed it on the first try. My clients love the online booking and the gallery looks amazing. So worth it.",
    rating: 5,
    initials: "AP",
    accentColor: "#e066e0",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-hover"
    >
      {/* Quote icon */}
      <Quote
        className="absolute right-4 top-4 h-8 w-8 opacity-10"
        style={{ color: testimonial.accentColor }}
      />

      {/* Stars */}
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-accent text-accent"
          />
        ))}
      </div>

      {/* Quote text */}
      <p className="mb-6 text-sm leading-relaxed text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold"
          style={{
            backgroundColor: `${testimonial.accentColor}20`,
            color: testimonial.accentColor,
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">
            {testimonial.name}
          </p>
          <p className="text-xs text-text-muted">
            {testimonial.business} · {testimonial.industry}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Real businesses. Real results. Here&apos;s what happens when you
            let our team handle your online presence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
