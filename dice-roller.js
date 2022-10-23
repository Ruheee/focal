//> node dice-roller.js 3
//Rolled 3 dice: 2, 6, 5

const dice = process.argv.slice(2)

function diceRoll(num){
  const results = [];
  for(let i = 0;i < num; i++) {
    results.push(Math.floor(Math.random()*6)+1)
  }
  return results.join(', ');
}

console.log(`Rolled ${dice}: ${diceRoll(dice)}`)