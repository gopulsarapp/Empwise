"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Make IT Work for Your Law Firm",
    subtitles: "Reliable managed IT support and strategy for law firms and legal practices",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/06/law-page-hero.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
