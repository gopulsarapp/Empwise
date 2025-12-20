"use client"

import AboutHeader from "@/components/about/AboutHeader"
import CompetitiveEdgeSection from "@/components/about/CompetitiveEdgeSection"
import OurStorySection from "@/components/about/OurStorySection"
import OurValuesSection from "@/components/about/OurValuesSection"
import DiscoverySection from "@/components/sections/DiscoverySection"
import IndustryRecognition from "@/components/sections/IndustryRecognition"
import IntegrisExperience from "@/components/sections/IntegrisExperience"

export default function Page() {
    return (
        <>
            <AboutHeader
                title="Who We Are"
                description="Ready to learn more about Integris? You're in the right place. We're a national leader in future-ready managed services, delivering innovative solutions that drive digital maturity for small to midsize businesses (SMBs)."
                imageUrl="https://integrisit.com/wp-content/uploads/2025/06/AboutHeader.jpg"
            />
            <IndustryRecognition />
            <CompetitiveEdgeSection/>
            <IntegrisExperience />
            <OurStorySection />
            <OurValuesSection/>


            <DiscoverySection />

        </>
    )
}
