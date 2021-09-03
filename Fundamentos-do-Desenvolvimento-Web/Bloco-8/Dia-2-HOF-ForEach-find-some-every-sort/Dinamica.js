// Use o array `estudantes` para os exercícios a seguir:

// 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.

// 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.

const estudantes = [
    {
      nome: 'Henrique Baêta',
      projeto: 'Trybewarts',
      status: 88,
    },
    {
      nome: 'Rodrigo da Rosa',
      projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Gabrielle Martines',
      projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Isaac Batista',
      projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Ana Duarte',
      projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Jéssica Lopes',
      projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald Lima',
      projeto: 'Trybewarts',
      status: 75,
    },
  ]

 const retorna = estudantes.sort(function (a, b) {
      return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 :0);
  });

// console.log (retorna)

const retornaTwo = estudantes.sort(function (a, b) {
    return (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 :0);
});

console.log(retornaTwo)