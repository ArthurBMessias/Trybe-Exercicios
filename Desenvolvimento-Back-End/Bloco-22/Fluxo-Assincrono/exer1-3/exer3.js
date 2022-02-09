// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

const aleaOne = Math.floor(Math.random() * 100 + 1);
const aleaTwo = Math.floor(Math.random() * 100 + 1);
const aleaThree = Math.floor(Math.random() * 100 + 1);

const arrayNumbers = [aleaOne, aleaTwo, aleaThree]

async function heHe(a, b, c) {
    
    const promise = new Promise((resolve, reject) => {
      if (isNaN(a, b, c)) reject('Precisa ser número');
  
      try {
          const result = await (a + b) * c;
      if (result < 50) reject('Valor muito baixo');
      resolve(result);
      } catch (err) {
          console.log(err.message)
      }
    });
    return promise;
  }


