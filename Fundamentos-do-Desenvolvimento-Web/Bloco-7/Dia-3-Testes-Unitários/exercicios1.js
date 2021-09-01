const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

const myList = [1, 2, 3, 4];
const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3)
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// assert.deepStrictEqual(expected, [1, 2, 4]);
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);

// semelhança com exercicio 2. É a mesma função?