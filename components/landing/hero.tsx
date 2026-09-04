"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const headlines = {
  fintech: "TU PLATAFORMA FINTECH FUNCIONA EN TU NEGOCIO, NO SOLO EN UNA DEMO",
  salud: "TU PLATAFORMA DE SALUD FUNCIONA EN TU NEGOCIO, NO SOLO EN UNA DEMO",
  general: "TU PRODUCTO DIGITAL FUNCIONA EN TU NEGOCIO, NO SOLO EN UNA DEMO",
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
      {/* Fondo oscuro premium con efecto glow animado — reutiliza lenguaje visual de Web Final / About */}
      {/* About usa Ellipse-1-2.png centrado cover + degradado negro/indigo; aquí se replica con overlay estático + glows animados */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Base: degradado oscuro institucional */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b14] via-[#0f1228] to-black" />
        {/* Ellipse overlay de About — baja opacidad para no afectar legibilidad */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-screen"
          style={{
            backgroundImage: "url('/Ellipse-1-2.png')",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        {/* Glows animados — movimiento lento, will-change-transform para rendimiento */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-10 left-1/2 h-[620px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl will-change-transform animate-hero-glow-1"
            style={{
              background:
                "radial-gradient(ellipse 62% 56% at 50% 55%, rgba(79,70,229,0.55) 0%, rgba(55,48,200,0.35) 38%, transparent 72%)",
            }}
          />
          <div
            className="absolute top-[18%] left-[38%] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl will-change-transform animate-hero-glow-2"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(37,99,235,0.45) 0%, rgba(29,78,216,0.22) 48%, transparent 78%)",
            }}
          />
          <div
            className="absolute top-[28%] right-[14%] h-[460px] w-[560px] rounded-full opacity-35 blur-3xl will-change-transform animate-hero-glow-3"
            style={{
              background:
                "radial-gradient(ellipse 60% 52% at 50% 50%, rgba(124,58,237,0.48) 0%, rgba(91,33,182,0.28) 42%, transparent 76%)",
            }}
          />
        </div>
        {/* Velo inferior para legibilidad */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* KPIs discretos — social proof, no compite con Hero */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase text-white/55">
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
          className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold uppercase leading-[0.95] sm:leading-[0.95] tracking-[-0.03em] sm:tracking-[-0.04em] text-foreground mb-6 text-balance"
          style={{ hyphens: "auto", overflowWrap: "anywhere" }}
        >
          {headline}
        </h1>

        <p className="font-sans text-[22px] sm:text-[30px] md:text-[31px] lg:text-[33px] font-normal text-foreground/90 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty">
          Lo validamos antes de que comprometas tu inversión y nos quedamos hasta que el negocio funcione.
        </p>

        {/* Presentación institucional de la garantía — reemplaza badge promocional */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 text-xs sm:text-[13px] font-medium tracking-wide text-white/70 border-t border-white/10 pt-4 max-w-2xl">
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
