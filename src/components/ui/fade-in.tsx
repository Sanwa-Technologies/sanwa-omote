"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({
                           children,
                           className,
                           delay = 0,
                           direction = "up"
                       }: FadeInProps) {
    const ref = useRef(null)

    // Hook que detecta si el elemento entró en la pantalla
    // once: true -> Solo se anima una vez (no molesta al subir y bajar)
    // margin: "-50px" -> Se activa un poco antes de llegar
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    }

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directionOffset[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                x: 0
            } : {}}
            transition={{
                duration: 0.7, // Duración (0.7s es el punto dulce "Elite")
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Curva Bezier personalizada (muy suave)
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}