import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";

// A subset of the shared product data (first 8) for the home page.
const trendingProducts = products.slice(0, 8);

export default function TrendingProducts() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Our Selection
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trending Products
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Discover useful everyday essentials from across our categories.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1 rounded-lg border border-gray-100 bg-gray-50 p-1">
            <button
              type="button"
              className="cursor-pointer rounded-md bg-white px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm"
            >
              All
            </button>

            <button
              type="button"
              className="cursor-pointer rounded-md px-4 py-2 text-xs font-medium text-gray-500 transition hover:bg-white hover:text-gray-900"
            >
              Best Sellers
            </button>

            <button
              type="button"
              className="cursor-pointer rounded-md px-4 py-2 text-xs font-medium text-gray-500 transition hover:bg-white hover:text-gray-900"
            >
              Newest
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
          >
            Load More Products
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
