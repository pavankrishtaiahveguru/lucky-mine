"use client";

import { useEffect, useMemo, useState } from "react";
import { PackageSearch, SearchX } from "lucide-react";
import ShopFilters from "./ShopFilters";
import ProductCard from "./ProductCard";
import {
  getCategoryBySlug,
  getProductsByCategory,
  products,
} from "@/data/products";

// "Featured" keeps the curated data order; "Newest" starts from the
// end of the data (most recently added products first).
const sorters = {
  featured: () => 0,
  newest: (a, b) => b.id - a.id,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  "name-asc": (a, b) => a.name.localeCompare(b.name),
};

export default function ShopBrowser() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  // Adopt a ?category=<slug> URL param once on mount (e.g. from the Home
  // category cards) so there is a single filtering mechanism. The URL is
  // only read after mount: reading it during render would break static
  // prerendering and cause a hydration mismatch.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("category");

    if (slug) {
      const name = getCategoryBySlug(slug);

      if (name) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time adoption of the URL param
        setCategory(name);
      }
    }
  }, []);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const matchesQuery =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    return filtered.sort(sorters[sort] ?? sorters.featured);
  }, [search, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("featured");
  };

  const hasActiveFilters =
    search.trim().length > 0 || category !== "all" || sort !== "featured";

  // The selected category exists in the filters but currently has no
  // products in the data (distinct from a search with zero results).
  const emptyCategory =
    category !== "all" && getProductsByCategory(category).length === 0;

  return (
    <>
      {/* Filters */}
      <ShopFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
      />

      {/* Product count */}
      <p className="mt-5 text-sm font-medium text-gray-500" role="status">
        {visibleProducts.length}{" "}
        {visibleProducts.length === 1 ? "product" : "products"}
      </p>

      {/* Products */}
      {visibleProducts.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : emptyCategory ? (
        <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
            <PackageSearch size={26} strokeWidth={1.8} />
          </span>

          <h2 className="mt-5 text-lg font-bold text-gray-900">
            No products available
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
            Products for this category will appear here soon.
          </p>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
            <SearchX size={26} strokeWidth={1.8} />
          </span>

          <h2 className="mt-5 text-lg font-bold text-gray-900">
            No products found
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
            Try changing your search or category filters to find what you&apos;re
            looking for.
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </>
  );
}
