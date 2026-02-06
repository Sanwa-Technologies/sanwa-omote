import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

// Configuración de las fuentes de Vercel (Elite Standard)
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadatos del sitio (Vital para SEO y presencia profesional)
export const metadata: Metadata = {
    title: "Sanwa Monozukuri | Identidad Digital & Arquitectura de Software",
    description: "Consultoría estratégica de software, diseño y gestión para la transformación digital. Desde Villa Gobernador Gálvez al mundo.",
    icons: {
        icon: "/favicon.ico", // Asegúrate de tener un favicon en /public en el futuro
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased custom-scrollbar bg-sanwa-dark text-sanwa-oyster relative selection:bg-sanwa-accent/30 selection:text-sanwa-accent">

        {/* 1. Navbar: Navegación fija superior */}
        <Navbar />

        {/* 2. Contenido Principal: Aquí se cargan tus páginas (page.tsx) */}
        {children}

        {/* 3. Botón Flotante: Siempre visible encima de todo */}
        <WhatsAppFloat />

        </body>
        </html>
    );
}