const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Parabéns você escreveu aqui')
//   .then(() => {
//     console.log('Arquivo escrito!');
//   })
//   .catch((err) => {
//     console.error(`Deu erro ${err.message}`);
//   });

//com async e await

async function write() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Parabéns você escreveu aqui(com async)');
    console.log('Arquivo escrito!');
  } catch (err) {
    console.error(`Deu erro ${err.message}`);
  }
}

write();
