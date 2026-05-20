"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { X } from "lucide-react"

const painPoints = [
  "Empezaste un proyecto digital que falló, y no puedes permitirte equivocarte otra vez.",
  "Invertiste en un proveedor y lo que te entregó no te servía o simplemente desapareció.",
  "Tienes una fecha que cumplir e inversionistas y clientes esperando resultados, no promesas.",
  "Te entregaron el producto, pero el código quedó en sus manos y no en las tuyas.",
  "Pediste referencias y demos, pero nadie te demostró que de verdad podía con lo tuyo."
]

export function PainPoints() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

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
            ¿Has pasado por esto?
          </h2>
        </div>

        <div
          className={`rounded-3xl border border-border/50 bg-transparent p-6 sm:p-8 lg:p-10 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <X className="w-8 h-8 text-destructive flex-shrink-0" strokeWidth={3} />

                <h3 className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                  {point}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}