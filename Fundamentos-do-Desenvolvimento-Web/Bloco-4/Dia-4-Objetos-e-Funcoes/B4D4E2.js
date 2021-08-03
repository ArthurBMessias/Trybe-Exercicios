// 1 ex
// criar uma função 
// analisar a logica, como resolver o problema antes
// palavra lida tem o mesmo significado da palavra normal.
// criar uma variavel vazia para armezenar o resultado
// criar a função com o parametro da variavel
// criar um laço for que faça a lógica reversa;
// criar estrutura condicional para ver se é false ou true

let nomeAoReverso = '';

function itsApalidrome (strings) {
    for (let i = strings.length -1; i >= 0; i -= 1) {
    nomeAoReverso += strings[i]
    } if (nomeAoReverso === strings) {
        return true;
    } else {
        return false;
    }
}

console.log(itsApalidrome('arara'))