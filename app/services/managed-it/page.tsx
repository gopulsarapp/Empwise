"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Managed IT Services",
    subtitles: "Support for all aspects of your IT",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/Managed-Services.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
