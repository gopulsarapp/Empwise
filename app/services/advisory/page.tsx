"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IntegrisExperience from "@/components/sections/IntegrisExperience";

export default function Page() {

  return (
    <>
      <HeaderTitle pageName="Advisory" />
              <IntegrisExperience
                      order="left"
                      pageName="aBoutPageItArchitecture"
                    />
      <DiscoverySection />
    </>
  );
}
