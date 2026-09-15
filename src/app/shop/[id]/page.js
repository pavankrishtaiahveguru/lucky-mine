import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import AddToCartButton from "@/components/shop/AddToCartButton";
import ProductCard from "@/components/shop/ProductCard";
import { getProductById, products } from "@/data/products";
import { formatCurrency } from "@/utils/formatCurrency";

export async function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product | Lucky Mine" };
  }

  return {
    title: `${product.name} | Lucky Mine`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const hasDiscount =
    Number.isFinite(product.originalPrice) &&
    product.originalPrice > product.price;

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 font-medium text-gray-500 transition-colors hover:text-emerald-700"
          >
            <ArrowLeft size={15} strokeWidth={1.8} />
            Shop
          </Link>

          <span aria-hidden="true" className="text-gray-300">
            /
          </span>

          <span className="font-medium text-gray-900">{product.name}</span>
        </nav>

        {/* Product */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-base leading-7 text-gray-500">
              {product.description}
            </p>

            <p className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-emerald-700">
                {formatCurrency(product.price)}
              </span>

              {hasDiscount && (
                <span className="text-lg font-medium text-gray-400 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </p>

            <div className="mt-8">
              <AddToCartButton product={product} variant="full" />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                More from {product.category}
              </h2>

              <Link
                href="/shop"
                className="text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                View all
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
