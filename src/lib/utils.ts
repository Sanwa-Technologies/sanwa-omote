import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases de Tailwind resolviendo conflictos de especificidad.
 * Ejemplo: cn("bg-red-500", "bg-blue-500") -> "bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}