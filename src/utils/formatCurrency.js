// Single source of truth for all currency formatting on the site.
// The shop trades in US Dollars (USD). Prices are stored as plain
// numbers in src/data/products.js and formatted only at display time —
// cart calculations must always operate on raw numeric values.

/** Format a numeric amount for display, e.g. 24 -> "$24.00". */
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
