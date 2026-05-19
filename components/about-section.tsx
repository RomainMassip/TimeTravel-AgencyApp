import { Clock, Shield, Gem } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Navigation temporelle précise",
    description: "Nos chronomètres quantiques garantissent une arrivée à quelques secondes près à l'instant historique souhaité.",
  },
  {
    icon: Shield,
    title: "Protection historique",
    description: "Un bouclier temporel avancé prévient les paradoxes tout en permettant une immersion complète dans le passé.",
  },
  {
    icon: Gem,
    title: "Expérience de luxe",
    description: "Hébergements cinq étoiles adaptés à chaque époque, avec des commodités modernes intégrées de manière invisible.",
  },
]

export function AboutSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Timeline Decorative Element */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm uppercase tracking-widest text-primary mb-4">
            À propos de l'agence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
            Redéfinir l'art du voyage
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Depuis notre création en 2089, TimeTravel Agency a été pionnière du tourisme temporel de luxe. 
            Nous ne nous contentons pas de vous transporter à travers le temps &mdash; nous concevons des voyages sur mesure
            qui vous plongent au cœur des moments les plus extraordinaires de l'histoire.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:bg-card/80">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Number Badge */}
                <span className="absolute top-6 right-6 text-6xl font-serif text-primary/10 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
