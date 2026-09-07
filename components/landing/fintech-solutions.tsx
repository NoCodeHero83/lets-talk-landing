"use client"

import { useState, useEffect, useCallback } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

type Solution = {
  id: string
  title: string
  subtitle: string
  description: string
  bullets: string[]
  footer: string
  images: string[]
}

const solutions: Solution[] = [
  {
    id: "app-bancaria",
    title: "App Bancaria",
    subtitle: "App bancaria completa — nivel institución",
    description:
      "Una aplicación bancaria profunda para que bancos y entidades gestionen productos y operaciones desde una experiencia digital unificada. Más que una billetera: cubre el ciclo completo del dinero del cliente.",
    bullets: [
      "Créditos, líneas de crédito, ahorro e inversión — con CDT en Colombia",
      "Depósitos, retiros, saldo y su evolución con intereses diarios o mensuales",
      "Portal empresarial: convenios, pago de nóminas y gestión de productos financieros",
    ],
    footer: "Solución más completa — ideal para bancos.",
    images: [
      "/fintech/app-bancaria/1.png",
      "/fintech/app-bancaria/2.png",
      "/fintech/app-bancaria/3.png",
      "/fintech/app-bancaria/4.png",
      "/fintech/app-bancaria/5.png",
      "/fintech/app-bancaria/6.png",
      "/fintech/app-bancaria/7.png",
      "/fintech/app-bancaria/8.png",
      "/fintech/app-bancaria/9.png",
      "/fintech/app-bancaria/f3ff1d5b7be (45).png",
      "/fintech/app-bancaria/f3ff1d5b7be (46).png",
      "/fintech/app-bancaria/f3ff1d5b7be (47).png",
      "/fintech/app-bancaria/f3ff1d5b7be (52).png",
    ],
  },
  {
    id: "billetera",
    title: "Billetera Virtual",
    subtitle: "White-label lista para lanzar con tu marca",
    description:
      "Solución white-label ya desarrollada sobre React Native y Supabase. El usuario opera dinero de punta a punta y tú la expones vía API.",
    bullets: [
      "Depositar, retirar, transferir entre usuarios y transferencias bancarias",
      "Comprar y mantener cripto dentro de la billetera, historial y gestión de saldo",
      "En Argentina: CBU, CVU, Alias y otros mecanismos locales según integración",
    ],
    footer: "Ya lista — web + Apple App Store y Google Play. KYC vía Truora / Truework.",
    images: [
      "/fintech/billetera/1.png",
      "/fintech/billetera/2.png",
      "/fintech/billetera/3.png",
      "/fintech/billetera/4.png",
      "/fintech/billetera/5.png",
      "/fintech/billetera/6.png",
      "/fintech/billetera/7.png",
      "/fintech/billetera/f3ff1d5b7be (38).png",
    ],
  },
  {
    id: "core",
    title: "Core Bancario y Fintech Multipropósito",
    subtitle: "Infraestructura y operación financiera a escala",
    description:
      "Plataforma que combina core bancario con capa fintech multipropósito: cuentas, aprobaciones, cobranzas masivas y compliance en un solo lugar.",
    bullets: [
      "Cuentas bancarias, múltiples por usuario, ahorro, inversión, créditos y operaciones — con roles, OTP y flujos de aprobación",
      "Subcuentas con saldo independiente, links de pago masivos y cobranzas masivas (consorcios, colegios), impuestos y comisiones",
      "Alertas, bloqueos y reglas por comportamiento; detección de operaciones fuera de parámetro y compliance/KYC",
    ],
    footer: "KYC y validación de identidad incluidos como capacidad existente, sin integraciones inventadas.",
    images: [
      "/fintech/core/1.png",
      "/fintech/core/2.png",
      "/fintech/core/3.png",
      "/fintech/core/4.png",
      "/fintech/core/5.png",
      "/fintech/core/6.png",
    ],
  },
]

function MiniCarousel({ images, title, variant = 'desktop' }: { images: string[]; title: string; variant?: 'mobile' | 'desktop' }) {
  const [current, setCurrent] = useState(0)
  const [hover, setHover] = useState(false)
  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length])
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length])

  useEffect(() => {
    if (images.length <= 1 || hover) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [next, images.length, hover])

  const isMobile = variant === 'mobile'

  return (
    <div
      className="relative w-full overflow-hidden border border-border/50 bg-[#0a0f1e] shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`relative w-full overflow-hidden bg-black ${isMobile ? 'aspect-[9/16] max-h-[420px]' : 'aspect-[16/11]'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current]}
          alt={`${title} ${current + 1}`}
          className="w-full h-full object-contain bg-[#0a0f1e]"
        />
      </div>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 size-8 bg-black/80 text-white border border-white/10 flex items-center justify-center hover:bg-black">
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-black/80 text-white border border-white/10 flex items-center justify-center hover:bg-black">
            <ChevronRight className="size-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/80 border border-white/10 px-2 py-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all ${i === current ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
              />
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-black/80 border border-white/10 px-2 py-1 text-[10px] font-medium text-white/80">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}

export function FintechSolutions() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const scrollToCalendly = () => {
    const el = document.getElementById("calendly")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — centered with premium scroll animation */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
            }`}
          >
            <Sparkles className="size-3.5" />
            Soluciones Fintech
          </div>
          <h2
            className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance text-center transition-all duration-700 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Infraestructura fintech probada, lista para tu marca
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg text-muted-foreground text-pretty text-center transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Tres plataformas ya construidas como white-label / SaaS. Desliza y descubre cada solución — sin clicks ocultos.
          </p>
        </div>

        {/* Stacked solutions — compact, scroll-driven (no tabs) */}
        <div className="space-y-6">
          {solutions.map((solution, idx) => (
            <div key={solution.id}>
              <div
                className={`border border-border/50 bg-card overflow-hidden shadow-xl transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${150 + idx * 120}ms` }}
              >
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
                  <div className="p-5 sm:p-6 lg:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">{solution.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium uppercase tracking-wide text-primary text-center">
                      {solution.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70 text-pretty text-center">
                      {solution.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {solution.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm leading-relaxed text-foreground/75">
                          <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 border bg-primary/5 border-primary/10 px-3 py-2.5 text-xs leading-relaxed text-foreground/60 text-center">
                      {solution.footer}
                    </p>
                  </div>

                  <div className="bg-secondary/30 p-3 sm:p-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50">
                    <MiniCarousel
                      images={solution.images}
                      title={solution.title}
                      variant={solution.id === 'core' ? 'desktop' : 'mobile'}
                    />
                    <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                      {solution.images.length} pantallas • 1 → {solution.images.length}
                    </p>
                  </div>
                </div>
              </div>

              {idx < solutions.length - 1 && (
                <div className="flex justify-center my-6">
                  <Button
                    onClick={scrollToCalendly}
                    className="rounded-full bg-white hover:bg-white/90 text-black px-6 py-4 text-sm font-medium group shadow-md"
                  >
                    Agenda una demo
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={scrollToCalendly}
            className="rounded-full bg-white hover:bg-white/90 text-black px-8 py-5 font-medium group shadow-lg"
          >
            Agenda una demo
            <ArrowRight className="ml-2 size-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Imágenes reales de cada solución — sin mezclar carruseles. Orden numérico respetado.
        </p>
      </div>
    </section>
  )
}
