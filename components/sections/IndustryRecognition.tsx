"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Logo = {
  src: string
  alt: string
}

type ContentfulSys = {
  id: string
}

type ContentfulAsset = {
  sys: ContentfulSys
  fields: {
    title: string
    file: {
      url: string
    }
  }
}

type ContentfulImageLink = {
  sys: ContentfulSys
}

type IndustryRecognitionFields = {
  title: string
  image: ContentfulImageLink[]
}

type ContentfulItem<T> = {
  fields: T
}

type ContentfulResponse = {
  items: ContentfulItem<IndustryRecognitionFields>[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

/* -------------------------------------------------------------------------- */
/*                               Component                                    */
/* -------------------------------------------------------------------------- */

export default function IndustryRecognition() {
  const [title, setTitle] = useState("")
  const [logos, setLogos] = useState<Logo[]>([])
  const [loading, setLoading] = useState(true)

  /* ------------------------------ Fetch Data ------------------------------ */
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=industryRecognition`
        )

        const item = res.data.items[0]
        const assets = res.data.includes?.Asset ?? []

        setTitle(item.fields.title)

        const mapped: Logo[] = item.fields.image
          .map((img) => {
            const asset = assets.find((a) => a.sys.id === img.sys.id)
            if (!asset) return null
            return {
              src: `https:${asset.fields.file.url}`,
              alt: asset.fields.title,
            }
          })
          .filter(Boolean) as Logo[]

        setLogos(mapped)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <section className="py-16 bg-[#3a2744]" />
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Render                                    */
  /* -------------------------------------------------------------------------- */

  return (
    <section className="w-full bg-[#3a2744] text-white py-16">
      {title && (
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
          {title}
        </h2>
      )}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full max-w-[1440px] mx-auto px-6"
      >
        <CarouselContent>
          {logos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="
                basis-full            /* Mobile: 1 */
                sm:basis-1/2
                md:basis-1/3
                lg:basis-1/5           /* Desktop: 5 */
                flex justify-center
              "
            >
              <div className="relative w-[220px] h-[72px] flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
