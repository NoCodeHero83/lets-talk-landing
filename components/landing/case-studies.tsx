"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight, X, CheckCircle2, Lightbulb, Wrench, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

interface BusinessCase {
  problem: string
  built: string[]
  results: string[]
}

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  mockImage?: string
  techSpecs: Record<string, string>
  businessCase?: BusinessCase
}

const projects: Project[] = [
  {
    id: "plataforma-fintech-1",
    title: "Increscendo Fintech",
    description: "De operación manual a fintech 100% digital en México. Construimos la plataforma completa de suscripción y préstamos. Duplicaron alcance, atrajeron inversionistas y escalaron ingresos hasta en un 200%.",
    longDescription: "Increscendo es una fintech mexicana que transformó su operación manual en una plataforma 100% digital. Desarrollamos una solución integral de suscripción y préstamos que permite a los usuarios registrarse, solicitar créditos y gestionar sus inversiones desde cualquier dispositivo. La plataforma incluye un portal de cliente, un panel de administración y herramientas de gestión financiera automatizadas.",
    tags: ["Fintech", "Préstamos", "WebApp"],
    image: "/projects/IncrescendoFintech.png",
    techSpecs: {
      "Diseño": "Figma",
      "Implementación": "FlutterFlow & Firebase",
    },
  },
  {
    id: "plataforma-fintech-2",
    title: "Alianza Capital",
    description: "De operaciones 100% manuales a fintech automatizada en 12 meses. Construimos portal, app móvil y gestión financiera. Hoy escalan clientes sin sumar personal operativo.",
    longDescription: "Alianza es una empresa financiera colombiana cuya misión es hacer accesibles los productos financieros a pequeños inversionistas. Desarrollamos una aplicación móvil y una plataforma web de gestión que maneja todos los contratos y activos financieros. Ofrece una interfaz funcional y altamente efectiva que permite a los inversionistas realizar sus transacciones con facilidad y confianza. Se integró la pasarela de pago PSE y la aplicación está publicada en Google Play y Apple Store.",
    tags: ["Fintech", "Inversiones", "AppMóvil"],
    image: "/projects/AlianzaCapital.png",
    mockImage: "/projects/alianza-mock.png",
    techSpecs: {
      "Diseño": "Figma",
      "Implementación": "Flutterflow & Firebase",
      "Google Play": "Disponible",
      "Apple Store": "Disponible",
    },
    businessCase: {
      problem: "El onboarding de clientes, el seguimiento de inversiones y los reportes se realizaban completamente a mano. Sin plataforma, no había confianza de inversionistas ni clientes, y no había forma de crecer sin contratar más personal.",
      built: [
        "Portal del cliente y panel de administración.",
        "App móvil publicada en App Store y Google Play.",
        "Gestión financiera para nóminas y préstamos a empleados.",
      ],
      results: [
        "Dos empresas incorporadas y 100% operativas.",
        "Onboarding, seguimiento e informes automatizados.",
        "App móvil disponible en ambas tiendas.",
        "Capacidad de escalar clientes sin aumentar personal.",
      ],
    },
  },
  {
    id: "portal-adulto-mayor",
    title: "Later Life Training",
    description: "De plataforma inestable a producto confiable en 6 meses. Reconstruimos backend, reservas, pagos y UX. Resultado: 8.000 USD mensuales y arquitectura lista para crecer.",
    longDescription: "Later Life Training es una aplicación web de una empresa escocesa cuya misión es empoderar a personas mayores para combatir enfermedades relacionadas con la edad y mejorar su calidad de vida. Proporciona programas de entrenamiento personalizados y servicios de apoyo diseñados para promover el bienestar, la independencia y un envejecimiento saludable.",
    tags: ["Salud", "Clínicas", "WebApp"],
    image: "/projects/LaterLifeTraining.png",
    mockImage: "/projects/llt-mock.png",
    techSpecs: {
      "Diseño": "Figma",
      "Implementación": "Bubble",
      "Sitio web": "laterlifetraining.co.uk",
    },
    businessCase: {
      problem: "Tras una importante inversión, la plataforma estuvo a punto de ser abandonada. Flujos de trabajo defectuosos, reservas y pagos poco fiables, y un sistema demasiado inestable para funcionar, y mucho menos para escalar.",
      built: [
        "Base de datos y arquitectura de backend reconstruidas.",
        "Sistemas de reserva, eventos y pago estabilizados.",
        "UX/UI rediseñada para mayor claridad y coherencia.",
        "Panel de administración para control operativo completo.",
      ],
      results: [
        "Plataforma estable y lista para producción.",
        "Activación de USD 8,000/mes mediante flujos de reserva y pago fiables.",
        "Experiencia de usuario clara y consistente.",
        "Plataforma lista para escalar sin correcciones constantes.",
      ],
    },
  },
  {
    id: "default-hulp",
    title: "Hulp",
    description: "Construimos la app móvil de un marketplace de servicios desde cero. Hoy: 1.600 descargas, revenue constante y un mercado validado donde antes no había producto.",
    longDescription: "Hulp es una plataforma colombiana que conecta clientes con profesionales de confianza. Desarrollamos dos aplicaciones: la App para Clientes, que ofrece una interfaz sencilla con un sistema de matching impulsado por IA, y la App para Proveedores, que permite a los profesionales mostrar sus habilidades y coordinar su trabajo. Todo orquestado por un panel de administración que supervisa servicios, usuarios y problemas en tiempo real.",
    tags: ["Servicios", "Marketplace", "AppMóvil"],
    image: "/projects/Hulp.png",
    mockImage: "/projects/hulp-mock.png",
    techSpecs: {
      "Diseño": "Figma",
      "Implementación": "FlutterFlow & Supabase",
      "Google Play": "+5,000 descargas",
      "Apple Store": "Disponible",
    },
    businessCase: {
      problem: "La operación era completamente manual, sin plataforma digital que soportara la demanda. La asignación de servicios, proveedores y gestión de clientes dependían de procesos informales, difíciles de escalar.",
      built: [
        "Arquitectura completa de marketplace desde cero.",
        "Sistema centralizado de reservas y asignación de servicios.",
        "App para clientes y app para proveedores.",
        "Panel de administración con control en tiempo real.",
        "Matching impulsado por IA.",
      ],
      results: [
        "Marketplace funcional, operativo en producción.",
        "Más de 5,000 descargas en Google Play.",
        "Ingresos recurrentes generados en plataforma.",
        "Base tecnológica escalable para expansión.",
      ],
    },
  },
]

