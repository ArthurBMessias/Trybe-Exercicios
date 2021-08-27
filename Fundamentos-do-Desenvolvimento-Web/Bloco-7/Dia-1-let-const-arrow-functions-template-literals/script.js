// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const testingScope = escopo => escopo === true ? 'Não devo ser utilizada fora do meu escopo (if)' : 'Não devo ser utilizada fora meu escopo (else)'
// console.log(testingScope(false))

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// let number = ['10', '13']

// const sortArray = arr => arr.sort(
//     function(10, 13) {
//         return 10-13
//     }
// )

// console.log(sortArray(oddsAndEvens))

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// function fatorial(number) {
//   let result = 1;
//   if (number === 0 || number === 1) {
//     return result;
//   } else {
//     for (let i = number; i >= 1; i -= 1) {
//       result = result * i;
      // result = 4 * 3
      // result = 12 * 2
      // result = 24 * 1
      // result = 24;
//     }
//   }
//   return result;
// }

// console.log(fatorial(4));

// function fatorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * fatorial(number - 1);
//     // return number * 3!
//   }
// }
// console.log(fatorial(4))

// const fatorial = number => number === 0 || number === 1 ? 1 : number * fatorial(number - 1);

let frase = "Antônio foi no banheiro dar o cu e não sabemos o que aconteceu"

function longestWord(frase){
   let array = frase.split(" ");
   let result = 0;
   for(let i = 0; i < array.length; i += 1){
       if(array[i].length > result){
           result = array[i]
       }
    // if(9 > 8){
    //     result = 9
    // }
//    }
// }

function longestWord(frase) {
    let array = frase.split(" ").sort(function (a, b) {
    return b.length - a.length;
    });
    return array[0];
    } 
    
    // let frase = "Arthur Bernardo";
    // frase.split(" ")
    // ['Arthur', 'Bernardo'].sort(function (a,b) {
        //     return Bernardo.length - Arthur.length;
        // })
        // return array[0] sort ordena maior palavra 
        
 const longestWord = frase => frase.split(" ").sort((a, b) => b.length - a.length)[0];