import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | SiteGeist",
  description:
    "Read the full Terms and Conditions governing the use of SiteGeist's website-as-a-service, web development, hosting, and managed technical support offerings.",
  alternates: {
    canonical: "https://sitespire.co.za/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-2 text-sm text-text-muted">
              Last updated: 1 September 2026
            </p>

            {/* Section 1: Entity & Operating Identity */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                1. Entity &amp; Operating Identity
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  The website{" "}
                  <a
                    href="https://sitespire.co.za"
                    className="text-accent hover:underline"
                  >
                    https://sitespire.co.za
                  </a>{" "}
                  is owned and operated by{" "}
                  <strong className="text-text-primary">
                    Sean Patrick Jordaan t/a SiteGeist
                  </strong>{" "}
                  (&ldquo;SiteGeist&rdquo;), a sole proprietorship registered and
                  operating in the Republic of South Africa.
                </p>
                <p>
                  <strong className="text-text-primary">
                    Physical Address:
                  </strong>{" "}
                  4 Bashee Street, Stilfontein, North West, 2551, South Africa.
                </p>
                <p>
                  <strong className="text-text-primary">Email:</strong>{" "}
                  <a
                    href="mailto:support@sitespire.co.za"
                    className="text-accent hover:underline"
                  >
                    support@sitespire.co.za
                  </a>
                </p>
                <p>
                  <strong className="text-text-primary">Phone:</strong>{" "}
                  <a
                    href="tel:+27686128512"
                    className="text-accent hover:underline"
                  >
                    068 612 8512
                  </a>
                </p>
                <p>
                  By accessing or using this website and/or engaging SiteGeist
                  for any service, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </section>

            {/* Section 2: Service Scope */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                2. Service Scope
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  SiteGeist provides B2B Website-as-a-Service (WaaS) solutions
                  to South African businesses. Our core offerings include, but
                  are not limited to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Custom website design and development tailored to the
                    client&apos;s industry and brand identity.
                  </li>
                  <li>
                    Cloud hosting infrastructure provisioning, configuration,
                    and ongoing management.
                  </li>
                  <li>
                    Domain name registration, administration, DNS configuration,
                    and renewal management on behalf of the client.
                  </li>
                  <li>
                    Managed technical updates, security patching, performance
                    monitoring, and uptime maintenance.
                  </li>
                  <li>
                    Search engine optimisation (SEO) and Generative Engine
                    Optimisation (GEO) for AI-powered search platforms.
                  </li>
                </ul>
                <p>
                  The specific scope of deliverables for each engagement will be
                  outlined in the project proposal or invoice issued to the
                  client prior to commencement.
                </p>
              </div>
            </section>

            {/* Section 3: 14-Day Trial & Payment Terms */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                3. 14-Day Trial &amp; Payment Terms
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">
                    3.1 Visual Preview / Trial Period.
                  </strong>{" "}
                  Upon receiving a client&apos;s brief, SiteGeist will build and
                  present a custom visual preview of the proposed website. The
                  client is granted a 14-day trial period to evaluate the build,
                  request revisions, and determine whether to proceed.
                </p>
                <p>
                  <strong className="text-text-primary">
                    3.2 Invoice Issuance.
                  </strong>{" "}
                  If the client explicitly approves the trial build, SiteGeist
                  will issue an official tax invoice. The invoice is payable
                  strictly within 24 hours of receipt unless otherwise agreed in
                  writing.
                </p>
                <p>
                  <strong className="text-text-primary">
                    3.3 Payment Processing.
                  </strong>{" "}
                  All setup payments and recurring monthly management
                  subscriptions are processed securely via{" "}
                  <strong className="text-text-primary">PayFast (Pty) Ltd</strong>
                  , a PCI-DSS Level 1 certified payment gateway. SiteGeist does
                  not store or process any card details on its own servers.
                </p>
                <p>
                  <strong className="text-text-primary">
                    3.4 Recurring Billing.
                  </strong>{" "}
                  Monthly management subscriptions are billed in advance on a
                  month-to-month basis via PayFast&apos;s automated recurring
                  billing system. The subscription continues until cancelled in
                  accordance with our{" "}
                  <a
                    href="/refund-policy"
                    className="text-accent hover:underline"
                  >
                    Refund &amp; Cancellation Policy
                  </a>
                  .
                </p>
                <p>
                  <strong className="text-text-primary">
                    3.5 Non-Payment.
                  </strong>{" "}
                  Failure to settle invoices within the stated payment terms may
                  result in the temporary suspension of hosting services,
                  including the removal of the client&apos;s website from public
                  access. SiteGeist will provide reasonable notice before
                  effecting any suspension.
                </p>
              </div>
            </section>

            {/* Section 4: Domain Names & IP */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                4. Domain Names &amp; Intellectual Property
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">
                    4.1 Domain Ownership.
                  </strong>{" "}
                  Any domain name registered by SiteGeist on behalf of a client
                  remains 100% the property of the client upon settlement of
                  the relevant invoice. SiteGeist acts solely as the
                  administrative and technical contact for the duration of the
                  service agreement.
                </p>
                <p>
                  <strong className="text-text-primary">
                    4.2 Client Content.
                  </strong>{" "}
                  All client-provided content, including but not limited to
                  logos, brand assets, copywriting, images, and business
                  information, remains the exclusive intellectual property of
                  the client at all times.
                </p>
                <p>
                  <strong className="text-text-primary">
                    4.3 SiteGeist Platform.
                  </strong>{" "}
                  SiteGeist retains full ownership of its underlying software
                  builder templates, platform architecture, proprietary tools,
                  code frameworks, and any pre-existing intellectual property
                  used in the delivery of services. No licence to these assets
                  is granted to the client unless expressly agreed in writing.
                </p>
              </div>
            </section>

            {/* Section 5: Governing Law */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                5. Governing Law &amp; Jurisdiction
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  These Terms and Conditions are governed by and construed in
                  accordance with the laws of the{" "}
                  <strong className="text-text-primary">
                    Republic of South Africa
                  </strong>
                  .
                </p>
                <p>
                  Any disputes arising from or in connection with these terms
                  shall be subject to the exclusive jurisdiction of the
                  South African courts.
                </p>
                <p>
                  SiteGeist complies with all applicable South African
                  legislation, including but not limited to the Consumer
                  Protection Act (Act 68 of 2008) and the Protection of
                  Personal Information Act (Act 4 of 2013). For details on how
                  we handle your personal data, please refer to our{" "}
                  <a
                    href="/privacy"
                    className="text-accent hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
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