const idsDestacadosPorNicho: Record<string, string[]> = {
  fintech: ["plataforma-fintech-1", "plataforma-fintech-2"],
  salud: ["portal-adulto-mayor"],
  general: [],
}

function reordenarPlataformas(plataformas: Project[], idsDestacados: string[]) {
  if (idsDestacados.length === 0) return plataformas
  const destacadas = idsDestacados
    .map((id) => plataformas.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined)
  const resto = plataformas.filter((p) => !idsDestacados.includes(p.id))
  return [...destacadas, ...resto]
}

function useNicho() {
  const [nicho, setNicho] = useState("general")
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setNicho(params.get("nicho") || "general")
  }, [])
  return nicho
}

function ProjectDialog({
  project,
  open,
  onOpenChange,
  scrollToCalendly,
}: {
  project: Project
  open: boolean
  onOpenChange: (open: boolean) => void
  scrollToCalendly: () => void
}) {
  const images: string[] = [project.image]
  if (project.mockImage) images.push(project.mockImage)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-2xl lg:max-w-3xl gap-0 p-0 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/60 hover:bg-black/80 text-white p-2 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {images.length > 0 && (
          <div className={`grid ${images.length > 1 ? "sm:grid-cols-2" : ""} gap-0`}>
            {images.map((src, i) => (
              <div key={i} className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={src}
                  alt={`${project.title} ${i === 0 ? "" : "- Mock"}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base text-foreground/80 mt-3 leading-relaxed">
              {project.longDescription}
            </DialogDescription>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Tecnología
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {Object.entries(project.techSpecs).map(([key, value]) => (
                <span key={key} className="text-sm text-foreground/70">
                  <span className="text-muted-foreground">{key}:</span>{" "}
                  <span className="text-foreground/90 font-medium">{value}</span>
                </span>
              ))}
            </div>
          </div>

          {project.businessCase && (
            <div className="space-y-5 pt-2 border-t border-border/50">
              <div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      El problema
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.businessCase.problem}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Lo que construimos
                    </h4>
                    <ul className="space-y-1">
                      {project.businessCase.built.map((item, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Resultados
                    </h4>
                    <ul className="space-y-1">
                      {project.businessCase.results.map((item, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2">
            <Button
              onClick={() => {
                onOpenChange(false)
                setTimeout(scrollToCalendly, 300)
              }}
              size="lg"
              className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 group w-full"
            >
              Agendar mi llamada
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CaseStudies() {
  const nicho = useNicho()
  const proyectosVisibles = reordenarPlataformas(projects, idsDestacadosPorNicho[nicho] || [])
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById("calendly")
    calendlySection?.scrollIntoView({ behavior: "smooth" })
  }

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Casos de éxito
          </h2>
          <p className="text-lg sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cómo empresas como la tuya lograron que funcionara.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosVisibles.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                      [Image Placeholder]
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-foreground/80 mb-4">
                  {project.description}
                </p>

                <Button
                  variant="ghost"
                  onClick={() => openProject(project)}
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                >
                  Ver más
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
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
      </div>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          scrollToCalendly={scrollToCalendly}
        />
      )}
    </section>
  )
}