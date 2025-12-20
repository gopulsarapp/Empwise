"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Advisory Services",
    subtitles: "Your partner in IT strategy and management",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/AdvisoryHero.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
