const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  // [...]
  
  const findAnimalByAge = (age) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const animalsAge = Animals.filter((animal) => animal.age === age);
  
        if (animalsAge.length > 0) {
          return resolve(animalsAge);
        }
  
        return reject(new Error('Nenhum animal encontrado!'));
      }, 100);
    })
  );
  
  describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com o a idade', () => {
      test('Verifique o primeiro nome do animal no array retornado', () => {
        const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
        return expect(findAnimalByAge(5)).resolves.toEqual(animals);
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(findAnimalByAge(3)).rejects
          .toEqual(new Error('Nenhum animal encontrado!'));
      });
    });
  });