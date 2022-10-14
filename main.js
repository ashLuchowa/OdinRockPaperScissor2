//Global variables
let pScore = 0;
let cScore = 0;

//Target variables
const buttons = document.querySelectorAll('.main-button button');
const mainDisplay = document.querySelector('.main-display p');
const winDisplay = document.querySelector('.main-display h2');
const computerDisplay = document.querySelector('.computer-display span');
const playerDisplay = document.querySelector('.player-display span');
//Target Buttons
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');

//Displays
playerDisplay.textContent = pScore;
computerDisplay.textContent = cScore;
mainDisplay.textContent = 'Choose your destiny';

//Computer random choice [rock, paper or scissor]
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissor'];
    const compChoice = arrOfChoices[Math.floor(Math.random() * 3)]
    return compChoice;
}

//Player selects rock
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = getComputerChoice();
});

//Player selects paper
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = getComputerChoice();
});

//Player selects scissor
scissorBtn.addEventListener('click', () => {
    playerSelection = 'scissor';
    const computerSelection = getComputerChoice();
});




//Play 1 Round
const playRound = (playerSelection, computerSelection) => {

    //It's a tie
    if (playerSelection === computerSelection) {
        winDisplay.textContent = 'It\'s a tie!';
        mainDisplay.textContent = `The enemy chose ${computerSelection} too.`;
    }

    //You win
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}.`;
    }

    //You lost
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')
    ) {
        winDisplay.textContent = 'You lost!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}.`;
    }

}