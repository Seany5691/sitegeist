"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/button";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
    if (serverError) setServerError(null);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please enter a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          businessName: form.businessName || undefined,
          email: form.email,
          phone: form.phone || undefined,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/20 bg-bg-card p-8 text-center sm:p-12 glow-accent">
        <CheckCircle className="h-12 w-12 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-text-primary">
          Thank You!
        </h3>
        <p className="mt-2 max-w-sm text-text-secondary">
          Your message has been sent to our team. We&apos;ll get back to you
          within 24 hours at{" "}
          <span className="text-accent">{form.email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-bg-card p-8 sm:p-10"
    >
      <h3 className="text-lg font-bold text-text-primary">Send Us a Message</h3>
      <p className="mt-1 text-sm text-text-muted">
        Fill in the form below and we&apos;ll respond within 24 hours.
      </p>

      {serverError && (
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
          <p className="text-sm text-red-300">{serverError}</p>
        </div>
      )}

      <div className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 transition-colors"
            style={{ borderColor: errors.fullName ? "#EF4444" : undefined }}
            placeholder="e.g. John Smith"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            autoComplete="organization"
            value={form.businessName}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
            placeholder="e.g. Smith Plumbing Pty Ltd"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 transition-colors"
            style={{ borderColor: errors.email ? "#EF4444" : undefined }}
            placeholder="e.g. john@smithplumbing.co.za"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
            placeholder="e.g. 068 612 8512"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 transition-colors"
            style={{ borderColor: errors.message ? "#EF4444" : undefined }}
            placeholder="Tell us about your business and what you need..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
