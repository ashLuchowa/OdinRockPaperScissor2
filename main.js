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
        computerDisplay.textContent = ++cScore;
    } else {
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Rock breaks scissor!`;
        playerDisplay.textContent = ++pScore;
    }
});

//Player selects paper
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Paper wraps rock!`;
        playerDisplay.textContent = ++pScore;
    } else if (computerSelection === 'paper') {
        winDisplay.textContent = 'It\'s a tie!';
        mainDisplay.textContent = `The enemy chose ${computerSelection} too.`;
    } else {
        winDisplay.textContent = 'You lost!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Scissor cuts paper!`;
        computerDisplay.textContent = ++cScore;
    }
});

//Player selects scissor
scissorBtn.addEventListener('click', () => {
    playerSelection = 'scissor';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        winDisplay.textContent = 'You lost!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Rock breaks scissor!`;
        computerDisplay.textContent = ++cScore;
    } else if (computerSelection === 'paper') {
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}. Scissor cuts paper!`;
        playerDisplay.textContent = ++pScore;
    } else {
        winDisplay.textContent = 'It\'s a tie!';
        mainDisplay.textContent = `The enemy chose ${computerSelection} too`;
    }
});

//Find another way to click through all 3 buttons

//Add playRound function(playerSelection, computerSelection) {
    //move game logics here
//}

//addEventListeners - when click, store value in the playerSelection variable