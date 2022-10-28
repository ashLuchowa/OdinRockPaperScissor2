//Global variables
let pScore = 0;
let cScore = 0;
let rScore = 0;

//Target variables
const buttons = document.querySelectorAll('.main-button button');
const mainDisplay = document.querySelector('.main-display p');
const winDisplay = document.querySelector('.main-display h2');

//Target Buttons
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');

//Displays
mainDisplay.textContent = 'Choose your destiny';

//Computer random choice [rock, paper or scissor]
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissor'];
    const compChoice = arrOfChoices[Math.floor(Math.random() * 3)]
    return compChoice;
}

//Continue Button
const nextRoundDisplay = document.querySelector('.next-round');
const continueBtn = document.createElement('button');
continueBtn.textContent = 'next round';
continueBtn.classList.add('continue-btn');


//Player selects rock
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

//Player selects paper
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

//Player selects scissor
scissorBtn.addEventListener('click', () => {
    playerSelection = 'scissor';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});




//Play 1 Round
const playRound = (playerSelection, computerSelection) => {

    //It's a tie
    if (playerSelection === computerSelection) {
        winDisplay.textContent = 'It\'s a tie!';
        mainDisplay.textContent = `The enemy chose ${computerSelection} too.`;
        rScore++;
        //Disable options after playing 1 round
        for (const button of buttons) {
            button.disabled = true;
        }

        updateScore();
    }

    //You win
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        pScore++;
        rScore++;
        winDisplay.textContent = 'You won!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}.`;
        //Disable options after playing 1 round
        for (const button of buttons) {
            button.disabled = true;
        }
        updateScore();
    }

    //You lost
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')
    ) {
        cScore++;
        rScore++;
        winDisplay.textContent = 'You lost!';
        mainDisplay.textContent = `The enemy chose ${computerSelection}.`;
        //Disable options after playing 1 round
        for (const button of buttons) {
            button.disabled = true;
        }

        updateScore();
    }
}


//Update Score
const updateScore = () => {
    continueBtn.addEventListener('click', () => {
        const playerDisplay = document.querySelector('.player-display span');
        const computerDisplay = document.querySelector('.computer-display span');
        const roundDisplay = document.querySelector('.round-display span');
        playerDisplay.textContent = pScore;
        computerDisplay.textContent = cScore;
        roundDisplay.textContent = rScore + 1;
        winDisplay.textContent = '';
        mainDisplay.textContent = 'Choose your destiny';
        nextRoundDisplay.textContent = '';
        for (const button of buttons) {
            button.disabled = false;
        }
    });


    if(rScore === 5) {
        if(pScore >= 2) {
            winDisplay.textContent = 'You won the game!';
            continueBtn.textContent = 'restart';
        } else {
            winDisplay.textContent = 'You lost the game!';
            continueBtn.textContent = 'restart';
        }
    }

    nextRoundDisplay.appendChild(continueBtn);
}