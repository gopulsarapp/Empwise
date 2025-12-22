"use client";

import CommunityBankSolutions from "@/components/CommunityBankSolutions";
import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IntegrisExperience from "@/components/sections/IntegrisExperience";

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="community-banks" />
      <IntegrisExperience
        order="left"
        pageName="aBoutPageItArchitecture"
      />

      <CommunityBankSolutions />
      <DiscoverySection />
    </>
  );
}
