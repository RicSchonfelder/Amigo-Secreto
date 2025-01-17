//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');



function adicionarAmigo(){
    let amigoInput = document.getElementById('amigo'); // Referência direta ao campo de entrada
    let amigo = amigoInput.value; // Pega o valor atual do campo
    
    if (amigo == ''){
        alert('Digite um nome');
        return;
    }
    amigos.push(amigo);
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
    amigoInput.value = '';
}

function sortearAmigo(){
    if (amigos.length < 3){
        alert('Adicione mais amigos, minimo 3!');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<h3>${amigoSorteado}</h3>`;

}