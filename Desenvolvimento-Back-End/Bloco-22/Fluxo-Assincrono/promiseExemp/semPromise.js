function calcDiv(num1, num2) {
  if (num2 == 0) throw new Error('Não pode dividir por zero');

  const resultado = num1 / num2;
  return resultado;
}

try {
  const resultado = calcDiv(2, 2);
  console.log('Resultado: %s', resultado);
} catch (e) {
  console.log('erro: %s', e.message);
}
