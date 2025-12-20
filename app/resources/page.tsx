"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "IT Insights",
    subtitles: "Your source for the latest content and industry news to power your business",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/06/ResourcesHeader.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
