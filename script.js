const choices = ["Rock", "Paper", "Scissors"]; 
const buttons = document.querySelectorAll('button');
const game = document.querySelector('.game');
const roundResult = document.createElement('div')

let round = 0;
let playerScore = 0;
let computerScore = 0; 
let computerSelection = choices[Math.floor(choices.length * Math.random())];

buttons.forEach((button) => {
    button.addEventListener("click", (button) => {
        if (button.target.matches('#rock')) {
            playerChoice = choices[0];
        } else if (button.target.matches('#paper')) {
            playerChoice = choices[1];
        } else {
            playerChoice = choices[2];
        }
        playRound(playerChoice, computerSelection);
    })
})

function playRound(playerChoice, computerSelection) {
    if (playerChoice == choices[0] && computerSelection == choices[0]) {
        game.appendChild(results);
        results.textContent = ;
        console.log("worked");
        console.log("It's a tie!");
    }
}
console.log(computerSelection);
