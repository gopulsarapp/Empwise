"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Cybersecurity Services",
    subtitles: "Build operational maturity with a secure, compliant IT architecture",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/06/Abstract_Cyber.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
      <DiscoverySection />
    </>
  );
}
