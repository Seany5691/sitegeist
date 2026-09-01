import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SiteGeist",
  description:
    "SiteGeist's POPIA-compliant Privacy Policy detailing how we collect, process, store, and protect your personal information in accordance with South African law.",
  alternates: {
    canonical: "https://sitespire.co.za/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-text-muted">
              Last updated: 1 September 2026
            </p>

            {/* Section 1: POPIA Commitment */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                1. POPIA Compliance Commitment
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">
                    Sean Patrick Jordaan t/a SiteGeist
                  </strong>{" "}
                  (&ldquo;SiteGeist&rdquo;) is fully committed to complying
                  with the{" "}
                  <strong className="text-text-primary">
                    Protection of Personal Information Act, 2013 (Act 4 of 2013)
                  </strong>{" "}
                  (&ldquo;POPIA&rdquo;) of the Republic of South Africa.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store,
                  disclose, and protect your personal information when you visit{" "}
                  <a
                    href="https://sitespire.co.za"
                    className="text-accent hover:underline"
                  >
                    https://sitespire.co.za
                  </a>{" "}
                  or engage our services. By using our website or providing your
                  personal information, you consent to the processing described
                  in this policy.
                </p>
                <p>
                  SiteGeist operates as the responsible party in terms of POPIA
                  and is accountable for the personal information in its care.
                </p>
              </div>
            </section>

            {/* Section 2: Information Collected */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                2. Information We Collect
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We collect personal information directly from you when you
                  engage our services, request a quote, or communicate with us.
                  The types of personal information we collect include:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-text-primary">
                      Representative Name:
                    </strong>{" "}
                    Full name of the primary business contact or authorised
                    representative.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Business Name:
                    </strong>{" "}
                    The registered or trading name of your business entity.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      VAT / Tax Details:
                    </strong>{" "}
                    VAT registration number or tax reference number where
                    applicable.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Billing Email Address:
                    </strong>{" "}
                    The email address used for invoicing, payment
                    confirmations, and account communications.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Phone / WhatsApp Number:
                    </strong>{" "}
                    A contact telephone number for project coordination and
                    support purposes.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Physical Street Address:
                    </strong>{" "}
                    The business or correspondence address provided for billing
                    and domain registration records.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Domain Assets:
                    </strong>{" "}
                    Domain name(s), registrar login credentials (where
                    applicable), DNS records, and related technical assets
                    managed on your behalf.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Purpose of Data Processing */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                3. Purpose of Data Processing
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  We process your personal information strictly for the
                  following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Building, configuring, and presenting custom website trial
                    previews for your evaluation.
                  </li>
                  <li>
                    Generating and issuing official tax invoices within the
                    24-hour payment window following your approval of a trial
                    build.
                  </li>
                  <li>
                    Processing setup payments and issuing recurring monthly
                    subscription billing through our payment gateway partner,
                    PayFast (Pty) Ltd.
                  </li>
                  <li>
                    Providing ongoing technical support, hosting management,
                    domain administration, and maintenance services.
                  </li>
                  <li>
                    Communicating project updates, service notifications,
                    billing reminders, and account-related correspondence.
                  </li>
                  <li>
                    Complying with any applicable legal, regulatory, or tax
                    obligations under South African law.
                  </li>
                </ul>
                <p>
                  We will not use your personal information for any purpose
                  other than those stated above without your prior consent,
                  unless required or permitted by law.
                </p>
              </div>
            </section>

            {/* Section 4: PayFast Third-Party Disclosure */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                4. PayFast Third-Party Card Processing Disclosure
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">
                    SiteGeist does NOT store, record, or process credit card
                    details, debit card credentials, or bank account passwords
                    on our servers.
                  </strong>{" "}
                  All financial transactions and automated recurring
                  subscriptions are handled securely through our PCI-DSS Level
                  1 certified payment gateway partner, PayFast (Pty) Ltd.
                </p>
                <p>
                  When you make a payment or subscribe to a recurring billing
                  plan, your payment credentials are submitted directly to
                  PayFast&apos;s secure servers. SiteGeist receives only a
                  transaction confirmation and reference number from PayFast;
                  we never have access to your full card number, CVV, or
                  banking password.
                </p>
                <p>
                  For information on how PayFast handles your financial data,
                  please refer to the{" "}
                  <a
                    href="https://payfast.co.za/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    PayFast Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Section 5: Security & Rights */}
            <section className="mt-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                5. Data Security &amp; Your Rights
              </h2>
              <div className="mt-4 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">
                    5.1 Security Measures.
                  </strong>{" "}
                  SiteGeist implements industry-standard security measures to
                  protect your personal information against unauthorised access,
                  alteration, disclosure, or destruction. These measures include
                  SSL/TLS encryption for data in transit, secure hosting
                  infrastructure, access controls, and regular security
                  reviews.
                </p>
                <p>
                  <strong className="text-text-primary">
                    5.2 Data Retention.
                  </strong>{" "}
                  We retain your personal information only for as long as
                  necessary to fulfil the purposes for which it was collected,
                  or as required by applicable law. Upon termination of the
                  service relationship and settlement of all outstanding
                  accounts, we will securely delete or anonymise your data
                  within a reasonable period, unless retention is required by
                  law.
                </p>
                <p>
                  <strong className="text-text-primary">
                    5.3 Your Rights Under POPIA.
                  </strong>{" "}
                  In terms of the Protection of Personal Information Act, you
                  have the right to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Request access to the personal information we hold about
                    you.
                  </li>
                  <li>
                    Request correction or updating of inaccurate or incomplete
                    personal information.
                  </li>
                  <li>
                    Request the deletion or destruction of your personal
                    information, subject to our legal retention obligations.
                  </li>
                  <li>
                    Object to the processing of your personal information for
                    direct marketing purposes.
                  </li>
                  <li>
                    Lodge a complaint with the Information Regulator of South
                    Africa if you believe your rights have been infringed.
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, or if you have questions
                  about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:support@sitespire.co.za"
                    className="text-accent hover:underline"
                  >
                    support@sitespire.co.za
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
