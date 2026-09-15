import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import WishlistButton from "./WishlistButton";
import { formatCurrency } from "@/utils/formatCurrency";

/**
 * Shared product card used by the Shop grid and the Home
 * Trending Products section. Server Component — the only
 * interactive element (Add to Cart) is a self-contained
 * Client Component and sits outside the product Link.
 */
export default function ProductCard({ product }) {
  const hasDiscount =
    Number.isFinite(product.originalPrice) &&
    product.originalPrice > product.price;

  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="group">
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

          {/* Category */}
          <span className="absolute left-2 top-2 rounded bg-white/95 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-gray-700 shadow-sm">
            {product.category}
          </span>

          {/* Discount */}
          {discountPercent !== null && (
            <span className="absolute right-2 top-2 rounded bg-lime-500 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-950 shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </Link>

        {/* Wishlist */}
        <WishlistButton product={product} variant="icon" />

        {/* Cart */}
        <AddToCartButton product={product} variant="icon" />
      </div>

      {/* Product Details */}
      <div className="pt-3">
        <Link href={`/shop/${product.id}`}>
          <h3 className="line-clamp-2 text-sm font-bold leading-5 text-gray-900 transition-colors hover:text-emerald-700">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 line-clamp-2 text-xs leading-4 text-gray-500">
          {product.description}
        </p>

        <p className="mt-2 flex items-baseline gap-2">
          <span className="text-sm font-bold text-emerald-700">
            {formatCurrency(product.price)}
          </span>

          {hasDiscount && (
            <span className="text-xs font-medium text-gray-400 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </p>
      </div>
    </article>
  );
}
