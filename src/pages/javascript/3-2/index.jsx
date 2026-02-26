import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function JavascriptEx3_2() {
    const [nom, setNom] = useState('')
    const [cognom, setCognom] = useState('')
    const [color, setColor] = useState('')

    const [title, setTitle] = useState('Cookies Storage')
    const [lastVisit, setLastVisit] = useState('Mostrar nom, cognom i canviar color del fons')

    // Exercici 2: Guarda el nom en una cookie que caduca en 2 minuts
    function setCookie(field, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));

        var expires = "expires=" + d.toUTCString();
        document.cookie = field + "=" + value + ";" + expires;
    }

    function getCookie(name) {
        var cookieName = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }

    function createCookie() {
        // Exercici 2: Guarda el nom en una cookie que caduca en 2 minuts
        setCookie('name', nom, 2);
        setCookie('surname', cognom, 2);
        setCookie('bg-color', color, 2);
        setCookie('last-visit', new Date(), 2);

        // Exercici 6: Adapta l’exercici anterior de forma que usi Localstorage enlloc de cookies
        localStorage.setItem('name', nom);
        localStorage.setItem('surname', cognom);
        localStorage.setItem('bg-color', color);
        localStorage.setItem('last-visit', new Date().toISOString());
    }

    // Exercici 1: Mostra el nom introduït en un títol (h3)
    useEffect(() => {
        const bg = document.getElementById('card')

        // Cookies
        if (getCookie('last-visit')) {
            setTitle(`${getCookie('name')} ${getCookie('surname')}`)
            setLastVisit(`Last visited: ${getCookie('last-visit')}`)
            bg.style.backgroundColor = getCookie('bg-color');
        }

        // LocalStorage
        if (localStorage.getItem('last-visit')) {
            setTitle(`${localStorage.getItem('name')} ${localStorage.getItem('surname')}`)
            setLastVisit(`Last visited: ${localStorage.getItem('last-visit')}`)
            bg.style.backgroundColor = localStorage.getItem('bg-color');
        }
    }, [])

    return (
        <div className="grid gap-5">
            <a href="/javascript"
                className="absolute left-5 top-5 p-3 hover:bg-accent rounded-full cursor-pointer">
                <ChevronLeft />
            </a>

            <div className="card-header grid text-center gap-3">
                <h1 className="text-5xl">{title}</h1>
                <p className="text-muted-foreground">{lastVisit}</p>
            </div>
            <form className="grid gap-3" onSubmit={() => createCookie()}>
                <label htmlFor="name">Nom</label>
                <input
                    placeholder="Nom..."
                    type="text"
                    id="name"
                    name="name"
                    required
                    defaultValue={nom}
                    onInput={(e) => setNom(e.target.value)}
                    className="p-2 rounded border border-gray-500 focus:border-foreground outline-none" />

                <label htmlFor="surname">Cognom</label>
                <input
                    placeholder="Cognom..."
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    defaultValue={cognom}
                    onInput={(e) => setCognom(e.target.value)}
                    className="p-2 rounded border border-gray-500 focus:border-foreground outline-none" />

                <label htmlFor="bg-color">Color de fons</label>
                <select
                    title="bg-color"
                    name="bg-color"
                    id="bg_color"
                    className="p-2 rounded border border-gray-500 focus:border-foreground cursor-pointer"
                    defaultValue={""}
                    onChange={(e) => setColor(e.target.value)}
                >
                    <option value="">-- Default --</option>
                    <option value="#0000ff22">Blau</option>
                    <option value="#00ff0022">Verd</option>
                    <option value="#ff000022">Vermell</option>
                </select>

                <button type="submit" className="bg-card p-3 text-lg cursor-pointer rounded-lg border border-border hover:bg-accent">Enviar</button>
            </form>
        </div>
    )
}