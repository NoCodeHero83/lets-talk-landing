"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  ArrowRight,
  X,
  CheckCircle2,
  Lightbulb,
  Wrench,
  TrendingUp,
  Globe,
  Cpu,
  Store,
} from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  summary: string
  description: string
  problem: string
  features: string[]
  impact: string[]
  techSpecs: Record<string, string>
  scope: string
  status: string[]
  availability: string
  orientation: "portrait" | "landscape"
  cover: string
  images: string[]
}

const projects: Project[] = [
  {
    id: "alianza-capital",
    title: "Alianza Capital",
    category: "Fintech",
    summary:
      "De operaciones 100% manuales a una plataforma fintech completa: dos empresas incorporadas y automatizadas, una app móvil en ambas tiendas y la capacidad de escalar clientes sin aumentar la plantilla.",
    description:
      "Alianza es una empresa financiera colombiana cuya misión es facilitar el acceso a productos financieros a pequeños inversionistas. Desarrollamos una aplicación móvil y una plataforma web de gestión que maneja todos los contratos y activos financieros. La plataforma ofrece una interfaz funcional y altamente efectiva que permite a los inversionistas realizar sus transacciones con facilidad y confianza. Se integró la pasarela de pago PSE y la aplicación está publicada en Google Play y Apple Store.",
    problem:
      "El onboarding de clientes, el seguimiento de inversiones y los reportes se realizaban completamente a mano. Sin plataforma, no había confianza de inversionistas ni clientes, y no había forma de crecer sin contratar más personal.",
    features: [
      "Portal del cliente y panel de administración.",
      "App móvil publicada en App Store y Google Play.",
      "Gestión financiera para nóminas y préstamos a empleados.",
      "Pasarela de pago PSE integrada.",
    ],
    impact: [
      "Dos empresas incorporadas y 100% operativas.",
      "Onboarding, seguimiento e informes automatizados.",
      "App móvil disponible en ambas tiendas.",
      "Capacidad de escalar clientes sin aumentar personal.",
    ],
    techSpecs: {
      "Diseño": "Figma",
      "Implementación": "FlutterFlow & Firebase",
    },
    scope: "Colombia.",
    status: ["iOS", "Android", "Web"],
    availability: "Disponible en Google Play y App Store",
    orientation: "portrait",
    cover: "/projects/alianza-1.png",
    images: [
      "/projects/alianza-1.png",
      "/projects/alianza-2.png",
      "/projects/alianza-3.png",
      "/projects/alianza-4.png",
      "/projects/alianza-5.png",
    ],
  },
  {
    id: "racing-kx",
    title: "Racing KX",
    category: "Red social",
    summary:
      "Una red social especializada para la comunidad profesional del automovilismo con perfiles tipo vCard, publicaciones, seguidores y funcionalidades premium, desarrollada junto al partner Creante para una comunidad francesa de creadores de contenido.",
    description:
      "Racing KX es una red social especializada para profesionales y aficionados del mundo del motorsport, desarrollada para Francia junto a nuestro partner Creante. Ofrece perfiles profesionales, publicaciones, seguidores y networking especializado, además de funcionalidades premium mediante suscripción. La plataforma fue diseñada inicialmente en Figma y desarrollada en React Native.",
    problem:
      "La comunidad profesional del motorsport necesitaba un espacio especializado para construir perfiles profesionales, compartir contenido y hacer networking con sus pares, combinado con funcionalidades premium que sostuvieran un modelo sustentable.",
    features: [
      "Perfiles profesionales.",
      "Publicaciones y seguidores.",
      "Networking dentro de la comunidad.",
      "Comunidad especializada en motorsport.",
      "Funcionalidades premium mediante suscripción.",
    ],
    impact: [
      "Una red social construida para la comunidad profesional del motorsport.",
      "Desarrollada para Francia junto al partner Creante.",
      "Disponible en App Store y Google Play.",
    ],
    techSpecs: {
      "Diseño": "Figma",
      "Implementación": "React Native",
    },
    scope: "Francia.",
    status: ["iOS", "Android"],
    availability: "Disponible en App Store y Google Play",
    orientation: "portrait",
    cover: "/projects/racingkx-2.png",
    images: [
      "/projects/racingkx-1.png",
      "/projects/racingkx-2.png",
      "/projects/racingkx-3.png",
      "/projects/racingkx-4.png",
      "/projects/racingkx-5.png",
      "/projects/racingkx-6.png",
    ],
  },
  {
    id: "ilirox",
    title: "Ilirox",
    category: "Red social",
    summary:
      "Una red social profesional para agentes inmobiliarios con match inteligente entre búsquedas y propiedades, alertas automáticas, búsqueda por polígonos en el mapa, validación comunitaria y contenido social, construida para convertirse en la mayor red inmobiliaria de México.",
    description:
      "Ilirox es una red social profesional para agentes inmobiliarios cuyo objetivo es conectar a los profesionales mediante un sistema inteligente de coincidencias entre propiedades y búsquedas. Ofrece match inteligente, alertas automáticas cuando aparecen propiedades compatibles, búsqueda mediante polígonos sobre el mapa, validación comunitaria de agentes inmobiliarios y publicación de propiedades, reels y videos. Ilirox inicia operaciones en Aguascalientes, México, sobre una arquitectura preparada para expandirse a todo el país. Disponible para iOS y Android.",
    problem:
      "Los profesionales inmobiliarios en Aguascalientes no contaban con una red profesional dedicada: el match entre búsquedas y propiedades era manual, no había alertas automáticas cuando aparecían coincidencias, ni una forma de validar agentes o compartir contenido profesional en un solo lugar.",
    features: [
      "Matching inteligente entre propiedades y búsquedas.",
      "Alertas automáticas cuando aparecen propiedades compatibles.",
      "Búsqueda mediante polígonos sobre el mapa.",
      "Validación comunitaria de agentes inmobiliarios.",
      "Publicación de propiedades, reels y videos.",
    ],
    impact: [
      "La mayor red social especializada para agentes inmobiliarios.",
      "Inicia en Aguascalientes, con arquitectura para expansión nacional.",
      "Disponible para iOS y Android.",
    ],
    techSpecs: {},
    scope: "México — inicia en Aguascalientes, con expansión prevista a todo el país.",
    status: ["iOS", "Android"],
    availability: "Disponible en App Store y Google Play",
    orientation: "portrait",
    cover: "/projects/ilirox-portada.png",
    images: [
      "/projects/ilirox-portada.png",
      "/projects/ilirox-1.png",
      "/projects/ilirox-2.png",
      "/projects/ilirox-3.png",
      "/projects/ilirox-4.png",
      "/projects/ilirox-5.png",
      "/projects/ilirox-6.png",
      "/projects/ilirox-7.png",
    ],
  },
  {
    id: "true-english",
    title: "True English",
    category: "Educación",
    summary:
      "Una plataforma de aprendizaje de inglés asistida por IA con cursos completos, evaluación automática de pronunciación, retroalimentación personalizada y contenido especializado para cada organización, utilizada actualmente en Hermosillo y Zacatecas.",
    description:
      "True English es una plataforma educativa asistida por Inteligencia Artificial que permite enseñar inglés mediante cursos estructurados. Incluye evaluación automática de pronunciación mediante IA, retroalimentación personalizada, cursos para niños, cursos TOEFL, cursos empresariales y contenido privado para organizaciones. True English opera actualmente en Hermosillo y Zacatecas, con expansión prevista para todo México. Disponible para iOS y Android.",
    problem:
      "Aprender inglés con cursos genéricos dejaba a los estudiantes sin retroalimentación personalizada ni evaluación automática de pronunciación, dificultando el seguimiento del progreso y sin permitir que las organizaciones entregaran contenido adaptado.",
    features: [
      "Cursos estructurados de inglés.",
      "Evaluación automática de pronunciación mediante IA.",
      "Retroalimentación personalizada.",
      "Cursos para niños.",
      "Cursos TOEFL.",
      "Cursos empresariales.",
      "Contenido privado para organizaciones.",
    ],
    impact: [
      "Plataforma de aprendizaje de inglés asistida por IA en uso activo.",
      "Operando en Hermosillo y Zacatecas, con expansión nacional prevista.",
      "Disponible para iOS y Android.",
    ],
    techSpecs: {},
    scope: "México — Hermosillo y Zacatecas, con expansión prevista a todo el país.",
    status: ["iOS", "Android"],
    availability: "Disponible en App Store y Google Play",
    orientation: "portrait",
    cover: "/projects/trueenglish-1.png",
    images: [
      "/projects/trueenglish-1.png",
      "/projects/trueenglish-2.png",
      "/projects/trueenglish-3.png",
      "/projects/trueenglish-4.png",
      "/projects/trueenglish-5.png",
      "/projects/trueenglish-6.png",
    ],
  },
  {
    id: "increciendo-fintech",
    title: "Increciendo FinTech",
    category: "Fintech",
    summary:
      "Una plataforma web para la gestión de préstamos en línea basada en un modelo de suscripción, con tasas preferenciales para suscritos, tasas estándar para ocasionales y planes corporativos: un SaaS que beneficia tanto a la fintech como a sus clientes.",
    description:
      "Increciendo FinTech es una plataforma web de préstamos en línea cuya principal innovación es un modelo de suscripción que permite acceder a mejores tasas de interés. Los usuarios frecuentes obtienen beneficios mediante la suscripción, y las empresas pueden adquirir planes corporativos para que sus colaboradores accedan a mejores condiciones de financiamiento. Este modelo beneficia tanto a los clientes como a la fintech, al incorporar ingresos recurrentes mediante suscripción. Opera actualmente en Ciudad de México, con planes de expansión. Disponible únicamente como plataforma web.",
    problem:
      "Gestionar préstamos en línea requería un modelo de precios que recompensara a los usuarios recurrentes, atendiera a clientes ocasionales y ofreciera una propuesta estructurada a las empresas, manteniendo la plataforma rentable y escalable.",
    features: [
      "Plataforma web de préstamos en línea.",
      "Modelo de suscripción con mejores tasas para usuarios suscritos.",
      "Planes corporativos para empresas y colaboradores.",
      "Monetización mediante ingresos recurrentes.",
    ],
    impact: [
      "Un modelo que beneficia tanto a los clientes como a la fintech.",
      "Operando en Ciudad de México, con planes de expansión.",
      "Disponible únicamente como plataforma web.",
    ],
    techSpecs: {},
    scope: "México — Ciudad de México, con planes de expansión.",
    status: ["Web"],
    availability: "Disponible en web",
    orientation: "landscape",
    cover: "/projects/increciendo-1.png",
    images: [
      "/projects/increciendo-1.png",
      "/projects/increciendo-2.png",
      "/projects/increciendo-3.png",
      "/projects/increciendo-4.png",
      "/projects/increciendo-5.png",
    ],
  },
  {
    id: "daily-sparkle",
    title: "Daily Sparkle",
    category: "SaaS",
    summary:
      "Daily Sparkle es una aplicación web del Reino Unido que ayuda a los hogares de cuidado a involucrar a sus residentes y conectar con sus familias. Ofrece gestión del cuidado, planificación de actividades y un portal seguro con actualizaciones e información.",
    description:
      "Daily Sparkle es una plataforma SaaS utilizada por instituciones del Reino Unido para residencias geriátricas. Permite la gestión integral de residentes, la planificación de actividades y el acceso a una biblioteca de actividades, además de múltiples módulos administrativos. La plataforma también conecta a los hogares de cuidado con las familias mediante un portal seguro con actualizaciones e información personalizada.",
    problem:
      "Las residencias geriátricas necesitaban una plataforma integral para gestionar a sus residentes, planificar actividades y mantener informadas a las familias, con módulos administrativos que simplificaran la operación diaria.",
    features: [
      "Gestión de residentes.",
      "Planificación de actividades.",
      "Biblioteca de actividades.",
      "Múltiples módulos administrativos.",
      "Portal seguro para familias con actualizaciones e información.",
    ],
    impact: [
      "Plataforma SaaS utilizada por instituciones del Reino Unido.",
      "Involucra a los residentes y conecta a las familias.",
      "Simplifica la operación de los hogares de cuidado.",
    ],
    techSpecs: {
      "Diseño": "Lovable",
      "Implementación": "Bubble",
    },
    scope: "Reino Unido.",
    status: ["Web"],
    availability: "Disponible en web",
    orientation: "landscape",
    cover: "/projects/dailysparkle-1.png",
    images: [
      "/projects/dailysparkle-1.png",
      "/projects/dailysparkle-2.png",
      "/projects/dailysparkle-3.png",
      "/projects/dailysparkle-4.png",
      "/projects/dailysparkle-5.png",
    ],
  },
]

