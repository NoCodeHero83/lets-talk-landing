"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const headlines = {
  fintech: "Tu plataforma fintech funcionando en tu negocio, no solo en una demo.",
  salud: "Tu plataforma de salud funcionando en tu negocio, no solo en una demo.",
  general: "Tu producto digital funcionando en tu negocio, no solo en una demo.",
}

function useNicho() {
  const [nicho, setNicho] = useState("general")
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setNicho(params.get("nicho") || "general")
  }, [])
  return nicho
}

export function Hero() {
  const nicho = useNicho()
  const headline = headlines[nicho as keyof typeof headlines] || headlines.general
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
    <section className="relative flex items-start justify-center overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24 bg-transparent">
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
          {headline}
        </h1>

        <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-foreground max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty">
          Lo validamos antes de que comprometas tu inversión y nos quedamos hasta que el negocio funcione.
        </p>

        <div className="flex justify-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-white/20 text-white text-sm sm:text-base font-semibold px-5 py-2 rounded-full">
            <Check className="w-4 h-4 text-green-400" />
            100% funcional o te devolvemos tu inversión
          </span>
        </div>

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

        <div className="mt-10 flex flex-col items-center gap-3 animate-fade-in">
          <a
            href="https://clutch.co/profile/zerocode-0?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=stars&utm_term=cdpn.io#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-[rgba(56,189,248,0.15)] bg-[rgba(255,255,255,0.03)] px-5 py-3 transition-all hover:border-[rgba(56,189,248,0.3)]"
          >
            <img src="/logos/clutch-logo.png" alt="Clutch" width={48} height={44} className="object-contain" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="size-4 text-[#f0ad4e]" viewBox="0 0 1000 1000" fill="currentColor">
                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-xs text-white/50">Based on 3 Clutch reviews</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}