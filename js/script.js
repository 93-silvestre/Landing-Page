/*Case Sensitive - reconhce letras MAIUSCULAS e minusculas 
(e diferencia elas) nathalia/nathalia


document selector - js tem que ir no html e pegar informação
por tag  - document.getElementsByTagName ('h3')
por classe - document.getElementsByClassName (''.nomeClasse')
por nome  - document.getElementsByName ('email')
por ID - document.getElementById ('#idDoelemento')
por selector - document.querySelector ('#id') ('nome') - genereico por pegar todos

Variaveis: - declarando
 nome String - java

 No JS
    var nome = 'nathalia' - mais antigo
    let nome = 'nathalia' - mais atual - vão sofrer mudanças
    const nome = 'nathalia' - mais atual - não irá ter alteração
*/

let searchHere = document.querySelector("#searchHere") // pegando id do index

function validaCampo(){ // validar função
     if (searchHere.value.length < 5) { // entra na variavel , pega o valor e ve o tamanho e ve se é maior que 5
       searchHere.style.color = 'red' // criando cor quando usuario for digitar
       searchHere.style.border = '1px solid red' // criando cor na borda
    } else {
        searchHere.style.color = 'green'
        searchHere.style.border = '1px solid green'
 }
}


let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtn")
let span = document.getElementsByClassName("close")[0] /*pegando o primeiro atraves do vetor*/

/*Criando tela para aparecer e sair da pagina*/
btn.onclick = function(){
  modal.style.display = "block"; /*para aparece*/
}

span.onclick  = function(){
  modal.style.display = "none" /*quando clica para fechar*/
}

window.onclick = function(event){ /* para fazer funcionar o click no icone do usuario*/
  if (event.target == modal){
    modal.style.display = "none";
  }
}

/*window - tela inteira / minha janela*/