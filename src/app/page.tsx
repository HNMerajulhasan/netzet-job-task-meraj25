"use client";
import { TopSaleSection } from "@/components/top-sale-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative  mx-auto">
      <TopSaleSection />
      <HeroSection />
    </div>
  );
}
