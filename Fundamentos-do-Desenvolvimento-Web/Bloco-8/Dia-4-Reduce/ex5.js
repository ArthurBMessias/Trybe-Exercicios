const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.toString().split('').reduce((acumulator, current) => {
    if (current === 'a' || current === 'A') return acumulator + 1;
    return acumulator;
    }, 0);
    } 

assert.deepStrictEqual(containsA(), 20);