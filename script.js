//
// PARAMS
//

const url = window.location.href;

//
// THEME TOGGLE
//

function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    const icon = document.querySelector('#theme-icon');
    const text = document.querySelector('#theme-text');

    document.body.classList.toggle('dark');

    if (icon) {
        icon.textContent = isDark ? 'light_mode' : 'bedtime';
    }
    if (text) {
        text.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
}

//
// MOSTRAR LLISTA DE CONTACTES
//

function fetchContacts() {
    return fetch('api/contacts.json').then(res => res.json());
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

if (location.pathname == '/') {
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

if (url.includes('detall')) {
    createObjectByID(new URL(url).searchParams.get('id'))
}