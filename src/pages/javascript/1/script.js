function confirmAlert() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    confirm(`És vostè ${surname}, ${name}?`) ?
        alert("Has acceptat")
        : alert("No has acceptat")
}