import Link from "next/link"
import { ArrowLeft, SearchX } from "lucide-react"

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-sanwa-dark text-center">

            {/* 1. Fondo Conceptual: El Kanji de "La Nada" (Mu) */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none text-[20rem] font-black text-sanwa-oyster opacity-[0.03] blur-sm md:text-[30rem]">
          無
        </span>
            </div>

            {/* 2. Efectos de Luz (Atmósfera) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sanwa-accent/5 rounded-full blur-[100px] pointer-events-none" />

            {/* 3. Contenido Principal */}
            <div className="relative z-10 px-4">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm">
                    <SearchX className="h-8 w-8 text-sanwa-muted" />
                </div>

                <h1 className="mb-2 text-7xl font-bold tracking-tighter text-sanwa-oyster">
                    404
                </h1>

                <h2 className="mb-6 text-xl font-medium text-sanwa-muted uppercase tracking-widest">
                    Ruta no encontrada
                </h2>

                <p className="mx-auto max-w-lg text-lg text-gray-400 mb-10 leading-relaxed">
                    Has llegado al <span className="text-sanwa-oyster font-serif italic">Mu (無)</span>.
                    <br />
                    Este espacio está vacío. La página que buscas no existe o ha sido movida a otro plano.
                </p>

                {/* Botón de Retorno */}
                <Link
                    href="/"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sanwa-oyster px-8 text-sm font-bold text-sanwa-dark transition-all hover:bg-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sanwa-accent focus:ring-offset-2 focus:ring-offset-sanwa-dark"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Regresar al Inicio
                </Link>
            </div>

            {/* 4. Pie de página técnico (Detalle Elite) */}
            <div className="absolute bottom-8 text-xs font-mono text-sanwa-muted/40 uppercase tracking-widest">
                Error Code: NOT_FOUND_EXCEPTION // System: Stable
            </div>
        </div>
    )
}