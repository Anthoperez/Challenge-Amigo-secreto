// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigo(){
    //Tarea 1
    const inputElement = document.getElementById("amigo");
    const nombreAmigo = inputElement.value;

    //Tarea 2

    if (nombreAmigo.trim() === ''){
        alert('Por favor, inserte un nombre.');
        return;
    }

    //Tarea 3

    amigos.push(nombreAmigo);

    actualizarListaVisible();

    //Tarea 4

    inputElement.value = '';

    //MEJORA, poner el cursor parpadenante en el input, listo para que se ingrese texto, y el ususaio no tenga que dar click sobre el input
    inputElement.focus(); 

}

function actualizarListaVisible(){
    //Tarea 1 Obtener elemento de la lista
    const listaHTML = document.getElementById("listaAmigos")

    //Tarea 2 Limpiar la lista existente
    listaHTML.innerHTML = '';

    //Tarea 3 Iterar sobre el arreglo y agregar elementos
    
    for (let i = 0; i < amigos.length; i++){
        const elementoLi = document.createElement('li');

        elementoLi.textContent = amigos[i];

        listaHTML.appendChild(elementoLi);
    }
}

function sortearAmigo(){
    //Tarea 1 Verificar si hay amigos en la lista
    if (amigos.length < 2){
        alert('Debe haber al menos 2 amigos para realizar el sorteo.');
        return;
    }

    //Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obeter el nombre del amigo sorteado
    const amigoSecreto = amigos[indiceAleatorio];

    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `<li>¡El amigo secreto es: <strong> ${amigoSecreto}</strong>!</li>`;

}
