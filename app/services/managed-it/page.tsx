"use client";

import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";
import IntegrisExperience from "@/components/sections/IntegrisExperience";

export default function Page() {
  const headerdata = {
    title: "Managed IT Services",
    subtitles: "Support for all aspects of your IT",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/Managed-Services.jpg",
  };

  return (
    <>
      <HeaderTitle data={headerdata} />
            <IntegrisExperience
              order="left"
              title="Responsible IT Architecture (RITA)"
              image="https://integrisit.com/wp-content/uploads/2025/06/Legal-SolutionsRitaGettyImages-1180593804.jpg"
              description={`We start with a comprehensive assessment using our Responsible IT Architecture framework to identify any current or potential security gaps and ensure you have the tools needed to protect your systems. Next, we deliver a tightly integrated suite of cybersecurity solutions— designed to work together seamlessly to form a hardened, regulation-ready shield. This protects your systems, software, and endpoints, all supported by centralized monitoring and reporting.`}
            />
      <DiscoverySection />
    </>
  );
}
