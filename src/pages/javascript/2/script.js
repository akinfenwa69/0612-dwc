function calcDNI() {
    const llista = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',];

    const num = document.getElementById('dni').value;
    const residu = num % 23;
    alert(`Residu ${residu}`);
    const lletra = llista[residu];
    alert(`Lletra ${lletra}`);

    //document.getElementById('displayLletra').textContent = `Lletra: ${lletra}`
}

function calcDiumenge() {
    const year = document.getElementById('any').value;
    var month = 3;

    var A = year % 19;
    var B = year % 4;
    var C = year % 7;
    var D = (19 * A + 24) % 30;
    var E = (2 * B + 4 * C + 6 * D + 5) % 7;

    var day = 22 + D + E;

    if (day > 31) {
        day -= 31;
        month += 1;
    }

    alert(`${day}/${month}/${year}`)
}