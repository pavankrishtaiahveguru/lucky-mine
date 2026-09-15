"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Check, CheckCircle2, Heart, ShoppingCart, X } from "lucide-react";
import { products } from "@/data/products";

const ShopContext = createContext(null);

const STORAGE_KEY = "lucky-mine-shop-state";

// Pre-hydration snapshot: server HTML must match the first client render,
// so counts start at 0 and hydrate from localStorage in an effect.
const EMPTY_STATE = { cart: [], wishlist: [] };

function safeParse(value) {
  try {
    const parsed = JSON.parse(value);

    if (!parsed || typeof parsed !== "object") return null;

    const cart = Array.isArray(parsed.cart)
      ? parsed.cart.filter(
          (item) =>
            Number.isFinite(item?.id) &&
            Number.isFinite(item?.quantity) &&
            item.quantity > 0
        )
      : [];
    const wishlist = Array.isArray(parsed.wishlist)
      ? parsed.wishlist.filter((item) => Number.isFinite(item?.id))
      : [];

    return { cart, wishlist };
  } catch {
    return null;
  }
}

export function ShopProvider({ children }) {
  // Cart: [{ id, quantity }] — wishlist: [id, ...]. Product objects are
  // always re-read from src/data/products.js via a lookup map, so stale
  // copies are never stored in state or rendered.
  const [cart, setCart] = useState(EMPTY_STATE.cart);
  const [wishlist, setWishlist] = useState(EMPTY_STATE.wishlist);
  const [toasts, setToasts] = useState([]);
  const toastIdRef = useRef(0);

  const productLookup = useMemo(
    () => new Map(products.map((product) => [product.id, product])),
    []
  );

  // Hydrate from localStorage after mount (client-only, avoids SSR mismatch).
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsed = safeParse(stored);

        if (parsed) {
          // SSR-safe hydration: state intentionally starts empty to match
          // the server HTML, then adopts the persisted state after mount.
          // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of persisted state
          setCart(parsed.cart);
          setWishlist(parsed.wishlist);
        }
      }
    } catch {
      // Ignore unreadable storage; start with an empty state.
    }
  }, []);

  // Persist on every change (after hydration).
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ cart, wishlist })
      );
    } catch {
      // Ignore storage failures (private mode, quota, etc.).
    }
  }, [cart, wishlist]);

  const showToast = useCallback((message, icon = "cart") => {
    const id = ++toastIdRef.current;

    setToasts((current) => [
      ...current.slice(-2),
      { id, message, icon, leaving: false },
    ]);

    setTimeout(() => {
      setToasts((current) =>
        current.map((toast) =>
          toast.id === id ? { ...toast, leaving: true } : toast
        )
      );
    }, 2400);

    setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 2800);
  }, []);

  // --- Wishlist -----------------------------------------------------------

  const addToWishlist = useCallback(
    (product) => {
      setWishlist((current) =>
        current.includes(product.id) ? current : [...current, product.id]
      );

      showToast("Added to your wishlist.", "heart");
    },
    [showToast]
  );

  const removeFromWishlist = useCallback(
    (productId) => {
      setWishlist((current) => current.filter((id) => id !== productId));

      showToast("Removed from your wishlist.", "heart");
    },
    [showToast]
  );

  const isInWishlist = useCallback(
    (productId) => wishlist.includes(productId),
    [wishlist]
  );

  const getWishlistCount = useCallback(() => wishlist.length, [wishlist]);

  // --- Cart ---------------------------------------------------------------

  const addToCart = useCallback(
    (product) => {
      const exists = cart.some((item) => item.id === product.id);

      setCart((current) => {
        const existing = current.find((item) => item.id === product.id);

        if (existing) {
          return current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        return [...current, { id: product.id, quantity: 1 }];
      });

      showToast(
        exists
          ? "Added another item to your cart."
          : "Product added to your cart.",
        "cart"
      );
    },
    [cart, showToast]
  );

  const removeFromCart = useCallback(
    (productId) => {
      setCart((current) => current.filter((item) => item.id !== productId));

      showToast("Product removed from your cart.", "cart");
    },
    [showToast]
  );

  const updateCartQuantity = useCallback(
    (productId, quantity) => {
      setCart((current) =>
        current.map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, Number(quantity) || 1) }
            : item
        )
      );

      showToast("Cart quantity updated.", "cart");
    },
    [showToast]
  );

  const getCartItemCount = useCallback(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const getCartSubtotal = useCallback(
    () =>
      cart.reduce((total, item) => {
        const product = productLookup.get(item.id);

        return total + (product ? product.price * item.quantity : 0);
      }, 0),
    [cart, productLookup]
  );

  // --- Derived ------------------------------------------------------------

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      productLookup,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getWishlistCount,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      getCartItemCount,
      getCartSubtotal,
      showToast,
    }),
    [
      cart,
      wishlist,
      productLookup,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getWishlistCount,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      getCartItemCount,
      getCartSubtotal,
      showToast,
    ]
  );

  // --- Toast viewport -----------------------------------------------------

  const iconFor = {
    cart: ShoppingCart,
    heart: Heart,
    check: CheckCircle2,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}

      {/* Shared toast viewport */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 right-6 z-[70] flex w-full max-w-xs flex-col gap-2"
      >
        {toasts.map((toast) => {
          const Icon = iconFor[toast.icon] ?? Check;

          return (
            <div
              key={toast.id}
              role="status"
              className={`pointer-events-auto flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl transition-all duration-300 ${
                toast.leaving
                  ? "translate-y-2 opacity-0"
                  : "animate-toast-in opacity-100"
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Icon size={18} strokeWidth={2} />
              </span>

              <span className="flex-1 text-sm font-medium text-gray-900">
                {toast.message}
              </span>

              <button
                type="button"
                aria-label="Dismiss notification"
                onClick={() =>
                  setToasts((current) =>
                    current.filter((item) => item.id !== toast.id)
                  )
                }
                className="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }

  return context;
}
