import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Services for Businesses | Novotek MSP",
  description:
    "Novotek provides proactive cybersecurity services for businesses, including threat detection, endpoint protection, identity security, and compliance-focused risk management.",
};

export default function Page() {

  return (
    <>
      <HeaderTitle pageName="cybersecurity" />
             <HeaderFormSection
                            contentType="highlyRegulatedIndustriesPageSection"
                            selectPage="services/cybersecurity"
                          />
           <IT_Architecture pageName="cybersecurity" order="right" />
      <DiscoverySection />
    </>
  );
}
{/* <IntegrisExperience order="left" pageName="aBoutPageItArchitecture" /> */}