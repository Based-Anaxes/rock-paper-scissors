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

function playerSelection () {
    let getPlayerChoice = prompt("Rock, paper, scissors, shoot!");
    switch (getPlayerChoice.toLowerCase()){
        case "rock":
            playerChoice = "rock";
            break;
        case "paper":
            playerChoice = "paper";
            break;
        case "scissors":
            playerChoice = "scissors";
            break;
        default:
            playerChoice = "Shoot!";
            break;
    }
    return playerChoice;
}

function computerSelection (getComputerChoice) {
    return getComputerChoice;
}

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

console.log(getComputerChoice(rock, paper, scissors));