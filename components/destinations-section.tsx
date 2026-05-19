"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    title: "Paris 1889",
    subtitle: "Belle Époque",
    description: "Witness the unveiling of the Eiffel Tower during the World's Fair. Stroll gaslit boulevards alongside artists and visionaries of a golden age.",
    image: "/images/paris-1889.jpg",
    era: "19th Century",
  },
  {
    id: 2,
    title: "Cretaceous Period",
    subtitle: "-65 Million Years",
    description: "Walk among titans in Earth's most magnificent prehistoric era. Experience the raw majesty of dinosaurs in their natural habitat.",
    image: "/images/cretaceous.jpg",
    era: "Prehistoric",
  },
  {
    id: 3,
    title: "Florence 1504",
    subtitle: "High Renaissance",
    description: "Stand beside Michelangelo as he unveils David. Explore the streets that birthed the Renaissance alongside history's greatest artists.",
    image: "/images/florence-1504.jpg",
    era: "16th Century",
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm uppercase tracking-widest text-primary mb-4">
            Premium Destinations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
            Journeys Through Time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Each destination is meticulously curated to offer an unparalleled glimpse 
            into humanity&apos;s most defining moments.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Era Badge */}
                <span className="absolute top-6 left-6 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-xs uppercase tracking-widest text-primary border border-primary/30">
                  {destination.era}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-sm text-primary uppercase tracking-widest">
                  {destination.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mt-2 mb-3">
                  {destination.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {destination.description}
                </p>
                <Button
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary group/btn transition-all duration-300"
                >
                  Discover
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
