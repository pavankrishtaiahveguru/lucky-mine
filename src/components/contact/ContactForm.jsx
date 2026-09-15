"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// No backend/email integration exists yet, so there is no real
// submission mechanism. The form validates client-side and shows
// the setup notice below instead of pretending the message was
// delivered. When an API route becomes available, post the form
// there inside handleSubmit and switch to the success/error states.
const SETUP_NOTICE =
  "Contact form is currently being set up. Please check back soon.";
const ERROR_NOTICE =
  "We couldn't send your message right now. Please try again.";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState(null); // { type: "info" | "error", text }

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

    if (form.subject.trim().length === 0) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (form.message.trim().length === 0) {
      nextErrors.message = "Please enter your message.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setNotice(null);
      return;
    }

    // Ready for future integration: send the form here and show the
    // success ("Thanks for reaching out! Your message has been
    // received.") or error notice based on the response.
    setNotice({ type: "info", text: SETUP_NOTICE });
  };

  const inputClasses = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500/30 ${
      hasError
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 focus:border-emerald-500"
    }`;

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

        {/* Phone Number (optional) */}
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1.5 block text-sm font-semibold text-gray-900"
          >
            Phone Number
          </label>

          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder="Optional"
            autoComplete="tel"
            className={inputClasses(false)}
          />
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

      {/* Notice */}
      {notice && (
        <div
          role="status"
          className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
            notice.type === "info"
              ? "border-emerald-100 bg-emerald-50 text-emerald-800"
              : "border-red-100 bg-red-50 text-red-700"
          }`}
        >
          {notice.text}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:w-auto"
      >
        Send Message
        <Send size={17} strokeWidth={1.8} />
      </button>
    </form>
  );
}
