"use client";

import { ShoppingCart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

/**
 * Add to cart button wired to the shared cart state.
 * variant "icon": compact round button, revealed on card hover.
 * variant "full": labelled button for product detail pages.
 */
export default function AddToCartButton({
  product,
  variant = "icon",
  compact = false,
  className = "",
}) {
  const { addToCart } = useShop();

  const label = `Add ${product.name} to cart`;

  if (variant === "icon") {
    return (
      <button
        type="button"
        aria-label={label}
        title={label}
        onClick={() => addToCart(product)}
        className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-emerald-700 hover:text-white focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${className}`}
      >
        <ShoppingCart size={16} strokeWidth={1.8} />
      </button>
    );
  }

  const paddingClasses = compact
    ? "px-3 py-2.5 text-xs"
    : "px-6 py-3.5 text-sm";

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 ${paddingClasses} font-semibold text-white shadow-lg shadow-emerald-700/20 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      <ShoppingCart size={compact ? 14 : 18} strokeWidth={1.8} />
      Add to Cart
    </button>
  );
}
