"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, ArrowRight, Star, MapPin, Phone, Clock,
  ChevronRight, ChevronDown, Wifi, Shield, Calendar, Users,
  Zap, Heart, Award, CheckCircle2, Flame, Scale, Scissors,
  Wrench, Sparkles, Dumbbell, UtensilsCrossed
} from "lucide-react";
import { Button } from "@/components/button";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

interface IndustrySite {
  id: string;
  industry: string;
  name: string;
  domain: string;
  built: string;
  features: string[];
  accent: string;
  accentDim: string;
  bg: string;
  bgAlt: string;
  bgCard: string;
  pages: string[];
}

/* ═══════════════════════════════════════════════════════════════════════════
   INDUSTRY DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const SITES: IndustrySite[] = [
  {
    id: "plumber",
    industry: "Plumbing",
    name: "FlowRight Plumbing & Drain",
    domain: "flowrightplumbing.co.za",
    built: "40hrs",
    features: ["24/7 Dispatch", "WhatsApp Quote Engine", "CoC Certified", "Live GPS Tracking"],
    accent: "#0284C7",
    accentDim: "#0369A1",
    bg: "#0B1120",
    bgAlt: "#0F172A",
    bgCard: "#1E293B",
    pages: ["Home", "Emergency", "Services", "Reviews"],
  },
  {
    id: "dentist",
    industry: "Dental",
    name: "SmileCraft Medical & Cosmetic",
    domain: "smilecraftdental.co.za",
    built: "47hrs",
    features: ["Online Patient Portal", "Medical Aid Direct Claim", "Instant Booking", "Teledentistry"],
    accent: "#10B981",
    accentDim: "#059669",
    bg: "#04120C",
    bgAlt: "#05201A",
    bgCard: "#064E3B",
    pages: ["Home", "Treatments", "Book", "Team"],
  },
  {
    id: "gym",
    industry: "Fitness",
    name: "IRONFORGE Athletic Club",
    domain: "ironforgegym.co.za",
    built: "54hrs",
    features: ["Class Scheduler", "Trainer Profiles", "Door Access API", "Body Composition Scan"],
    accent: "#EF4444",
    accentDim: "#DC2626",
    bg: "#080303",
    bgAlt: "#1A0505",
    bgCard: "#2D0A0A",
    pages: ["Home", "Classes", "Pricing", "Coaches"],
  },
  {
    id: "lawyer",
    industry: "Legal",
    name: "Sterling & Associates",
    domain: "sterlinglaw.co.za",
    built: "61hrs",
    features: ["Case Assessment Form", "Secure Document Upload", "Practice Area Directory", "Client Portal"],
    accent: "#8B5CF6",
    accentDim: "#7C3AED",
    bg: "#080612",
    bgAlt: "#0F0B1E",
    bgCard: "#1C1535",
    pages: ["Home", "Practice", "Team", "Consult"],
  },
  {
    id: "restaurant",
    industry: "Restaurant",
    name: "Amber Kitchen & Cocktail Lounge",
    domain: "amberkitchen.co.za",
    built: "68hrs",
    features: ["Table Reservation Engine", "QR Digital Menu", "Event Booking", "Loyalty Rewards"],
    accent: "#F59E0B",
    accentDim: "#D97706",
    bg: "#120E06",
    bgAlt: "#1C1708",
    bgCard: "#2D2210",
    pages: ["Home", "Menu", "Reserve", "Events"],
  },
  {
    id: "salon",
    industry: "Beauty",
    name: "LUXE Hair & Aesthetics Studio",
    domain: "luxehairstudio.co.za",
    built: "75hrs",
    features: ["Stylist Calendar Sync", "Style Gallery", "Automated SMS Reminders", "Loyalty Points"],
    accent: "#EC4899",
    accentDim: "#DB2777",
    bg: "#120410",
    bgAlt: "#1A0618",
    bgCard: "#2D0A28",
    pages: ["Home", "Services", "Gallery", "Book"],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED: MACOS WINDOW FRAME
   ═══════════════════════════════════════════════════════════════════════════ */

