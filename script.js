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
    switch (getPlayerChoice.toLowerCase()){
        case "rock":
            playerSelection = rock;
            break;
        case "paper":
            playerSelection = paper;
            break;
        case "scissors":
            playerSelection = scissors;
            break;
        default:
            playerSelection = "Shoot!";
            break;
    }

const computerSelection = getComputerChoice(rock, paper, scissors);

console.log(playerSelection);