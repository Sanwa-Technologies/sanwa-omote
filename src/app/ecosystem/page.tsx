import type { Metadata } from "next";
import { ShieldCheck, Lock, Server, Fingerprint, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "Ecosistema | Sanwa Monozukuri",
    description: "Nuestros productos propietarios: Sanwa Akashi (IAM), Sanwa Kaname (Criptografía) y Sanwa Homare (Arquitectura).",
};

// Datos de los Proyectos
const projects = [
    {
        id: "akashi",
        name: "Sanwa Akashi",
        kanji: "三和明石",
        category: "Identity & Access Management (IAM)",
        description: "Sistema de identidad soberana y autenticación centralizada. Diseñado para eliminar la dependencia de Auth0 o Firebase, devolviendo el control total de los datos al propietario.",
        status: "En Desarrollo",
        statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
        icon: Fingerprint,
        specs: ["OAuth 2.1 / OIDC", "Multi-Tenant", "Custom Audit Logs"],
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent"
    },
    {
        id: "kaname",
        name: "Sanwa Kaname",
        kanji: "三和要",
        category: "Post-Quantum Cryptography",
        description: "El 'Punto Vital' de la seguridad. Una capa de protección criptográfica resistente a computación cuántica, diseñada para blindar las comunicaciones críticas de Akashi.",
        status: "Investigación",
        statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
        icon: Lock,
        specs: ["Lattice-based Crypto", "Kyber/Dilithium impl.", "Zero-Trust Arch"],
        gradient: "from-purple-500/10 via-violet-500/5 to-transparent"
    },
    {
        id: "homare",
        name: "Sanwa Homare",
        kanji: "三和誉",
        category: "Enterprise Microservices Engine",
        description: "Arquitectura de referencia para sistemas de alto rendimiento. Implementación estricta de patrones CQRS y Event Sourcing para aplicaciones financieras o críticas.",
        status: "Planificación",
        statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
        icon: Server,
        specs: ["Event Sourcing", "CQRS Pattern", "Go gRPC Core"],
        gradient: "from-blue-500/10 via-cyan-500/5 to-transparent"
    }
];

export default function EcosystemPage() {
    return (
        <main className="min-h-screen bg-sanwa-dark pt-32 pb-24 relative overflow-hidden">

            {/* 1. IMAGEN DE FONDO (Cyber Tech) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-sanwa-dark via-sanwa-dark/60 to-sanwa-dark z-10" />
                <img
                    src="/ecosystem-bg.jpg"
                    alt="Abstract Technology"
                    className="h-full w-full object-cover opacity-30 contrast-125 grayscale"
                />
            </div>

            {/* Grid Técnico adicional */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-10" />

            {/* 2. HEADER SECTION */}
            <section className="px-6 lg:px-8 max-w-4xl mx-auto text-center mb-20 relative z-20">
                <FadeIn>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-sanwa-oyster mb-6 drop-shadow-xl">
                        Sanwa Labs
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-md">
                        Nuestra forja interna. Aquí desarrollamos la tecnología propietaria que impulsará la próxima generación de servicios digitales.
                    </p>
                </FadeIn>
            </section>

            {/* 3. LISTA DE PROYECTOS */}
            <section className="px-6 lg:px-8 max-w-5xl mx-auto space-y-8 relative z-20">
                {projects.map((project, index) => (
                    <FadeIn key={project.id} delay={index * 0.1}>
                        <div
                            className="group relative rounded-3xl border border-sanwa-border bg-black/60 backdrop-blur-md overflow-hidden hover:border-sanwa-border/80 transition-all duration-500 shadow-2xl"
                        >
                            {/* Gradiente sutil en hover */}
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", project.gradient)} />

                            <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8">

                                {/* Columna Izquierda: Icono e Identidad */}
                                <div className="flex-shrink-0 flex flex-col items-start justify-between">
                                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sanwa-oyster mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <project.icon className="h-7 w-7" />
                                    </div>
                                    <div className="font-serif text-5xl text-white/5 select-none absolute top-4 right-4 md:static md:text-white/10 group-hover:text-white/20 transition-colors">
                                        {project.kanji}
                                    </div>
                                </div>

                                {/* Columna Central: Info */}
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-sanwa-oyster">{project.name}</h3>
                                        <span className={cn("text-[10px] uppercase font-bold tracking-wider py-1 px-2 rounded-md border", project.statusColor)}>
                      {project.status}
                    </span>
                                    </div>
                                    <p className="text-sm font-mono text-sanwa-accent/70 mb-4 uppercase tracking-tight">
                                        {project.category}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Specs Técnicas */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.specs.map((spec) => (
                                            <div key={spec} className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                                                <Activity className="h-3 w-3 opacity-50" />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Columna Derecha: Acción (Waitlist) */}
                                <div className="flex md:flex-col justify-end md:justify-center items-end border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8 min-w-[140px]">
                                    <button className="text-sm font-medium text-sanwa-oyster hover:text-sanwa-accent transition-colors flex items-center gap-2 group/btn">
                                        Solicitar Acceso
                                        <span className="block h-[1px] w-4 bg-sanwa-accent group-hover/btn:w-8 transition-all" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </FadeIn>
                ))}
            </section>

            {/* Nota al pie técnica */}
            <div className="text-center mt-24 relative z-20">
                <p className="text-xs text-sanwa-muted font-mono">
                    SYSTEM STATUS: ALL SYSTEMS NOMINAL // VGG-AR NODE
                </p>
            </div>

        </main>
    );
}