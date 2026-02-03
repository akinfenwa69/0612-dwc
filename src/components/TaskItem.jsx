import { useState } from "react"

export default function TaskItem({ id, text, state, removeTask }) {
    const [estat, setEstat] = useState(state)

    function toggleState() {
        estat === 'Completada' ? setEstat('Pendent') : setEstat('Completada')
    }

    return (
        <div onClick={toggleState}
            className={`relative p-5 select-none cursor-pointer rounded-xl bg-accent hover:bg-card transition border ${estat === 'Completada' ? 'border-green-500' : 'border-border'}`}
        >
            <div onClick={() => removeTask(id)}
                className="group absolute right-2 top-2 flex cursor-pointer items-center justify-center bg-red-500/10 w-8 aspect-square rounded-full border border-red-500 text-muted-foreground hover:rotate-90 transition hover:text-red-500"
            >
                <span className="material-symbols-outlined">close</span>
            </div>
            <span className="text-sm text-muted-foreground">{id}</span>
            <p className="text-2xl mb-4 w-full truncate">{text}</p>
            <p className="w-full truncate">{estat}</p>
        </div>
    )
}