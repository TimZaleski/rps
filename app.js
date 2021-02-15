const options = {
  rock: {
    name: "rock",
    beats: ["scissors", "lizard"]
  },
  paper: {
    name: "paper",
    beats: ["rock", "spock"]
  },
  scissors: {
    name: "scissors",
    beats: ["paper", "lizard"]
  },
  lizard: {
    name: "lizard",
    beats: ["paper", "spock"]
  },
  spock: {
    name: "spock",
    beats: ["scissors", "rock"]
  }
}

function play(move) {
  let playerMove = options[move];
 
  let winner = "lost";
  let opponentsMove = opponentMove();

  if (playerMove.beats.includes(opponentsMove))
  {
    winner = "won";
  }
  else if (playerMove.name === opponentsMove)
  {
    winner = "tied";
  }

  document.getElementById('result').innerHTML = `
      <h3> You played ${playerMove.name}. Your opponent played ${opponentsMove}. You ${winner}!</h3>`
}

function opponentMove(){
  let optionNames = Object.keys(options)
  let index = Math.floor(Math.random() * optionNames.length);
  return optionNames[index];
}

function random() {
  let optionNames = Object.keys(options)
  let index = Math.floor(Math.random() * optionNames.length);
  
  play(optionNames[index]);
}

function drawButtons() {
  let optionNames = Object.keys(options)
  let buttons = ''

  optionNames.forEach(option => {
    buttons += `<button type="button" class="btn btn-outline-primary mx-1" onclick="play('${option}')">${option.toUpperCase()}</button>`
  })
  document.getElementById('buttons').innerHTML = buttons + `<button type="button" class="btn btn-outline-danger mx-1" onclick="random()">Random</button>`
}

drawButtons();