function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-primary shrink-0" />
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          {title}
        </h4>
      </div>
      <div className="text-sm text-foreground/75 leading-relaxed">{children}</div>
    </div>
  )
}

function ProjectCarousel({
  images,
  title,
  orientation,
}: {
  images: string[]
  title: string
  orientation: Project["orientation"]
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  if (!images.length) return null

  const mobileAspect =
    orientation === "portrait" ? "aspect-[3/4]" : "aspect-video"
  const objectPosition =
    orientation === "portrait" ? "object-top" : "object-center"

  return (
    <div className="relative h-full w-[78%] mx-auto overflow-hidden bg-muted lg:w-full lg:mx-0">
      <Carousel opts={{ loop: true }} setApi={setApi} className="relative w-full h-full z-0 isolate">
        <CarouselContent viewportClassName="h-full" className="h-full z-0">
          {images.map((src, i) => (
            <CarouselItem key={i} className="h-full">
              <div
                className={`${mobileAspect} lg:aspect-auto w-full h-full overflow-hidden`}
              >
                <img
                  src={src}
                  alt={`${title} — ${i + 1}`}
                  className={`w-full h-full object-cover ${objectPosition}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-3 top-1/2 -translate-y-1/2 size-10 sm:size-11 bg-black/60 text-white hover:bg-black/80 hover:text-white border-0 z-50" />
        <CarouselNext className="right-2 sm:right-3 top-1/2 -translate-y-1/2 size-10 sm:size-11 bg-black/60 text-white hover:bg-black/80 hover:text-white border-0 z-50" />
      </Carousel>
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === current
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-black/60 sm:bg-black/40 backdrop-blur-md"
        className="gap-0 p-0 rounded-3xl ring-1 ring-black/70 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_10px_40px_-10px_rgba(0,0,0,0.55),0_40px_100px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[84vh] sm:max-h-[88vh] overflow-y-auto lg:overflow-hidden lg:h-[82vh] border-[3px] border-white/80 sm:border sm:border-zinc-300/50"
      >
        <div className="sticky top-0 z-[100] flex items-start justify-end p-3 rounded-t-3xl">
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Cerrar"
            className="flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 p-3 sm:p-3 ring-4 ring-white/90 shadow-[0_6px_24px_rgba(0,0,0,0.7)] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:h-full">
          <ProjectCarousel
            images={project.images}
            title={project.title}
            orientation={project.orientation}
          />

          <div className="flex flex-col lg:h-full">
            <div className="px-6 py-6 sm:px-8 sm:py-8 space-y-8 lg:flex-1 lg:overflow-y-auto">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category && (
                    <span className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      {project.category}
                    </span>
                  )}
                  {project.status.map((status) => (
                    <span
                      key={status}
                      className="px-2.5 py-1 text-xs rounded-full border border-border/60 text-foreground/70 font-medium"
                    >
                      {status}
                    </span>
                  ))}
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                  {project.title}
                </DialogTitle>
              </div>

              <p className="text-base text-foreground/80 leading-relaxed">
                {project.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <InfoBlock icon={Lightbulb} title="Problema que resuelve">
                  <p>{project.problem}</p>
                </InfoBlock>

                <div className="space-y-8">
                  <InfoBlock icon={Globe} title="Alcance geográfico">
                    <p>{project.scope}</p>
                  </InfoBlock>
                  {Object.keys(project.techSpecs).length > 0 && (
                    <InfoBlock icon={Cpu} title="Tecnologías">
                      <div className="flex flex-col gap-y-2">
                        {Object.entries(project.techSpecs).map(([key, value]) => (
                          <span key={key} className="text-sm text-foreground/70">
                            <span className="text-muted-foreground">{key}:</span>{" "}
                            <span className="text-foreground/90 font-medium">
                              {value}
                            </span>
                          </span>
                        ))}
                      </div>
                    </InfoBlock>
                  )}
                </div>

                <InfoBlock icon={Wrench} title="Funcionalidades principales">
                  <ul className="space-y-2">
                    {project.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </InfoBlock>

                <InfoBlock icon={TrendingUp} title="Impacto">
                  <ul className="space-y-2">
                    {project.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </InfoBlock>
              </div>
            </div>

            <div className="shrink-0 px-6 py-5 sm:px-8 border-t border-border/50 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <p className="flex items-center gap-2 text-sm text-muted-foreground sm:flex-1">
                <Store className="w-4 h-4 text-primary shrink-0" />
                {project.availability}
              </p>
              <Button
                onClick={() => {
                  onOpenChange(false)
                  setTimeout(scrollToCalendly, 300)
                }}
                size="lg"
                className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 group w-full sm:w-auto"
              >
                Agendar llamada
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CaseStudies() {
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
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/11.25] relative overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className={`w-full h-full object-cover ${
                    project.orientation === "portrait"
                      ? "object-top"
                      : "object-center"
                  } transition-transform duration-500 group-hover:scale-105`}
                />
              </div>

              <div className="p-6">
                {project.category && (
                  <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium mb-3">
                    {project.category}
                  </span>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-foreground/80 mb-4 line-clamp-3">
                  {project.summary}
                </p>

                <Button
                  onClick={() => openProject(project)}
                  className="w-full rounded-full border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 font-medium group/btn"
                >
                  Ver más detalles
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
          key={selectedProject.id}
          project={selectedProject}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          scrollToCalendly={scrollToCalendly}
        />
      )}
    </section>
  )
}
