import CartView from "@/components/cart/CartView";

export const metadata = {
  title: "Shopping Cart | Lucky Mine",
  description:
    "Review your selected products before continuing to checkout at Lucky Mine.",
};

export default function CartPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Page Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
            Your Shopping Bag
          </span>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Review your selected products before continuing to checkout.
          </p>
        </div>

        <div className="mt-10">
          <CartView />
        </div>
      </div>
    </section>
  );
}
