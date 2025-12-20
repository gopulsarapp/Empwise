"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Future-Ready IT Solutions for Manufacturers",
    subtitles: "Keep production lines moving and machines running",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/ManufacturerHero21458054350.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
