import { Contact, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function LlistaContactes() {
    //
    // PARAMS
    //

    const url = window.location.href;

    //
    // LOCALSTORAGE MANAGEMENT
    //

    useState(() => {
        if (!localStorage.getItem('contactes')) {
            fetch('/api/contacts.json')
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('contactes', JSON.stringify(data));
                    console.log('contactes storage:', data);
                })
                .catch(error => console.error('ERROR:', error));
        } else {
            console.log('contactes storage:', JSON.parse(localStorage.getItem('contactes')));
        }
    }, [])

    function resetStorage() {
        localStorage.removeItem('contactes');
        window.location.reload();
    }

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

    //
    // MOSTRAR LLISTA DE CONTACTES
    //

    function fetchContacts() {
        return JSON.parse(localStorage.getItem('contactes')) || fetch('/api/contacts.json').then(res => res.json());
    }

    function showObjects(...objects) {
        const myTBODY = document.getElementById('tbody');
        objects[0].sort((a, b) => b.id - a.id).map(item => {
            const myTD = document.createElement('tr');
            myTD.innerHTML =
                `<td className="p-3 border border-(--primary)/50">${item.id}</td>
             <td className="p-3 border border-(--primary)/50">${item.nom}</td>
             <td className="p-3 border border-(--primary)/50"><a href='/projecte/1/detall/index.html?id=${item.id}'>Detalls</a></td>`;
            myTBODY.appendChild(myTD);
        });
    }

    async function createObjects() {
        const contacts = await Promise.all([fetchContacts()]);
        showObjects(...contacts);
    }

    window.addEventListener('DOMContentLoaded', () => {
        createObjects();
    })

    //
    // MOSTRAR DETALLS
    //

    function showObjectByID(contactID, ...objects) {
        const title = document.getElementById('title-detalls');

        const user = objects[0].filter(item => item.id == contactID)[0];
        title.textContent = `Detalls de ${user.nom}`;

        // id input (disabled)
        const id_input = document.getElementById('userID');
        id_input.placeholder = user.id;
        id_input.value = user.id;

        // name input
        const name_input = document.getElementById('name');
        name_input.placeholder = user.nom;
        name_input.value = user.nom;

        // email input
        const email_input = document.getElementById('email');
        email_input.placeholder = user.email;
        email_input.value = user.email;

        // tel input
        const tel_input = document.getElementById('tel');
        tel_input.placeholder = user.telefon;
        tel_input.value = user.telefon;
    }

    async function createObjectByID(contactID) {
        const contacts = await Promise.all([fetchContacts()]);
        showObjectByID(contactID, ...contacts);
    }

    if (url.includes('detall')) {
        console.log('ID Contacte:', new URL(url).searchParams.get('id'));
        createObjectByID(new URL(url).searchParams.get('id'));
    }

    //
    // AFEGIR CONTACTE
    //

    function addContacte() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('tel').value;

        const storage = JSON.parse(localStorage.getItem('contactes'));
        //console.log('generated id', storage.sort((a, b) => b.id - a.id)[0].id + 1);
        const user = { 'id': storage.sort((a, b) => b.id - a.id)[0].id + 1, 'nom': name, 'email': email, 'telefon': tel };

        storage.push(user);

        localStorage.setItem('contactes', JSON.stringify(storage));
    }

    //
    // EDITAR CONTACTE
    //

    function updateContacte() {
        const id = document.getElementById('userID').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('tel').value;

        const storage = JSON.parse(localStorage.getItem('contactes'));
        const contactIndex = storage.findIndex(item => item.id == id);

        storage[contactIndex].nom = name;
        storage[contactIndex].email = email;
        storage[contactIndex].telefon = tel;

        localStorage.setItem('contactes', JSON.stringify(storage));
    }

    //
    // ELIMINAR CONTACTE
    //

    function removeContacte() {
        const id = document.getElementById('userID').value;

        const storage = JSON.parse(localStorage.getItem('contactes'));
        const contactIndex = storage.findIndex(item => item.id == id);

        storage.splice(contactIndex, 1);

        localStorage.setItem('contactes', JSON.stringify(storage));

        window.location.href = "/projecte/1";
    }

    return (
        <>
            <div className="flex gap-2">
                <a href="/react/llista-contactes"
                    className="flex items-center gap-2 transition hover:bg-sidebar-accent p-2 rounded">
                    <Contact />
                    <p>Contactes</p>
                </a>
                <a href="/react/llista-contactes/new"
                    className="flex items-center justify-center rounded-full transition hover:bg-accent p-2">
                    <Plus />
                </a>
            </div>

            <main className="flex flex-1 flex-col gap-4 p-4">
                <div className="flex gap-3 items-center h-8">
                    <div className="flex items-center">
                        <p className="text-foreground">Home</p>
                    </div>
                </div>
                <div className="relative p-10 grid gap-5 bg-card rounded-xl border border-(--primary)/20">
                    <span
                        className="material-symbols-outlined absolute transition cursor-pointer hover:bg-accent rounded-full p-2 left-6 top-6"
                        onClick="createDefault()"><History /></span>
                    <span
                        className="material-symbols-outlined absolute transition cursor-pointer hover:bg-accent rounded-full p-2 right-6 top-6"
                        onClick="resetStorage()"><RotateCcw /></span>

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
                            <tbody id="tbody"></tbody>
                        </table>
                    </div>

                    <div></div>
                </div>
            </main>
        </>
    )
}