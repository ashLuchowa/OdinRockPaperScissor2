# OdinRockPaperScissor2
Another go at the rock paper scissor project

//User Interface
- Header Title = 'Rock, Paper, Scissor'
- 3 Buttons [Rock, Paper & Scissor]
- playerScore display & computerScore display
- main display showing who won after pressing a button

[PLAN]
//getComputerChoice()
- input from generating a random number [1,2,3], where each number === [rock, paper,scissor]

//computerSelection
- getComputerChoice = computerSelection

//playerSelection
- input from pressing one of the buttons
- shoud be case-sensitive

//playRound(playerSelection, computerSelection) {
    
    //computer chooses 'rock'
    if player = rock //it's a tie
    if player = paper //you win | paper wraps rock
    if player = scissor //you lose | rock breaks scissor

    //computer chooses = 'paper'
    if player = rock //you lose | paper wraps rock
    if player = paper //it's a tie
    if player = scissor //you win | scissor cuts paper

    //computers chooses 'scissor'
    if player = rock //you win | rock breaks scissor
    if player = paper //you lose | scissor cuts paper
    if player = scissor //it's a tie
}

//game()
- will play 5 rounds of playRound()
- displays 'who won' and restart button