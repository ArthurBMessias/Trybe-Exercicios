let a = 2;
let b = 3;

let operacoesBasicas = "soma";

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

switch (operacoesBasicas){
    case "soma":
        console.log(adicao);
        break;
    
    case "subtracao":
        console.log(subtracao);
        break;
    
    case "multiplica":
        console.log(multiplicacao);
        break;
    
    case "dividir":
        console.log(divisao);
        break;
    
    case "modular":
        console.log(modulo);
        break;
    
    default:
        console.log("Operação Impossível");

}