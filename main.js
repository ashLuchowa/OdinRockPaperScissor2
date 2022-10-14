let playerSelection;
let computerSelection;
const buttons = document.querySelectorAll('.main-button button');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');


//Computer random choice [rock, paper or scissor]
getComputerChoice = ['rock', 'paper', 'scissor'];


console.log(computerSelection);


//Player select [rock, paper or scissor]
//Player selects rock
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        console.log('It is a tie!');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    } else if (computerSelection === 'paper') {
        console.log('You lost! Paper wraps rock');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    } else {
        console.log('You won! Rock breaks scissor');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    }
})
//Player selects paper
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        console.log('You won! Paper wraps rock');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    } else if (computerSelection === 'paper') {
        console.log('It is a tie!');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    } else {
        console.log('You lost! Scissor cuts paper');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    }
})
//Player selects scissor
scissorBtn.addEventListener('click', () => {
    playerSelection = 'scissor';
    computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];

    if (computerSelection === 'rock') {
        console.log('You lost! Rock breaks scissor');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    } else if (computerSelection === 'paper') {
        console.log('You won! Scissor cuts paper');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    } else {
        console.log('It is a tie');
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
    }
})







// // //Play 1 round
// let playRound = (playerSelection, computerSelection) => {



//     //computer chooses rock
//     if (computerSelection = 'rock') {
//         if (playerSelection === 'rock') {
//             console.log('tie');
//         } else if (playerSelection === 'paper') {
//            console.log('you won! Paper wraps rock');
//         } else {
//            console.log('You lost! Rock breaks scissor');
//         }
//     }

//     //computer chooses paper
//     else if(computerSelection === 'paper') {
//         if(playerSelection === 'paper') {
//             console.log('tie')
//         } else if(playerSelection === 'rock') {
//             console.log('You lost! Paper wraps rock');
//         } else {
//             console.log('You won! Scissor cuts paper');
//         }
//     }

//     //computer chooses scissor
//     else {
//         if(playerSelection === 'scissor') {
//             console.log('tie');
//         } else if(playerSelection === 'rock') {
//             console.log('You won! Rock breaks scissor');
//         } else {
//             console.log('You lost! Scissor cuts paper');
//         }
//     }
// }


// playRound()