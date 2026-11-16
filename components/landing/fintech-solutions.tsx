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
    subtitle: "App bancaria completa â€” nivel instituciÃ³n",
    description:
      "Una aplicaciÃ³n bancaria profunda para que bancos y entidades gestionen productos y operaciones desde una experiencia digital unificada. MÃ¡s que una billetera: cubre el ciclo completo del dinero del cliente.",
    bullets: [
      "CrÃ©ditos, lÃ­neas de crÃ©dito, ahorro e inversiÃ³n â€” con CDT en Colombia",
      "DepÃ³sitos, retiros, saldo y su evoluciÃ³n con intereses diarios o mensuales",
      "Portal empresarial: convenios, pago de nÃ³minas y gestiÃ³n de productos financieros",
    ],
    footer: "SoluciÃ³n mÃ¡s completa â€” ideal para bancos.",
    images: [
      "/fintech/app-bancaria/1.webp",
      "/fintech/app-bancaria/2.webp",
      "/fintech/app-bancaria/3.webp",
      "/fintech/app-bancaria/4.webp",
      "/fintech/app-bancaria/5.webp",
      "/fintech/app-bancaria/6.webp",
      "/fintech/app-bancaria/7.webp",
      "/fintech/app-bancaria/8.webp",
      "/fintech/app-bancaria/9.webp",
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
      "SoluciÃ³n white-label ya desarrollada sobre React Native y Supabase. El usuario opera dinero de punta a punta y tÃº la expones vÃ­a API.",
    bullets: [
      "Depositar, retirar, transferir entre usuarios y transferencias bancarias",
      "Comprar y mantener cripto dentro de la billetera, historial y gestiÃ³n de saldo",
      "En Argentina: CBU, CVU, Alias y otros mecanismos locales segÃºn integraciÃ³n",
    ],
    footer: "Ya lista â€” web + Apple App Store y Google Play. KYC vÃ­a Truora / Truework.",
    images: [
      "/fintech/billetera/1.webp",
      "/fintech/billetera/2.webp",
      "/fintech/billetera/3.webp",
      "/fintech/billetera/4.webp",
      "/fintech/billetera/5.webp",
      "/fintech/billetera/6.webp",
      "/fintech/billetera/7.webp",
      "/fintech/billetera/f3ff1d5b7be (38).png",
    ],
  },
  {
    id: "core",
    title: "Core Bancario y Fintech MultipropÃ³sito",
    subtitle: "Infraestructura y operaciÃ³n financiera a escala",
    description:
      "Plataforma que combina core bancario con capa fintech multipropÃ³sito: cuentas, aprobaciones, cobranzas masivas y compliance en un solo lugar.",
    bullets: [
      "Cuentas bancarias, mÃºltiples por usuario, ahorro, inversiÃ³n, crÃ©ditos y operaciones â€” con roles, OTP y flujos de aprobaciÃ³n",
      "Subcuentas con saldo independiente, links de pago masivos y cobranzas masivas (consorcios, colegios), impuestos y comisiones",
      "Alertas, bloqueos y reglas por comportamiento; detecciÃ³n de operaciones fuera de parÃ¡metro y compliance/KYC",
    ],
    footer: "KYC y validaciÃ³n de identidad incluidos como capacidad existente, sin integraciones inventadas.",
    images: [
      "/fintech/core/1.webp",
      "/fintech/core/2.webp",
      "/fintech/core/3.webp",
      "/fintech/core/4.webp",
      "/fintech/core/5.webp",
      "/fintech/core/6.webp",
    ],
  },
]

function MiniCarousel({
  images,
  title,
  variant = 'desktop',
  isVisible,
}: {
  images: string[]
  title: string
  variant?: 'mobile' | 'desktop'
  isVisible: boolean
}) {
  const [current, setCurrent] = useState(0)
  const [hover, setHover] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length])
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length])

  useEffect(() => {
    if (images.length <= 1 || hover || !isVisible) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [next, images.length, hover, isVisible])

  const isMobile = variant === 'mobile'

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const delta = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) {
      if (delta > 0) next()
      else prev()
    }
    setTouchStartX(null)
  }

  return (
    <div
      className="relative w-full overflow-hidden border border-border/50 bg-[#0a0f1e] shadow-lg touch-pan-y"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    triggerOnce: false,
  })

  const scrollToCalendly = () => {
    const el = document.getElementById("calendly")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header â€” centered with premium scroll animation */}
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
            soluciones verificadas white-label
          </p>
        </div>

        {/* Stacked solutions â€” compact, scroll-driven (no tabs) */}
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
                    <MiniCarousel isVisible={isVisible}
                      images={solution.images}
                      title={solution.title}
                      variant={solution.id === 'core' ? 'desktop' : 'mobile'}
                    />
                    <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                      {solution.images.length} pantallas â€¢ 1 â†’ {solution.images.length}
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


      </div>
    </section>
  )
}

