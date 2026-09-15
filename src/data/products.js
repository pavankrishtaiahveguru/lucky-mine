// Single source of truth for all product data across the site.
// The Shop page displays all products; TrendingProducts on the Home page
// displays a subset. Never duplicate product arrays elsewhere.

export const categories = [
  "Health & Household",
  "Beauty & Personal Care",
  "Sports & Outdoor",
  "Grocery",
  "Art & Craft",
  "Tools",
];

// Prices are plain numbers in British Pounds (GBP) so they can be sorted
// numerically on the Shop page. Format them only at display time via
// formatCurrency() from @/utils/formatCurrency.
export const products = [
  // Health & Household
  {
    id: 1,
    name: "Everyday Wellness Essentials",
    category: "Health & Household",
    description:
      "Useful essentials for your everyday health and household needs.",
    price: 20.0,
    originalPrice: 25.0,
    image: "/products/health.jpg",
  },
  {
    id: 2,
    name: "Home Organization Set",
    category: "Health & Household",
    description:
      "Practical products to help keep every corner of your home organized.",
    price: 24.0,
    image: "/products/household.jpg",
  },
  {
    id: 3,
    name: "Daily Care Kit",
    category: "Health & Household",
    description: "Handy everyday care items for you and your family.",
    price: 22.0,
    originalPrice: 27.0,
    image: "/products/daily-care.jpg",
  },
  {
    id: 4,
    name: "Home Comfort Bundle",
    category: "Health & Household",
    description: "Simple comforts that make daily routines a little easier.",
    price: 29.0,
    image: "/products/home-comfort.jpg",
  },

  // Beauty & Personal Care
  {
    id: 5,
    name: "Daily Skincare Essentials",
    category: "Beauty & Personal Care",
    description: "Simple personal care essentials for your daily routine.",
    price: 25.0,
    image: "/products/beauty.jpg",
  },
  {
    id: 6,
    name: "Personal Care Essentials",
    category: "Beauty & Personal Care",
    description: "Everyday grooming and personal care essentials.",
    price: 23.0,
    originalPrice: 29.0,
    image: "/products/personal-care.jpg",
  },
  {
    id: 7,
    name: "Fresh Start Grooming Kit",
    category: "Beauty & Personal Care",
    description: "Grooming basics to keep you feeling fresh every day.",
    price: 21.0,
    image: "/products/grooming.jpg",
  },
  {
    id: 8,
    name: "Gentle Care Set",
    category: "Beauty & Personal Care",
    description: "Mild, everyday products suited for regular use.",
    price: 28.0,
    image: "/products/gentle-care.jpg",
  },

  // Sports & Outdoor
  {
    id: 9,
    name: "Fitness & Outdoor Gear",
    category: "Sports & Outdoor",
    description: "Practical gear for fitness, sports, and outdoor activities.",
    price: 35.0,
    originalPrice: 42.0,
    image: "/products/sports.jpg",
  },
  {
    id: 10,
    name: "Active Start Kit",
    category: "Sports & Outdoor",
    description: "Get moving with simple gear for daily workouts.",
    price: 30.0,
    image: "/products/active-kit.jpg",
  },
  {
    id: 11,
    name: "Outdoor Companion Set",
    category: "Sports & Outdoor",
    description: "Handy essentials for walks, hikes, and outdoor time.",
    price: 38.0,
    image: "/products/outdoor-set.jpg",
  },
  {
    id: 12,
    name: "Everyday Fitness Bundle",
    category: "Sports & Outdoor",
    description: "Compact fitness essentials for home and travel.",
    price: 34.0,
    originalPrice: 40.0,
    image: "/products/fitness-bundle.jpg",
  },

  // Grocery
  {
    id: 13,
    name: "Everyday Grocery Essentials",
    category: "Grocery",
    description: "Pantry staples and everyday grocery products.",
    price: 20.0,
    image: "/products/grocery.jpg",
  },
  {
    id: 14,
    name: "Pantry Staples Pack",
    category: "Grocery",
    description: "Stock your kitchen with reliable everyday staples.",
    price: 24.0,
    originalPrice: 29.0,
    image: "/products/pantry.jpg",
  },
  {
    id: 15,
    name: "Snack Time Selection",
    category: "Grocery",
    description: "Tasty everyday snacks for the whole family.",
    price: 20.0,
    image: "/products/snacks.jpg",
  },
  {
    id: 16,
    name: "Morning Essentials Box",
    category: "Grocery",
    description: "Start your day right with breakfast-time favourites.",
    price: 22.0,
    image: "/products/morning-box.jpg",
  },

  // Art & Craft
  {
    id: 17,
    name: "Creative Art Supply Kit",
    category: "Art & Craft",
    description: "Essential supplies for creative projects and crafts.",
    price: 21.0,
    originalPrice: 26.0,
    image: "/products/art-craft.jpg",
  },
  {
    id: 18,
    name: "Sketch & Draw Set",
    category: "Art & Craft",
    description: "Pencils, paper, and tools for sketching and drawing.",
    price: 20.0,
    image: "/products/sketch-set.jpg",
  },
  {
    id: 19,
    name: "DIY Craft Pack",
    category: "Art & Craft",
    description: "Materials for fun DIY projects at home or school.",
    price: 20.0,
    image: "/products/diy-craft.jpg",
  },
  {
    id: 20,
    name: "Colour & Paint Collection",
    category: "Art & Craft",
    description: "Colours, brushes, and palettes for painting sessions.",
    price: 25.0,
    originalPrice: 31.0,
    image: "/products/colour-paint.jpg",
  },

  // Tools
  {
    id: 21,
    name: "Multi-Purpose Hand Tool",
    category: "Tools",
    description: "Useful tools for everyday repairs and DIY projects.",
    price: 28.0,
    image: "/products/tools.jpg",
  },
  {
    id: 22,
    name: "Home Repair Kit",
    category: "Tools",
    description: "A compact kit for quick fixes around the house.",
    price: 34.0,
    originalPrice: 42.0,
    image: "/products/repair-kit.jpg",
  },
  {
    id: 23,
    name: "Precision Tool Set",
    category: "Tools",
    description: "Fine tools for detailed and delicate work.",
    price: 25.0,
    image: "/products/precision-tools.jpg",
  },
  {
    id: 24,
    name: "Essential Toolkit",
    category: "Tools",
    description: "Core tools every household should have on hand.",
    price: 39.0,
    originalPrice: 48.0,
    image: "/products/essential-toolkit.jpg",
  },
];

/** URL slugs for the six categories (single source of truth). */
export const categorySlugs = {
  "Health & Household": "health-household",
  "Beauty & Personal Care": "beauty-personal-care",
  "Sports & Outdoor": "sports-outdoor",
  "Grocery": "grocery",
  "Art & Craft": "art-craft",
  "Tools": "tools",
};

/** Exact category name for a URL slug, or null if unknown. */
export function getCategoryBySlug(slug) {
  const name = Object.keys(categorySlugs).find(
    (key) => categorySlugs[key] === slug
  );

  return name ?? null;
}

/** URL slug for an exact category name, or null if unknown. */
export function getCategorySlug(name) {
  return categorySlugs[name] ?? null;
}

/** Products for a given category, in data order. */
export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

/** Product lookup by id. Accepts the id in any type/shape (params are strings). */
export function getProductById(id) {
  return products.find((product) => String(product.id) === String(id));
}
