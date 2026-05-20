"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, ChevronDown } from "lucide-react"
import Script from "next/script"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById("calendly")
    calendlySection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToShowcase = () => {
    const showcaseSection = document.getElementById("showcase")
    showcaseSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-12 bg-transparent">
      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 sm:mb-5 flex justify-center">
          <img
            src="/zerocode-logo-white.png"
            alt="Zerocode"
            className="h-24 sm:h-28 md:h-32 w-auto object-contain"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6 text-balance">
           Tu producto digital funcionando en tu negocio, no solo en una demo.
        </h1>

        <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-foreground max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty">
          Lo validamos antes de que comprometas tu inversión y nos quedamos hasta que el negocio funcione.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToCalendly}
            size="lg"
            className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 group w-full sm:w-auto"
          >
            Agenda tu llamada
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={scrollToShowcase}
            variant="outline"
            size="lg"
            className="border-border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:border-white/20  hover:scale-[1.02] shadow-lg shadow-black/20 w-full sm:w-auto"
          >
            Ver plataformas
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="mt-8 flex justify-center">
          <Script
            src="https://widget.clutch.co/static/js/widget.js"
            strategy="lazyOnload"
          />
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="1"
            data-height="45"
            data-nofollow="false"
            data-expandifr="true"
            data-scale="100"
            data-clutchcompany-id="2474115"
          />
        </div>
      </div>
    </section>
  )
}