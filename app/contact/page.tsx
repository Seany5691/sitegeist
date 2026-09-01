import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { SupportForm } from "@/components/support-form";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Globe,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | SiteGeist",
  description:
    "Get in touch with SiteGeist for custom website design, hosting, and managed web services. Based in Stilfontein, North West, South Africa.",
  alternates: {
    canonical: "https://sitespire.co.za/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Get In Touch
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Have a question about our services? Ready to start your project?
              Reach out and our team will respond within 24 hours.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column: Business & Legal Details */}
            <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-10">
              <h2 className="text-lg font-bold text-text-primary">
                Business &amp; Legal Details
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                SiteGeist — Professional managed websites for South African businesses.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                      Trading Identity
                    </p>
                    <p className="mt-1 text-sm text-text-primary">SiteGeist</p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      Legal: Sean Patrick Jordaan t/a SiteGeist
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                      Website
                    </p>
                    <a
                      href="https://sitespire.co.za"
                      className="mt-1 block text-sm text-accent hover:underline"
                    >
                      https://sitespire.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                      Physical Address
                    </p>
                    <p className="mt-1 text-sm text-text-primary">
                      4 Bashee Street, Stilfontein,
                      <br />
                      North West, 2551, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                      Email Addresses
                    </p>
                    <div className="mt-1 space-y-1">
                      <a
                        href="mailto:support@sitespire.co.za"
                        className="block text-sm text-accent hover:underline"
                      >
                        support@sitespire.co.za
                        <span className="ml-2 text-xs text-text-muted">
                          (Support / Billing)
                        </span>
                      </a>
                      <a
                        href="mailto:hello@sitespire.co.za"
                        className="block text-sm text-accent hover:underline"
                      >
                        hello@sitespire.co.za
                        <span className="ml-2 text-xs text-text-muted">
                          (Sales)
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                      Phone &amp; WhatsApp
                    </p>
                    <a
                      href="tel:+27686128512"
                      className="mt-1 block text-sm text-accent hover:underline"
                    >
                      068 612 8512
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                      Operating Hours
                    </p>
                    <p className="mt-1 text-sm text-text-primary">
                      Monday – Friday: 08:00 – 17:00 SAST
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      Closed on weekends &amp; public holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <ContactForm />
          </div>

          {/* Support Form Section */}
          <div className="mx-auto mt-20 max-w-2xl">
            <SupportForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
