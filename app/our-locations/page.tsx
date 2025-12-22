"use client"

import HeaderTitle from '@/components/HeaderTitle';
import LocationAddress from '@/components/our-locations/LocationAddress';
import DiscoverySection from '@/components/sections/DiscoverySection'

export default function page() {
    const headerdata = {
        title: "Locations",
        subtitles: "Local offices and a national network - support wherever you need it",
        imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/Loctions_Hero.jpg",
    };


    return (
        <>
            <HeaderTitle pageName="our-locations" />
            <LocationAddress/>
            <DiscoverySection />
        </>
    )
}
