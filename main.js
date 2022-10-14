let playerSelection;
let computerSelection;
const buttons = document.querySelectorAll('.main-button button');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');
const mainDisplay = document.querySelector('.main-display p');

mainDisplay.textContent = 'Choose your destiny';


//Computer random choice [rock, paper or scissor]
getComputerChoice = ['rock', 'paper', 'scissor'];


//Player select [rock, paper or scissor]
//Player selects rock
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. It\'s a tie!`;
    } else if (computerSelection === 'paper') {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. You lost! Paper wraps rock!`;
    } else {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. You won! Rock breaks scissor!`;
    }
})
//Player selects paper
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. You won! Paper wraps rock!`;
    } else if (computerSelection === 'paper') {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. It\'s a tie!`;
    } else {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. You lost! Scissor cuts paper!`;
    }
})
//Player selects scissor
scissorBtn.addEventListener('click', () => {
    playerSelection = 'scissor';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. You lost! Rock breaks scissor!`;
    } else if (computerSelection === 'paper') {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. You won! Scissor cuts paper!`;
    } else {
        mainDisplay.textContent = `The enemy chose ${computerSelection}. It\'s a tie!`;
    }
})