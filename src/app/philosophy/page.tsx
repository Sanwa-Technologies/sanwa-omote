import type { Metadata } from "next";
import { Cpu, PenTool, Scale, ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "Filosofía | Sanwa Monozukuri",
    description: "Nuestra metodología de Triple Armonía: Tecnología (Gijutsu), Diseño (Sekkei) y Gestión (Kanri).",
};

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-sanwa-dark pt-32 pb-24 relative overflow-hidden">

            {/* 1. IMAGEN DE FONDO (Más visible) */}
            <div className="absolute inset-0 z-0">
                {/* Overlay degradado: Transparente en el centro para ver la imagen */}
                <div className="absolute inset-0 bg-gradient-to-b from-sanwa-dark/90 via-sanwa-dark/60 to-sanwa-dark z-10" />

                <img
                    src="/philosophy-bg.jpg"
                    alt="Abstract Architecture"
                    // CORRECCIÓN: Opacidad al 40% (antes 20%)
                    className="h-full w-full object-cover opacity-40 grayscale"
                />
            </div>

            {/* 2. HERO DE TEXTO */}
            <section className="px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24 relative z-20">
                <FadeIn>
          <span className="inline-block py-1 px-3 rounded-full bg-black/50 border border-white/20 text-sanwa-muted text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
            SANWA PHILOSOPHY
          </span>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-sanwa-oyster mb-8 drop-shadow-xl">
                        No escribimos código.<br />
                        <span className="text-gray-400">Creamos valor artesanal.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                        En una industria obsesionada con la velocidad, nosotros elegimos la precisión.
                        Adoptamos el concepto japonés de <strong>Monozukuri (ものづくり)</strong>:
                        el arte de hacer cosas con excelencia, dedicación y orgullo por el resultado final.
                    </p>
                </FadeIn>
            </section>

            {/* Separador Visual */}
            <div className="flex justify-center mb-24 opacity-50 relative z-20">
                <ArrowDown className="h-6 w-6 text-sanwa-oyster animate-bounce" />
            </div>

            {/* 3. LOS TRES PILARES (Tríada) */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-32 relative z-20">

                {/* Pilar 1: GIJUTSU */}
                <FadeIn delay={0.1} className="h-full">
                    {/* Fondo más oscuro (bg-black/60) para asegurar lectura sobre la imagen */}
                    <div className="group relative p-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md hover:bg-black/80 transition-all duration-500 h-full shadow-xl">
                        <div className="absolute top-0 right-0 p-6 opacity-20 font-serif text-6xl text-sanwa-oyster select-none group-hover:opacity-30 transition-opacity">
                            技術
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <Cpu className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-sanwa-oyster mb-2">Gijutsu</h3>
                        <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">Tecnología & Técnica</p>
                        <p className="text-gray-400 leading-7">
                            No usamos herramientas por moda. Seleccionamos tecnologías robustas (Go, Next.js, Criptografía) que resistan la prueba del tiempo.
                        </p>
                    </div>
                </FadeIn>

                {/* Pilar 2: SEKKEI */}
                <FadeIn delay={0.2} className="h-full">
                    <div className="group relative p-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md hover:bg-black/80 transition-all duration-500 h-full shadow-xl">
                        <div className="absolute top-0 right-0 p-6 opacity-20 font-serif text-6xl text-sanwa-oyster select-none group-hover:opacity-30 transition-opacity">
                            設計
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            <PenTool className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-sanwa-oyster mb-2">Sekkei</h3>
                        <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">Diseño & Planificación</p>
                        <p className="text-gray-400 leading-7">
                            El diseño no es solo cómo se ve, es cómo funciona. Aplicamos una estética "Zen-Tech": minimalista, funcional y libre de ruido.
                        </p>
                    </div>
                </FadeIn>

                {/* Pilar 3: KANRI */}
                <FadeIn delay={0.3} className="h-full">
                    <div className="group relative p-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md hover:bg-black/80 transition-all duration-500 h-full shadow-xl">
                        <div className="absolute top-0 right-0 p-6 opacity-20 font-serif text-6xl text-sanwa-oyster select-none group-hover:opacity-30 transition-opacity">
                            管理
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                            <Scale className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-sanwa-oyster mb-2">Kanri</h3>
                        <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">Gestión & Control</p>
                        <p className="text-gray-400 leading-7">
                            La mejor tecnología falla sin dirección. Aportamos orden, estrategia y procesos claros. Gestionamos proyectos con disciplina.
                        </p>
                    </div>
                </FadeIn>

            </section>

            {/* 4. DICCIONARIO SANWA */}
            <section className="border-y border-sanwa-border bg-black/80 backdrop-blur-xl py-24 relative z-20">
                <div className="px-6 lg:px-8 max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-sanwa-oyster mb-12 text-center">El Código de Sanwa</h2>
                    </FadeIn>

                    <div className="space-y-8">
                        <DictionaryItem
                            term="Sanwa (三和)"
                            pronunciation="[san-wa]"
                            definition="Literalmente 'Tres Armonías'. Representa el equilibrio perfecto entre los tres pilares fundamentales que sostienen nuestra empresa."
                        />
                        <DictionaryItem
                            term="Omote (表)"
                            pronunciation="[o-mo-te]"
                            definition="La cara pública, la fachada visible. Es lo que presentamos al mundo. Esta web es nuestro Omote: limpio, preciso y acogedor."
                        />
                        <DictionaryItem
                            term="Kaizen (改善)"
                            pronunciation="[kai-zen]"
                            definition="Mejora continua. No entregamos un producto y desaparecemos. Nuestros sistemas están diseñados para evolucionar."
                        />
                    </div>
                </div>
            </section>

            {/* 5. CIERRE */}
            <section className="px-6 lg:px-8 max-w-3xl mx-auto text-center py-32 relative z-20">
                <FadeIn>
                    <p className="text-xl text-sanwa-oyster font-medium italic mb-8">
                        "La calidad no es un acto, es un hábito."
                    </p>
                    <p className="text-sanwa-muted">
                        Desde Villa Gobernador Gálvez, trabajamos con estándares globales para clientes que valoran la excelencia.
                    </p>
                </FadeIn>
            </section>

        </main>
    );
}

function DictionaryItem({ term, pronunciation, definition }: { term: string, pronunciation: string, definition: string }) {
    return (
        <FadeIn>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start border-b border-white/5 pb-8 last:border-0">
                <div className="md:w-1/4">
                    <h4 className="text-xl font-bold text-sanwa-oyster">{term}</h4>
                    <span className="text-sm font-mono text-sanwa-muted">{pronunciation}</span>
                </div>
                <div className="md:w-3/4">
                    <p className="text-gray-400 leading-7">{definition}</p>
                </div>
            </div>
        </FadeIn>
    )
}