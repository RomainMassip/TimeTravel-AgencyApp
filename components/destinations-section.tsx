"use client"

import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const destinations = [
  {
    id: 1,
    title: "Paris 1889",
    subtitle: "Belle Époque",
    description: "Assistez au dévoilement de la Tour Eiffel lors de l'Exposition Universelle. Flânez sur les boulevards éclairés au gaz aux côtés des artistes et des visionnaires d'une époque dorée.",
    details: "Paris 1889 représente l'apogée de la civilisation française. Vous assisterez à l'inauguration de la Tour Eiffel, visiterez l'Exposition Universelle rassemblant plus de 30 millions de visiteurs, dînerez dans les meilleurs restaurants de la Belle Époque et côtoierez des personnalités telles que Gustave Eiffel, Thomas Edison et Buffalo Bill. Nos guides garantissent une expérience sans faille dans la société française du XIXe siècle.",
    image: "/images/paris-1889.jpg",
    era: "XIXe siècle",
    price: "€12,500",
    duration: "7 jours",
    highlights: ["Inauguration de la Tour Eiffel", "Exposition Universelle 1889", "Scène artistique de Montmartre", "Promenade sur la Seine"],
  },
  {
    id: 2,
    title: "Période du Crétacé",
    subtitle: "-65 millions d'années",
    description: "Marchez parmi les titans dans l'ère préhistorique la plus majestueuse de la Terre. Vivez la puissance brute des dinosaures dans leur habitat naturel.",
    details: "L'aventure ultime pour les amoureux de la nature. Nos ingénieurs temporels ont identifié les zones d'observation les plus sûres où vous pourrez observer des chasses de T-Rex, des troupeaux de Triceratops et des vols de ptérodactyles. Tous les clients sont équipés d'un bouclier temporel dernier cri et accompagnés d'une équipe de paléontologues devenus guides temporels.",
    image: "/images/cretaceous.jpg",
    era: "Préhistorique",
    price: "€28,000",
    duration: "4 jours",
    highlights: ["Observation du T-Rex (distance sécurisée)", "Survol de ptérodactyles", "Exploration de la flore préhistorique", "Visites de sites fossiles"],
  },
  {
    id: 3,
    title: "Florence 1504",
    subtitle: "Haute Renaissance",
    description: "Tenez-vous aux côtés de Michel-Ange lorsqu'il dévoile le David. Explorez les rues qui ont vu naître la Renaissance aux côtés des plus grands artistes de l'histoire.",
    details: "Florence 1504 est l'épicentre de la créativité humaine. Parcourez les mêmes rues que Léonard de Vinci, Michel-Ange et Botticelli. Visitez la cour des Médicis, assistez à des présentations privées d'œuvres en cours de création et vivez le ferment intellectuel de la Haute Renaissance. Un voyage culturel hors du commun.",
    image: "/images/florence-1504.jpg",
    era: "XVIe siècle",
    price: "€18,900",
    duration: "6 jours",
    highlights: ["Dévoilement du David par Michel-Ange", "Dîner à la cour des Médicis", "Visite de l'atelier de Léonard", "Les Offices avant d'être un musée"],
  },
]

type Destination = typeof destinations[0]

export function DestinationsSection() {
  const [selected, setSelected] = useState<Destination | null>(null)

  return (
    <section id="destinations" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm uppercase tracking-widest text-primary mb-4">
            Destinations de prestige
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
            Voyages à travers le temps
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Chaque destination est soigneusement sélectionnée pour offrir un aperçu
            sans égal des moments les plus déterminants de l'humanité.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <span className="absolute top-6 left-6 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-xs uppercase tracking-widest text-primary border border-primary/30">
                  {destination.era}
                </span>
              </div>

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
                  onClick={() => setSelected(destination)}
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary group/btn transition-all duration-300"
                >
                  Découvrir
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs uppercase tracking-widest text-primary border border-primary/30">
                  {selected.era}
                </span>
              </div>
            </div>

            {/* Modal Content */}
              <div className="p-8">
              <span className="text-sm text-primary uppercase tracking-widest">{selected.subtitle}</span>
              <h3 className="font-serif text-3xl font-medium text-foreground mt-2 mb-4">{selected.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{selected.details}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-widest text-primary mb-3">Points forts</h4>
                <ul className="space-y-2">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Duration */}
              <div className="flex gap-6 mb-8 p-4 bg-secondary/30 rounded-xl border border-border">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Prix</p>
                  <p className="text-foreground font-medium">{selected.price}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Durée</p>
                  <p className="text-foreground font-medium">{selected.duration}</p>
                </div>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Réserver ce voyage
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}