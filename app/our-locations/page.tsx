"use client"

import HeaderTitle from '@/components/HeaderTitle';
import LocationAddress from '@/components/our-locations/LocationAddress';
import DiscoverySection from '@/components/sections/DiscoverySection'

export default function page() {

    return (
        <>
            <HeaderTitle pageName="our-locations" />
            <LocationAddress/>
            <DiscoverySection />
        </>
    )
}
