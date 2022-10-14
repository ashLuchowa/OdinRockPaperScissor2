let playerSelection;
let computerSelection;
const buttons = document.querySelectorAll('.main-button button');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');
const mainDisplay = document.querySelector('.main-display p');
const winDisplay = document.querySelector('.main-display h2');

mainDisplay.textContent = 'Choose your destiny';


//Computer random choice [rock, paper or scissor]
getComputerChoice = ['rock', 'paper', 'scissor'];


//Player select [rock, paper or scissor]
//Player selects rock
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        winDisplay.textContent = 'It\'s a tie!';
        mainDisplay.textContent = `The enemy chose ${computerSelection} too.`;
    } else if (computerSelection === 'paper') {
        winDisplay.textContent = 'You lost!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Paper wraps rock!`;
    } else {
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Rock breaks scissor!`;
    }
})
//Player selects paper
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Paper wraps rock!`;
    } else if (computerSelection === 'paper') {
        winDisplay.textContent = 'It\'s a tie!';
        mainDisplay.textContent = `The enemy chose ${computerSelection} too.`;
    } else {
        winDisplay.textContent = 'You lost!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Scissor cuts paper!`;
    }
})
//Player selects scissor
scissorBtn.addEventListener('click', () => {
    playerSelection = 'scissor';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        winDisplay.textContent = 'You lost!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Rock breaks scissor!`;
    } else if (computerSelection === 'paper') {
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Scissor cuts paper!`;
    } else {
        winDisplay.textContent = 'It\'s a tie!';
        mainDisplay.textContent = `The enemy chose ${computerSelection} too`;
    }
})