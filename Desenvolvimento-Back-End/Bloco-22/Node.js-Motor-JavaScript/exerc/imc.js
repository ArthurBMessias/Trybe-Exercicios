let peso = 75;
let altura = 164;

const calculate = () => (peso / Math.pow(altura / 100, 2)).toFixed(2);

console.log(`seu imc é de ${calculate()}`);
