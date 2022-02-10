const { expect } = require('chai');

const typeOfNumber = require('./exer01');

describe('Test if typeOf function works', () => {
  it('return "positivo"', () => {
    const response = typeOfNumber(5);

    expect(response).to.be.equals('positivo');
  });
  it('return "neutro"', () => {
    const response = typeOfNumber(0);

    expect(response).to.be.equals('neutro');
  });
  it('return "negativo"', () => {
    const response = typeOfNumber(-5);

    expect(response).to.be.equals('negativo');
  });
});

describe('If value is a string', () => {
    it('return is not a number', () => {
        const response = typeOfNumber('dois')

        expect(response).to.be.equals('deve ser número')

    })
})
