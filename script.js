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

game.appendChild(playerText); 
game.appendChild(computerText);
game.appendChild(resultText);
game.appendChild(score);
score.appendChild(playerScoreText);
score.appendChild(computerScoreText);

function getComputerChoice(){
    let computerChoice = choices[Math.floor(choices.length * Math.random())];
    console.log(computerChoice);
    return computerChoice;
}

buttons.forEach((button) => {
    button.addEventListener("click", (button) => {
        let computerSelection = getComputerChoice();
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
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    playerText.innerText = `You chose: ${playerChoice}`; 
    computerText.innerText = `Computer chose: ${computerSelection}`; 
    if ((playerChoice == choices[0] && computerSelection == choices[2]) 
        || (playerChoice == choices[1] && computerSelection == choices[0]) 
        || (playerChoice == choices[2] && computerSelection == choices[1])) {
            resultText.textContent = results[0];
            playerScoreText.textContent = ++playerScore; 
    } else if ((computerSelection == choices[0] && playerChoice == choices[2])
                || (computerSelection == choices[1] && playerChoice == choices[0]) 
                || (computerSelection == choices[2] && playerChoice == choices[1])) {
                    resultText.textContent = results[1];
                    computerScoreText.textContent = ++computerScore;
                } else {
                    resultText.textContent = results[2];
                }
}


