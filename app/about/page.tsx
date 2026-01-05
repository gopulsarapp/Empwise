import CompetitiveEdgeSection from "@/components/about/CompetitiveEdgeSection"
import OurStorySection from "@/components/about/OurStorySection"
import OurValuesSection from "@/components/about/OurValuesSection"
import HeaderTitle from "@/components/HeaderTitle"
import DiscoverySection from "@/components/sections/DiscoverySection"
import IndustryRecognition from "@/components/sections/IndustryRecognition"
import IntegrisExperience from "@/components/sections/IntegrisExperience"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Novotek | Trusted Managed IT Services Provider",
  description:
    "Learn about Novotek, a managed IT services provider helping businesses improve reliability, security, and operational efficiency through proactive IT management.",
};
export default function Page() {
    return (
        <>
            <HeaderTitle pageName="about" />
            <IndustryRecognition />
            <CompetitiveEdgeSection />
            <IntegrisExperience order="right" pageName="homeAboutExperience" />
            <OurStorySection />
            <OurValuesSection />
            <DiscoverySection />
        </>
    )
}
