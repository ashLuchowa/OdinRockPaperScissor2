let pScore;
let cScore;
let playerSelection;
let computerSelection
const buttons = document.querySelectorAll('.main-button button');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');

//Computer random choice [rock, paper or scissor]
const getComputerChoice = Math.floor(Math.random() * 3) + 1;
if(getComputerChoice === 1) {
    computerSelection = 'rock';
} else if(getComputerChoice === 2) {
    computerSelection = 'paper';
} else {
    computerSelection = 'scissor';
}

//Player select [rock, paper or scissor]
rockBtn.addEventListener('click', () => playerSelection = 'rock');
paperBtn.addEventListener('click', () => playerSelection = 'paper');
scissorBtn.addEventListener('click', () => playerSelection = 'scissor');


//Play 1 round
let playRound = (playerSelection, computerSelection) => {

    //computer chooses rock
    if(computerSelection === 'rock') {
        if(playerSelection === 'rock') {
            alert('tie');
        } else if(playerSelection === 'paper') {
            alert('you won');
        } else {
            alert('You lost');
        }
    }
}

playRound();
