import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services for Community Banks | Novotek MSP",
  description:
    "Novotek provides secure, compliant IT services for community banks, supporting regulatory requirements, cybersecurity, operational resilience, and reliable banking systems.",
};
export default function Page() {
  return (
    <>
      <HeaderTitle pageName="community-banks" />
      <HeaderFormSection
        contentType="highlyRegulatedIndustriesPageSection"
        selectPage="industries/community-banks"
      />
      <IT_Architecture pageName="community-banks" order="right" />
      <DiscoverySection />
    </>
  );
}
{/* <IntegrisExperience order="left" pageName="aBoutPageItArchitecture"/> <CommunityBankSolutions /> */ }