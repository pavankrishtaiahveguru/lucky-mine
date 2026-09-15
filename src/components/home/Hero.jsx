import Link from "next/link";
import {
  HeartPulse,
  Sparkles,
  Dumbbell,
  ShoppingBasket,
  Palette,
  Wrench,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Health & Household",
    icon: HeartPulse,
  },
  {
    name: "Beauty & Personal Care",
    icon: Sparkles,
  },
  {
    name: "Sports & Outdoor",
    icon: Dumbbell,
  },
  {
    name: "Grocery",
    icon: ShoppingBasket,
  },
  {
    name: "Art & Craft",
    icon: Palette,
  },
  {
    name: "Tools",
    icon: Wrench,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-lime-500" />
              EVERYTHING YOU NEED, IN ONE PLACE
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              Discover More.
              <br />
              <span className="bg-gradient-to-r from-emerald-700 to-lime-500 bg-clip-text text-transparent">
                Shop Smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore everyday essentials across health, beauty, sports,
              grocery, art & craft, and tools — all in one convenient place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl"
              >
                Shop Now
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-emerald-800 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
              >
                Explore Categories
              </Link>
            </div>
          </div>

          {/* Category Grid */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-lime-200/40 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.name}
                    href="/shop"
                    className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white bg-white/90 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold leading-5 text-gray-800">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
