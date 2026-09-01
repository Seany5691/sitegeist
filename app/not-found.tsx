import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex min-h-screen items-center justify-center pt-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <p className="font-mono text-6xl font-bold text-accent sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-3 text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/">
              <Button size="lg" className="group">
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </a>
            <a href="/contact">
              <Button variant="secondary" size="lg" className="group">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
