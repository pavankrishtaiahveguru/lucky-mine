import Hero from "@/components/home/Hero";
import ShopByCategory from "@/components/home/ShopByCategory";
import TrendingProducts from "@/components/home/TrendingProducts";

export const metadata = {
  title: "Lucky Mine | Everyday Essentials",
  description:
    "Explore everyday essentials across health, beauty, sports, grocery, art & craft, and tools.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <TrendingProducts />
    </>
  );
}
