import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services for Manufacturing & Industrial Businesses | Novotek MSP",
  description:
    "Novotek provides reliable IT services for manufacturing businesses, supporting operational continuity, secure systems, network reliability, and scalable IT infrastructure.",
};

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="manufacturing-it-services" />
      <HeaderFormSection
        contentType="highlyRegulatedIndustriesPageSection"
        selectPage="industries/manufacturing-it-services"
      />
      <IT_Architecture pageName="manufacturing-it-services" order="right" />
      <DiscoverySection />
    </>
  );
}
{/* <IntegrisExperience order="left" pageName="aBoutPageItArchitecture" /><CommunityBankSolutions/> */}