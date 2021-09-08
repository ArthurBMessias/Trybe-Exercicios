// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const hof = (template, studentTemplate, test) => {
//   return test(template, studentTemplate);
// };

// const test = (template, studentTemplate) => {
//   let nota = 0;
//   for (let i = 0; i < studentTemplate.length; i += 1) {
//     let answers = studentTemplate[i];
//     let correctAnswers = template[i];
//     if (answers === correctAnswers) {
//       nota += 1;
//     } else if (answers === 'N.A') {
//       nota += 0;
//     } else {
//       nota -= 0,5;
//     }
//   }
//   return `Sua nota é: ${nota}`;
// };
// console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, test));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hof = (rightAnswers, studentAnswers, checkAnswers) => {
  return checkAnswers(rightAnswers, studentAnswers);
};

const checkAnswers = (rightAnswers, studentAnswers) => {
  //checa se as respostas estão corretas
  //faz a contagem da pontuação final
  let count = 0;
  for (let i = 0; i < studentAnswers.length; i += 1) {
    let answers = studentAnswers[i];
    let correctAnwers = rightAnswers[i];
    if (answers === correctAnwers) {
      count += 1;
    } else if (answers === 'N.A') {
      count += 0;
    } else {
      count -= 0.5;
    }
  }
  return `A quantidade de acertos é: ${count}`;
};

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
