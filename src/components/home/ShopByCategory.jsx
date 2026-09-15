import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategorySlug } from "@/data/products";

// Category imagery lives in public/categories/. Swap the files there
// (keeping the same names) when real client photography is available.
const categories = [
  {
    name: "Health & Household",
    description: "Everyday essentials for a cleaner, healthier home.",
    image: "/categories/health-household.jpg",
    alt: "Health and household essentials",
  },
  {
    name: "Beauty & Personal Care",
    description: "Essentials for your beauty and daily care routine.",
    image: "/categories/beauty-personal-care.jpg",
    alt: "Beauty and personal care products",
  },
  {
    name: "Sports & Outdoor",
    description: "Gear and essentials for active days and adventures.",
    image: "/categories/sports-outdoor.jpg",
    alt: "Sports and outdoor essentials",
  },
  {
    name: "Grocery",
    description: "Pantry staples, snacks, beverages, and more.",
    image: "/categories/grocery.jpg",
    alt: "Grocery essentials",
  },
  {
    name: "Art & Craft",
    description: "Supplies to bring your creative ideas to life.",
    image: "/categories/art-craft.jpg",
    alt: "Art and craft supplies",
  },
  {
    name: "Tools",
    description: "Practical tools for DIY, repairs, and everyday projects.",
    image: "/categories/tools.jpg",
    alt: "Tools and DIY equipment",
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Explore Our Collection
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Find everything you need across our range of everyday essentials.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={`/shop?category=${getCategorySlug(category.name)}`}
              className="group relative block aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 pr-16 sm:p-6 sm:pr-20">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm leading-5 text-white/80">
                  {category.description}
                </p>

                <span className="mt-3 inline-block text-sm font-semibold text-lime-300 transition-colors duration-300 group-hover:text-lime-200">
                  Explore Category
                </span>
              </div>

              {/* Circular arrow (decorative — the whole card is the link) */}
              <span
                aria-hidden="true"
                className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-lime-400 group-hover:bg-lime-500 group-hover:text-emerald-950 sm:bottom-6 sm:right-6"
              >
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
          >
            View All Products
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
