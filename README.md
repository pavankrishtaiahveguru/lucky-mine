# Lucky Mine

Lucky Mine is a demo storefront for everyday essentials — health, beauty, sports, grocery, art & craft, and tools — built with [Next.js](https://nextjs.org) (App Router), React 19, and Tailwind CSS v4.

> **Showcase project:** the site is a frontend-only demonstration. There is no backend, no checkout, and no real order or message submission. The cart and wishlist are stored locally in the browser, and the contact form simulates a successful send on the client.

## Features

- **Home page** — hero section, shop-by-category navigation, and trending products
- **Shop** — searchable, filterable product grid with category filtering and sorting
- **Product pages** — statically generated detail pages with related products from the same category
- **Cart** — add/remove items, quantity updates, line and order subtotals, persisted in `localStorage`
- **Wishlist** — save/remove products, persisted in `localStorage`
- **Toast notifications** — shared toast system for cart, wishlist, and contact feedback
- **Contact page** — validated form with a simulated, frontend-only submission (no email or API involved)
- **About page** and shared navbar/footer layout
- Fully responsive, mobile-friendly layout

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4 |
| Icons | lucide-react, react-icons |
| Compiler | React Compiler (`reactCompiler: true`) |
| Linting | ESLint 9 with `eslint-config-next` |

No database, backend service, or third-party API is used.

## Project Structure

```
lucky-mine/
├── public/
│   ├── products/            # Product images
│   ├── categories/          # Category images
│   └── logo.png
├── scripts/                 # Image placeholder generation utilities
├── src/
│   ├── app/                 # App Router pages: /, /shop, /shop/[id], /about, /contact, /cart, /wishlist
│   ├── components/
│   │   ├── cart/            # Cart view
│   │   ├── common/          # Shared components (e.g. Developed By badge)
│   │   ├── contact/         # Contact form (client component)
│   │   ├── home/            # Hero, ShopByCategory, TrendingProducts
│   │   ├── layout/          # Navbar, Footer
│   │   ├── shop/            # Product cards, filters, wishlist buttons
│   │   └── wishlist/        # Wishlist view
│   ├── context/             # ShopContext: cart, wishlist, toasts (localStorage-backed)
│   ├── data/                # products.js — single source of truth for catalog data
│   └── utils/               # formatCurrency and helpers
├── next.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <repository-url>
cd lucky-mine
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

All routes are prerendered (static or SSG), so no server-side data source is required.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Data & State

- **Product catalog** — defined in [`src/data/products.js`](src/data/products.js). It is the single source of truth for all product and category data; add or edit products there and the shop, home, product, cart, and wishlist pages all update automatically. Product images live in `public/products/`.
- **Cart & wishlist** — managed by [`src/context/ShopContext.jsx`](src/context/ShopContext.jsx) and persisted to `localStorage` under the `lucky-mine-shop-state` key. State hydrates after mount to keep server-rendered HTML consistent.
- **Currency formatting** — centralized in [`src/utils/formatCurrency.js`](src/utils/formatCurrency.js). Prices are stored as plain numbers in the data file and formatted only at display time.

## Contact Form Behavior

The contact form is a client component that validates name, email, phone, subject, and message entirely on the frontend. On a valid submission it briefly shows a "Sending..." state, displays a success toast and in-form notice, and clears the fields.

**No message is actually sent** — there is no API request, no email, no backend endpoint, and no data storage. This is intentional for the showcase; wiring a real submission endpoint would require adding a backend integration in `src/components/contact/ContactForm.jsx`.

## Development Notes

- Path alias `@/*` maps to `src/*` (see `jsconfig.json`).
- Placeholder product and category images can be regenerated with the utilities in `scripts/`.
- Keep product data in `src/data/products.js` and never duplicate product arrays elsewhere.
- Run `npm run lint` and `npm run build` before committing changes.
- Do not commit secrets — the project currently requires none.

## License

Private showcase project. All rights reserved.
