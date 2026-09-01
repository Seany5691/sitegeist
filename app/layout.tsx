import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitespire.co.za"),
  title: {
    default: "SiteGeist — Professional Websites for South African Businesses",
    template: "%s | SiteGeist",
  },
  description:
    "Custom-built websites for local businesses — designed, hosted, and managed by our team. 14-day free trial, no upfront cost, from R599/month.",
  keywords: [
    "website design South Africa",
    "small business website",
    "website as a service",
    "WaaS",
    "managed website",
    "web design agency",
    "generative engine optimization",
    "GEO",
  ],
  authors: [{ name: "Sean Patrick Jordaan", url: "https://sitespire.co.za" }],
  creator: "SiteGeist",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://sitespire.co.za",
    siteName: "SiteGeist",
    title: "SiteGeist — Professional Websites for South African Businesses",
    description:
      "Custom-built websites for local businesses — designed, hosted, and managed by our team. 14-day free trial, no upfront cost, from R599/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteGeist — Professional Websites for South African Businesses",
    description:
      "Custom-built websites for local businesses — designed, hosted, and managed by our team. 14-day free trial, no upfront cost, from R599/month.",
  },
  alternates: {
    canonical: "https://sitespire.co.za",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#080808" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg-primary text-text-primary antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-bg-primary"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
