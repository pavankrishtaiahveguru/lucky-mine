import { ChevronDown, LayoutGrid, Search } from "lucide-react";
import { categories } from "@/data/products";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

/**
 * Search + category + sort controls for the Shop page.
 * Server Component — all state lives in the parent ShopBrowser
 * (Client Component), which passes values and handlers down.
 */
export default function ShopFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={17}
          strokeWidth={1.8}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-emerald-500 focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500/30"
        />
      </div>

      <div className="flex gap-3 max-lg:grid max-lg:grid-cols-2">
        {/* Category */}
        <div className="relative flex-1 max-lg:max-w-none">
          <LayoutGrid
            size={16}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            aria-label="Filter by category"
            className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white pl-11 pr-10 text-sm font-medium text-gray-900 transition focus:border-emerald-500 focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500/30"
          >
            <option value="all">All Categories</option>

            {categories.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            strokeWidth={1.8}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Sort */}
        <div className="relative flex-1 max-lg:max-w-none">
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            aria-label="Sort products"
            className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white pl-4 pr-10 text-sm font-medium text-gray-900 transition focus:border-emerald-500 focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500/30"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            strokeWidth={1.8}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
