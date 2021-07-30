// exercicio 1
// baby steps 
// 1 Declarar o array
// 2 iniciar laço for
// 3 declarar variável contadora ou index ou i
// 4 informar condição final (até onde o contador vai)
// 5 Incrementar a variavel contadora ou index ou i
// 6 depois imprimir com console log
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//    for (let i = 0; i < numbers.length; i += 1) {
//            console.log (numbers[i]);
//    }

// exercicio 2
// baby steps
// 1 Declararar variavel array
// 2 criar variavel para armazenar resultado
// 3 inicia laço for
// 4 declara variavel contador i, index
// 5 cria condição final (até onde index vai)
// 6 cria incrementador para o index
// 7 cria estrutura que mostre o resultado
// 8 imprimir com console.log

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//    let somaElementos = 0
//        for (let cont = 0; cont < numbers.length; cont += 1) {
//                somaElementos += numbers[cont];
//            }   console.log (somaElementos)

// exercicio 3
// baby steps
// 1 declarar variavel array
// 2 criar varialvel para somar
// 3 criar variavel da média (resultado)
// 4 criar variavel contadora, index, i no laço for
// 5 criar a condição final
// 6 incrementar i 
// 7 criar estrutura  que diga que a var soma + o resultado da estrutura do loop [] e depois dizer que a soma é igual ao resultado (media aritmetica)

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
//let todosEl = numbers.length

//    for (let i = 0; i < numbers.length; i += 1) {
//        soma = soma + numbers[i]
//        mediAri = soma / todosEl
//    }   console.log (mediAri)


// exercicio 4
// baby steps
// 1 criar variavel array;
// 2 criar variavel soma (para somar)
// 3 criar variavel elementos (para dividir)
// 4 criar laço for para incrementar var i e percorrer possições
// 5 criar estrutura da soma;
// 6 criar estrutura da divisão
//7 criar condição se resultado da soma/lenght exibir x
// 8 criar condição se resultado da soma/ lenght exibir y

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//    let soma = 0;
//    let tdsElementos = numbers.length
//        for (let i = 0; i < numbers.length; i += 1) {
//            soma += numbers[i]
//            media = soma/tdsElementos
//        } if (media > 20) {
//            console.log ('valor maior que 20')
//        } else {
//            console.log ('valor menor ou igual a 20')
//        }

// exercicio 5 - auxílio do colega Gabriel
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let maiorN = 0;
//for (i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] > maiorN) {
//        maiorN = numbers[i]
//    }
//}   console.log(maiorN)

// exercicio 6 
// baby steps
// 1 declarar o array
// 2 laco for para percorrer todo o array;
// 3 SE a divisão, lembrando que o resto de todo numero impar é maior que 0
// 4 após imprimir resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let varImpar = 0;
    for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0)
        console.log (numbers[i])
    }