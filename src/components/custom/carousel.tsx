"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import carousel1 from "../../../public/carousel1.png"
import carousel2 from "../../../public/carousel2.png"
import carousel3 from "../../../public/carousel3.png"

export function CarouselPlugin() {

  const Images = [
    {carousel: carousel1},
    {carousel: carousel2},
    {carousel: carousel3}
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mt-1 rounded-sm"
    >
      <CarouselContent>
        {Images.map(({carousel}, index) => (
          <CarouselItem key={index}>
            <div>
              <Image src={carousel} height={425} width={2048} alt="carousel" priority={true}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
