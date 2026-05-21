"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Increscendo Fintech",
    description: "De operación manual a fintech 100% digital en México. Construimos la plataforma completa de suscripción y préstamos. Duplicaron alcance, atrajeron inversionistas y escalaron ingresos hasta en un 200%.",
    tags: ["Fintech", "Préstamos", "WebApp"],
    image: "/projects/IncrescendoFintech.png"
  },
  {
    title: "Alianza Capital",
    description: "De operaciones 100% manuales a fintech automatizada en 12 meses. Construimos portal, app móvil y gestión financiera. Hoy escalan clientes sin sumar personal operativo.",
    tags: ["Fintech", "Inversiones", "AppMóvil"],
    image: "/projects/AlianzaCapital.png"
  },
  {
    title: "Later Life Training",
    description: "De plataforma inestable a producto confiable en 6 meses. Reconstruimos backend, reservas, pagos y UX. Resultado: 8.000 USD mensuales y arquitectura lista para crecer.",
    tags: ["Salud", "Clínicas", "WebApp"],
    image: "/projects/LaterLifeTraining.png"
  },
  {
    title: "Hulp",
    description: "Construimos la app móvil de un marketplace de servicios desde cero. Hoy: 1.600 descargas, revenue constante y un mercado validado donde antes no había producto.",
    tags: ["Servicios", "Marketplace", "AppMóvil"],
    image: "/projects/Hulp.png"
  }
]

export function CaseStudies() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById("calendly")
    calendlySection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Casos de éxito
          </h2>
          <p className="text-lg sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cómo empresas como la tuya lograron que funcionara.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                      [Image Placeholder]
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  onClick={scrollToCalendly}
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                >
                  Ver caso de estudio
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 sm:mt-20 px-4 sm:px-0">
          <Button
            onClick={scrollToCalendly}
            size="lg"
            className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 group w-full sm:w-auto"
          >
            Agenda tu llamada
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}