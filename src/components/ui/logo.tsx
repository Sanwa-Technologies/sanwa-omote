import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
    return (
        <Link
            href="/"
            className={cn("flex items-center gap-2 transition-opacity hover:opacity-90", className)}
        >
            {/* Isotipo: Los tres pilares (Tecnología, Diseño, Gestión) */}
            <div className="flex items-center justify-center h-8 w-8 rounded bg-gradient-to-br from-sanwa-oyster to-sanwa-muted">
                <span className="text-sanwa-dark font-bold text-xs">三和</span>
            </div>

            {/* Logotipo: Nombre completo */}
            <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-sanwa-oyster">
          Sanwa
        </span>
                <span className="text-[10px] uppercase tracking-widest text-sanwa-muted font-medium">
          Monozukuri
        </span>
            </div>
        </Link>
    )
}