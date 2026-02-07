"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Terminal() {
    const [lines, setLines] = useState<string[]>([
        "> initiating sanwa-core protocol...",
    ])

    // Simulación de carga de sistema (Efecto Hacker)
    useEffect(() => {
        const sequence = [
            { text: "> verifying identity (akashi)... [OK]", delay: 800 },
            { text: "> quantum-shield (kaname)... [ACTIVE]", delay: 1600 },
            { text: "> establishing secure connection...", delay: 2400 },
            { text: "> system ready. welcome, director.", delay: 3200 },
        ]

        let timeouts: NodeJS.Timeout[] = []

        sequence.forEach(({ text, delay }) => {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, text])
            }, delay)
            timeouts.push(timeout)
        })

        return () => timeouts.forEach(clearTimeout)
    }, [])

    return (
        <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden bg-[#0c0c0c] border border-white/10 shadow-2xl font-mono text-xs sm:text-sm">

            {/* Barra de Título (Window Header) */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 text-sanwa-muted/50 select-none">sanwa-cli — v2.0.4</div>
            </div>

            {/* Cuerpo de la Terminal */}
            <div className="p-4 h-64 flex flex-col font-mono">
                {lines.map((line, i) => (
                    <div key={i} className="mb-1 text-sanwa-muted">
                        <span className="text-sanwa-accent mr-2">$</span>
                        <span className={cn(
                            "animate-fade-in",
                            line.includes("[OK]") && "text-emerald-400",
                            line.includes("[ACTIVE]") && "text-purple-400",
                            line.includes("director") && "text-sanwa-oyster font-bold"
                        )}>
              {line}
            </span>
                    </div>
                ))}
                {/* Cursor parpadeante */}
                <div className="mt-1 animate-pulse text-sanwa-accent">_</div>
            </div>
        </div>
    )
}