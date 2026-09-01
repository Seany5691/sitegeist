"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiteGeistLogo } from "@/components/sitegeist-logo";
import { Mail, Phone, MapPin } from "lucide-react";

const PLATFORM_LINKS = [
  { label: "Our Work", href: "/#showcase" },
  { label: "Process", href: "/#process" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Testimonials", href: "/#testimonials" },
] as const;

const LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Contact Us", href: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Column 1: Brand */}
          <div>
            <SiteGeistLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Professional managed websites for growing South African
              businesses.
            </p>
            <p className="mt-3 text-xs text-text-muted">
              Operated online via sitespire.co.za
            </p>
          </div>

          {/* Column 2: Platform Navigation */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              Platform
            </h4>
            <ul className="space-y-3">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact & Address */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-text-secondary">
                  4 Bashee Street, Stilfontein,
                  <br />
                  North West, 2551
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:support@sitespire.co.za"
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  support@sitespire.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:+27686128512"
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  068 612 8512
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-text-muted">
            &copy; 2026 Sean Patrick Jordaan t/a SiteGeist. All rights
            reserved.
          </p>
          <p className="font-mono text-xs text-text-muted">
            Payments securely processed by{" "}
            <span className="text-text-secondary">PayFast</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
