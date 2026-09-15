"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// Showcase/demo-only form: nothing is sent anywhere. Submission is
// simulated on the frontend only — no API request, no email, no
// backend endpoint, and no stored data. If a real backend becomes
// available, add the request inside handleSubmit and replace the
// simulated success flow with response-based success/error states.
const SUCCESS_TITLE = "Message sent successfully!";
const SUCCESS_TEXT =
  "Thank you for contacting Lucky Mine. We'll get back to you soon.";

const SEND_DELAY_MS = 700; // Brief "Sending..." feedback before success.
const NOTICE_DISMISS_MS = 5000; // Auto-dismiss the in-form success notice.

export default function ContactForm() {
  const { showToast } = useShop();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const noticeTimerRef = useRef(null);

  // Auto-dismiss the in-form success notice after a few seconds.
  useEffect(() => {
    if (status !== "success") return;

    noticeTimerRef.current = setTimeout(() => {
      setStatus("idle");
    }, NOTICE_DISMISS_MS);

    return () => clearTimeout(noticeTimerRef.current);
  }, [status]);

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (form.name.trim().length === 0) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.phone.trim().length === 0) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (form.subject.trim().length === 0) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (form.message.trim().length === 0) {
      nextErrors.message = "Please enter your message.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    // Showcase-only: block the browser's default submission so nothing
    // is ever sent, stored, or delivered.
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    // Simulate a short processing state, then show success — purely on
    // the frontend. No data leaves the browser.
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
      setErrors({});
      showToast(
        "Message sent successfully! Thank you for contacting Lucky Mine.",
        "check"
      );
    }, SEND_DELAY_MS);
  };

  const inputClasses = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500/30 ${
      hasError
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 focus:border-emerald-500"
    }`;

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-semibold text-gray-900"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClasses(Boolean(errors.name))}
          />

          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-semibold text-gray-900"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClasses(Boolean(errors.email))}
          />

          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1.5 block text-sm font-semibold text-gray-900"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder="Your phone number"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={inputClasses(Boolean(errors.phone))}
          />

          {errors.phone && (
            <p id="contact-phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-sm font-semibold text-gray-900"
          >
            Subject <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-subject"
            type="text"
            value={form.subject}
            onChange={handleChange("subject")}
            placeholder="How can we help?"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={
              errors.subject ? "contact-subject-error" : undefined
            }
            className={inputClasses(Boolean(errors.subject))}
          />

          {errors.subject && (
            <p
              id="contact-subject-error"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-semibold text-gray-900"
        >
          Message <span className="text-red-500">*</span>
        </label>

        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Write your message here..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${inputClasses(Boolean(errors.message))} resize-y`}
        />

        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Success notice (simulated submission — no message is delivered) */}
      {status === "success" && (
        <div
          role="status"
          className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-emerald-800"
        >
          <CheckCircle2
            size={18}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-emerald-600"
          />

          <div className="text-sm">
            <p className="font-semibold">{SUCCESS_TITLE}</p>
            <p className="mt-0.5 text-emerald-700">{SUCCESS_TEXT}</p>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSending}
        aria-busy={isSending}
        className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSending ? (
          <>
            Sending...
            <Send
              size={17}
              strokeWidth={1.8}
              className="animate-pulse"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            Send Message
            <Send size={17} strokeWidth={1.8} />
          </>
        )}
      </button>
    </form>
  );
}
