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