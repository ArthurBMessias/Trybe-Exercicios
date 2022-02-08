const readline = require('readline-sync');

// let peso = readline.questionInt('Qual seu peso? ')
// const peso = readline.questionFloat('Qual seu peso ? ');
// const altura = readline.questionInt('Qual sua altura? ');

// function imcCalc() {
//   const calculateIMC = (peso / Math.pow(altura / 100, 2)).toFixed(2);
//   switch (calculateIMC) {
//     case calculateIMC < 18.5:
//       console.log('Abaixo do peso (magreza)');
//       break;
//     case calculateIMC >= 18.5 && calculateIMC <= 24.9:
//       console.log('Peso normal ');
//       break;
//     case calculateIMC >= 25 && calculateIMC <= 29.9:
//       console.log('Acima do peso (sobrepeso)');
//       break;
//     case calculateIMC >= 30 && calculateIMC <= 34.9:
//       console.log('Obesidade grau I ');
//       break;
//     case calculateIMC >= 35 && calculateIMC <= 39.9:
//       console.log('Obesidade grau II');
//       break;
//     case calculateIMC >= 40:
//       console.log('Obesidade graus III e IV');
//       break;
//   }
// }

// imcCalc();

// console.log(`Seu imc é de ${calculateIMC()}`);

const peso = readline.questionInt('Qual é o seu peso? ')
const altura = readline.questionFloat('Qual é a sua altura? ')


const imcCalc = () => {
  console.log(`Peso: ${peso} kg, Altura: ${altura}m`);

  const imc = (peso /(altura ** 2)).toFixed(2);

  if(imc < 18.5) {
    console.log(`IMC: ${imc} - Abaixo do peso (magreza)`);
  } else if(imc >= 18.5 && imc <= 24.9) {
    console.log(`IMC: ${imc} - Peso normal`);
  } else if(imc >= 25 && imc <= 29.9) {
    console.log(`IMC: ${imc} - Acima do peso (sobrepeso)`);
  } else if(imc >= 30 && imc <= 34.9) {
    console.log(`IMC: ${imc} -  Obesidade grau I`);
  } else if(imc >= 35 && imc <= 39.9) {
    console.log(`IMC: ${imc} -  Obesidade grau II`);
  } else {
    console.log(`IMC: ${imc} -  Obesidade grau III e IV`);
  }
}

imcCalc();