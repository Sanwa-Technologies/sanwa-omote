import { Hero } from "@/components/sections/hero"
import { Solutions } from "@/components/sections/solutions"
import { TechStack } from "@/components/sections/tech-stack"
import { Footer } from "@/components/layout/footer"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-sanwa-dark">
            <Hero />
            <TechStack />  {/* El "Arsenal" valida la promesa del Hero */}
            <Solutions />  {/* Los servicios explican qué vendemos */}
            <Footer />     {/* El cierre institucional */}
        </main>
    )
}