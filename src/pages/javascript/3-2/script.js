const title = document.getElementById('title');
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const bg_color = document.getElementById('bg_color');
const last_visit = document.getElementById('last_visit');

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
    setCookie('name', inputName.value, 2);
    setCookie('surname', inputSurname.value, 2);
    setCookie('bg-color', bg_color.value, 2);
    setCookie('last-visit', new Date(), 2);

    // Exercici 6: Adapta l’exercici anterior de forma que usi Localstorage enlloc de cookies
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('bg-color', bg_color.value);
    localStorage.setItem('last-visit', new Date());
}

// Exercici 1: Mostra el nom introduït en un títol (h3)
function onload() {
    // Cookies
    title.innerText = `${getCookie('name')} ${getCookie('surname')}`;
    last_visit.innerText = `Last visited: ${getCookie('last-visit')}`;
    document.body.style.background = getCookie('bg-color');

    // LocalStorage
    title.innerText = `${localStorage.getItem('name')} ${localStorage.getItem('surname')}`;
    last_visit.innerText = `Last visited: ${localStorage.getItem('last-visit')}`;
    document.body.style.background = localStorage.getItem('bg-color');
}