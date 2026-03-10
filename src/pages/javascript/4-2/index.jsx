import { ChevronLeft, Shield, Swords } from "lucide-react";
import charactersJSON from "@/api/characters.json"
import weaponsJSON from "@/api/weapons.json"
import { FaFemale, FaMale } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Manteniment, { is4_2Manteniment, isJavaScriptManteniment, isManteniment } from "../../../components/manteniment"

export default function JavascriptEx4_2() {
    // Exercici 1: Crear l'objecte Personatge
    class Personatge {
        constructor(nom, genere, nivell, armes) {
            this.nom = nom;
            this.genere = genere; // Male o Female
            this.nivell = nivell;
            this.armes = armes;
        }

        // Veure característiques : mostrar el valor de totes les propietats
        getNom() {
            return this.nom;
        }

        getGenere() {
            return this.genere;
        }

        getNivell() {
            return this.nivell;
        }

        getArmes() {
            return this.armes;
        }

        getAll() {
            return {
                nom: this.nom,
                genere: this.genere,
                nivell: this.nivell,
                armes: this.armes
            };
        }

        // Pujar de nivell : Aumentar el nivel ja sigui de forma automática o demanant-ho per consola.
        pujarNivell() {
            this.nivell += 1;
        }
    }

    // Exercici 2: Crear objecte Arma
    class Arma {
        constructor(id, nom, atac, defensa) {
            this.id = id;
            this.nom = nom;
            this.atac = atac;
            this.defensa = defensa;
        }

        // Veure característiques : mostrar el valor de totes les propietats
        getNom() {
            return this.nom;
        }

        getId() {
            return this.id;
        }

        getAtac() {
            return this.atac;
        }

        getDefensa() {
            return this.defensa;
        }

        getAll() {
            return {
                id: this.id,
                nom: this.nom,
                atac: this.atac,
                defensa: this.defensa
            };
        }

        // Pujar potencia d'atac: Augmentar el nivell ja sigui de forma automática o demanant-ho per consola (prompt).
        pujarAtac() {
            this.atac += 1;
        }

        // Pujar potencia de defensa: Augmentar el nivell ja sigui de forma automática o demanant-ho per consola (prompt).
        pujarDefensa() {
            this.defensa += 1;
        }
    }

    //
    // CONTENT
    //

    const [characters, setCharacters] = useState([])
    const [weapons, setWeapons] = useState([])
    const [selectedWeapon, setSelectedWeapon] = useState(null)

    // Carregar JSON i afegir nous personatges/armes
    useEffect(() => {
        // Carregar JSON
        setCharacters(charactersJSON)
        setWeapons(weaponsJSON)

        // Crear nous personatges
        let newChar1 = new Personatge("Personatge 3", "Genere 3", 6, [1]);
        let newChar2 = new Personatge("Personatge 4", "Genere 4", 4, [4, 5]);

        // Crear noves armes
        let newWeapon1 = new Arma(4, "Arma 4", 20, 30);
        let newWeapon2 = new Arma(5, "Arma 5", 15, 45);

        // Actualitzar state
        setCharacters(prevChars => {
            const hasChar1 = prevChars.some(c => c.nom === newChar1.nom);
            const hasChar2 = prevChars.some(c => c.nom === newChar2.nom);
            let result = [...prevChars];
            if (!hasChar1) result.push(newChar1);
            if (!hasChar2) result.push(newChar2);
            return result;
        });

        setWeapons(prevWeapons => {
            const hasWeapon1 = prevWeapons.some(w => w.id === newWeapon1.id);
            const hasWeapon2 = prevWeapons.some(w => w.id === newWeapon2.id);
            let result = [...prevWeapons];
            if (!hasWeapon1) result.push(newWeapon1);
            if (!hasWeapon2) result.push(newWeapon2);
            return result;
        });
    }, [])

    // switch icono gènere
    const IconGenre = ({ genre, ...props }) => {
        switch (genre) {
            case "Male":
                return <FaMale {...props} color="#09f" />
            case "Female":
                return <FaFemale {...props} color="#f09" />
            default:
                return <FaQuestion {...props} color="#AAA" />
        }
    }

    if (isManteniment || isJavaScriptManteniment || is4_2Manteniment) return <Manteniment />

    if (!characters && !weapons) return "Loading..."

    return (
        <div className="grid gap-5">
            <a href="/javascript"
                className="material-symbols-outlined absolute left-5 top-5 p-3 hover:bg-accent rounded-full cursor-pointer">
                <ChevronLeft />
            </a>

            <div className="grid text-center gap-3">
                <h1 className="text-5xl">Objectes JSON</h1>
                <p className="text-muted-foreground">Creació i visualització d'objectes</p>
            </div>

            <div className="grid gap-3">
                <main id="main" className="flex flex-col gap-3 justify-center">
                    <h2 className="text-2xl font-medium">Characters</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            characters.map(item => (
                                <li key={item.nom} className="transition border px-5 py-3 rounded-lg hover:bg-accent flex flex-col gap-1">
                                    <div className="flex items-center gap-2 font-medium">
                                        <span className="h-5 p-2 bg-foreground/20 text-white rounded flex items-center justify-center border text-xs">lvl. {item.nivell}</span>
                                        <p className="truncate">{item.nom}</p>
                                        <IconGenre genre={item.genere} size={16} className="text-blue-400" />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p>Armes:</p>
                                        {item.armes.map((arma, ind) => <a href={`#${arma}`} key={ind} onClick={() => setSelectedWeapon(arma)} className="w-5 p-1 flex items-center justify-center rounded border transition bg-foreground/10 hover:bg-foreground/20 text-white text-xs cursor-pointer">{arma}</a>)}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <h2 className="text-2xl font-medium">Weapons</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            weapons.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        id={item.id}
                                        className={`flex flex-col gap-3 transition hover:bg-accent border px-5 py-3 rounded-lg ${selectedWeapon === item.id ? 'border-ring' : ''}`}
                                    >
                                        <div className="flex gap-2 items-center">
                                            <span className="text-sm text-muted-foreground">#{item.id}</span>
                                            <p className="font-medium">{item.nom}</p>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <p className="text-xs flex items-center justify-center gap-1 p-1 rounded bg-red-500/50 hover:bg-red-500/70 transition border w-14"><Swords size={16} /> {item.atac}</p>
                                            <p className="text-xs flex items-center justify-center gap-1 p-1 rounded bg-blue-500/50 hover:bg-blue-500/70 transition border w-14"><Shield size={16} /> {item.defensa}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </main>
            </div>
        </div>
    )
}