import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Rocket, Palette, Cpu, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "Soluciones y Planes | Sanwa Monozukuri",
    description: "Desde la digitalización gratuita hasta la arquitectura empresarial. Conoce nuestros planes Sora, Hajime, Irodori y Shinka.",
};

const plans = [
    {
        id: "sora",
        name: "Plan SORA (空)",
        tagline: "El Cielo / El Vacío",
        description: "Ideal para emprendedores que necesitan validar su idea sin riesgo financiero. Digitalización pura usando herramientas gratuitas.",
        icon: Cloud,
        color: "text-blue-400",
        features: [
            "Configuración de Google Business Profile",
            "Alta en Google Maps",
            "Linktree o Bio Site básico",
            "Asesoría inicial de herramientas (0 costo)",
            "Sin mantenimiento mensual"
        ],
        cta: "Empezar Gratis",
        gradient: "from-blue-500/10 via-cyan-500/5 to-transparent"
    },
    {
        id: "hajime",
        name: "Plan HAJIME (始め)",
        tagline: "El Comienzo",
        description: "Para negocios que están listos para vender. Profesionalizamos tu imagen y configuramos tu primera tienda real.",
        icon: Rocket,
        color: "text-emerald-400",
        features: [
            "Todo lo de Sora",
            "Configuración de Tienda Nube / E-commerce",
            "Dominio .com.ar personalizado",
            "Correos corporativos (Zoho/Google)",
            "Diseño de tarjetas y papelería digital"
        ],
        cta: "Cotizar Hajime",
        gradient: "from-emerald-500/10 via-green-500/5 to-transparent"
    },
    {
        id: "irodori",
        name: "Plan IRODORI (彩り)",
        tagline: "Colorear / Diseño",
        description: "Diferenciación visual. Dejamos las plantillas atrás y creamos una experiencia web a medida en Next.js.",
        icon: Palette,
        color: "text-purple-400",
        features: [
            "Desarrollo Web Custom (Next.js + Tailwind)",
            "Animaciones fluidas (Framer Motion)",
            "Optimización SEO Avanzada",
            "Modo Oscuro / Claro",
            "Identidad Visual (Branding Kit)"
        ],
        cta: "Cotizar Irodori",
        gradient: "from-purple-500/10 via-pink-500/5 to-transparent"
    },
    {
        id: "shinka",
        name: "Plan SHINKA (進化)",
        tagline: "Evolución",
        description: "Consultoría de arquitectura de software para empresas. Resolvemos problemas de escalabilidad, seguridad y deuda técnica.",
        icon: Cpu,
        color: "text-amber-400",
        features: [
            "Auditoría de Arquitectura (Event Sourcing/CQRS)",
            "Seguridad Post-Cuántica (Kaname)",
            "Gestión de Identidad (Akashi)",
            "Migración a Microservicios (Go/gRPC)",
            "Soporte 24/7 Prioritario"
        ],
        cta: "Consultar Consultoría",
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent"
    }
];

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-sanwa-dark pt-32 pb-24 relative overflow-hidden">

            {/* 1. IMAGEN DE FONDO (Estructura Abstracta) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-sanwa-dark via-sanwa-dark/60 to-sanwa-dark z-10" />
                <img
                    src="solutions-bg.jpg"
                    alt="Abstract Structure"
                    className="h-full w-full object-cover opacity-30 grayscale contrast-125"
                />
            </div>

            {/* 2. HERO SECTION */}
            <section className="px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24 relative z-20">
                <FadeIn>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-sanwa-oyster mb-6 drop-shadow-xl">
                        La Escalera de Valor
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-md">
                        No vendemos "sitios web". Ofrecemos un camino de crecimiento tecnológico.
                        Desde el primer paso gratuito hasta la ingeniería de sistemas complejos.
                    </p>
                </FadeIn>
            </section>

            {/* 3. LISTA DE PLANES */}
            <div className="space-y-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
                {plans.map((plan, index) => (
                    <FadeIn key={plan.id} delay={index * 0.1} direction="up">
                        <section
                            id={plan.id}
                            className="relative overflow-hidden rounded-3xl border border-sanwa-border bg-black/60 backdrop-blur-md p-8 lg:p-12 scroll-mt-32 shadow-2xl"
                        >
                            {/* Gradiente sutil interno */}
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 pointer-events-none", plan.gradient)} />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                                {/* Columna Izquierda: Identidad */}
                                <div className="lg:col-span-1">
                                    <div className={cn("inline-flex p-3 rounded-xl bg-white/5 border border-white/10 mb-6", plan.color)}>
                                        <plan.icon className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-sanwa-oyster mb-2">{plan.name}</h2>
                                    <p className={cn("text-sm font-mono uppercase tracking-widest mb-4 opacity-80", plan.color)}>
                                        {plan.tagline}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Columna Centro: Features */}
                                <div className="lg:col-span-1">
                                    <h3 className="text-sm font-semibold text-sanwa-oyster mb-6 uppercase tracking-wider">
                                        Qué incluye:
                                    </h3>
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-gray-400 text-sm">
                                                <Check className={cn("h-5 w-5 shrink-0", plan.color)} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Columna Derecha: CTA */}
                                <div className="lg:col-span-1 flex flex-col justify-center h-full border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                                    <p className="text-gray-500 text-sm mb-6 italic">
                                        "El camino de mil millas comienza con un solo paso."
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="group inline-flex items-center justify-center gap-2 rounded-md bg-sanwa-oyster px-6 py-3 text-sm font-bold text-sanwa-dark transition-all hover:bg-white hover:scale-105"
                                    >
                                        {plan.cta}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>

                            </div>
                        </section>
                    </FadeIn>
                ))}
            </div>

            {/* 4. SECCIÓN: CONSULTORÍA A MEDIDA */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto mt-24 mb-12 relative z-20">
                <FadeIn direction="up">
                    <div className="relative overflow-hidden rounded-3xl bg-black/60 backdrop-blur-md border border-sanwa-accent/20 p-8 lg:p-16 text-center shadow-2xl">

                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-sanwa-accent/10 blur-[80px]" />
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-sanwa-oyster sm:text-4xl mb-6">
                                ¿Su desafío no encaja en una caja?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Entendemos que la tecnología es compleja y diversa. Si necesita auditoría de redes,
                                configuración de servidores Linux, diseño de infraestructura física o simplemente
                                una segunda opinión experta, nuestra ingeniería está disponible bajo demanda.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact?subject=consultoria"
                                    className="inline-flex h-12 items-center justify-center rounded-md bg-sanwa-oyster px-8 text-sm font-bold text-sanwa-dark transition-all hover:bg-white hover:scale-105"
                                >
                                    Agendar Consultoría Abierta
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    href="https://wa.me/5493410000000" // Tu número real
                                    className="inline-flex h-12 items-center justify-center rounded-md border border-sanwa-border px-8 text-sm font-medium text-sanwa-oyster transition-colors hover:bg-white/5 hover:border-white/20"
                                >
                                    Consulta Rápida por WhatsApp
                                </Link>
                            </div>

                            <p className="mt-8 text-xs text-gray-500 font-mono uppercase tracking-widest">
                                Redes • Hardware • Seguridad • IT Management
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </section>

        </main>
    );
}