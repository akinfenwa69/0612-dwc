// Exercici 1: Crear l'objecte Personatge
class Personatge {
    constructor(nom, genere, nivell, armes) {
        this.nom = nom;
        this.genere = genere;
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

    // Pujar potencia d’atac: Augmentar el nivell ja sigui de forma automática o demanant-ho per consola (prompt).
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

function fetchCharacters() {
    return fetch('/api/characters.json').then(res => res.json());
}

function fetchWeapons() {
    return fetch('/api/weapons.json').then(res => res.json());
}

function showObjects(...objects) {
    const main = document.getElementById('main');
    objects.map(item => {
        const div = document.createElement('div')
        div.className = 'transition bg-[#3a3a3a] hover:bg-[#333] p-4 rounded-xl aspect-square w-fit cursor-pointer'
        div.style.minWidth = '200px'
        if (item instanceof Personatge) {
            div.innerHTML =
                `<h2 class="text-xl font-bold mb-3">Personatge</h2>
                <p>Nom: ${item.nom}</p>
                <p>Gènere: ${item.genere}</p>
                <p>Nivell: ${item.nivell}</p>
                <p>Armes: ${item.armes.join(', ')}</p>`;
        } else if (item instanceof Arma) {
            div.innerHTML =
                `<h2 class="text-xl font-bold mb-3">Arma</h2>
                <p>ID: ${item.id}</p>
                <p>Nom: ${item.nom}</p>
                <p>Atac: ${item.atac}</p>
                <p>Defensa: ${item.defensa}</p>`;
        }
        main.appendChild(div);
    });
}

async function createObjects() {

    // Declaració literal d’objectes
    const [characters, weapons] = await Promise.all([fetchCharacters(), fetchWeapons()]);

    const personatges = characters.map(char => {
        const { nom, genere, nivell, armes } = char;
        return new Personatge(nom, genere, nivell, armes);
    });

    const armes = weapons.map(weapon => {
        const { id, nom, atac, defensa } = weapon;
        return new Arma(id, nom, atac, defensa);
    });

    // Constructor + operador New
    let newChar1 = new Personatge("Personatge 3", "Genere 3", 6, [1]);
    let newChar2 = new Personatge("Personatge 4", "Genere 4", 4, [4, 5]);
    let newWeapon1 = new Arma(4, "Arma 4", 20, 30);
    let newWeapon2 = new Arma(5, "Arma 5", 15, 45);

    personatges.push(newChar1, newChar2);
    armes.push(newWeapon1, newWeapon2);

    showObjects(...personatges, ...armes);
}

createObjects();