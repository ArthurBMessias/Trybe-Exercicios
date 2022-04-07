//////////////////////////////////////////////// My Little Polimorifsmo

// class Animal {
//   constructor(public name: string) { }
//   move() { console.log(`${this.name} está se movendo.`); }
//   surra() {console.log(`${this.name} ta brabo e vai te dar uma surra!`)}
// }
// class Bird extends Animal {
//   move() { console.log(`${this.name} está voando.`); }
// }
// class Mammal extends Animal {
//   move() { console.log(`${this.name} está andando.`); }
// }

// class Saint extends Animal {
//     move() {console.log(`${this.name} está treinando `)}
// }

// const a = new Animal('Tubarão');
// const b = new Bird('Papagaio');
// const m = new Mammal('Tatu');
// const p = new Mammal('Garoto Abandonado na Bahia é Capitão de Areia e ')
// const seya = new Saint('Seiya')

// const myMove = (animal: Animal) => {
//   animal.move();
// }

// const mySurra = (animal: Animal) => {
//     animal.surra();
// }

// myMove(a);
// myMove(b);
// myMove(m);
// myMove(p);
// myMove(seya);
// mySurra(seya);

//////////////////////////////////////////////////////////////// with super class

// class Animal {
//   constructor(public name: string) { }
//   move() { console.log(`${this.name} está se movendo.`); }
// }
// class Bird extends Animal {
//   move() {
//     super.move();
//     console.log(`${this.name} está voando.`);
//   }
// }
// class Mammal extends Animal {
//   move() { console.log(`${this.name} está andando.`); }
// }

// const a = new Animal('Tubarão');
// const b = new Bird('Papagaio');
// const m = new Mammal('Tatu');

// const myMove = (animal: Animal) => {
//   animal.move();
// }
// myMove(a);
// myMove(b);
// myMove(m);

// /*
// Saída:
// Tubarão está se movendo.
// Papagaio está se movendo.
// Papagaio está voando.
// Tatu está andando.
// */

/////////////////////////////////////// with abstract class

/*
Dicionário en-pt:
- fish: peixe
*/

// abstract class Animal {
//   constructor(public name: string) { }
//   abstract move(): void
// }
// class Bird extends Animal {
//   move() { console.log(`${this.name} está voando.`); }
// }
// class Mammal extends Animal {
//   move() { console.log(`${this.name} está andando.`); }
// }
// class Fish extends Animal {
//   move() { console.log(`${this.name} está nadando.`); }
// }

// const a = new Fish('Tubarão');
// const b = new Bird('Papagaio');
// const m = new Mammal('Tatu');

// const myMove = (animal: Animal) => {
//   animal.move();
// }
// myMove(a);
// myMove(b);
// myMove(m);

// /*
// Saída:
// Tubarão está nadando.
// Papagaio está voando.
// Tatu está andando.
// */


///////////////////// Método estático
/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/

// class Employee {
//   private static employeeCount = 0

//   constructor(public name: string) {
//     Employee.addEmployee();
//   }

//   private static addEmployee() {
//     this.employeeCount += 1;
//   }

//   static get employees() {
//     return this.employeeCount;
//   }
// }

// console.log(Employee.employees);
// const e1 = new Employee('Ronald');
// console.log(Employee.employees);
// const e2 = new Employee('Cíntia');
// console.log(Employee.employees);

// /*
// Saída: 0, 1 e 2



// */

// abstract class Character {
//     constructor(public name: string) {}
//     abstract talk(): void
//     abstract specialMove(): void
// }

// class MeleeCharacter extends Character {
//     talk() {
//         console.log(`${this.name} is talking about get working`)
//     }
//     specialMove() {
//         console.log(`${this.name} uses a special movie and get a job!`)
//     }
// }

// class LongRangeCharacter extends Character {
//     talk() {
//         console.log(`${this.name} is talking with the CTO!`)
//     }
//     specialMove() {
//         console.log(`${this.name} use a special move called softskills and get promoted! |o yahoo`)
//     }
// }

// const arthur = new MeleeCharacter('Arthur')
// const gabriel = new LongRangeCharacter('Gabriel')

// const myDreamJob = (character: Character) => {
//     character.talk();
//     character.specialMove();
// }

// console.log(myDreamJob(arthur));
// console.log(myDreamJob(gabriel));

/// sintax with Generics 
interface Person {
    id: number;
    name: string;
    showIdentification(): void;
  }
  
  class PhysicalPerson implements Person {
    private static lastId = 0;
    private _name;
    private _id;
    private _cpf;
  
    constructor(name: string, cpf: string) {
      this._id = PhysicalPerson.newId();
      this._name = name;
      this._cpf = cpf;
    }
  
    private static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cpf() { return this._cpf; }
    showIdentification() { console.log(this.id, this._cpf); }
  }
  
  class LegalPerson implements Person {
    private static lastId = 0;
    private _name;
    private _id;
    private _cnpj;
  
    constructor(name: string, cnpj: string) {
      this._id = LegalPerson.newId();
      this._name = name;
      this._cnpj = cnpj;
    }
  
    private static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cnpj() { return this._cnpj; }
    showIdentification() { console.log(this.id, this._cnpj); }
  }
  
  const pp0 = new PhysicalPerson('John', '123456789');
  const pp1 = new PhysicalPerson('Jenny', '987654321');
  const lp = new LegalPerson('International Sales SA', '834729384723');
  
  const showIdentification = (person: Person) => {
    person.showIdentification();
  }
  showIdentification(pp0);
  showIdentification(pp1);
  showIdentification(lp);
  