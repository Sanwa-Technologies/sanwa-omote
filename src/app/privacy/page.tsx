import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Política de Privacidad | Sanwa Technologies",
    description: "Cómo protegemos sus datos y su privacidad.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-sanwa-dark pt-32 pb-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">

                <Link
                    href="/"
                    className="group mb-8 inline-flex items-center gap-2 text-sm text-sanwa-muted hover:text-sanwa-oyster transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Volver al Inicio
                </Link>

                <div className="border-b border-sanwa-border pb-8 mb-12">
                    <div className="flex items-center gap-3 mb-4 text-emerald-400">
                        <ShieldCheck className="h-6 w-6" />
                        <span className="text-xs font-mono uppercase tracking-widest">Data Protection</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-sanwa-oyster sm:text-4xl mb-4">
                        Política de Privacidad
                    </h1>
                    <p className="text-sm text-sanwa-muted font-mono">
                        Última actualización: 06 de Febrero, 2026
                    </p>
                </div>

                <div className="space-y-12 text-sanwa-muted leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4">
                            Recolección de Datos
                        </h2>
                        <p>
                            En Sanwa Monozukuri creemos en el minimalismo de datos. No recolectamos información personal innecesaria. Actualmente, solo procesamos los datos que usted nos proporciona voluntariamente a través de:
                        </p>
                        <ul className="mt-4 list-disc pl-5 space-y-2 marker:text-emerald-500">
                            <li>Contacto vía correo electrónico (Dirección).</li>
                            <li>Contacto vía WhatsApp Business.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4">
                            Uso de la Información
                        </h2>
                        <p>
                            La información recolectada se utiliza exclusivamente para:
                        </p>
                        <ul className="mt-4 list-disc pl-5 space-y-2 marker:text-emerald-500">
                            <li>Responder a sus consultas comerciales.</li>
                            <li>Proveer los servicios contratados (Sora, Hajime, Shinka).</li>
                            <li>Emitir facturación legal correspondiente en Argentina.</li>
                        </ul>
                        <p className="mt-4 font-medium text-sanwa-oyster">
                            Jamás vendemos, alquilamos ni compartimos sus datos con terceros con fines publicitarios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4">
                            Cookies y Rastreo
                        </h2>
                        <p>
                            Este sitio web está diseñado para respetar su privacidad. No utilizamos cookies invasivas de seguimiento publicitario. Utilizamos almacenamiento local (Local Storage) únicamente para mejorar su experiencia técnica (ej. recordar preferencias de modo visual si fuera necesario).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-sanwa-oyster mb-4">
                            Derechos ARCO
                        </h2>
                        <p>
                            Como ciudadano, usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos. Para ejercer estos derechos, envíe una solicitud a nuestro Oficial de Privacidad en <span className="text-sanwa-oyster">director@sanwamz.com</span>.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}