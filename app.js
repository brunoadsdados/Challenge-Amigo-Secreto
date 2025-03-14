//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver
//  a lógica para resolver o problema.

let amigos = [];
let listaNomesSorteados = [];

function adicionarAmigo(){
    const input = document.getElementById("amigo"); //selecionei o campo para inserir nome do amigo no html
    let nome = input.value.trim();


    if (nome === "" || !isNaN(nome)){ //verifica se foi digitado algo ou se foi digitado uma string
        alert ("Por favor, digite um nome válido!")
        return; //não deixa o usuário prosseguir até ele digitar algo válido
    } 

    amigos.push(nome);
    console.log (nome);
    atualizaLista();
    input.value = '';
}

function atualizaLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '',

    amigos.forEach((amigo, index) => {
        const li = document.createElement ('li')
        li.textContent = amigo + (index  < amigos.length - 1 ? "" : '')
        lista.appendChild(li) //adicionando nomes na lista
    });

}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('A lista de amigos está vazia!');
        return;
    }

    if(amigos.length < 2){
        alert('>>>O sorteio só pode ser realizado com duas pessoas ou mais!<<< ');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    

    let amigoSorteado = amigos[indiceSorteado];
    listaNomesSorteados.push = (amigoSorteado);
    console.log(amigoSorteado);


    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "O amigo secreto sorteado é: " + amigoSorteado;
    limparCampo();
   
}

function limparCampo() {                            
    listaNomesSorteados = document.getElementById ('listaAmigos');      
    listaNomesSorteados.innerHTML = '';
}