import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services for Law Firms & Legal Practices | Novotek MSP",
  description:
    "Novotek provides secure, reliable IT services for law firms and legal practices, supporting data protection, compliance, secure collaboration, and operational continuity.",
};

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="legal" />
      <HeaderFormSection
        contentType="highlyRegulatedIndustriesPageSection"
        selectPage="industries/legal"
      />
      <IT_Architecture pageName="legal" order="right" />
      <DiscoverySection />
    </>
  );
}

{/* <IntegrisExperience order="left" pageName="aBoutPageItArchitecture"/> <CommunityBankSolutions/> */ }