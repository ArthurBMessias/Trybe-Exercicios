const fs = require('fs');

const arquivo = 'meu-arquivo.txt';

fs.readFile(arquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não da pra ler ${arquivo} \n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo é : ${data}`);
});
