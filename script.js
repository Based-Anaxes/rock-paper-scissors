const choices = ["Rock", "Paper", "Scissors"]; 
const buttons = document.querySelectorAll('button');
const game = document.querySelector('.game');
const resultText = document.createElement('div');
const playerText = document.createElement('p'); 
const computerText = document.createElement('p')
const results = ["You win!", "Computer wins!", "It's a tie!"];
const score = document.createElement('div'); 
const playerScoreText = document.createElement('p');
const computerScoreText = document.createElement('p');

let round = 0;
let playerScore = 0;
let computerScore = 0; 

let computerChoice = choices[Math.floor(choices.length * Math.random())];

game.appendChild(playerText); 
game.appendChild(computerText);
game.appendChild(resultText);
game.appendChild(score);
score.appendChild(playerScoreText);
score.appendChild(computerScoreText);

buttons.forEach((button) => {
    button.addEventListener("click", (button) => {
        if (button.target.matches('#rock')) {
            playerChoice = choices[0];
        } else if (button.target.matches('#paper')) {
            playerChoice = choices[1];
        } else {
            playerChoice = choices[2];
        }
        playRound(playerChoice, computerChoice);
    })
})
function playRound(playerChoice, computerChoice) {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    playerText.innerText = `You chose: ${playerChoice}`; 
    computerText.innerText = `Computer chose: ${computerChoice}`; 
    if ((playerChoice == choices[0] && computerChoice == choices[2]) 
        || (playerChoice == choices[1] && computerChoice == choices[0]) 
        || (playerChoice == choices[2] && computerChoice == choices[1])) {
            resultText.textContent = results[0];
            playerScoreText.textContent = ++playerScore; 
    } else if ((computerChoice == choices[0] && playerChoice == choices[2])
                || (computerChoice == choices[1] && playerChoice == choices[0]) 
                || (computerChoice == choices[2] && playerChoice == choices[1])) {
                    resultText.textContent = results[1];
                    computerScoreText.textContent = ++computerScore;
                } else {
                    resultText.textContent = results[2];
                }
}
function playGame() {
    for (let round = 0; round < 5; round++) {
        playRound;
        round++;
    }
}
console.log(computerChoice);
