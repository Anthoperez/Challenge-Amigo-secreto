// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// MODIFICACIÓN 1: Seleccionamos el input aquí afuera para poder usarlo en varias partes.
const inputNombre = document.getElementById("amigo");

// MODIFICACIÓN 2: Añadimos el "escuchador" para la tecla "Enter".
inputNombre.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        agregarAmigo();
    }
});

function agregarAmigo() {
    // MODIFICACIÓN 3: Usamos la variable 'inputNombre' que ya creamos (más eficiente).
    const nombreAmigo = inputNombre.value;

    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaVisible();

    inputNombre.value = '';
    inputNombre.focus();
}

function actualizarListaVisible() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const elementoLi = document.createElement('li');
        elementoLi.textContent = amigos[i];
        listaHTML.appendChild(elementoLi);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 amigos para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `<li>¡El amigo secreto es: <strong> ${amigoSecreto}</strong>!</li>`;
}