import { useEffect, useState } from "react"
import CONTACTES from '@/api/contacts.json'
import { Contact, Plus } from "lucide-react"
import Manteniment, { isJavaScriptManteniment, isLlistaContactesManteniment, isManteniment } from "../../../../components/manteniment"

export default function DetailsContacte() {
    const [contacte, setContacte] = useState()
    const contacteID = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]

    //
    // FORM PARAMS
    //

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    //
    // GET CONTACTE
    //

    useEffect(() => {
        let localContactes = JSON.parse(localStorage.getItem('contactes'))
        let localContacte = localContactes.filter(item => item.id === parseInt(contacteID))[0]
        setContacte(localContacte)

        // user params
        setName(localContacte.nom)
        setEmail(localContacte.email)
        setTel(localContacte.telefon)
    }, [])

    //
    // EDITAR CONTACTE
    //

    function updateContacte() {
        const storage = JSON.parse(localStorage.getItem('contactes'));
        const contactIndex = storage.findIndex(item => item.id == contacteID);

        storage[contactIndex].nom = name;
        storage[contactIndex].email = email;
        storage[contactIndex].telefon = tel;

        localStorage.setItem('contactes', JSON.stringify(storage));
    }

    //
    // ELIMINAR CONTACTE
    //

    function removeContacte() {
        const storage = JSON.parse(localStorage.getItem('contactes'));
        const contactIndex = storage.findIndex(item => item.id == contacteID);

        storage.splice(contactIndex, 1);

        localStorage.setItem('contactes', JSON.stringify(storage));

        window.location.href = "/javascript/llista-contactes";
    }

    if (isManteniment || isJavaScriptManteniment || isLlistaContactesManteniment) return <Manteniment />

    if (!contacte) return "Contacte no seleccionat!"

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
                    <h1 className="text-3xl" id="title-detalls">Contacte no seleccionat</h1>
                    <p className="text-muted-foreground">Informació d'un contacte en específic.</p>
                </div>

                <div id="detalls">
                    <form action={`/javascript/llista-contactes/${contacteID}`} onSubmit={() => updateContacte()} id="myForm" className="grid grid-cols-2 gap-5">
                        <div className="grid col-start-1">
                            <label htmlFor="userID">ID</label>
                            <input type="number" name="userID" id="userID" defaultValue={contacteID} disabled
                                className="border rounded p-2 transition border-input focus:border-primary focus:outline-none cursor-not-allowed" />
                        </div>

                        <div className="grid row-start-2">
                            <label htmlFor="name">Nom</label>
                            <input type="text" name="name" id="name" defaultValue={name} onInput={(e) => setName(e.target.value)}
                                className="border rounded p-2 transition border-input focus:border-primary focus:outline-none" />
                        </div>

                        <div className="grid col-start-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" defaultValue={email} onInput={(e) => setEmail(e.target.value)}
                                className="border rounded p-2 transition border-input focus:border-primary focus:outline-none" />
                        </div>

                        <div className="grid row-start-2 col-start-2">
                            <label htmlFor="tel">Telèfon</label>
                            <input type="tel" name="tel" id="tel" defaultValue={tel} onInput={(e) => setTel(e.target.value)}
                                className="border rounded p-2 transition border-input focus:border-primary focus:outline-none" />
                        </div>

                        <div className="grid grid-cols-2 col-span-2 gap-5">
                            <button type="submit"
                                className="rounded p-2 cursor-pointer bg-secondary transition border border-input hover:bg-input">Actualitzar</button>
                            <button type="button" onClick={() => removeContacte()}
                                className="rounded p-2 cursor-pointer bg-red-500/50 transition border border-input hover:bg-red-500/80">Eliminar</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}