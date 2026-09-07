"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const headlines = {
  fintech: "TU PLATAFORMA FINTECH FUNCIONA EN TU NEGOCIO, NO SOLO EN UNA DEMO",
  salud: "TU PLATAFORMA DE SALUD FUNCIONA EN TU NEGOCIO, NO SOLO EN UNA DEMO",
  general: "TU PRODUCTO DIGITAL FUNCIONANDO EN TU NEGOCIO, NO SOLO EN UNA DEMO",
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
    <section className="relative flex items-start justify-center overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24 bg-black">
      {/* Background premium minimalista - coherente con resto de secciones (transparent + cards) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid sutil muy tenue - mismo lenguaje que hero-1 pero al 3% para no competir */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        {/* Glow superior - más pronunciado pero manteniendo elegancia premium */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-10%,rgba(99,102,241,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(124,58,237,0.16),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_50%_5%,rgba(167,139,250,0.10),transparent_65%)]" />
        {/* Fusión inferior: hero negro se funde con body #000000 + radiales tenues del resto de la página */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(0,0,0,1),transparent_70%)]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* KPIs discretos — mismo color/tamaño que garantía "100% funcional..." */}
        <div className="mt-[30px] sm:mt-[30px] mb-[34px] sm:mb-[42px] flex justify-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[15px] sm:text-[17px] font-medium tracking-[0.14em] uppercase text-white/70">
            <span>30 proyectos</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
            <span>15 años</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
            <span>10 países</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
            <span>10 personas en el equipo</span>
          </p>
        </div>

        <h1
          className="font-display text-[31px] sm:text-[37px] md:text-[37px] lg:text-[49px] font-bold uppercase leading-[1.16] sm:leading-[1.19] tracking-[-0.03em] sm:tracking-[-0.04em] text-foreground mb-6"
          style={{ hyphens: "none", overflowWrap: "normal", wordBreak: "keep-all" }}
        >
          {nicho === "fintech" ? (
            <>
              <span className="block">TU PLATAFORMA FINTECH</span>
              <span className="block">FUNCIONA EN TU NEGOCIO,</span>
              <span className="block">NO SOLO EN UNA DEMO</span>
            </>
          ) : nicho === "salud" ? (
            <>
              <span className="block">TU PLATAFORMA DE SALUD</span>
              <span className="block">FUNCIONA EN TU NEGOCIO,</span>
              <span className="block">NO SOLO EN UNA DEMO</span>
            </>
          ) : (
            <>
              <span className="block">TU PRODUCTO DIGITAL</span>
              <span className="block">FUNCIONANDO EN TU NEGOCIO,</span>
              <span className="block">NO SOLO EN UNA DEMO</span>
            </>
          )}
        </h1>

        <p className="font-sans text-[23px] sm:text-[31px] md:text-[32px] lg:text-[34px] font-normal text-foreground/90 max-w-4xl mx-auto mb-8 sm:mb-10 leading-[1.34] sm:leading-[1.16] text-pretty">
          Lo validamos antes de que comprometas tu inversión y nos quedamos hasta que el negocio funcione.
        </p>

        {/* Presentación institucional de la garantía */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 text-[15px] sm:text-[17px] font-medium tracking-wide text-white/70 border-t border-white/10 pt-4 max-w-2xl">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 flex-shrink-0" aria-hidden />
            <span>100% funcional o te devolvemos tu inversión.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            onClick={scrollToCalendly}
            className="bg-white hover:bg-white/90 text-black px-6 sm:px-7 py-5 h-11 sm:h-11 text-[15px] sm:text-[15.5px] rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 group w-full sm:w-auto"
          >
            Agenda tu llamada
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={scrollToShowcase}
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-6 sm:px-7 py-5 h-11 sm:h-11 text-[15px] sm:text-[15.5px] rounded-full font-medium transition-all duration-300 hover:border-white/20 hover:scale-[1.02] shadow-lg shadow-black/20 w-full sm:w-auto"
          >
            Ver plataformas
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="mt-[35px] flex flex-col items-center gap-3 animate-fade-in">
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
                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
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
