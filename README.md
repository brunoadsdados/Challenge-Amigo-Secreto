let amigos = [];
let listaNomesSorteados = [];

function adicionarAmigo(){
    const input = document.getElementById("amigo"); //selecionei o campo para inserir nome do amigo no html
    let nome = input.value.trim();

 Essa função seleciona o campo input pela id 'amigo' no arquivo html e permite que inserimos os nomes dos amigos a serem sorteados:
               ![Image](https://github.com/user-attachments/assets/7922ad71-b29a-4eea-9100-2f89c71e2dfc)
               ![Image](https://github.com/user-attachments/assets/349f9920-20e1-4ee2-bd05-a5cb3bf271b7)
   
    


    if (nome === "" || !isNaN(nome)){ //verifica se foi digitado algo ou se foi digitado uma string
        alert ("Por favor, digite um nome válido!")
        return; //não deixa o usuário prosseguir até ele digitar algo válido
    } 
Verifica se o que foi digitado realmente é uma string:
![Image](https://github.com/user-attachments/assets/b1bb9494-06a6-4336-a89d-26e5b3e8400c)


    

    amigos.push(nome);
    console.log (nome);
    atualizaLista();
    input.value = '';
}

Após digitar o primeiro nome, o campo fica limpo para inserir o próximo: 
![4](https://github.com/user-attachments/assets/903f7b51-1565-4fa0-91da-85a3d7547070)


function atualizaLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '',
  

    amigos.forEach((amigo, index) => {
        const li = document.createElement ('li')
        li.textContent = amigo + (index  < amigos.length - 1 ? "" : '')
        lista.appendChild(li) //adicionando nomes na lista
    });
Cria a lista com os nomes:

![5](https://github.com/user-attachments/assets/7a3fcf62-8cb8-457d-8633-4dc0484a185a)

    

}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('A lista de amigos está vazia!');
        return;    
                }           
                                                  Verifica se foi digitado algo:
                                              ![6](https://github.com/user-attachments/assets/660a0a2f-3090-46f5-bd8f-f0f503d6a8d5)

                                                  

   if(amigos.length < 2){
        alert('>>>O sorteio só pode ser realizado com duas pessoas ou mais!<<< ');
        return;
    }
                                                 verifica se foi digitado ao menos 2 nomes:
                                             ![7](https://github.com/user-attachments/assets/9b647feb-7225-46be-ae5b-0b1de18df05c)

}
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    listaNomesSorteados.push = (amigoSorteado);

   const resultado = document.getElementById("resultado");
    resultado.innerHTML = "O amigo secreto sorteado é: " + amigoSorteado;
    limparCampo();
   
}

  Realiza o sorteio aleatoriamente através  do 'Math floor' pegando os nomes que foram digitados e em seguida limpa a lista, mostrando somente o resultado do sorteio:

  ![8](https://github.com/user-attachments/assets/261f79fa-6e31-4424-a98a-aad038f6c836)

  

function limparCampo() {                            
    listaNomesSorteados = document.getElementById ('listaAmigos');      
    listaNomesSorteados.innerHTML = '';
}
