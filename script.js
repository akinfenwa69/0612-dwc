//
// PARAMS
//

const url = window.location.href;

//
// MOSTRAR LLISTA DE CONTACTES
//

function fetchContacts() {
    return fetch('contacts.json').then(res => res.json());
}

function showObjects(...objects) {
    const myTBODY = document.getElementById('tbody');
    objects[0].map(item => {
        const myTD = document.createElement('tr');
        myTD.innerHTML =
            `<td>${item.id}</td>
            <td>${item.nom}</td>
            <td><a href='detall.html?id=${item.id}'>Detalls</a></td>`;
        myTBODY.appendChild(myTD);
    });
}

async function createObjects() {
    const contacts = await Promise.all([fetchContacts()]);
    showObjects(...contacts);
}

if (url.includes('index.html')) {
    createObjects()
}

//
// DETALLS
//

function showObjectByID(contactID, ...objects) {
    const myMAIN = document.getElementById('main');
    objects[0].map(item => {
        if (item.id === contactID) {
            const myDIV = document.createElement('div');
            myDIV.innerHTML =
                `<p>ID: ${item.id}</p>
                <p>Nom: ${item.nom}</p>
                <p>Email: ${item.email}</p>
                <p>Telèfon: ${item.telefon}</p>`;
            myMAIN.appendChild(myDIV);
        }
    });
}

async function createObjectByID(contactID) {
    const contacts = await Promise.all([fetchContacts()]);
    showObjectByID(contactID, ...contacts);
}

if (url.includes('detall.html')) {
    createObjectByID(new URL(url).searchParams.get('id'))
}