"use client";

import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IntegrisExperience from "@/components/sections/IntegrisExperience";

export default function Page() {

  return (
    <>
      <HeaderTitle pageName="cloud" />
       <HeaderFormSection
                      contentType="highlyRegulatedIndustriesPageSection"
                      selectPage="services/cloud"
                    />
      <IntegrisExperience
              order="left"
              pageName="aBoutPageItArchitecture"
            />
      <DiscoverySection />
    </>
  );
}
