"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Lightbulb, Eye, CheckCircle, Rocket, Shield } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "01",
    heading: "Entendemos",
    description: "Alineamos tu producto, el problema que resuelve y cómo se ve el éxito antes de tocar una línea de código."
  },
  {
    icon: Eye,
    title: "02",
    heading: "Prototipamos",
    description: "Construimos una versión funcional rápida y exacta para validar el valor del producto."
  },
  {
    icon: CheckCircle,
    title: "03",
    heading: "Construimos",
    description: "Desarrollamos solo lo que ha demostrado funcionar en la fase de validación, con arquitectura escalable."
  },
  {
    icon: Shield,
    title: "04",
    heading: "Acompañamos",
    description: "Estabilizamos el producto y te apoyamos en el lanzamiento hasta que tus clientes no noten la diferencia."
  }
]

export function Process() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Validamos tu producto antes de desarrollarlo
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed text-balance">
            No inviertes en código hasta saber que tu idea funciona. Un proceso de 4 pasos diseñado para reducir riesgo y acompañarte hasta el lanzamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                {step.title}
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mt-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.heading}
              </h3>
              <p className="text-base text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}