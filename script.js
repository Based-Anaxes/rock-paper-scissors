const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice (rock, paper, scissors) {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        randomChoice = rock
    } else if (randomChoice == 2) {
        randomChoice = paper
    } else {
        randomChoice = scissors
    }
    return randomChoice;
}

let getPlayerChoice = prompt("Rock, paper, scissors, shoot!");

function playerSelection (getPlayerChoice, rock, paper, scissors) {
    switch (getPlayerChoice.toLowerCase()){
        case "rock":
            playerChoice = rock;
            break;
        case "paper":
            playerChoice = paper;
            break;
        case "scissors":
            playerChoice = scissors;
            break;
        default:
            playerChoice = "Shoot!";
            break;
    }
    return playerChoice;
}
const computerSelection = getComputerChoice(rock, paper, scissors);

console.log(computerSelection);