/* mudar plano de fundo, criar botao no html para mudar cor de fundo.
Salvar preferência do usuário.
classe = dark mode
font branca 
back preto
1- criar botão com createelement
2- adicionar classe no botão que receba a funcao click.
3 - fundo preto letra branca e visse versa */
window.onload = function () {
  let criarBotao = document.createElement("button");
  criarBotao.innerText = "Dark Mode";

  document.body.appendChild(criarBotao);

  function darkMode() {
    criarBotao.addEventListener("click", function activeDarkMode() {
      document.body.style.background = "black";
      document.body.style.color = "white";

      localStorage.setItem("background", "black");
      localStorage.setItem("font", "white");
    });
  }

  darkMode();

  function normalMode() {
    criarBotao.addEventListener("dblclick", function changeBack() {
      document.body.style.background = "white";
      document.body.style.color = "black";

      localStorage.setItem("background2", "white");
      localStorage.setItem("font2", "black");
    });
  }

  normalMode();

   let saveBackgroundPreferenceBlack = localStorage.getItem("background");
  document.body.style.background = saveBackgroundPreferenceBlack;
  let saveFontPreference = localStorage.getItem("font");
  document.body.style.color = saveFontPreference;
  //let saveBackgroundPreferenceWhite = localStorage.getItem("background2");
 // document.body.style.background = saveBackgroundPreferenceWhite;
 // document.body.style.color = saveBlackFontPreference;

};