function WindowFrame({
  site,
  activePage,
  onPageChange,
  children,
}: {
  site: IndustrySite;
  activePage: number;
  onPageChange: (i: number) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111111]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[#1F1F1F] bg-[#0D0D0D] px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md bg-[#1A1A1A] px-2.5 py-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="font-mono text-[9px] text-[#888]">{site.domain}</span>
        </div>
        <ExternalLink className="h-3 w-3 text-[#555]" />
      </div>

      {/* Nav */}
      <div className="flex border-b border-[#1F1F1F] bg-[#0F0F0F]">
        {site.pages.map((page, i) => (
          <button
            key={page}
            onClick={() => onPageChange(i)}
            className="relative flex-1 py-2 font-mono text-[9px] uppercase tracking-wider transition-colors"
            style={{
              color: i === activePage ? site.accent : "#555",
              background: i === activePage ? `${site.accent}08` : "transparent",
            }}
          >
            {page}
            {i === activePage && (
              <motion.div
                layoutId={`tab-${site.id}`}
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: site.accent }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   1. PLUMBING — FlowRight Plumbing & Drain
   ═══════════════════════════════════════════════════════════════════════════ */

function PlumberHome({ site }: { site: IndustrySite }) {
  const [selectedService, setSelectedService] = useState(0);
  const services = [
    { name: "Burst Geyser", price: "From R850", icon: "🔥", time: "30min response" },
    { name: "Drain Unblocking", price: "From R650", icon: "🚿", time: "45min response" },
    { name: "Leak Detection", price: "From R450", icon: "💧", time: "Same day" },
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ background: `linear-gradient(180deg, ${site.bg}, ${site.bgAlt})` }}>
      {/* Alert banner */}
      <div className="flex items-center justify-center gap-1.5 px-3 py-1.5" style={{ background: `${site.accent}15`, borderBottom: `1px solid ${site.accent}20` }}>
        <Zap className="h-3 w-3" style={{ color: "#F97316" }} />
        <span className="text-[8px] font-semibold" style={{ color: "#F97316" }}>
          Average On-Site Arrival: 35 Minutes in Western Cape
        </span>
      </div>

      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${site.accent}10` }}>
        <div className="flex items-center gap-1.5">
          <Wrench className="h-4 w-4" style={{ color: site.accent }} />
          <span className="text-[10px] font-bold text-white">FlowRight</span>
        </div>
        <div className="flex gap-2">
          {["Emergency", "Services", "Commercial"].map(l => (
            <span key={l} className="text-[7px] text-white/40">{l}</span>
          ))}
        </div>
        <div className="rounded px-2 py-0.5 text-[7px] font-bold text-black" style={{ background: site.accent }}>
          CALL NOW
        </div>
      </div>

      {/* Hero split */}
      <div className="flex gap-3 px-3 pt-3 pb-2">
        <div className="flex-1">
          <div className="text-[12px] font-black leading-tight text-white">
            24/7 Emergency<br />Plumbers.
          </div>
          <div className="mt-0.5 text-[10px] font-bold" style={{ color: site.accent }}>
            Zero Call-Out Fee If We Repair.
          </div>
          <div className="mt-1 text-[7px] leading-relaxed text-white/40">
            Cape Town&apos;s most trusted team. Licensed, insured, and ready when you need us.
          </div>
          <div className="mt-2 flex gap-1">
            <div className="rounded px-2 py-0.5 text-[7px] font-bold text-black" style={{ background: site.accent }}>
              Book in 2 Minutes
            </div>
            <div className="rounded border px-2 py-0.5 text-[7px]" style={{ borderColor: `${site.accent}30`, color: `${site.accent}aa` }}>
              WhatsApp Us
            </div>
          </div>
        </div>

        {/* Live status widget */}
        <div className="w-[42%] space-y-1.5">
          <div className="rounded-lg p-2" style={{ background: `${site.accent}08`, border: `1px solid ${site.accent}15` }}>
            <div className="flex items-center gap-1 mb-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[7px] font-semibold text-green-400">3 Crews On Duty Nearby</span>
            </div>
            <div className="flex items-center gap-1">
              <Wifi className="h-2.5 w-2.5 text-white/30" />
              <span className="text-[6px] text-white/30">GPS-tracked vehicles</span>
            </div>
          </div>
          {/* Google rating */}
          <div className="flex items-center gap-1.5 rounded-lg p-2" style={{ background: `${site.accent}06`, border: `1px solid ${site.accent}10` }}>
            <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />)}</div>
            <div>
              <div className="text-[7px] font-bold text-white">4.9/5</div>
              <div className="text-[5px] text-white/30">180+ verified reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service cards — interactive */}
      <div className="px-3 pb-2">
        <div className="text-[7px] font-bold text-white/50 uppercase tracking-wider mb-1.5">Quick-Select Services</div>
        <div className="flex gap-1.5">
          {services.map((svc, i) => (
            <button
              key={svc.name}
              onClick={() => setSelectedService(i)}
              className="flex-1 rounded-lg p-2 text-left transition-all"
              style={{
                background: selectedService === i ? `${site.accent}15` : `${site.accent}05`,
                border: `1px solid ${selectedService === i ? `${site.accent}40` : `${site.accent}10`}`,
              }}
            >
              <div className="text-[12px] mb-0.5">{svc.icon}</div>
              <div className="text-[7px] font-bold text-white">{svc.name}</div>
              <div className="text-[8px] font-bold" style={{ color: site.accent }}>{svc.price}</div>
              <div className="text-[5px] text-white/30 mt-0.5">{svc.time}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Trust bar */}
      <div className="mx-3 mb-3 flex rounded-lg overflow-hidden" style={{ border: `1px solid ${site.accent}10` }}>
        {[{ v: "15+", l: "Years Exp" }, { v: "24/7", l: "Available" }, { v: "35min", l: "Avg Arrival" }].map(s => (
          <div key={s.l} className="flex-1 py-1.5 text-center" style={{ background: `${site.accent}05` }}>
            <div className="text-[9px] font-bold" style={{ color: site.accent }}>{s.v}</div>
            <div className="text-[5px] text-white/30">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   2. DENTAL — SmileCraft Medical & Cosmetic
   ═══════════════════════════════════════════════════════════════════════════ */

function DentistHome({ site }: { site: IndustrySite }) {
  const [selectedTime, setSelectedTime] = useState(1);
  const times = [
    { slot: "Today 11:00", available: false },
    { slot: "Today 14:00", available: true },
    { slot: "Tomorrow 09:30", available: true },
    { slot: "Tomorrow 15:00", available: true },
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ background: `linear-gradient(180deg, ${site.bg}, ${site.bgAlt})` }}>
      {/* Medical aid banner */}
      <div className="flex items-center justify-center gap-1.5 px-3 py-1.5" style={{ background: `${site.accent}10`, borderBottom: `1px solid ${site.accent}15` }}>
        <Shield className="h-3 w-3" style={{ color: site.accent }} />
        <span className="text-[7px] font-medium" style={{ color: `${site.accent}cc` }}>
          Medical Aid Rates Accepted • Discovery / Bonitas / Momentum
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${site.accent}10` }}>
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4" style={{ color: site.accent }} />
          <span className="text-[10px] font-bold text-white">SmileCraft</span>
        </div>
        <div className="rounded-full px-2.5 py-0.5 text-[7px] font-semibold text-black" style={{ background: site.accent }}>
          Book Consultation
        </div>
      </div>

      {/* Hero — centered, clinical */}
      <div className="px-4 pt-4 pb-3 text-center">
        <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full" style={{ background: `${site.accent}15`, border: `1px solid ${site.accent}25` }}>
          <Sparkles className="h-4 w-4" style={{ color: site.accent }} />
        </div>
        <div className="text-[12px] font-bold text-white leading-tight">
          Advanced, Gentle Dentistry<br />Designed Around Your Comfort.
        </div>
        <div className="mt-1 text-[7px] text-white/40 mx-auto" style={{ maxWidth: "85%" }}>
          From routine check-ups to full smile makeovers. Dr. M. van der Merwe, BDS (Wits).
        </div>
        {/* Doctor credential pill */}
        <div className="mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5" style={{ background: `${site.accent}10`, border: `1px solid ${site.accent}20` }}>
          <Award className="h-2.5 w-2.5" style={{ color: site.accent }} />
          <span className="text-[7px] font-medium" style={{ color: site.accent }}>Dr. M. van der Merwe, BDS (Wits)</span>
        </div>
      </div>

      {/* Booking widget */}
      <div className="mx-3 rounded-lg p-2.5" style={{ background: `${site.accent}06`, border: `1px solid ${site.accent}12` }}>
        <div className="flex items-center gap-1 mb-2">
          <Calendar className="h-3 w-3" style={{ color: site.accent }} />
          <span className="text-[8px] font-bold text-white">Next Available Appointments</span>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {times.map((t, i) => (
            <button
              key={t.slot}
              onClick={() => t.available && setSelectedTime(i)}
              className="rounded p-1.5 text-center transition-all"
              style={{
                background: selectedTime === i ? `${site.accent}20` : `${site.accent}05`,
                border: `1px solid ${selectedTime === i ? `${site.accent}50` : `${site.accent}08`}`,
                opacity: t.available ? 1 : 0.35,
              }}
            >
              <div className="text-[7px] font-semibold text-white">{t.slot}</div>
              <div className="text-[5px]" style={{ color: t.available ? site.accent : "#666" }}>
                {t.available ? "Available" : "Booked"}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Treatment grid */}
      <div className="mx-3 mt-2 mb-3 grid grid-cols-2 gap-1.5">
        {[
          { t: "Teeth Whitening", p: "From R1,200", icon: "✨" },
          { t: "Invisalign", p: "From R18,000", icon: "🦷" },
          { t: "Dental Implants", p: "From R8,500", icon: "🔧" },
          { t: "General Checkup", p: "From R450", icon: "🩺" },
        ].map(tr => (
          <div key={tr.t} className="rounded-lg p-2" style={{ background: `${site.accent}05`, border: `1px solid ${site.accent}08` }}>
            <div className="text-[12px] mb-0.5">{tr.icon}</div>
            <div className="text-[7px] font-semibold text-white">{tr.t}</div>
            <div className="text-[7px] font-bold" style={{ color: site.accent }}>{tr.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   3. FITNESS — IRONFORGE Athletic Club
   ═══════════════════════════════════════════════════════════════════════════ */

function GymHome({ site }: { site: IndustrySite }) {
  const [selectedClass, setSelectedClass] = useState(0);
  const [membershipType, setMembershipType] = useState<"monthly" | "annual">("monthly");
  const classes = [
    { name: "HIIT Blast", time: "06:00", coach: "Sipho M.", spots: 2, tag: "Fat Burn" },
    { name: "Powerlifting", time: "08:00", coach: "Thabo D.", spots: 8, tag: "Strength" },
    { name: "Boxing Fit", time: "17:00", coach: "Lerato K.", spots: 5, tag: "Cardio" },
    { name: "Hyrox Prep", time: "19:00", coach: "James W.", spots: 3, tag: "Endurance" },
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ background: `linear-gradient(180deg, ${site.bg}, ${site.bgAlt})` }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${site.accent}15` }}>
        <div className="flex items-center gap-1.5">
          <Dumbbell className="h-4 w-4" style={{ color: site.accent }} />
          <span className="text-[10px] font-black tracking-wider text-white">IRONFORGE</span>
        </div>
        <div className="rounded px-2 py-0.5 text-[7px] font-black text-black uppercase" style={{ background: site.accent }}>
          3-Day Free Pass
        </div>
      </div>

      {/* Hero — kinetic */}
      <div className="px-3 pt-3 pb-2" style={{ background: `linear-gradient(135deg, ${site.accent}12, transparent)` }}>
        <div className="text-[5px] font-mono uppercase tracking-widest mb-1" style={{ color: site.accent }}>
          24-Hour Access • State of the Art Equipment
        </div>
        <div className="text-[14px] font-black text-white leading-[1.05] uppercase">
          Stop Wishing.<br />Start Building.
        </div>
        <div className="mt-1 text-[7px] text-white/40">
          Free weights • Recovery Zone • Sauna • Personal Training
        </div>
      </div>

      {/* Live timetable */}
      <div className="px-3 pt-2 pb-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" style={{ color: site.accent }} />
            <span className="text-[8px] font-bold text-white">Today&apos;s Classes</span>
          </div>
          <span className="text-[6px] text-white/30">Tap to view details</span>
        </div>
        <div className="space-y-1">
          {classes.map((cls, i) => (
            <button
              key={cls.name}
              onClick={() => setSelectedClass(i)}
              className="flex w-full items-center justify-between rounded-lg p-2 transition-all"
              style={{
                background: selectedClass === i ? `${site.accent}15` : `${site.accent}05`,
                border: `1px solid ${selectedClass === i ? `${site.accent}40` : `${site.accent}08`}`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="text-[8px] font-mono" style={{ color: site.accent }}>{cls.time}</div>
                <div className="text-left">
                  <div className="text-[7px] font-bold text-white">{cls.name}</div>
                  <div className="text-[5px] text-white/30">{cls.coach}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded px-1 py-0.5 text-[5px] font-semibold" style={{ background: `${site.accent}15`, color: site.accent }}>{cls.tag}</span>
                <span className="text-[6px] font-bold" style={{ color: cls.spots <= 3 ? "#F97316" : site.accent }}>
                  {cls.spots} spots
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Membership toggle */}
      <div className="mx-3 mb-3 mt-2 rounded-lg p-2.5" style={{ background: `${site.accent}06`, border: `1px solid ${site.accent}12` }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8px] font-bold text-white">Membership</span>
          <div className="flex rounded overflow-hidden" style={{ border: `1px solid ${site.accent}20` }}>
            <button
              onClick={() => setMembershipType("monthly")}
              className="px-2 py-0.5 text-[6px] font-bold transition-colors"
              style={{ background: membershipType === "monthly" ? site.accent : "transparent", color: membershipType === "monthly" ? "#000" : "#888" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setMembershipType("annual")}
              className="px-2 py-0.5 text-[6px] font-bold transition-colors"
              style={{ background: membershipType === "annual" ? site.accent : "transparent", color: membershipType === "annual" ? "#000" : "#888" }}
            >
              Annual
            </button>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[18px] font-black" style={{ color: site.accent }}>
            R{membershipType === "monthly" ? "499" : "399"}
          </span>
          <span className="text-[7px] text-white/40">/month {membershipType === "annual" ? "(billed annually)" : "· contract-free"}</span>
        </div>
        <div className="mt-1 text-[6px] text-white/30">Includes 24/7 access · all classes · recovery zone</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. LEGAL — Sterling & Associates
   ═══════════════════════════════════════════════════════════════════════════ */

function LawyerHome({ site }: { site: IndustrySite }) {
  const [expandedPractice, setExpandedPractice] = useState<number | null>(0);
  const practices = [
    { name: "Corporate Acquisitions", desc: "M&A, due diligence, shareholder agreements, and corporate restructuring.", value: "R250M+" },
    { name: "Property Law", desc: "Conveyancing, commercial leases, sectional title, and property development.", value: "R120M+" },
    { name: "Tax Litigation", desc: "SARS disputes, tax court representation, and compliance advisory.", value: "R80M+" },
    { name: "Estate Planning", desc: "Wills, trusts, estate duty planning, and succession strategies.", value: "R45M+" },
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ background: `linear-gradient(180deg, ${site.bg}, ${site.bgAlt})` }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${site.accent}10` }}>
        <div>
          <div className="flex items-center gap-1.5">
            <Scale className="h-4 w-4" style={{ color: site.accent }} />
            <span className="text-[10px] font-bold text-white">STERLING</span>
            <span className="text-[7px] text-white/30">& Associates</span>
          </div>
        </div>
        <div className="rounded px-2 py-0.5 text-[7px] font-semibold text-black" style={{ background: site.accent }}>
          Request Case Evaluation
        </div>
      </div>

      {/* Hero — editorial */}
      <div className="px-4 pt-5 pb-3 text-center">
        <div className="mx-auto mb-2 h-px w-10" style={{ background: `linear-gradient(90deg, transparent, ${site.accent}, transparent)` }} />
        <div className="text-[5px] font-mono uppercase tracking-[0.2em] mb-2" style={{ color: `${site.accent}88` }}>
          Established 2018 • Cape Town • Sandton
        </div>
        <div className="text-[12px] font-bold text-white leading-tight">
          Strategic Legal Counsel for<br />High-Growth Enterprises.
        </div>
        <div className="mt-1 text-[7px] text-white/40 mx-auto" style={{ maxWidth: "80%" }}>
          Trusted by over 200 businesses for corporate law, property transactions, and estate planning.
        </div>
      </div>

      {/* Trust indicators */}
      <div className="mx-3 mb-3 flex gap-1.5">
        {[
          { v: "R450M+", l: "Transactional Values" },
          { v: "98.4%", l: "Settlement Rate" },
          { v: "200+", l: "Clients Served" },
        ].map(s => (
          <div key={s.l} className="flex-1 rounded-lg p-2 text-center" style={{ background: `${site.accent}06`, border: `1px solid ${site.accent}08` }}>
            <div className="text-[9px] font-bold" style={{ color: site.accent }}>{s.v}</div>
            <div className="text-[5px] text-white/30">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Practice areas — accordion */}
      <div className="mx-3 mb-3">
        <div className="text-[7px] font-bold text-white/50 uppercase tracking-wider mb-1.5">Practice Areas</div>
        <div className="space-y-1">
          {practices.map((p, i) => (
            <div key={p.name} className="rounded-lg overflow-hidden" style={{ border: `1px solid ${expandedPractice === i ? `${site.accent}30` : `${site.accent}08`}` }}>
              <button
                onClick={() => setExpandedPractice(expandedPractice === i ? null : i)}
                className="flex w-full items-center justify-between p-2 transition-all"
                style={{ background: expandedPractice === i ? `${site.accent}10` : `${site.accent}04` }}
              >
                <span className="text-[7px] font-semibold text-white">{p.name}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[6px] font-mono" style={{ color: site.accent }}>{p.value}</span>
                  <ChevronDown
                    className="h-2.5 w-2.5 text-white/30 transition-transform"
                    style={{ transform: expandedPractice === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
              </button>
              <AnimatePresence>
                {expandedPractice === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-2 text-[6px] leading-relaxed text-white/40">
                      {p.desc}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   5. RESTAURANT — Amber Kitchen & Cocktail Lounge
   ═══════════════════════════════════════════════════════════════════════════ */

function RestaurantHome({ site }: { site: IndustrySite }) {
  const [guests, setGuests] = useState(2);
  const [menuTab, setMenuTab] = useState(0);
  const menus = [
    [
      { name: "Wood-Fired Ribeye", desc: "Truffle mash, roasted veg, red wine jus", price: "R189" },
      { name: "Pan-Seared Kingklip", desc: "Lemon butter, capers, seasonal greens", price: "R159" },
      { name: "Lamb Shank", desc: "Slow-braised, creamy polenta, gremolata", price: "R175" },
    ],
    [
      { name: "Amber Old Fashioned", desc: "Bourbon, smoked maple, orange bitter", price: "R95" },
      { name: "Cape Garden Spritz", desc: "Gin, elderflower, cucumber, prosecco", price: "R85" },
      { name: "Espresso Martini", desc: "Vodka, fresh espresso, coffee liqueur", price: "R90" },
    ],
    [
      { name: "Crème Brûlée", desc: "Madagascar vanilla, caramelised sugar", price: "R65" },
      { name: "Chocolate Fondant", desc: "Molten centre, salted caramel ice cream", price: "R75" },
      { name: "Malva Pudding", desc: "Traditional, custard, Amarula cream", price: "R60" },
    ],
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ background: `linear-gradient(180deg, ${site.bg}, ${site.bgAlt})` }}>
      {/* Banner */}
      <div className="flex items-center justify-center gap-1.5 px-3 py-1.5" style={{ background: `${site.accent}12`, borderBottom: `1px solid ${site.accent}15` }}>
        <Clock className="h-3 w-3" style={{ color: site.accent }} />
        <span className="text-[7px] font-medium" style={{ color: `${site.accent}cc` }}>
          Open Today 12:00–22:30 • Live Jazz Every Friday Night
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${site.accent}10` }}>
        <div className="flex items-center gap-1.5">
          <Flame className="h-4 w-4" style={{ color: site.accent }} />
          <span className="text-[10px] font-bold italic text-white">Amber Kitchen</span>
        </div>
        <div className="flex gap-1">
          <span className="rounded-full px-1.5 py-0.5 text-[5px] font-semibold" style={{ background: `${site.accent}15`, color: site.accent }}>Halal-Friendly</span>
          <span className="rounded-full px-1.5 py-0.5 text-[5px] font-semibold" style={{ background: `${site.accent}15`, color: site.accent }}>Vegan Options</span>
        </div>
      </div>

      {/* Hero */}
      <div className="px-3 pt-3 pb-2" style={{ background: `linear-gradient(135deg, ${site.accent}10, transparent)` }}>
        <div className="text-[5px] font-mono uppercase tracking-widest mb-1" style={{ color: site.accent }}>Wood-Fired · Farm Fresh · Craft Cocktails</div>
        <div className="text-[12px] font-bold text-white leading-tight">
          Seasonal Local Ingredients.<br />Unforgettable Flame-Grilled Flavor.
        </div>
        <div className="mt-1 text-[7px] text-white/40">Cape Town&apos;s favourite farm-to-table dining experience.</div>
      </div>

      {/* Reservation widget */}
      <div className="mx-3 mt-2 rounded-lg p-2.5" style={{ background: `${site.accent}06`, border: `1px solid ${site.accent}12` }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" style={{ color: site.accent }} />
            <span className="text-[8px] font-bold text-white">Reserve a Table</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded px-2 py-1" style={{ background: `${site.accent}08`, border: `1px solid ${site.accent}15` }}>
            <Users className="h-2.5 w-2.5 text-white/40" />
            <div className="flex items-center gap-1">
              <button onClick={() => setGuests(Math.max(1, guests - 1))} className="text-[8px] text-white/50">-</button>
              <span className="text-[8px] font-bold text-white min-w-[12px] text-center">{guests}</span>
              <button onClick={() => setGuests(Math.min(10, guests + 1))} className="text-[8px] text-white/50">+</button>
            </div>
            <span className="text-[6px] text-white/30">Guests</span>
          </div>
          <div className="flex-1 rounded px-2 py-1 text-center" style={{ background: `${site.accent}08`, border: `1px solid ${site.accent}15` }}>
            <div className="text-[7px] font-semibold text-white">Tonight 19:30</div>
            <div className="text-[5px] text-white/30">Available</div>
          </div>
          <div className="rounded px-2.5 py-1 text-[7px] font-bold text-black" style={{ background: site.accent }}>
            Book
          </div>
        </div>
      </div>

      {/* Digital menu — tabbed */}
      <div className="mx-3 mt-2 mb-3">
        <div className="flex rounded overflow-hidden mb-1.5" style={{ border: `1px solid ${site.accent}15` }}>
          {["Wood-Fired Mains", "Cocktails", "Desserts"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setMenuTab(i)}
              className="flex-1 py-1 text-[6px] font-bold transition-colors"
              style={{
                background: menuTab === i ? site.accent : "transparent",
                color: menuTab === i ? "#000" : "#888",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-1">
          {menus[menuTab].map(item => (
            <div key={item.name} className="flex items-center justify-between rounded p-1.5" style={{ background: `${site.accent}04`, border: `1px solid ${site.accent}06` }}>
              <div>
                <div className="text-[7px] font-semibold text-white">{item.name}</div>
                <div className="text-[5px] text-white/30">{item.desc}</div>
              </div>
              <div className="text-[8px] font-bold" style={{ color: site.accent }}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   6. BEAUTY — LUXE Hair & Aesthetics Studio
   ═══════════════════════════════════════════════════════════════════════════ */

function SalonHome({ site }: { site: IndustrySite }) {
  const [selectedStylist, setSelectedStylist] = useState(0);
  const stylists = [
    { name: "Sarah", speciality: "Colour Specialist", rating: 4.9 },
    { name: "Elena", speciality: "Balayage Expert", rating: 5.0 },
    { name: "Nadia", speciality: "Styling & Updos", rating: 4.8 },
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ background: `linear-gradient(135deg, ${site.bg}, ${site.bgAlt})` }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${site.accent}10` }}>
        <div className="flex items-center gap-1.5">
          <Scissors className="h-4 w-4" style={{ color: site.accent }} />
          <span className="text-[10px] font-bold text-white tracking-wider">LUXE</span>
        </div>
        <div className="rounded-full px-2.5 py-0.5 text-[7px] font-semibold text-black" style={{ background: site.accent }}>
          Instant Stylist Booking
        </div>
      </div>

      {/* Hero — editorial split */}
      <div className="flex gap-3 px-3 pt-3 pb-2">
        <div className="flex-1">
          <div className="text-[5px] font-mono uppercase tracking-widest mb-1" style={{ color: site.accent }}>Premium Hair & Aesthetics</div>
          <div className="text-[12px] font-bold text-white leading-tight">
            Precision Styling &<br />Advanced Skin Treatments.
          </div>
          <div className="mt-1 text-[7px] text-white/40">
            Expert stylists. Premium products. A salon experience you deserve.
          </div>
          <div className="mt-2 flex gap-1">
            <div className="rounded-full px-2 py-0.5 text-[7px] font-bold text-black" style={{ background: site.accent }}>Book Now</div>
            <div className="rounded-full border px-2 py-0.5 text-[7px]" style={{ borderColor: `${site.accent}30`, color: `${site.accent}aa` }}>Gallery</div>
          </div>
        </div>
        {/* Decorative gradient block */}
        <div className="w-[35%] rounded-lg" style={{ background: `linear-gradient(135deg, ${site.accent}25, ${site.accent}08)` }} />
      </div>

      {/* Stylist selector */}
      <div className="mx-3 rounded-lg p-2.5" style={{ background: `${site.accent}06`, border: `1px solid ${site.accent}12` }}>
        <div className="text-[8px] font-bold text-white mb-2">Choose Your Stylist</div>
        <div className="flex gap-1.5">
          {stylists.map((stylist, i) => (
            <button
              key={stylist.name}
              onClick={() => setSelectedStylist(i)}
              className="flex-1 rounded-lg p-2 text-center transition-all"
              style={{
                background: selectedStylist === i ? `${site.accent}20` : `${site.accent}05`,
                border: `1px solid ${selectedStylist === i ? `${site.accent}50` : `${site.accent}08`}`,
              }}
            >
              <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold" style={{ background: `${site.accent}20`, color: site.accent }}>
                {stylist.name[0]}
              </div>
              <div className="text-[7px] font-semibold text-white">{stylist.name}</div>
              <div className="text-[5px] text-white/30">{stylist.speciality}</div>
              <div className="mt-0.5 flex items-center justify-center gap-0.5">
                <Star className="h-2 w-2 fill-amber-400 text-amber-400" />
                <span className="text-[6px] text-white/50">{stylist.rating}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price menu */}
      <div className="mx-3 mt-2 mb-3">
        <div className="text-[7px] font-bold text-white/50 uppercase tracking-wider mb-1.5">Services & Pricing</div>
        <div className="space-y-1">
          {[
            { s: "Balayage & Cut", p: "From R950", time: "3hrs" },
            { s: "HydraFacial", p: "From R650", time: "1hr" },
            { s: "Keratin Treatment", p: "From R1,200", time: "2.5hrs" },
            { s: "Bridal Package", p: "From R2,500", time: "4hrs" },
          ].map(svc => (
            <div key={svc.s} className="flex items-center justify-between rounded-lg p-2" style={{ background: `${site.accent}05`, border: `1px solid ${site.accent}08` }}>
              <div>
                <div className="text-[7px] font-semibold text-white">{svc.s}</div>
                <div className="text-[5px] text-white/30">{svc.time}</div>
              </div>
              <div className="text-[7px] font-bold" style={{ color: site.accent }}>{svc.p}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram grid preview */}
      <div className="mx-3 mb-3">
        <div className="text-[7px] font-bold text-white/50 uppercase tracking-wider mb-1.5">Recent Work</div>
        <div className="grid grid-cols-4 gap-1">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square rounded" style={{ background: `linear-gradient(135deg, ${site.accent}${15 + i * 8}, ${site.accent}${8 + i * 4})` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   INNER PAGE (shared across all industries)
   ═══════════════════════════════════════════════════════════════════════════ */

function InnerPage({ site, pageIndex }: { site: IndustrySite; pageIndex: number }) {
  const pageName = site.pages[pageIndex];
  return (
    <div className="h-full overflow-y-auto p-4" style={{ background: `linear-gradient(180deg, ${site.bg}, ${site.bgAlt})` }}>
      <div className="text-[11px] font-bold text-white mb-3">{pageName}</div>
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="flex gap-2.5 rounded-lg p-2.5" style={{ background: `${site.accent}05`, border: `1px solid ${site.accent}08` }}>
            <div className="h-10 w-10 shrink-0 rounded-lg" style={{ background: `linear-gradient(135deg, ${site.accent}18, ${site.accent}08)` }} />
            <div className="flex-1">
              <div className="h-2 w-2/5 rounded mb-1.5" style={{ background: `${site.accent}20` }} />
              <div className="h-1.5 w-full rounded mb-1" style={{ background: `${site.accent}08` }} />
              <div className="h-1.5 w-3/4 rounded" style={{ background: `${site.accent}06` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOME PAGE COMPONENT MAP
   ═══════════════════════════════════════════════════════════════════════════ */

const HOME_COMPONENTS: Record<string, React.FC<{ site: IndustrySite }>> = {
  plumber: PlumberHome,
  dentist: DentistHome,
  gym: GymHome,
  lawyer: LawyerHome,
  restaurant: RestaurantHome,
  salon: SalonHome,
};

/* ═══════════════════════════════════════════════════════════════════════════
   SHOWCASE CARD
   ═══════════════════════════════════════════════════════════════════════════ */

function IndustryCard({ site, index }: { site: IndustrySite; index: number }) {
  const [activePage, setActivePage] = useState(0);
  const HomeComponent = HOME_COMPONENTS[site.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group"
    >
      <div
        className="overflow-hidden rounded-xl transition-all duration-500"
        style={{
          boxShadow: `0 0 0 1px ${site.accent}10, 0 4px 24px rgba(0,0,0,0.4)`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${site.accent}40, 0 0 40px ${site.accent}12, 0 8px 32px rgba(0,0,0,0.5)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px ${site.accent}10, 0 4px 24px rgba(0,0,0,0.4)`;
        }}
      >
        <WindowFrame site={site} activePage={activePage} onPageChange={setActivePage}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="h-full"
            >
              {activePage === 0 && HomeComponent ? (
                <HomeComponent site={site} />
              ) : (
                <InnerPage site={site} pageIndex={activePage} />
              )}
            </motion.div>
          </AnimatePresence>
        </WindowFrame>
      </div>

      {/* Card footer */}
      <div className="mt-3 px-1">
        <div className="mb-1.5 flex items-center justify-between">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider"
            style={{ background: `${site.accent}15`, color: site.accent }}
          >
            {site.industry}
          </span>
          <span className="font-mono text-[9px] text-[#666]">Built in {site.built}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {site.features.map((feat) => (
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

/* ═══════════════════════════════════════════════════════════════════════════
   EXPORTED SECTION
   ═══════════════════════════════════════════════════════════════════════════ */

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
            Every site is custom-built by our team. Click through the pages, interact
            with the widgets, and see the quality that goes into every project.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {SITES.map((site, i) => (
            <IndustryCard key={site.id} site={site} index={i} />
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
