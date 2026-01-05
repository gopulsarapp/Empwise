import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Governance & Risk Management Services | Novotek MSP",
  description:
    "Novotek delivers IT governance services that align technology with business goals, reduce risk, support compliance, and improve accountability across IT operations.",
};

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="Governance" />
             <HeaderFormSection
                      contentType="highlyRegulatedIndustriesPageSection"
                      selectPage="services/governance"
                    />
      <IT_Architecture pageName="governance" order="right" />
      <DiscoverySection />
    </>
  );
}

{/* <IntegrisExperience  order="left" pageName="aBoutPageItArchitecture"/> */}