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
    return fetch('/api/contacts.json').then(res => res.json());
}

function showObjects(...objects) {
    const myTBODY = document.getElementById('tbody');
    objects[0].map(item => {
        const myTD = document.createElement('tr');
        myTD.innerHTML =
            `<td class="p-3 border border-[var(--primary)]/50">${item.id}</td>
             <td class="p-3 border border-[var(--primary)]/50">${item.nom}</td>
             <td class="p-3 border border-[var(--primary)]/50"><a href='/detall/index.html?id=${item.id}'>Detalls</a></td>`;
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