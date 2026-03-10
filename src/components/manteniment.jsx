import { TriangleAlert } from "lucide-react";

export default function Manteniment() {
    return (
        <div className="flex gap-2 items-center justify-center text-zinc-400">
            <TriangleAlert size={15} className="text-amber-400/70" />
            En manteniment
            <TriangleAlert size={15} className="text-amber-400/70" />
        </div>
    )
}

//
// LLISTAT DE TOTS ELS APARTATS
//

// general
export const isManteniment = false

// javascript & react
export const isJavaScriptManteniment = false
export const isReactManteniment = false

// javascript
export const is1Manteniment = false
export const is2Manteniment = false
export const is3_1Manteniment = true
export const is3_2Manteniment = false
export const is3_3Manteniment = true
export const is4_1Manteniment = false
export const is4_2Manteniment = false
export const isLlistaContactesManteniment = false

// react
export const isGestorTasquesManteniment = false
export const isCatalegProductesManteniment = true

// other
export const isSettingsManteniment = true