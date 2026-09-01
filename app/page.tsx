"use client";

import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { IndustryShowcase } from "@/components/industry-showcase";
import { WhyUsSection } from "@/components/why-us-section";
import { GeoSection } from "@/components/geo-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SiteGeist",
  alternateName: "Sean Patrick Jordaan t/a SiteGeist",
  url: "https://sitespire.co.za",
  description:
    "Professional managed websites for South African businesses. Custom-built, hosted, and maintained.",
  email: "support@sitespire.co.za",
  telephone: "+27-68-612-8512",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Bashee Street",
    addressLocality: "Stilfontein",
    addressRegion: "North West",
    postalCode: "2551",
    addressCountry: "ZA",
  },
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  priceRange: "R599/month",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <IndustryShowcase />
        <WhyUsSection />
        <GeoSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
