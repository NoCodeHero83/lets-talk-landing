"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Video() {
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos quedamos hasta que el negocio funcione.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            No solo construimos tu plataforma. Te acompañamos hasta que esté generando resultados.
          </p>
        </div>

        <div 
          className={`relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-50 -z-10" />
          
          <div className="relative aspect-[4/5] sm:aspect-[5/6] max-w-3xl mx-auto bg-card">
            <iframe
              src="https://player.vimeo.com/video/1192861005"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              title="No somos otra agencia de desarrollo. Te explicamos por qué"
            />
          </div>
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