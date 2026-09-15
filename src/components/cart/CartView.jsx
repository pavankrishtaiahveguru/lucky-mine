"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatCurrency } from "@/utils/formatCurrency";

export default function CartView() {
  const {
    cart,
    productLookup,
    updateCartQuantity,
    removeFromCart,
    getCartSubtotal,
    showToast,
  } = useShop();

  const cartItems = cart
    .map((item) => ({ ...item, product: productLookup.get(item.id) }))
    .filter((item) => item.product);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
          <ShoppingCart size={28} strokeWidth={1.8} />
        </span>

        <h2 className="mt-5 text-xl font-extrabold text-gray-900">
          Your Cart is Empty
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>

        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const subtotal = getCartSubtotal();

  const handleCheckout = () => {
    // No checkout backend exists yet — be honest about it.
    showToast("Checkout will be available soon.", "cart");
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">
      {/* Cart Items */}
      <div>
        <ul className="divide-y divide-gray-100 border-y border-gray-100">
          {cartItems.map(({ product, quantity }) => (
            <li key={product.id} className="flex gap-4 py-5 sm:gap-6">
              {/* Image */}
              <Link
                href={`/shop/${product.id}`}
                className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </Link>

              {/* Details */}
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                      {product.category}
                    </p>

                    <Link href={`/shop/${product.id}`}>
                      <h3 className="mt-0.5 text-sm font-bold leading-5 text-gray-900 transition-colors hover:text-emerald-700">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {formatCurrency(product.price)} each
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={`Remove ${product.name} from cart`}
                    title="Remove from cart"
                    onClick={() => removeFromCart(product.id)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors duration-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                  >
                    <Trash2 size={16} strokeWidth={1.8} />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                  {/* Quantity */}
                  <div className="inline-flex items-center rounded-lg border border-gray-200">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${product.name}`}
                      onClick={() =>
                        updateCartQuantity(product.id, quantity - 1)
                      }
                      disabled={quantity <= 1}
                      className="flex h-8 w-8 items-center justify-center rounded-l-lg text-gray-600 transition hover:bg-gray-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
                    >
                      <Minus size={14} strokeWidth={2} />
                    </button>

                    <span
                      aria-label={`Quantity of ${product.name}`}
                      className="w-9 text-center text-sm font-semibold text-gray-900"
                    >
                      {quantity}
                    </span>

                    <button
                      type="button"
                      aria-label={`Increase quantity of ${product.name}`}
                      onClick={() =>
                        updateCartQuantity(product.id, quantity + 1)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-r-lg text-gray-600 transition hover:bg-gray-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      <Plus size={14} strokeWidth={2} />
                    </button>
                  </div>

                  {/* Line subtotal */}
                  <p className="text-sm font-extrabold text-emerald-700">
                    {formatCurrency(product.price * quantity)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Summary */}
      <aside className="h-fit rounded-2xl border border-gray-100 bg-gray-50 p-6 lg:sticky lg:top-28">
        <h2 className="text-lg font-extrabold text-gray-900">Order Summary</h2>

        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-gray-500">Subtotal</dt>
            <dd className="font-semibold text-gray-900">
              {formatCurrency(subtotal)}
            </dd>
          </div>

          <div className="flex items-center justify-between">
            <dt className="text-gray-500">Shipping</dt>
            <dd className="text-gray-500">Calculated at checkout</dd>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-3">
            <dt className="text-base font-bold text-gray-900">Total</dt>
            <dd className="text-base font-extrabold text-emerald-700">
              {formatCurrency(subtotal)}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={handleCheckout}
          className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          Proceed to Checkout
        </button>

        <Link
          href="/shop"
          className="mt-3 block text-center text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
        >
          Continue Shopping
        </Link>
      </aside>
    </div>
  );
}
