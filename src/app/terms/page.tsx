import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Términos de Servicio | Sanwa Technologies",
    description: "Condiciones legales de contratación y uso de servicios.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-sanwa-dark pt-32 pb-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">

                {/* Header de Navegación */}
                <Link
                    href="/"
                    className="group mb-8 inline-flex items-center gap-2 text-sm text-sanwa-muted hover:text-sanwa-oyster transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Volver al Inicio
                </Link>

                {/* Título del Documento */}
                <div className="border-b border-sanwa-border pb-8 mb-12">
                    <div className="flex items-center gap-3 mb-4 text-sanwa-accent">
                        <FileText className="h-6 w-6" />
                        <span className="text-xs font-mono uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-sanwa-oyster sm:text-4xl mb-4">
                        Términos y Condiciones
                    </h1>
                    <p className="text-sm text-sanwa-muted font-mono">
                        Última actualización: 06 de Febrero, 2026
                    </p>
                </div>

                {/* Contenido Legal (Estilo Editorial) */}
                <div className="space-y-12 text-sanwa-muted leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4 flex items-center gap-2">
                            <span className="text-sanwa-accent/50">01.</span> Introducción
                        </h2>
                        <p>
                            Bienvenido a Sanwa Monozukuri ("Sanwa", "nosotros"). Al contratar nuestros servicios...
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4 flex items-center gap-2">
                            <span className="text-sanwa-accent/50">02.</span> Propiedad Intelectual
                        </h2>
                        <p className="mb-4">
                            <strong>Código Propietario:</strong> Todo el código fuente, arquitecturas y diseños desarrollados por Sanwa Monozukuri para sus productos internos (Ecosistema Sanwa) son propiedad exclusiva de la empresa y están protegidos por leyes internacionales de copyright.
                        </p>
                        <p>
                            <strong>Trabajo para Clientes:</strong> En servicios de consultoría (Planes Hajime, Shinka), la transferencia de derechos de propiedad intelectual se realizará una vez abonado el 100% del proyecto, salvo que se especifique lo contrario en el contrato individual.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4 flex items-center gap-2">
                            <span className="text-sanwa-accent/50">03.</span> Pagos y Facturación
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 marker:text-sanwa-accent">
                            <li>Todos los precios están expresados en Dólares Estadounidenses (USD) o su equivalente en Pesos Argentinos (ARS) según cotización del día.</li>
                            <li>Los proyectos requieren un anticipo del 50% para dar inicio (Fase de Sekkei).</li>
                            <li>Facturamos bajo el régimen legal vigente en la República Argentina.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4 flex items-center gap-2">
                            <span className="text-sanwa-accent/50">04.</span> Jurisdicción
                        </h2>
                        <p>
                            Para cualquier controversia legal, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la ciudad de Rosario, Santa Fe, Argentina, renunciando a cualquier otro fuero que pudiera corresponder.
                        </p>
                    </section>

                </div>

                {/* Footer del Documento */}
                <div className="mt-16 pt-8 border-t border-sanwa-border">
                    <p className="text-sm text-sanwa-muted text-center">
                        ¿Dudas sobre estos términos? Contacte directamente a Dirección: <a href="mailto:director@sanwamz.com" className="text-sanwa-oyster hover:underline">director@sanwamz.com</a>
                    </p>
                </div>

            </div>
        </main>
    );
}