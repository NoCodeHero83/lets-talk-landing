"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { value: "30+", label: "Productos en producción" },
  { value: "7", label: "Países con clientes activos" },
  { value: "4.8★", label: "Rating en Clutch" },
  { value: "6+", label: "Industrias atendidas" }
]

const technologies = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "TypeScript", src: "/tech/typescript.png" },
  { name: "React Native", src: "/tech/reactnative.png" },
  { name: "Dart", src: "/tech/dart.png" },
  { name: "Supabase", src: "/tech/supabase.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  { name: "Vercel", src: "/tech/vercel.svg" },
]

export function Trust() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            La tecnología detrás de tu plataforma
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Construimos con el mismo stack que usan empresas de clase mundial. Ingenieros senior, código que es tuyo, y arquitectura lista para escalar cuando tu negocio crezca.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-6 sm:gap-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                />
              </div>
              <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 sm:mt-16 text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/30 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg sm:text-xl text-foreground font-medium mb-2">
            De Lima a Londres. De Bogotá a Nueva York.
          </p>
          <p className="text-sm text-muted-foreground">
            Clientes en Perú, Chile, Argentina, Colombia, Paraguay, México y Reino Unido. El modelo remoto no es una limitación, es cómo operamos desde el primer día.
          </p>
        </div>
      </div>
    </section>
  )
}