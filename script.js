//
// PARAMS
//

const url = window.location.href;

//
// THEME TOGGLE
//

const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

function setTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (themeIcon && themeText) {
        themeIcon.textContent = isDark ? 'bedtime' : 'light_mode';
        themeText.textContent = isDark ? 'Dark Mode' : 'Light Mode';
    }
}

function toggleTheme() {
    const isDark = localStorage.getItem('theme') === 'dark';
    setTheme(!isDark);
}

function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setTheme(isDark);
}

//
// LOCALSTORAGE MANAGEMENT
//

function checkStorage() {
    if (!localStorage.getItem('contactes')) {
        fetch('/api/contacts.json')
            .then(res => res.json())
            .then(data => localStorage.setItem('contactes', JSON.stringify(data)))
            .catch(error => console.error('ERROR:', error));
    }
    console.log('contactes storage:', JSON.parse(localStorage.getItem('contactes')));
}

initTheme();
checkStorage();

function resetStorage() {
    localStorage.removeItem('contactes');
    window.location.reload();
}

function createDefault() {
    const storage = JSON.parse(localStorage.getItem('contactes'));
    const user = { 'id': storage.sort((a, b) => b.id - a.id)[0].id + 1, 'nom': name, 'email': email, 'telefon': tel };

    storage.push(user);

    localStorage.setItem('contactes', JSON.stringify(storage));
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

    window.location.href = "/";
}
