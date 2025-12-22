"use client";

import ContactSection from "@/components/Contact/ContactSection";
import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  const headerdata = {
    title: "Contact Us",
    subtitles: "Expert teams and resources located across the nation",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/ContactHero.jpg",
  };

  

  return (
    <>
      <HeaderTitle pageName="contact" />
      <ContactSection/>
      <DiscoverySection />
    </>
  );
}
