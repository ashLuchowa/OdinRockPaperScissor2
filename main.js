let pScore;
let cScore;

//Computer random choice [rock, paper & scissor]
const getComputerChoice = Math.floor(Math.random() * 3) +1;
getComputerChoice === 1 ? 'rock' :
getComputerChoice === 2 ? 'paper' : 'scissor';