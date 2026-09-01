"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/button";
import { CheckCircle, Loader2, AlertCircle, Headphones } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  domain: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    domain: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    if (!form.subject.trim()) newErrors.subject = "Please select a subject.";
    if (!form.message.trim()) newErrors.message = "Please describe your issue.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          domain: form.domain || undefined,
          subject: form.subject,
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
          Support Request Sent!
        </h3>
        <p className="mt-2 max-w-sm text-text-secondary">
          Your request has been forwarded to our support team. We&apos;ll
          respond at <span className="text-accent">{form.email}</span> as soon
          as possible.
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
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/5">
          <Headphones className="h-5 w-5 text-accent" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-primary">Need Support?</h3>
          <p className="text-sm text-text-muted">
            Existing clients — we&apos;ll get back to you ASAP.
          </p>
        </div>
      </div>

      {serverError && (
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
          <p className="text-sm text-red-300">{serverError}</p>
        </div>
      )}

      <div className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="support-fullName"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="support-fullName"
            name="fullName"
            autoComplete="name"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 transition-colors"
            style={{ borderColor: errors.fullName ? "#EF4444" : undefined }}
            placeholder="Your name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "support-fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="support-fullName-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="support-email"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="support-email"
            name="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 transition-colors"
            style={{ borderColor: errors.email ? "#EF4444" : undefined }}
            placeholder="your@email.co.za"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "support-email-error" : undefined}
          />
          {errors.email && (
            <p id="support-email-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="support-domain"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Your Website Domain
          </label>
          <input
            type="text"
            id="support-domain"
            name="domain"
            value={form.domain}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
            placeholder="e.g. yourbusiness.co.za"
          />
        </div>

        <div>
          <label
            htmlFor="support-subject"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Subject <span className="text-accent">*</span>
          </label>
          <select
            id="support-subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-1 transition-colors"
            style={{
              borderColor: errors.subject ? "#EF4444" : undefined,
              color: form.subject ? "#FFFFFF" : "#808080",
            }}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "support-subject-error" : undefined}
          >
            <option value="" disabled>Select a topic...</option>
            <option value="Website Update Request">Website Update Request</option>
            <option value="Website Down / Not Loading">Website Down / Not Loading</option>
            <option value="Domain / DNS Issue">Domain / DNS Issue</option>
            <option value="Email Issue">Email Issue</option>
            <option value="Billing / Payment Query">Billing / Payment Query</option>
            <option value="Cancellation Request">Cancellation Request</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p id="support-subject-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="support-message"
            className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Details <span className="text-accent">*</span>
          </label>
          <textarea
            id="support-message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded-lg border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 transition-colors"
            style={{ borderColor: errors.message ? "#EF4444" : undefined }}
            placeholder="Describe the issue or what you need changed..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "support-message-error" : undefined}
          />
          {errors.message && (
            <p id="support-message-error" className="mt-1.5 text-xs text-red-400" role="alert">
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
          "Submit Support Request"
        )}
      </Button>
    </form>
  );
}
