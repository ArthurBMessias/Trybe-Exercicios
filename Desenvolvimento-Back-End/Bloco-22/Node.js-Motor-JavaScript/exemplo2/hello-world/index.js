const readline = require('readline-sync')

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade?');
const email = readline.questionEMail('Qual teu email? ')

// console.log('Hello, world!');

console.log(`Hello, ${name}! You are ${age} years old! And because that ${email}, you are luck!`);


