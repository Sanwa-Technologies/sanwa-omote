"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/ui/fade-in"
import { Terminal } from "@/components/ui/terminal"

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-sanwa-border bg-sanwa-dark px-4 py-24 text-center">

            {/* 1. VIDEO DE FONDO (LOCAL Y DEFINITIVO) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Overlay para oscurecer y que el texto resalte (60%) */}
                <div className="absolute inset-0 bg-sanwa-dark/60 z-10" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    // Poster: Imagen que se muestra mientras carga el video (Evita pantallazo negro)
                    poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    className="h-full w-full object-cover opacity-100"
                >
                    {/* REFERENCIA AL ARCHIVO LOCAL EN LA CARPETA PUBLIC */}
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* 2. GRID DECORATIVO */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* 3. CONTENIDO PRINCIPAL */}
            <div className="relative z-20 flex flex-col items-center gap-8 max-w-5xl">

                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center rounded-full border border-sanwa-border bg-black/40 px-3 py-1 text-sm text-sanwa-muted backdrop-blur-md transition-colors hover:bg-black/60">
                        <span className="flex h-2 w-2 rounded-full bg-sanwa-accent mr-2 animate-pulse"></span>
                        Sanwa Monozukuri Global
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 className="text-5xl font-extrabold tracking-tight text-sanwa-oyster sm:text-7xl lg:text-8xl drop-shadow-2xl">
                        Armonía entre <br />
                        <span className="bg-gradient-to-r from-sanwa-oyster via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Tecnología y Diseño
            </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className="max-w-2xl text-lg text-gray-300 sm:text-xl leading-relaxed mx-auto drop-shadow-md">
                        Ingeniería de software de precisión y gestión estratégica para construir el futuro de la identidad digital.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                        <Link
                            href="/solutions"
                            className={cn(
                                "inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors",
                                "bg-sanwa-oyster text-sanwa-dark hover:bg-white/90 shadow-lg shadow-white/5",
                                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sanwa-accent"
                            )}
                        >
                            Explorar Soluciones
                        </Link>

                        <Link
                            href="/philosophy"
                            className={cn(
                                "inline-flex h-12 items-center justify-center rounded-md border border-sanwa-border px-8 text-sm font-medium text-sanwa-oyster transition-colors",
                                "bg-black/30 hover:bg-black/50 backdrop-blur-sm",
                                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sanwa-accent"
                            )}
                        >
                            Nuestra Filosofía
                        </Link>
                    </div>
                </FadeIn>

                <FadeIn delay={0.6} className="w-full mt-12 flex justify-center">
                    <Terminal />
                </FadeIn>

            </div>
        </section>
    )
}