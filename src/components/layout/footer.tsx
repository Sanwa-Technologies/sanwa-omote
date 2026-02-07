import Link from "next/link"
import { Logo } from "@/components/ui/logo"

const footerLinks = {
    solutions: [
        { name: "Sora (Start)", href: "/solutions#sora" },
        { name: "Hajime (Growth)", href: "/solutions#hajime" },
        { name: "Irodori (Design)", href: "/solutions#irodori" }, // Agregado
        { name: "Shinka (Enterprise)", href: "/solutions#shinka" },
    ],
    company: [
        { name: "Filosofía", href: "/philosophy" },
        { name: "Ecosistema", href: "/ecosystem" },
        { name: "Contacto", href: "/contact" },
    ],
    legal: [
        { name: "Privacidad", href: "/privacy" },
        { name: "Términos", href: "/terms" },
    ],
}

export function Footer() {
    return (
        <footer className="bg-sanwa-dark border-t border-sanwa-border relative overflow-hidden" id="contact">

            {/* 1. EFECTO GLOW (Resplandor inferior) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sanwa-accent/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            {/* 2. CONTENIDO DEL FOOTER */}
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 relative z-10">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">

                    <div className="space-y-8">
                        <Logo />
                        <p className="text-sm leading-6 text-sanwa-muted max-w-xs">
                            Construyendo el futuro de la identidad digital a través de la armonía entre Tecnología, Diseño y Gestión.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-sanwa-oyster">Soluciones</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerLinks.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-sanwa-muted hover:text-sanwa-accent transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-sanwa-oyster">Compañía</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerLinks.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-sanwa-muted hover:text-sanwa-accent transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-sanwa-oyster">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerLinks.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-sanwa-muted hover:text-sanwa-accent transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-sanwa-muted">
                        &copy; 2026 Sanwa Monozukuri. Todos los derechos reservados.
                    </p>
                    <p className="text-xs leading-5 text-sanwa-muted font-mono text-center md:text-right">
                        director@sanwamz.com • Villa Gobernador Gálvez - Argentina
                    </p>
                </div>
            </div>
        </footer>
    )
}