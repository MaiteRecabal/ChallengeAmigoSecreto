let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();

    if (nombre !== "" && !nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido o que no esté repetido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];

    document.getElementById("resultado").textContent = "🎉 El amigo secreto es: " + amigoSecreto + " 🎁";
}
