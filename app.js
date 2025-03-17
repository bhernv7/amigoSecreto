// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaNumerosSorteados = [];
let totalItems = 0;
let numeroSorteado = 0;

function agregarAmigo() {
    if (document.getElementById("amigo").value == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        let newName = document.getElementById("amigo").value
        amigos.push(newName);
        totalItems++;
        listarAmigos ();
        document.getElementById("amigo").value = '';
        
    };
}

function listarAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    //totalItems = amigos.length;
    for (let i=0; i < totalItems; i++) {
        document.getElementById("listaAmigos").innerHTML += `<ul>${amigos[i]}</ul>`;
    };
}


function comprobacionParticipantes() {
    //totalItems = amigos.length;
    //console.log ("total items " + totalItems);
    document.getElementById("resultado").innerHTML = "";
    if (amigos.length < 2) {
        alert("No hay suficientes amigos participantes!");
    } else {
        //console.log("Suficientes participantes, iniciando sorteo");
        for (let y = 0; y < totalItems; y++) {
            //console.log("sorteo de amigos");
            sortearAmigos(y);
        };
    };
    printResult();
}

function sortearAmigos(posicionAmigo) {
    console.log(posicionAmigo)
    if (listaNumerosSorteados.length < totalItems){
        numeroSorteado = Math.floor(Math.random()*totalItems);
        if (numeroSorteado == posicionAmigo || listaNumerosSorteados.includes(numeroSorteado)) {
            console.log(numeroSorteado + "Reintentar sorteo");
            return sortearAmigos(posicionAmigo);
        } else {
            listaNumerosSorteados.push(numeroSorteado);
            //console.log(listaNumerosSorteados)
        };
    }
}


function printResult(){
    console.log(totalItems);
    console.log(amigos);
    console.log(listaNumerosSorteados);
    for (let z=0; z < totalItems; z++){
        
        document.getElementById("resultado").innerHTML += `<ul>${amigos[z]} regala a ${amigos[listaNumerosSorteados[z]]}</ul>`;
    }
}