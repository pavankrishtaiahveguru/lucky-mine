"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function ActionLink({
  href,
  label,
  badge,
  size = "h-10 w-10",
  iconSize = 20,
  className = "",
}) {
  return (
    <Link
      href={href}
      aria-label={badge > 0 ? `${label}, ${badge} items` : label}
      className={`relative flex ${size} items-center justify-center rounded-full text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${className}`}
    >
      {label === "Wishlist" ? (
        <Heart size={iconSize} strokeWidth={1.8} />
      ) : (
        <ShoppingCart size={iconSize} strokeWidth={1.8} />
      )}

      {badge > 0 && (
        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white">
          {badge > 9 ? "9+" : badge}
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemCount, getWishlistCount } = useShop();

  const cartCount = getCartItemCount();
  const wishlistCount = getWishlistCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl">
            <Image
              src="/logo.png"
              alt="Lucky Mine"
              width={626}
              height={543}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-emerald-700"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <ActionLink href="/wishlist" label="Wishlist" badge={wishlistCount} />

          <ActionLink href="/cart" label="Cart" badge={cartCount} />
        </div>

        {/* Mobile Actions: Wishlist, Cart, Menu (desktop uses the block above) */}
        <div className="flex items-center gap-1 md:hidden">
          {/* Hidden while the menu is open so only the close button remains */}
          {!isMenuOpen && (
            <>
              <ActionLink href="/wishlist" label="Wishlist" badge={wishlistCount} />

              <ActionLink href="/cart" label="Cart" badge={cartCount} />
            </>
          )}

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-gray-100 px-2 py-4 text-sm font-medium text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
