import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Dumbbell,
  Eye,
  HeartPulse,
  LayoutGrid,
  Palette,
  ShoppingBasket,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "About Us | Lucky Mine",
  description:
    "Learn more about Lucky Mine and our everyday product categories.",
};

const offerings = [
  {
    name: "Health & Household",
    description:
      "Everyday essentials for a clean, organized, and comfortable home.",
    icon: HeartPulse,
    bg: "bg-emerald-50",
    iconColor: "text-emerald-700",
  },
  {
    name: "Beauty & Personal Care",
    description:
      "Products for everyday beauty, grooming, and personal care routines.",
    icon: Sparkles,
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    name: "Sports & Outdoor",
    description:
      "Essentials for fitness, recreation, sports, and outdoor activities.",
    icon: Dumbbell,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Grocery",
    description:
      "Everyday pantry staples, snacks, beverages, and grocery essentials.",
    icon: ShoppingBasket,
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    name: "Art & Craft",
    description: "Creative supplies and materials for art, craft, and DIY projects.",
    icon: Palette,
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    name: "Tools",
    description: "Practical tools and accessories for repairs, maintenance, and DIY work.",
    icon: Wrench,
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
];

const reasons = [
  {
    title: "Everyday Essentials",
    description:
      "Explore products for everyday needs across a variety of categories.",
    icon: ShoppingBasket,
  },
  {
    title: "Multiple Categories",
    description:
      "Discover a wide range of products organized into convenient categories.",
    icon: LayoutGrid,
  },
  {
    title: "Simple Shopping",
    description:
      "Browse products with a clean and straightforward shopping experience.",
    icon: Compass,
  },
  {
    title: "Easy Discovery",
    description:
      "Find products through categories and simple product browsing.",
    icon: Eye,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              About Lucky Mine
            </span>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-emerald-950 sm:text-5xl">
              Everyday Essentials, All in One Place
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Lucky Mine brings together a variety of everyday products across
              multiple categories, making it simple to discover what you need in
              one convenient place.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Our Story
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Lucky Mine
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Lucky Mine is an online shopping destination focused on bringing
              everyday essentials together across a range of useful categories.
              From household and personal care products to sports, grocery, art
              &amp; craft, and tools, the platform is designed to make product
              discovery simple and convenient.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Our Categories
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Everyday essentials organized into six convenient categories.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href="/shop"
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.bg} ${category.iconColor} transition-all duration-300 group-hover:scale-105`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-700">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
                    Explore Category
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-emerald-50 to-white p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                <Target size={23} strokeWidth={1.8} />
              </div>

              <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">
                Our Mission
              </h2>

              <p className="mt-3 text-base leading-7 text-gray-600">
                Our mission is to make everyday shopping simple by bringing
                useful products and diverse categories together in one
                convenient destination.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-lime-50 to-white p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                <Eye size={23} strokeWidth={1.8} />
              </div>

              <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">
                Our Vision
              </h2>

              <p className="mt-3 text-base leading-7 text-gray-600">
                To create a convenient shopping destination where customers can
                easily explore, discover, and shop for their everyday needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lucky Mine */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Why Lucky Mine
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Shop with Lucky Mine?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl"
            >
              Start Shopping
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
