// exercicio 1
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//    for (let numero of numbers) {
//        console.log (numero);
//    }

// exercicio 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//     for (let soma of numbers) {
//         soma += 1;
//        console.log(soma);
//    }

// exercicio 3
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//    for (let medAri of numbers) {
//        medAri += 1;
//        console.log(medAri / numbers.length);
//    }

// exercicio 4 erro
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//    for (let medAri of numbers) {
//         medAri += 1;
//         console.log(medAri / numbers.length)
//    } if (medAri / numbers.length > 20) {
//        console.log('Valor maior que 20')
//    } else {
//        console.log('valor menor que 20')
//    }

// exercicio 5 - auxílio do colega Gabriel
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorN = 0;
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorN) {
        maiorN = numbers[i]
    }
}   console.log(maiorN)

// exercicio 6
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let nImpar= 0;
//for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] % 2 > 0) {
//        console.log(numbers[i])
//    }
//}