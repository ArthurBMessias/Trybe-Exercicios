const math = require('./ExerFix');

// primeiro jogar o jest mock - simular comportamentos.
// it ou test para aplicar as simulações. E descrever o teste, o que ele faz
// colocar a math com a função que está sendo importada no require, no caso subtração. Com a func mockImplementation(params => param1 - param 2)

//depois const do require com funcao importada e params testado. 
// expera (const math.nomefuncao).ToHaveBeenCalled() e fecha teste.... E reza.

jest.mock('./ExerFix');

it('Testing calling off the function subtract' , () => {
    math.subtrair.mockImplementation((a, b) => a - b)
    math.subtrair(2, 1);

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(2, 1);
    expect(math.subtrair(2, 1)).toBe(1);

});