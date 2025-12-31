"use client";

import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
// import IntegrisExperience from "@/components/sections/IntegrisExperience";
import IT_Architecture from "@/components/sections/IT_Architecture";

export default function Page() {

  return (
    <>
      <HeaderTitle pageName="cloud" />
       <HeaderFormSection
                      contentType="highlyRegulatedIndustriesPageSection"
                      selectPage="services/cloud"
                    />
      {/* <IntegrisExperience
              order="left"
              pageName="aBoutPageItArchitecture"
            /> */}
            <IT_Architecture pageName="cloud" order="left" />
      <DiscoverySection />
    </>
  );
}
