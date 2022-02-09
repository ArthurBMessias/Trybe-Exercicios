function calcDiv(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode dividir com número 0!!'));

    const resultado = num1 / num2;

    resolve(resultado);
  });

  return promise;
}

calcDiv(2, 2)
  .then((result) => console.log(result))
  .catch((err) => console.log('erro: %s', err.message));
