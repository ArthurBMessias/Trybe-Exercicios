const math = require('./exemplo3');
jest.mock("./exemplo3");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);
  math.somar(2, 3);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar).toHaveBeenCalledWith(2, 3);
  expect(math.somar(1, 2)).toBe(3);
  expect(math.somar(2, 3)).toBe(5);
});