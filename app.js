// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []


function agregarAmigo() {
    if (newName = document.getElementById("amigo").value == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(newName)
        //call listar participantes
        document.getElementById("amigo").value = ''
    }
    
}