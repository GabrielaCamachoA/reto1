function insertarNombre(event) {
    event.preventDefault();

    const text = document.getElementById("nombre");
    const nombre = text.value.trim();

    if (nombre === "") {
        alert("Ingrese un elemento valido");
    } else { 
        const listaNombres = document.getElementById("lista-nombres");
        const li = document.createElement("li"); 
        li.textContent = nombre;
        listaNombres.appendChild(li);
        nombre.value = "";

        alert("Perfecto, es un elemento valido");
    }
}
