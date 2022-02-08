const readline = require('readline-sync');

function messages(playerNumber, sortNumber) {
  if (sortNumber !== playerNumber) {
    console.log(`Errou! HAHAHAHAHAH. O número é ${sortNumber}`);
  }

  return console.log('ACERTOOOUUUUU');
}

function game() {
  const sortNumber = parseInt(Math.random() * 10);
  const playerNumber = readline.questionInt('Pick a number! 0 until 10!');
  messages(playerNumber, sortNumber);

  const letsPlayAgain = readline.questionInt(
    'Play again? y to yes, anything to no!'
  );
  if (letsPlayAgain !== 'y') return console.log('Byee!');
  game();
}

game();
