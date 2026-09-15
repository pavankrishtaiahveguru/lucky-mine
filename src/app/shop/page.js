import ShopBrowser from "@/components/shop/ShopBrowser";

export const metadata = {
  title: "Shop | Lucky Mine",
  description: "Explore everyday essentials across all Lucky Mine categories.",
};

export default function ShopPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Page Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
            Our Collection
          </span>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shop All Products
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Explore our collection of everyday essentials across health, beauty,
            sports, grocery, art &amp; craft, and tools.
          </p>
        </div>

        {/* Search + Filters + Product Grid */}
        <div className="mt-10">
          <ShopBrowser />
        </div>
      </div>
    </section>
  );
}
