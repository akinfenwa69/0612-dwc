import { Contact, Plus } from "lucide-react"
import Manteniment, { isJavaScriptManteniment, isLlistaContactesManteniment, isManteniment } from "../../../../components/manteniment"

export default function NewContacte() {

    //
    // AFEGIR CONTACTE
    //

    function addContacte() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('tel').value;

        const storage = JSON.parse(localStorage.getItem('contactes'));
        const user = { 'id': storage.sort((a, b) => b.id - a.id)[0].id + 1, 'nom': name, 'email': email, 'telefon': tel };

        storage.push(user);

        localStorage.setItem('contactes', JSON.stringify(storage));
    }

    if (isManteniment || isJavaScriptManteniment || isLlistaContactesManteniment) return <Manteniment />

    return (
        <>
            <div className="flex gap-2">
                <a href="/javascript/llista-contactes"
                    className="flex items-center gap-2 transition hover:bg-sidebar-accent p-2 rounded">
                    <Contact />
                    <p>Contactes</p>
                </a>
                <a href="/javascript/llista-contactes/new"
                    className="flex items-center justify-center rounded-full transition hover:bg-accent p-2">
                    <Plus />
                </a>
            </div>

            <main className="flex flex-1 flex-col gap-4 p-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-2xl">Afegir Contacte</h1>
                    <p className="text-muted-foreground">Afegeix un conacte temporal a la llista.</p>
                </div>

                <div>
                    <form action="/javascript/llista-contactes" onSubmit={() => addContacte()} className="grid grid-cols-2 gap-8">
                        <div className="grid">
                            <label htmlFor="name">Nom</label>
                            <input type="text" name="name" id="name"
                                className="border rounded p-2 transition border-input focus:border-primary focus:outline-none" />
                        </div>

                        <div className="grid">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"
                                className="border rounded p-2 transition border-input focus:border-primary focus:outline-none" />
                        </div>

                        <div className="grid">
                            <label htmlFor="tel">Telèfon</label>
                            <input type="tel" name="tel" id="tel"
                                className="border rounded p-2 transition border-input focus:border-primary focus:outline-none" />
                        </div>

                        <button type="submit"
                            className="rounded p-2 cursor-pointer bg-secondary transition border border-input hover:bg-input row-start-3 col-span-2">Enviar</button>
                    </form>
                </div>
            </main>
        </>
    )
}