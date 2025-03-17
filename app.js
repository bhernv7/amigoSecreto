// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    if (document.getElementById("amigo").value == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        let newName = document.getElementById("amigo").value
        amigos.push(newName);
        //call listar participantes
        console.log(amigos)
        listarAmigos ();
        document.getElementById("amigo").value = '';
    }
    
}

function listarAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    let totalItems = amigos.length;
    for (i=0; i < totalItems; i++) {
        document.getElementById("listaAmigos").innerHTML += `<ul>${amigos[i]}</ul>`;
    }
}