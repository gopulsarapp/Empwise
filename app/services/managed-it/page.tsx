import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IT_Architecture from "@/components/sections/IT_Architecture";
import Testimonials from "@/components/sections/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed IT Services for Businesses | Novotek MSP",
  description:
    "Novotek delivers reliable Managed IT Services for Michigan-based businesses. Proactive IT management, cybersecurity, compliance, and 24/7 monitoring—excluding healthcare and real estate.",
};

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="managedIt" />
      <HeaderFormSection
        contentType="highlyRegulatedIndustriesPageSection"
        selectPage="services/managed-it"
      />
      <Testimonials pageName="managedIt" />
      <IT_Architecture pageName="managed-it" order="right" />
      <DiscoverySection />
    </>
  );
}
{/* <IntegrisExperience order="left" pageName="aBoutPageItArchitecture"/>  <AdvisoryServices/> */}