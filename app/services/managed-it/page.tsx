"use client";

import HeaderTitle from "@/components/HeaderTitle";
// import AdvisoryServices from "@/components/industries/highly-regulated-industries/AdvisoryServices";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IntegrisExperience from "@/components/sections/IntegrisExperience";
import Testimonials from "@/components/sections/Testimonials";

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="managedIt" />
           <IntegrisExperience
                   order="left"
                   pageName="aBoutPageItArchitecture"
                 />
           {/* <AdvisoryServices/> */}
             <Testimonials pageName="managedIt" />
      <DiscoverySection />
    </>
  );
}
