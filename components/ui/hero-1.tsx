"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 min-h-[calc(100vh-40px)] overflow-hidden bg-black rounded-b-xl"
    >
      {/* Sky — negro con notas azules oscuras */}
      <div className="absolute inset-0 -z-20 bg-[#05070f]" />
      <div
        className="absolute inset-0 -z-10 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 45% at 30% 18%, rgba(37,99,235,0.18) 0%, transparent 60%), radial-gradient(ellipse 55% 35% at 78% 22%, rgba(79,70,229,0.12) 0%, transparent 60%)",
        }}
      />
      {/* Grid sutil — muy tenue para no competir */}
      <div className="absolute -z-10 inset-0 opacity-[0.04] h-[600px] w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Horizon — blanco solo cerca al horizonte con radiante */}
      <div className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] -translate-x-1/2 rounded-[100%] border border-white/10 bg-black overflow-hidden">
        {/* White core near horizon */}
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.95)_55%,rgba(200,215,255,0.35)_70%,rgba(100,120,200,0.15)_78%,transparent_84%)]" />
        {/* Radiant gradient while approaching horizon */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,140,255,0.18)_0%,transparent_65%)]" />
      </div>

      {/* Below horizon — más oscuro */}
      <div className="absolute left-0 right-0 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] bg-gradient-to-b from-transparent via-[#0a0a0f]/60 to-[#050508]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Eyebrow */}
      {eyebrow && (
        <a href="#" className="group relative z-10">
          <span className="text-sm text-white/70 font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border border-white/10 rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center">
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      )}

      {/* Title */}
      <h1 className="relative z-10 animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-white/60 opacity-0 md:text-xl">
        {subtitle}
      </p>

      {/* CTA */}
      {ctaLabel && (
        <div className="relative z-10 flex justify-center">
          <Button asChild className="mt-[-20px] w-fit md:w-52 z-20 tracking-tighter text-center text-lg rounded-full bg-white text-black hover:bg-white/90">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      )}

      {/* Bottom Fade */}
      <div className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]" />
    </section>
  )
}
