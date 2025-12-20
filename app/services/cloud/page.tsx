"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Maximize Your Cloud Journey",
    subtitles: "Ensure that your public, private, or hybrid cloud architectures are secure, compliant, and cost-effective",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/Cloud-Hero.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
