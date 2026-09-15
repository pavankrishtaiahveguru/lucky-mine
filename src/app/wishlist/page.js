import WishlistView from "@/components/wishlist/WishlistView";

export const metadata = {
  title: "Wishlist | Lucky Mine",
  description: "Save your favorite products at Lucky Mine.",
};

export default function WishlistPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Page Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
            My Collection
          </span>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Wishlist
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Save your favorite products and come back to them whenever
            you&apos;re ready.
          </p>
        </div>

        <div className="mt-10">
          <WishlistView />
        </div>
      </div>
    </section>
  );
}
