const { expect } = require('chai');

const soma = require('./soma');

describe('Test function soma', () => {
  it('1 + 2 return 3', () => {
    const resposta = soma(1, 2);

    expect(soma).to.be.equals(3);
  });
});
