import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden border-b border-sanwa-border bg-sanwa-dark px-4 py-24 text-center">

            {/* 1. Fondo Ambiental (El toque "Zen-Tech")
          Un degradado radial sutil que simula una luz cenital sobre el código.
      */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-sanwa-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                <div className="absolute h-[50rem] w-[50rem] bg-sanwa-accent/10 blur-[100px] rounded-full mix-blend-screen opacity-20" />
            </div>

            {/* 2. Contenido Principal (Z-Index alto para estar sobre el fondo) */}
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">

                {/* Badge / Pill de estado */}
                <div className="inline-flex items-center rounded-full border border-sanwa-border bg-white/5 px-3 py-1 text-sm text-sanwa-muted backdrop-blur-sm transition-colors hover:bg-white/10">
                    <span className="flex h-2 w-2 rounded-full bg-sanwa-accent mr-2 animate-pulse"></span>
                    Sanwa Technologies Global
                </div>

                {/* Headline: Geist Sans brilla aquí */}
                <h1 className="text-5xl font-extrabold tracking-tight text-sanwa-oyster sm:text-7xl lg:text-8xl">
                    Armonía entre <br />
                    <span className="bg-gradient-to-r from-sanwa-oyster via-gray-400 to-sanwa-muted bg-clip-text text-transparent">
            Tecnología y Diseño
          </span>
                </h1>

                {/* Subheadline: El Manifiesto Corto */}
                <p className="max-w-2xl text-lg text-sanwa-muted sm:text-xl leading-relaxed">
                    Sanwa Monozukuri (三和ものづくり). Aplicamos ingeniería de precisión y
                    gestión estratégica para construir el futuro de la identidad digital.
                </p>

                {/* Botones de Acción (Call to Action) */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/solutions"
                        className={cn(
                            "inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors",
                            "bg-sanwa-oyster text-sanwa-dark hover:bg-white/90", // Botón Primario (Alto contraste)
                            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sanwa-accent"
                        )}
                    >
                        Explorar Soluciones
                    </Link>

                    <Link
                        href="/philosophy"
                        className={cn(
                            "inline-flex h-12 items-center justify-center rounded-md border border-sanwa-border px-8 text-sm font-medium text-sanwa-oyster transition-colors",
                            "bg-transparent hover:bg-white/5", // Botón Secundario (Glassmorphism)
                            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sanwa-accent"
                        )}
                    >
                        Nuestra Filosofía
                    </Link>
                </div>
            </div>

            {/* 3. Grid Decorativo (Opcional, muy usado en tech) */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </section>
    )
}