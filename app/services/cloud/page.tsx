import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Services & Cloud Management for Businesses | Novotek MSP",
  description:
    "Novotek delivers secure cloud services for businesses, including cloud migration, cloud management, optimization, and secure hybrid cloud environments.",
};


export default function Page() {

  return (
    <>
      <HeaderTitle pageName="cloud" />
       <HeaderFormSection
                      contentType="highlyRegulatedIndustriesPageSection"
                      selectPage="services/cloud"
                    />
      
            <IT_Architecture pageName="cloud" order="left" />
      <DiscoverySection />
    </>
  );
}
{/* <IntegrisExperience order="left" pageName="aBoutPageItArchitecture"/> */}