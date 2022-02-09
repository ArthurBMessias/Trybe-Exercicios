// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

const aleaOne = Math.floor(Math.random() * 100 + 1);
const aleaTwo = Math.floor(Math.random() * 100 + 1);
const aleaThree = Math.floor(Math.random() * 100 + 1);

const arrayNumbers = [aleaOne, aleaTwo, aleaThree]

function heHe(a, b, c) {
    
    const promise = new Promise((resolve, reject) => {
      if (isNaN(a, b, c)) reject('Precisa ser número');
  
      const result = (a + b) * c;
      if (result < 50) reject('Valor muito baixo');
      resolve(result);
    });
    return promise;
  }

  heHe(...arrayNumbers)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err.message)
    })