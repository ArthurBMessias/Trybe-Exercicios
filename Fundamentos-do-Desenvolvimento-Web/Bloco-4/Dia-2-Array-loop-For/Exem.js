let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// function fullName() {
//     return player.map((name) => `A jogadora ${name.name} ${name.lastName} tem ${name.age} anos de idade`);
// }

// console.log(fullName())
// console.table(player)

// function howMant() {
//     return player.map((name) => `A jogadora ${name.name} ${name.lastName} foi eleita a melhor mundo por ${bestInTheWorld.length} vezes`)
// }

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor mundo por ${player.bestInTheWorld.length} vezes`)
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`)

// function countMedals() {
//    let takeMedals =  player.map((medal) => medal.medals).reduce((acumulator, current) => acumulator + current, 0)
//    return takeMedals
// }

// console.log(countMedals())

