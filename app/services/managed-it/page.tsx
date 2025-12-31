"use client";

import HeaderTitle from "@/components/HeaderTitle";
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection";
// import AdvisoryServices from "@/components/industries/highly-regulated-industries/AdvisoryServices";
import DiscoverySection from "@/components/sections/DiscoverySection";
// import IntegrisExperience from "@/components/sections/IntegrisExperience";
import IT_Architecture from "@/components/sections/IT_Architecture";
import Testimonials from "@/components/sections/Testimonials";

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="managedIt" />
             <HeaderFormSection
                      contentType="highlyRegulatedIndustriesPageSection"
                      selectPage="services/managed-it"
                    />
           {/* <IntegrisExperience
                   order="left"
                   pageName="aBoutPageItArchitecture"
                 /> */}
           {/* <AdvisoryServices/> */}
             <Testimonials pageName="managedIt" />
             <IT_Architecture pageName="managed-it" order="right" />
      <DiscoverySection />
    </>
  );
}
