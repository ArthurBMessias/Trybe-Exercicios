// const assert = require('assert'); // Sintaxe para incluir o módulo assert

// // assert.strictEqual(50, 50); // Sem erros: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 === 70

// console.log(assert)

// const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.strictEqual(expected, 2, 'Nove dividido por três é igual a dois');

// console.log(assert.strictEqual)

// const assert = require('assert');

// const soma = (num1,num2) => num1 + num2;

// const results = soma(5,4);

// assert.equal(results, 19, 'Acerto miserávi');

const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)