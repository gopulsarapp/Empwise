"use client";

// import CommunityBankSolutions from "@/components/CommunityBankSolutions";
import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IntegrisExperience from "@/components/sections/IntegrisExperience";

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="community-banks" />
             <HeaderFormSection
                contentType="highlyRegulatedIndustriesPageSection"
                selectPage="industries/community-banks"
              />
     
      <IntegrisExperience
        order="left"
        pageName="aBoutPageItArchitecture"
      />

      {/* <CommunityBankSolutions /> */}
      <DiscoverySection />
    </>
  );
}
