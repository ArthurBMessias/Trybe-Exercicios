function typeOfNumber(number) {
  if (number > 0) {
    return 'positivo';
  }
  if (number === 0) {
    return 'neutro';
  }
  if (typeof number !== 'number') {
    return 'deve ser número';
  }
  return 'negativo';
}

module.exports = typeOfNumber;