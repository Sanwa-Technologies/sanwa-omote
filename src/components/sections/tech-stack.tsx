import { cn } from "@/lib/utils"

const technologies = [
    "GoLang", "Next.js 16", "TypeScript", "Tailwind CSS",
    "Docker", "Post-Quantum Crypto", "Event Sourcing", "CQRS",
    "Cloudflare", "Vercel", "Linux", "gRPC"
]

export function TechStack() {
    return (
        <section className="border-y border-sanwa-border bg-black py-12 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-8">
                <p className="text-sm font-medium text-sanwa-muted uppercase tracking-widest">
                    Ingeniería de Precisión
                </p>
            </div>

            {/* Contenedor Principal con las máscaras de desvanecimiento */}
            <div className="relative flex w-full overflow-hidden bg-black [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">

                {/* CARRIL 1: Lista original */}
                <div className="flex min-w-full shrink-0 animate-scroll items-center justify-around gap-8 py-4">
                    {technologies.map((tech, i) => (
                        <span
                            key={`tech-1-${i}`}
                            className="text-xl font-bold text-sanwa-muted/50 font-mono transition-colors hover:text-sanwa-oyster cursor-default mx-8"
                        >
              {tech}
            </span>
                    ))}
                </div>

                {/* CARRIL 2: Copia idéntica (aria-hidden para que los lectores de pantalla no la lean doble) */}
                <div className="flex min-w-full shrink-0 animate-scroll items-center justify-around gap-8 py-4" aria-hidden="true">
                    {technologies.map((tech, i) => (
                        <span
                            key={`tech-2-${i}`}
                            className="text-xl font-bold text-sanwa-muted/50 font-mono transition-colors hover:text-sanwa-oyster cursor-default mx-8"
                        >
              {tech}
            </span>
                    ))}
                </div>

            </div>
        </section>
    )
}