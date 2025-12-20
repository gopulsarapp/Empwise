"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Governance, Risk & Compliance (GRC)",
    subtitles: "Grow your business on a secure, compliant foundation",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/06/GovernanceHeader.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
