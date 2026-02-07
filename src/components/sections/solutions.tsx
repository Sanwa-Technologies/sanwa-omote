import {
    Cloud,
    Rocket,
    Palette,
    Cpu,
    ArrowRight
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/ui/fade-in"

// Definimos los datos aquí para mantener el código limpio (Kanri)
const services = [
    {
        title: "Sora (空)",
        subtitle: "Potencial Puro",
        description: "Digitalización inicial sin costo operativo. Configuramos tu ecosistema usando los mejores Free Tiers del mercado.",
        icon: Cloud,
        href: "/solutions#sora", // Apunta al ancla en la misma página si decides hacer secciones, o a una página detalle
        className: "md:col-span-1", // Ocupa 1 columna
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Hajime (始め)",
        subtitle: "El Comienzo",
        description: "Identidad profesional y Tienda Nube lista para vender. El primer paso firme hacia la formalización.",
        icon: Rocket,
        href: "/solutions#hajime",
        className: "md:col-span-1",
        gradient: "from-emerald-500/20 to-green-500/20",
    },
    {
        title: "Irodori (彩り)",
        subtitle: "Diseño y UX",
        description: "Estrategia visual y Landing Pages en Next.js que diferencian tu marca de la competencia genérica.",
        icon: Palette,
        href: "/solutions#irodori",
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Shinka (進化)",
        subtitle: "Evolución Técnica",
        description: "Consultoría de arquitectura avanzada. Auditoría de procesos, seguridad y escalabilidad para empresas en crecimiento.",
        icon: Cpu,
        href: "/solutions#shinka",
        className: "md:col-span-3", // ¡Ocupa todo el ancho! Es el servicio más premium.
        gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10",
    }
]

export function Solutions() {
    return (
        <section className="relative bg-sanwa-dark py-24 sm:py-32" id="solutions">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Encabezado de la Sección con Animación */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-base font-semibold leading-7 text-sanwa-accent uppercase tracking-widest">
                            Nuestros Servicios
                        </h2>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-sanwa-oyster sm:text-4xl">
                            El camino de la transformación digital
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <p className="mt-6 text-lg leading-8 text-sanwa-muted">
                            Desde el primer paso gratuito hasta la arquitectura de sistemas complejos.
                            Acompañamos cada etapa de tu crecimiento con la filosofía Monozukuri.
                        </p>
                    </FadeIn>
                </div>

                {/* El Bento Grid Animado */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                    {services.map((service, index) => (
                        <FadeIn
                            key={service.title}
                            delay={index * 0.15} // Retraso progresivo para efecto cascada
                            className={service.className} // Pasamos la clase de columna al wrapper animado
                            direction="up"
                        >
                            <div
                                className={cn(
                                    "group relative h-full overflow-hidden rounded-2xl border border-sanwa-border bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-2xl hover:border-sanwa-border/50"
                                )}
                            >
                                {/* Gradiente de fondo al hacer hover (Sutileza Elite) */}
                                <div
                                    className={cn(
                                        "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br",
                                        service.gradient
                                    )}
                                />

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sanwa-dark border border-sanwa-border text-sanwa-oyster">
                                            <service.icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="text-xl font-bold text-sanwa-oyster flex items-center gap-2">
                                            {service.title}
                                            <span className="text-xs font-normal text-sanwa-muted bg-white/5 px-2 py-1 rounded-full border border-white/5">
                        {service.subtitle}
                      </span>
                                        </h3>

                                        <p className="mt-4 text-sm leading-6 text-sanwa-muted group-hover:text-gray-300 transition-colors">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-sanwa-accent">
                                        Ver detalles <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        {/* Extendemos el enlace a toda la tarjeta para mejor UX */}
                                        <Link href={service.href} className="absolute inset-0" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}