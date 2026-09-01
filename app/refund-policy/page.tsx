import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | SiteGeist",
  description:
    "SiteGeist's Refund and Cancellation Policy covering our 14-day trial safeguard, non-refundable setup fees, subscription cancellations, and domain handover procedures.",
  alternates: {
    canonical: "https://sitespire.co.za/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-2 text-sm text-text-muted">
              Last updated: 1 September 2026
            </p>

            {/* Section 1: 14-Day Trial Safeguard */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                1. 14-Day Trial Safeguard
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  SiteGeist operates a{" "}
                  <strong className="text-text-primary">
                    14-day visual preview and trial period
                  </strong>{" "}
                  for every new client engagement. During this period, our team
                  builds a custom website tailored to your business, which you
                  are free to evaluate, test, and request revisions on.
                </p>
                <p>
                  No payment is required during the trial period. You are under
                  no financial obligation until you have explicitly reviewed
                  and approved the completed build.
                </p>
              </div>
            </section>

            {/* Section 2: Pre-Payment Cancellations */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                2. Pre-Payment Cancellations
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  If you choose to cancel at any point during the 14-day trial
                  period, prior to approving the build:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    No invoice will be generated or issued to you.
                  </li>
                  <li>
                    No fee of any kind will be charged to your account or
                    payment method.
                  </li>
                  <li>
                    Zero financial obligation is incurred on your part.
                  </li>
                </ul>
                <p>
                  To cancel during the trial period, simply notify us via email
                  at{" "}
                  <a
                    href="mailto:support@sitespire.co.za"
                    className="text-accent hover:underline"
                  >
                    support@sitespire.co.za
                  </a>{" "}
                  or inform your dedicated project contact directly.
                </p>
              </div>
            </section>

            {/* Section 3: Non-Refundable Setup Fees */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                3. Non-Refundable Setup Fees
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Once you have{" "}
                  <strong className="text-text-primary">
                    explicitly approved the trial build
                  </strong>{" "}
                  and an official tax invoice has been issued (payable within 24
                  hours), the setup fee becomes{" "}
                  <strong className="text-text-primary">non-refundable</strong>.
                </p>
                <p>
                  At the point of invoice issuance, our team has already
                  completed the following work on your behalf:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Custom website design and development tailored to your
                    business.
                  </li>
                  <li>
                    Cloud hosting infrastructure provisioning and deployment.
                  </li>
                  <li>
                    Domain configuration, DNS setup, and SSL certificate
                    installation.
                  </li>
                  <li>
                    Content integration, testing, and quality assurance.
                  </li>
                </ul>
                <p>
                  As these development and deployment services are delivered in
                  full prior to invoicing, the setup fee is not eligible for a
                  refund once the build has been approved and the invoice has
                  been issued.
                </p>
              </div>
            </section>

            {/* Section 4: Subscription Cancellations */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                4. Subscription Cancellations
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Ongoing website management and hosting subscriptions operate
                  on a{" "}
                  <strong className="text-text-primary">
                    month-to-month basis
                  </strong>
                  . There are no long-term contracts or lock-in periods.
                </p>
                <p>
                  You may cancel your subscription at any time by providing{" "}
                  <strong className="text-text-primary">
                    30 days&apos; written notice
                  </strong>{" "}
                  to{" "}
                  <a
                    href="mailto:support@sitespire.co.za"
                    className="text-accent hover:underline"
                  >
                    support@sitespire.co.za
                  </a>
                  .
                </p>
                <p>
                  Upon receipt of your cancellation notice:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Your website and hosting services will remain fully active
                    and accessible until the end of the current paid billing
                    cycle.
                  </li>
                  <li>
                    No further recurring charges will be processed after the
                    active billing cycle concludes.
                  </li>
                  <li>
                    SiteGeist will coordinate the orderly wind-down of hosting
                    services and any necessary data handover.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5: Domain Handover */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                5. Domain Handover
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  Upon cancellation of your subscription and settlement of all
                  outstanding account balances, SiteGeist will transfer full
                  management and control of your domain name(s) to you upon
                  request.
                </p>
                <p>
                  The domain handover process includes:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Transfer of domain registrar credentials or authorisation
                    codes (EPP codes) to the client.
                  </li>
                  <li>
                    Updating of domain registrant contact details to reflect
                    the client&apos;s information.
                  </li>
                  <li>
                    Assistance with DNS migration to the client&apos;s new
                    hosting provider, if required.
                  </li>
                </ul>
                <p>
                  Domain handover requests should be submitted in writing to{" "}
                  <a
                    href="mailto:support@sitespire.co.za"
                    className="text-accent hover:underline"
                  >
                    support@sitespire.co.za
                  </a>
                  . SiteGeist will process domain transfers within 7 business
                  days of receiving a valid request, provided all account
                  balances have been settled.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
