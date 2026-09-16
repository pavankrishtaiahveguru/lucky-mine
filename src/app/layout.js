import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShopProvider } from "@/context/ShopContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://luckymine.shop"),

  title: "Lucky Mine",

  description:
    "Shop everyday essentials across Health & Household, Beauty & Personal Care, Sports & Outdoor, Grocery, Art & Craft, and Tools.",

  keywords: [
    "Lucky Mine",
    "online shopping",
    "everyday essentials",
    "health and household",
    "beauty and personal care",
    "sports and outdoor",
    "grocery",
    "art and craft",
    "tools",
    "household essentials",
    "personal care products",
    "fitness and outdoor gear",
    "grocery essentials",
    "art supplies",
    "DIY tools",
    "online store",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ShopProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
