"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Filosofía", href: "/philosophy" },
    { name: "Soluciones", href: "/solutions" }, // Aquí viven Sora, Hajime, etc.
    { name: "Ecosistema", href: "/ecosystem" }, // Akashi, Kaname
]

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-sanwa-border/50 bg-sanwa-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-sanwa-dark/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* 1. Logo a la izquierda */}
                <Logo />

                {/* 2. Navegación Desktop (Oculta en móvil) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-sanwa-muted transition-colors hover:text-sanwa-oyster hover:underline hover:decoration-sanwa-accent hover:underline-offset-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* 3. Call to Action & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-sanwa-oyster transition-colors hover:bg-white/20 md:block border border-white/10"
                    >
                        Contacto
                    </Link>

                    {/* Botón Menú Móvil (Hamburger) */}
                    <button
                        className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={cn("h-0.5 w-6 bg-sanwa-oyster transition-all", isMobileMenuOpen && "rotate-45 translate-y-2")} />
                        <div className={cn("h-0.5 w-6 bg-sanwa-oyster transition-all", isMobileMenuOpen && "opacity-0")} />
                        <div className={cn("h-0.5 w-6 bg-sanwa-oyster transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
                    </button>
                </div>
            </div>

            {/* 4. Menú Móvil Desplegable (Simple y funcional) */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full border-b border-sanwa-border bg-sanwa-dark px-4 py-4 md:hidden animate-fade-in shadow-2xl">
                    <nav className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-sanwa-muted hover:text-sanwa-oyster"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-2 block w-full rounded-md bg-sanwa-oyster py-2 text-center text-sm font-bold text-sanwa-dark"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contactar Director
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}