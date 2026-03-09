import { Contact, Plus, RotateCcw, History } from "lucide-react";
import { useEffect, useState } from "react";
import CONTACTES from '@/api/contacts.json'

export default function LlistaContactes() {
    const [contacts, setContacts] = useState([])

    //
    // PARAMS
    //

    const url = window.location.href;

    //
    // LOCALSTORAGE MANAGEMENT
    //

    useState(() => {
        if (!localStorage.getItem('contactes')) {
            localStorage.setItem('contactes', JSON.stringify(CONTACTES));
            setContacts(CONTACTES)
        } else {
            let localContactes = localStorage.getItem('contactes')
            setContacts(JSON.parse(localContactes))
        }
    }, [])

    //
    // RESET
    //

    function resetStorage() {
        localStorage.removeItem('contactes');
        window.location.reload();
    }

    //
    // ADD DEFAULT CONTACTS
    //

    function createDefault() {
        const storage = JSON.parse(localStorage.getItem('contactes'));
        const lastID = storage.sort((a, b) => b.id - a.id)[0].id + 1;

        // Add 3 default contacts
        const defaultContacts = [
            { 'id': lastID, 'nom': 'Maria', 'email': 'maria@example.com', 'telefon': '555666777' },
            { 'id': lastID + 1, 'nom': 'Joan', 'email': 'joan@example.com', 'telefon': '888999000' },
            { 'id': lastID + 2, 'nom': 'Laura', 'email': 'laura@example.com', 'telefon': '111222333' }
        ];
        storage.push(...defaultContacts);
        localStorage.setItem('contactes', JSON.stringify(storage));
        window.location.reload();
    }

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
                <span
                    className="transition cursor-pointer hover:bg-accent rounded-full p-2 left-0 top-0"
                    onClick={() => createDefault()}><History /></span>
                <span
                    className="transition cursor-pointer hover:bg-accent rounded-full p-2 right-0 top-0"
                    onClick={() => resetStorage()}><RotateCcw /></span>
            </div>

            <main className="flex flex-1 flex-col gap-4 p-4">
                <div className="relative grid gap-5">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl">Llista de Contactes</h1>
                        <p className="text-muted-foreground">Una llista de contactes personals i professionals.</p>
                    </div>
                    <div>
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="bg-(--accent)/70">
                                    <th className="p-3 border border-(--primary)/50">ID</th>
                                    <th className="p-3 border border-(--primary)/50">Nom</th>
                                    <th className="p-3 border border-(--primary)/50">Detalls</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.sort((a, b) => a.id > b.id).map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="p-3 border border-(--primary)/50">{item.id}</td>
                                                <td className="p-3 border border-(--primary)/50">{item.nom}</td>
                                                <td className="p-3 border border-(--primary)/50"><a href={`/javascript/llista-contactes/${item.id}`}>Detalls</a></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main >
        </>
    )
}