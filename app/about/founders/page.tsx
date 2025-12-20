"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Solutions Built for Community Banks",
    subtitles: "Build your operational maturity with the right IT partner",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/CommunityBanksHero625756386.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
