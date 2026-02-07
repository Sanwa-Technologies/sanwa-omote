"use client" // Importante: Ahora usamos interactividad

import { useState } from "react";
import { Mail, MapPin, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

// ---------------------------------------------------------
// CONFIGURACIÓN: Pega aquí tu URL de Formspree
// Ejemplo: "https://formspree.io/f/xaybzqrl"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojnqjzl";
// ---------------------------------------------------------

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Hubo un problema al enviar. Intente nuevamente.");
            }
        } catch (error) {
            setErrorMessage("Error de conexión. Verifique su internet.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen bg-sanwa-dark pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Columna Izquierda: Información (Estática) */}
                    <FadeIn direction="right">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-sanwa-oyster mb-6">
                                Hablemos de su próximo proyecto.
                            </h1>
                            <p className="text-lg text-gray-400 mb-12">
                                Estamos listos para escuchar sus desafíos técnicos y de negocio.
                                Complete el formulario y el Director se pondrá en contacto en menos de 24 horas hábiles.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-sanwa-accent">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sanwa-oyster font-semibold">Correo Electrónico</h3>
                                        <p className="text-gray-400">director@sanwamz.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-sanwa-accent">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sanwa-oyster font-semibold">Ubicación</h3>
                                        <p className="text-gray-400">Villa Gobernador Gálvez, Santa Fe</p>
                                        <p className="text-gray-500 text-xs">Argentina (GMT-3)</p>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 rounded-2xl bg-sanwa-accent/5 border border-sanwa-accent/10">
                                    <p className="text-sm text-sanwa-accent">
                                        <strong>Nota:</strong> Actualmente estamos aceptando nuevos proyectos para el Q2 2026. Los cupos para el plan Shinka son limitados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Columna Derecha: Formulario Interactivo */}
                    <FadeIn direction="left" delay={0.2}>
                        <div className="rounded-3xl border border-sanwa-border bg-white/[0.02] p-8 lg:p-10 h-full">

                            {/* ESTADO DE ÉXITO: Se muestra si isSuccess es true */}
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fade-in">
                                    <div className="h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/20">
                                        <CheckCircle className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-sanwa-oyster mb-2">¡Mensaje Recibido!</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto mb-8">
                                        Gracias por contactar a Sanwa Monozukuri. Hemos recibido su consulta y la procesaremos a la brevedad.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-sm font-medium text-sanwa-accent hover:text-white transition-colors underline underline-offset-4"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                /* ESTADO NORMAL: El formulario */
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                id="name"
                                                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sanwa-oyster focus:outline-none focus:ring-2 focus:ring-sanwa-accent transition-all"
                                                placeholder="Juan Pérez"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Empresa</label>
                                            <input
                                                name="company"
                                                type="text"
                                                id="company"
                                                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sanwa-oyster focus:outline-none focus:ring-2 focus:ring-sanwa-accent transition-all"
                                                placeholder="Mi Empresa S.A."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Corporativo</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            id="email"
                                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sanwa-oyster focus:outline-none focus:ring-2 focus:ring-sanwa-accent transition-all"
                                            placeholder="juan@empresa.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="plan" className="block text-sm font-medium text-gray-400 mb-2">
                                            ¿En qué podemos ayudarle?
                                        </label>
                                        <select
                                            name="plan"
                                            id="plan"
                                            defaultValue=""
                                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sanwa-oyster focus:outline-none focus:ring-2 focus:ring-sanwa-accent transition-all [color-scheme:dark] [&>option]:bg-[#0a0a0a] [&>option]:text-sanwa-oyster [&>optgroup]:bg-[#0a0a0a] [&>optgroup]:text-sanwa-oyster"
                                        >
                                            <option value="" disabled>Seleccione una opción...</option>

                                            <optgroup label="Planes Sanwa">
                                                <option value="Sora">Plan Sora (Start)</option>
                                                <option value="Hajime">Plan Hajime (Growth)</option>
                                                <option value="Irodori">Plan Irodori (Custom Web)</option>
                                                <option value="Shinka">Plan Shinka (Enterprise Arch)</option>
                                            </optgroup>

                                            <optgroup label="Consultoría General">
                                                <option value="Infraestructura">Infraestructura & Redes</option>
                                                <option value="Seguridad">Auditoría de Seguridad</option>
                                                <option value="Medida">Desarrollo a Medida</option>
                                                <option value="Complejo">Tengo un problema técnico complejo</option>
                                                <option value="Otro">Otro / No estoy seguro</option>
                                            </optgroup>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                                        <textarea
                                            required
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sanwa-oyster focus:outline-none focus:ring-2 focus:ring-sanwa-accent transition-all"
                                            placeholder="Cuéntanos brevemente sobre tu proyecto..."
                                        />
                                    </div>

                                    {/* Mensaje de Error (si falla) */}
                                    {errorMessage && (
                                        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-sm text-red-400">
                                            <AlertCircle className="h-4 w-4" />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-md bg-sanwa-oyster py-3 text-sm font-bold text-sanwa-dark transition-all hover:bg-white hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            "Enviar Mensaje"
                                        )}
                                    </button>

                                </form>
                            )}

                        </div>
                    </FadeIn>

                </div>
            </div>
        </main>
    );
}