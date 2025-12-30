"use client"

import CompetitiveEdgeSection from "@/components/about/CompetitiveEdgeSection"
import OurStorySection from "@/components/about/OurStorySection"
import OurValuesSection from "@/components/about/OurValuesSection"
import HeaderTitle from "@/components/HeaderTitle"
import DiscoverySection from "@/components/sections/DiscoverySection"
import IndustryRecognition from "@/components/sections/IndustryRecognition"
import IntegrisExperience from "@/components/sections/IntegrisExperience"

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
