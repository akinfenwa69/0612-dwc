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
        console.log(this.array);
        return this.array;
    }
}