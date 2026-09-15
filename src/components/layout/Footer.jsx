import Link from "next/link";
import Image from "next/image";
import { Clock, Phone } from "lucide-react";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";
import { categories } from "@/data/products";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const linkClasses =
  "text-sm text-gray-600 transition-colors duration-200 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700";

const headingClasses = "text-sm font-bold text-emerald-900";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Lucky Mine"
                width={626}
                height={543}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 text-sm font-semibold text-gray-900">
              Everyday essentials, all in one place.
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
              Explore everyday products across health, beauty, sports, grocery,
              art &amp; craft, and tools.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className={headingClasses}>Quick Links</h3>

            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClasses}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Shop by Category */}
          <nav aria-label="Shop by category">
            <h3 className={headingClasses}>Shop by Category</h3>

            <ul className="mt-4 space-y-2.5">
              {categories.map((category) => (
                <li key={category}>
                  <Link href="/shop" className={linkClasses}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Us */}
          <div>
            <h3 className={headingClasses}>Contact Us</h3>

            <a
              href="tel:3074002229"
              aria-label="Call Lucky Mine at 3074002229"
              className="mt-4 inline-flex items-center gap-2.5 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-emerald-700">
                <Phone size={16} strokeWidth={1.8} />
              </span>
              +90 307 400 2229
            </a>

            <h3 className={`${headingClasses} mt-6`}>Business Hours</h3>

            <div className="mt-4 flex items-start gap-2.5 text-sm">
              <Clock
                size={16}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-emerald-700"
              />

              <div className="space-y-2">
                <p>
                  <span className="block font-semibold text-gray-900">
                    Monday – Friday
                  </span>
                  <span className="block text-gray-500">7:00 AM – 3:00 PM</span>
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

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lucky Mine. All rights reserved.
          </p>

          <DevelopedByStaffArc />
        </div>
      </div>
    </footer>
  );
}
