"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById("calendly")
    calendlySection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToShowcase = () => {
    const showcaseSection = document.getElementById("showcase")
    showcaseSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className={cn(
        "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
      )}
    >
      <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
        <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

        {/* Main glow */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

        {/* Lamp effect */}
        <div className="absolute top-0 z-30 h-36 w-[16rem] -translate-y-[20%] rounded-full bg-primary/60 blur-2xl" />

        {/* Top line */}
        <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[-10%] bg-primary/60" />

        {/* Left gradient cone */}
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top] opacity-100"
        >
          <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>

        {/* Right gradient cone */}
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top] opacity-100"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
      </div>

      <div className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 -translate-y-20">
        <div className="flex flex-col items-center text-center space-y-4 w-full max-w-5xl mx-auto">
          {/* KPIs discretos */}
          <div className="flex justify-center">
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
            className="font-display text-[31px] sm:text-[37px] md:text-[37px] lg:text-[49px] font-bold uppercase leading-[1.16] sm:leading-[1.19] tracking-[-0.03em] sm:tracking-[-0.04em] text-foreground"
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

          <p className="font-sans text-[23px] sm:text-[31px] md:text-[32px] lg:text-[34px] font-normal text-foreground/90 max-w-4xl mx-auto leading-[1.34] sm:leading-[1.16] text-pretty">
            Lo validamos antes de que comprometas tu inversión y nos quedamos hasta que el negocio funcione.
          </p>

          <div className="flex justify-center">
            <p className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 text-[15px] sm:text-[17px] font-medium tracking-wide text-white/70 border-t border-white/10 pt-4 max-w-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 flex-shrink-0" aria-hidden />
              <span>100% funcional o te devolvemos tu inversión.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
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

          <div className="flex flex-col items-center gap-3 pt-2">
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
      </div>
    </section>
  )
}
