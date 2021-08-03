// qual é o indice de maior valor?

//let bigestValue = 0;
//let nElementos =[2, 3, 6, 7, 10, 1];

//function whoIsTheBigest(numbers) {
//    for ( let i = 0; i < nElementos.length; i += 1);
//    if (numbers[i] > bigestValue) {
//    bigestValue === nElementos[i]
//    }
//}
//console.log (whoIsTheBigest(nElementos))

// qual o valor da hora de um funcionário que recebe R$ 1.000,00 reais por mês e trabalha 240 horas por mês?
// Quais são os dados necessários?
// R:  Qual o salário e quantas horas ele trabalha;
// O que fazer com esses dados?
// R: Dividir o salário pelo número de horas;
// Quais são as restrições desse problema?
// R: Que seja recebido em horas;
// Qual o resultado esperado?
// R: O resultado esperado é o valor da hora trabalhada;
// Qual a sequência de passos até o resultado?
// R: 1 - declarar variaveis com os dados.
//    2 - Declarar variavel para receber o resultado;
//    3 - Iniciar função com paramentro valorhora para poder chamar no console.
//    4 - informar que variavel resultado é igual a divisão das variaveis salario e hora;
//    5 - Fechar função e declarar parametros;

let sallary = 3870;
let hours = 140;
let sallaryPerHours = 0;

function valueHours () {
    sallaryPerHours = sallary / hours;
    return sallaryPerHours
}

console.log (valueHours (sallaryPerHours))