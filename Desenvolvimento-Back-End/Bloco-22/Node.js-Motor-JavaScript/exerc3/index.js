const redline = require('readline-sync');

function velocidade() {
  const tempo = redline.questionInt('Em quanto tempo? ');
  const distancia = redline.questionInt('Qual distância? ');

  const velocidade = (tempo / distancia).toFixed(2);

  console.log(`A velocidade foi de ${velocidade}`);
}

velocidade();
