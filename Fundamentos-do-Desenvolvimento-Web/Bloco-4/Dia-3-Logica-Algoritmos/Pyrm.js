// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 6;
let square = '*'
for (let i = 0; i <= n.lenght; i += 1) {
    square *= n[i]
    console.log (square)
   } 