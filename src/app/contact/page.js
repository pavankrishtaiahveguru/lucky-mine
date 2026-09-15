import { Clock, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Lucky Mine",
  description: "Get in touch with Lucky Mine for questions and enquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Get in Touch
            </span>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-emerald-950 sm:text-5xl">
              We&apos;d Love to Hear From You
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Have a question or need assistance? Send us a message and we&apos;ll
              get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Contact Information */}
            <div className="flex flex-col">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                  <MessageCircle size={23} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 text-xl font-extrabold text-gray-900">
                  Customer Support
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  We&apos;re here to help with your questions and enquiries.
                </p>

                <div className="mt-8 space-y-5">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white text-emerald-700 shadow-sm">
                      <Phone size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Phone
                      </p>

                      <a
                        href="tel:3074002229"
                        aria-label="Call Lucky Mine at 3074002229"
                        className="mt-0.5 block w-fit text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                      >
                       +1 307 400 2229
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white text-emerald-700 shadow-sm">
                      <Clock size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Business Hours
                      </p>

                      <div className="mt-0.5 space-y-1.5 text-sm">
                        <p>
                          <span className="block font-semibold text-gray-900">
                            Monday – Friday
                          </span>
                          <span className="block text-gray-500">
                            7:00 AM – 3:00 PM
                          </span>
                        </p>

                        <p>
                          <span className="block font-semibold text-gray-900">
                            Saturday – Sunday
                          </span>
                          <span className="block text-gray-500">Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-extrabold text-gray-900">
                Send us a Message
              </h2>

              <p className="mt-1.5 text-sm text-gray-500">
                Fill in the form below and we&apos;ll respond as soon as possible.
              </p>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
