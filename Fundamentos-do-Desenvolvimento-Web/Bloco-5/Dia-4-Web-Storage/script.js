/* mudar plano de fundo, criar botao no html para mudar cor de fundo.
Salvar preferência do usuário.
classe = dark mode
font branca 
back preto
1- criar botão com createelement
2- adicionar classe no botão que receba a funcao click.
3 - fundo preto letra branca e visse versa */

let criarBotao = document.createElement("button");
criarBotao.innerText = "Dark Mode";

document.body.appendChild(criarBotao);

function darkMode() {
  criarBotao.addEventListener("click", function activeDarkMode() {
    let backGround = document.body.style.background = "black";
    document.body.style.color = "white";
   
    localStorage.setItem('backG',backGround.value);
  });
}

darkMode();

function normalMode (){
criarBotao.addEventListener("dblclick", function changeBack() {
  document.body.style.background = "unset";
  document.body.style.color = "unset";
});
}

normalMode();

let savePreference = localStorage.getItem('backG');
