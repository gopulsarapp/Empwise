
import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "IT Advisory & vCIO Services for Businesses | Novotek MSP",
  description:
    "Novotek provides IT advisory and vCIO services to help businesses align technology with strategy, manage risk, control costs, and plan scalable IT roadmaps.",
};

export default function Page() {

  return (
    <>
      <HeaderTitle pageName="Advisory" />
      <HeaderFormSection
        contentType="highlyRegulatedIndustriesPageSection"
        selectPage="services/advisory"
      />
      <IT_Architecture pageName="advisory" order="right" />
      <DiscoverySection />
    </>
  );
}


{/* <IntegrisExperience order="left" pageName="aBoutPageItArchitecture"/> */}