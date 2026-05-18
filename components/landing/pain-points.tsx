"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { X } from "lucide-react"

const painPoints = [
  "Has trabajado con otros equipos y el resultado no fue lo que esperabas.",
  "Te ofrecieron soluciones genéricas que no encajan con tu idea.",
  "Tuviste malas experiencias con desarrolladores o agencias y no puedes arriesgarte una vez más",
  "Quieres lanzar tu producto pero no sabes por dónde empezar.",
  "No encuentras un equipo que realmente te acompañe de inicio a fin."
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