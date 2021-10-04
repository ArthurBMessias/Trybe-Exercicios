const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  const objPedroLength = grades[0].length;
  const objMiguelLength = grades[1].length;
  const objMariaLength = grades[2].length;

  const objPedro = {
    name: students[0],
    average: grades[0].reduce((acc, curr) => acc + curr, 0) / objPedroLength,
  };

  const objMiguel = {
    name: students[1],
    average: grades[1].reduce((acc, curr) => acc + curr, 0) / objMiguelLength,
  };

  const objMaria = {
    name: students[2],
    average: grades[2].reduce((acc, curr) => acc + curr, 0) / objMariaLength,
  };

  const result = [objPedro, objMiguel, objMaria];

  return result;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
