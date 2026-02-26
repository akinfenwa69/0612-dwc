import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function JavascriptEx2() {
    const [dni, setDNI] = useState(0)
    const [any, setAny] = useState(0)

    function calcDNI() {
        const llista = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',];

        const residu = dni % 23
        const lletra = llista[residu]

        alert(`Residu ${residu}\nLletra ${lletra}`)
        setDNI('')
    }

    function calcDiumenge() {
        var month = 3;

        var A = any % 19;
        var B = any % 4;
        var C = any % 7;
        var D = (19 * A + 24) % 30;
        var E = (2 * B + 4 * C + 6 * D + 5) % 7;

        var day = 22 + D + E;

        if (day > 31) {
            day -= 31;
            month += 1;
        }

        alert(`${day}/${month}/${any}`)
        setAny('')
    }

    return (
        <div className="grid gap-5">
            <a href="/javascript"
                className="absolute left-5 top-5 p-3 hover:bg-accent rounded-full">
                <ChevronLeft />
            </a>

            <div className="card-header grid text-center gap-3">
                <h1 className="text-5xl">Bucles</h1>
                <p className="text-muted-foreground">Càlcul de lletra DNI i diumenge de Pasqua</p>
            </div>

            <div className="grid gap-5">
                <div className="flex flex-col gap-3">
                    <div className="grid gap-2">
                        <h2 className="text-2xl">Calcular lletra DNI</h2>
                        <input type="number" name="dni" id="dni" placeholder="Afegeix el número del DNI..."
                            value={dni}
                            onInput={(e) => setDNI(e.target.value)}
                            className="border border-border rounded-lg focus:outline-none focus:border-foreground p-3" />
                    </div>

                    <button onClick={calcDNI}
                        className="p-3 border border-border rounded-xl bg-(--accent)/70 hover:bg-accent cursor-pointer">
                        Calcular
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="grid gap-2">
                        <h2 className="text-2xl">Calcular diumenge de Pasqua</h2>
                        <input type="number" name="any" id="any" placeholder="Introdueix l'any..."
                            value={any}
                            onInput={(e) => setAny(e.target.value)}
                            className="border border-border rounded-lg focus:outline-none focus:border-foreground p-3" />
                    </div>

                    <button onClick={calcDiumenge}
                        className="p-3 border border-border rounded-xl bg-(--accent)/70 hover:bg-accent cursor-pointer">
                        Calcular
                    </button>
                </div>
            </div>
        </div>
    )
}