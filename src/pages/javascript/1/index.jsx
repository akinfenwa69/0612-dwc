import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function JavascriptEx1() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    function handleAlert() {
        confirm(`És vostè ${name} ${surname}?`) ?
            alert("Has acceptat")
            : alert("No has acceptat")
    }

    return (
        <div className="grid gap-5">
            <a href="/javascript"
                class="absolute left-5 top-5 p-3 hover:bg-accent rounded-full cursor-pointer">
                <ChevronLeft />
            </a>

            <div class="card-header grid text-center gap-3">
                <h1 class="text-5xl">Introducció</h1>
                <p class="text-muted-foreground">Mostra el nom i cognom/s</p>
            </div>

            <div class="card-content grid gap-3">
                <div class="grid">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" required
                        placeholder="Name..."
                        onInput={(e) => setName(e.target.value)}
                        class="border border-border rounded-lg focus:outline-none focus:border-foreground p-3" />
                </div>

                <div class="grid">
                    <label for="surname">Surname</label>
                    <input type="text" name="surname" id="surname" required
                        placeholder="Surname..."
                        onInput={(e) => setSurname(e.target.value)}
                        class="border border-border rounded-lg focus:outline-none focus:border-foreground p-3" />
                </div>

                <button
                    onClick={() => handleAlert()}
                    class="border border-border hover:bg-accent rounded-lg p-3 cursor-pointer"
                >
                    SUBMIT
                </button>
            </div>
        </div>
    )
}