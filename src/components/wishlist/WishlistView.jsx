"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import AddToCartButton from "@/components/shop/AddToCartButton";
import WishlistButton from "@/components/shop/WishlistButton";
import { useShop } from "@/context/ShopContext";
import { formatCurrency } from "@/utils/formatCurrency";

export default function WishlistView() {
  const { wishlist, productLookup, removeFromWishlist } = useShop();

  const savedProducts = wishlist
    .map((id) => productLookup.get(id))
    .filter(Boolean);

  if (savedProducts.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
          <Heart size={28} strokeWidth={1.8} />
        </span>

        <h2 className="mt-5 text-xl font-extrabold text-gray-900">
          Your Wishlist is Empty
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
          Save products you love and they&apos;ll appear here for easy access.
        </p>

        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <p className="text-sm font-medium text-gray-500">
        {savedProducts.length}{" "}
        {savedProducts.length === 1 ? "saved item" : "saved items"}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {savedProducts.map((product) => (
          <article key={product.id} className="group">
            {/* Image */}
            <div className="relative">
              <Link
                href={`/shop/${product.id}`}
                className="relative block aspect-square overflow-hidden rounded-xl bg-gray-100"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-2 top-2 rounded bg-white/95 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-gray-700 shadow-sm">
                  {product.category}
                </span>
              </Link>

              <WishlistButton product={product} variant="icon" />
              <AddToCartButton product={product} variant="icon" />
            </div>

            {/* Details */}
            <div className="pt-3">
              <Link href={`/shop/${product.id}`}>
                <h3 className="line-clamp-2 text-sm font-bold leading-5 text-gray-900 transition-colors hover:text-emerald-700">
                  {product.name}
                </h3>
              </Link>

              <p className="mt-2 text-sm font-bold text-emerald-700">
                {formatCurrency(product.price)}
              </p>

              {/* Actions */}
              <div className="mt-3 flex items-center gap-2">
                <AddToCartButton
                  product={product}
                  variant="full"
                  compact
                  className="flex-1"
                />

                <button
                  type="button"
                  aria-label={`Remove ${product.name} from wishlist`}
                  title="Remove from wishlist"
                  onClick={() => removeFromWishlist(product.id)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                >
                  <Trash2 size={15} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
