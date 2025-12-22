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
            <HeaderTitle pageName="about"/>
            <IndustryRecognition />

            <CompetitiveEdgeSection />
             <IntegrisExperience
                   order="right"
                   title="What is the Integris experience?"
                   image="https://integrisit.com/wp-content/uploads/2025/07/IntExp2212567050.jpg"
                   description={`It’s how you feel when your IT runs smoothly, thanks to a partner
           who gets it and gets you. A partner who shoulders responsibility
           for your IT — from upgrading your operations to managing risk
           and handling compliance — so you can focus on what you do best.\n
           
           A partner who takes it even a step further and guides you on the
           path to digital maturity so you will continuously succeed in an
           ever-changing world.`}
           
                 />
            <OurStorySection />
            <OurValuesSection />


            <DiscoverySection />

        </>
    )
}
