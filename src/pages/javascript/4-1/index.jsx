import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import Manteniment, { is4_1Manteniment, isJavaScriptManteniment, isManteniment } from "../../../components/manteniment"

export default function JavascriptEx4_1() {
    //
    // EXERCICI 1
    //

    class TEXT {
        // Definir cadena de caràcters
        constructor(text) {
            this.text = text;
        }

        // Afegir caràcters
        addChar(newChar) {
            this.text = this.text + newChar
        }

        // Saber quantes vocals hi ha en el text
        countVocals() {
            const s = this.text.toLowerCase();
            var counter = 0;
            for (var i = 0; i < s.length; i++) {
                if (s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' || s.charAt(i) === 'u') {
                    counter++;
                }
            }
            return counter;
        }

        // Mostrar el text
        mostraText() {
            return `Text: ${this.text}`;
        }
    }

    //
    // EXERCICI 2: FIGURES
    //

    class Figura {
        constructor(color) {
            this.color = color;
        }

        // mètode que mostra la info(color)
        mostraInfo() {
            return `Color: ${this.color}`;
        }

        getColor() {
            return this.color;
        }

        setColor(color) {
            this.color = color;
        }
    }

    class Quadrat extends Figura {
        constructor(color, costat) {
            super(color);
            this.costat = costat;
        }

        // mètode que calcula l'àrea
        calculaArea() {
            const area = this.costat * this.costat;
            return area;
        }

        // mètode que mostra la info(color,costat,àrea)
        mostraInfo() {
            return `Color: ${this.getColor()}, Costats: ${this.getCostat()}, Àrea: ${this.calculaArea()}`;
        }

        getCostat() {
            return this.costat;
        }

        setCostat(costat) {
            this.costat = costat;
        }
    }

    class Rectangle extends Figura {
        constructor(color, base, altura) {
            super(color);
            this.base = base;
            this.altura = altura;
        }

        // mètode que calcula l'àrea
        calculaArea() {
            const area = this.base * this.altura;
            return area;
        }

        // mètode que mostra la info(color,base,costat,àrea)
        mostraInfo() {
            return `Color: ${this.getColor()}, Base: ${this.getBase()}, Altura: ${this.getAltura()}, Àrea: ${this.calculaArea()}`;
        }

        getBase() {
            return this.base;
        }

        setBase(base) {
            this.base = base;
        }

        getAltura() {
            return this.altura;
        }

        setAltura(altura) {
            this.altura = altura;
        }
    }

    class Triangle extends Rectangle {
        constructor(color, base, altura) {
            super(color, base, altura);
        }

        // mètode que calcula l'àrea
        calculaArea() {
            const area = this.base * this.altura;
            return area;
        }

        // mètode que mostra la info(color,base,costat,àrea)
        mostraInfo() {
            return `Color: ${this.getColor()}, Base: ${this.getBase()}, Altura: ${this.getAltura()}, Àrea: ${this.calculaArea()}`;
        }
    }

    //
    // EXERCICI 3: PROFESSORS
    //

    class Persona {
        constructor(nom, cognoms, edat) {
            this.nom = nom;
            this.cognoms = cognoms;
            this.edat = edat;
        }

        mostraDades() {
            return `Nom: ${this.getNom()}, Cognoms: ${this.getCognoms()}, Edat: ${this.getEdat()}`;
        }

        getNom() {
            return this.nom;
        }

        setNom(nom) {
            this.nom = nom;
        }

        getCognoms() {
            return this.cognoms;
        }

        setCognoms(cognoms) {
            this.cognoms = cognoms;
        }

        getEdat() {
            return this.edat;
        }

        setEdat(edat) {
            this.edat = edat;
        }
    }

    class Professor extends Persona {
        constructor(nom, cognoms, edat) {
            super(nom, cognoms, edat);
        }

        mostraDades() {
            return `Nom: ${this.getNom()}, Cognoms: ${this.getCognoms()}, Edat: ${this.getEdat()}`;
        }
    }

    class ProfessorFixe extends Professor {
        constructor(id, nom, cognoms, edat) {
            super(nom, cognoms, edat);
            this.id = id;
        }

        mostraDades() {
            return `ID: ${this.getId()}, Nom: ${this.getNom()}, Cognoms: ${this.getCognoms()}, Edat: ${this.getEdat()}`;
        }

        getId() {
            return this.id;
        }

        setId(id) {
            this.id = id;
        }
    }

    class ProfessorInteri extends Professor {
        constructor(nom, cognoms, edat, data) {
            super(nom, cognoms, edat);
            this.data = data;
        }

        mostraDades() {
            return `Nom: ${this.getNom()}, Cognoms: ${this.getCognoms()}, Edat: ${this.getEdat()}, Data: ${this.getData()}`;
        }

        getData() {
            return this.data;
        }

        setData(data) {
            this.data = data;
        }
    }

    class ListaProfe {
        constructor(array) {
            this.array = array;
        }

        insertarProfe(profe) {
            this.array.push(profe);
        }

        obtenirProfe(index) {
            return `Nom: ${this.array[index].nom}, Cognoms: ${this.array[index].cognoms}, Edat: ${this.array[index].edat}`;
        }

        mostraProfes() {
            //console.log(this.array);
            return this.array;
        }
    }

    useEffect(() => {
        // Exercici 1
        const myText = new TEXT('text');

        const vocals = document.getElementById('01_vocals');
        const mostra_text = document.getElementById('01_mostra_text');

        vocals.innerHTML = 'Vocals: ' + myText.countVocals();
        myText.addChar('area');
        mostra_text.innerHTML = myText.mostraText();

        // Exercici 2
        const myFigura = new Figura('Red');
        const myQuadrat = new Quadrat('Red', 4);
        const myRectangle = new Rectangle('Red', 4, 6);
        const myTriangle = new Triangle('Red', 6, 3);

        const figura = document.getElementById('02_01_mostra_info');
        const quadrat = document.getElementById('02_02_mostra_info');
        const rectangle = document.getElementById('02_03_mostra_info');
        const triangle = document.getElementById('02_04_mostra_info');

        figura.innerHTML = myFigura.mostraInfo();
        quadrat.innerHTML = myQuadrat.mostraInfo();
        rectangle.innerHTML = myRectangle.mostraInfo();
        triangle.innerHTML = myTriangle.mostraInfo();

        // Exercici 3
        // https://www.name-generator.org.uk/quick/
        const myPersona = new Persona('Sfwan', 'Murray', 43);
        const myProfessor = new Professor('Tasnim', 'Mcneil', 52);
        const myProfessorFixe = new ProfessorFixe(1, 'Florene', 'Khan', 38);
        const myProfessorInteri = new ProfessorInteri('Joshua', 'Harding', 46, '2025-03-27');
        const myListaProfe = new ListaProfe([]);

        const persona = document.getElementById('03_01_mostra_dades');
        const professor = document.getElementById('03_02_mostra_dades');
        const professor_fixe = document.getElementById('03_03_mostra_dades');
        const professor_interi = document.getElementById('03_04_mostra_dades');
        const obtenir_professor = document.getElementById('03_05_obtenir_profe');
        const llista_professors = document.getElementById('03_05_mostra_dades');

        persona.innerHTML = myPersona.mostraDades();
        professor.innerHTML = myProfessor.mostraDades();
        professor_fixe.innerHTML = myProfessorFixe.mostraDades();
        professor_interi.innerHTML = myProfessorInteri.mostraDades();

        myListaProfe.insertarProfe(new ProfessorFixe(2, 'Adrian', 'Loggan', 63));
        myListaProfe.insertarProfe(new ProfessorFixe(3, 'Harris', 'Bloggs', 53));
        myListaProfe.insertarProfe(new ProfessorFixe(4, 'Zhara', 'Mcdonald', 59));

        myListaProfe.insertarProfe(new ProfessorInteri('Ava', 'Gray', 47, '2024-09-08'));
        myListaProfe.insertarProfe(new ProfessorInteri('Kaan', 'Schaefer', 40, '2024-11-30'));
        myListaProfe.insertarProfe(new ProfessorInteri('Lily', 'Middleton', 61, '2025-06-11'));

        myListaProfe.insertarProfe(new Professor('Tariq', 'Browning', 32));
        myListaProfe.insertarProfe(new Professor('Lawrence', 'Mccullough', 29));
        myListaProfe.insertarProfe(new Professor('Cohen', 'Duran', 35));

        obtenir_professor.innerHTML = myListaProfe.obtenirProfe(5);
        myListaProfe.mostraProfes().forEach(element => {
            //console.log(element);
            const li = document.createElement('li');
            li.textContent = `Nom: ${element.nom}, Cognoms: ${element.cognoms}, Edat: ${element.edat}`;
            llista_professors.append(li);
        });
    })

    if (isManteniment || isJavaScriptManteniment || is4_1Manteniment) return <Manteniment />

    return (
        <div className="grid gap-5">
            <a href='/javascript'
                className="absolute left-5 top-5 p-3 hover:bg-accent rounded-full cursor-pointer">
                <ChevronLeft />
            </a>

            <div className="grid text-center gap-3">
                <h1 className="text-5xl">Objectes</h1>
                <p className="text-muted-foreground">Utilització de classNamees i prototips</p>
            </div>

            <div className="grid gap-3">
                <div>
                    <h2 className="text-3xl my-4">Exercici 1</h2>
                    <h3 className="text-2xl my-4">Text</h3>
                    <p id="01_vocals">...</p>
                    <p id="01_mostra_text">...</p>
                </div>

                <div>
                    <h2 className="text-3xl my-4">Exercici 2</h2>
                    <h3 className="text-2xl my-4">Figura</h3>
                    <p id="02_01_mostra_info">...</p>
                    <h3 className="text-2xl my-4">Quadrat</h3>
                    <p id="02_02_mostra_info">...</p>
                    <h3 className="text-2xl my-4">Rectangle</h3>
                    <p id="02_03_mostra_info">...</p>
                    <h3 className="text-2xl my-4">Triangle</h3>
                    <p id="02_04_mostra_info">...</p>
                </div>

                <div>
                    <h2 className="text-3xl my-4">Exercici 3</h2>
                    <h3 className="text-2xl my-4">Persona</h3>
                    <p id="03_01_mostra_dades">...</p>
                    <h3 className="text-2xl my-4">Professor</h3>
                    <p id="03_02_mostra_dades">...</p>
                    <h3 className="text-2xl my-4">Professor Fixe</h3>
                    <p id="03_03_mostra_dades">...</p>
                    <h3 className="text-2xl my-4">Professor Interí</h3>
                    <p id="03_04_mostra_dades">...</p>
                    <h3 className="text-2xl my-4">Llista Professors</h3>
                    <p id="03_05_obtenir_profe">...</p>
                    <h3 className="text-2xl my-4">Llista</h3>
                    <ul id="03_05_mostra_dades"></ul>
                </div>
            </div>
        </div>
    )
}