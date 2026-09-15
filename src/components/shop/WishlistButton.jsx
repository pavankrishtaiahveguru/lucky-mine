"use client";

import { Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

/**
 * Wishlist toggle: outlined heart when the product is not saved,
 * filled emerald heart when it is. Never rendered inside a Link —
 * position it as a sibling within a relative container.
 *
 * variant "icon": compact round button, revealed on card hover.
 * variant "full": labelled button for product detail pages.
 */
export default function WishlistButton({
  product,
  variant = "icon",
  className = "",
}) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useShop();

  const saved = isInWishlist(product.id);

  const handleClick = () => {
    if (saved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const label = saved
    ? `Remove ${product.name} from wishlist`
    : `Add ${product.name} to wishlist`;

  if (variant === "icon") {
    return (
      <button
        type="button"
        aria-label={label}
        aria-pressed={saved}
        title={saved ? "Remove from wishlist" : "Add to wishlist"}
        onClick={handleClick}          className={`absolute bottom-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-gray-50 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 lg:translate-y-2 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${
          saved
            ? "text-emerald-700"
            : "text-gray-500 lg:opacity-0"
        } ${className}`}
      >
        <Heart
          size={16}
          strokeWidth={1.8}
          fill={saved ? "currentColor" : "none"}
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={saved}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
        saved
          ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300"
          : "border-gray-200 bg-white text-gray-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
      } ${className}`}
    >
      <Heart
        size={18}
        strokeWidth={1.8}
        fill={saved ? "currentColor" : "none"}
      />
      {saved ? "Saved to Wishlist" : "Add to Wishlist"}
    </button>
  );
}
