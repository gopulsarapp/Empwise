"use client";

import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
// import IntegrisExperience from "@/components/sections/IntegrisExperience";

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="Governance" />
             <HeaderFormSection
                      contentType="highlyRegulatedIndustriesPageSection"
                      selectPage="services/governance"
                    />
      {/* <IntegrisExperience
        order="left"
        pageName="aBoutPageItArchitecture"
      /> */}

      <IT_Architecture pageName="governance" order="right" />
      <DiscoverySection />
    </>
  );
}
