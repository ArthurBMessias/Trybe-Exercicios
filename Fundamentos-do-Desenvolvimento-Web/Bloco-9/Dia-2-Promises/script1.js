// const promise = new Promise((resolve, reject) => {
// => construção de uma função promise 
// });

// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random() * 11);
  
//     if (number <= 5) {
//       return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//     }
//     resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
//   });
// percebe-se que utiliza ou reject caso de um algum erro e o resolve caso a condição seja verdadeira.

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(number);
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));