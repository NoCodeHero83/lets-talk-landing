"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Showcase() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const scrollToCalendly = () => {
  const calendlySection = document.getElementById("calendly")
  calendlySection?.scrollIntoView({ behavior: "smooth" })
}

  return (
    <section
      id="showcase"
      ref={ref}
      className="py-20 sm:py-28 lg:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ellos confiaron en nosotros y hoy su producto digital genera resultados reales.
          </h2>
          <p className="text-lg sm:text-base text-foreground/70 leading-relaxed text-balance">
            No son demos ni promesas. Son plataformas en producción funcionando hoy.
          </p>
        </div>

        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl rounded-3xl" />

          <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>

            <div className="relative aspect-video bg-card">
              <iframe
                src="https://player.vimeo.com/video/1192860195"
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none"}}
                allowFullScreen
                title="Productos reales construidos por Zerocode"
              />
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 px-4 py-2 bg-card border border-border/50 rounded-xl shadow-lg">
            <p className="text-sm sm:text-lg text-muted-foreground">Plataformas 100% funcionales en producción</p>
          </div>
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
    </section>
  )
}