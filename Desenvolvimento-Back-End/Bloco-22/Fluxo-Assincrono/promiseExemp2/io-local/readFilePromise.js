const fs = require('fs').promises;

const arquivo = 'meu-arquivo.txt'

fs.readFile(arquivo, 'utf-8')
.then((data) => {
    console.log(` O conteúdo do arquivo é ${data}`)
})
.catch((err) => {
    console.error(`Não da pra ler o ${arquivo} \n Erro: ${err}`);
    process.exit(1); // serve para encerrar a execução do scrip e informar o SO do erro
})