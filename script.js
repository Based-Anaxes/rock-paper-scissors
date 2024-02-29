let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function getComputerChoice (rock, paper, scissors) {
    let getComputerChoice = Math.floor(Math.random() * 3) + 1;
    if (getComputerChoice === 1) {
        getComputerChoice = rock
    } else if (getComputerChoice == 2) {
        getComputerChoice = paper
    } else {
        getComputerChoice = scissors
    }
    return getComputerChoice;
}

let getPlayerSelection= prompt("Rock, paper, scissors, shoot!");
    switch (getPlayerSelection.toLowerCase()){
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

function playRound (playerSelection, computerSelection) {
    if (playerSelection == rock && computerSelection == scissors) {
        result = "VICTORY! Rock SMASHES Scissors!";
    } else if (playerSelection == scissors && computerSelection == rock) {
        result = "DEFEAT! Rock SMASHES Scissors!";
    } else if (playerSelection == paper && computerSelection == rock) {
        result = "VICTORY! Paper COVERS Rock!";
    } else if (playerSelection == rock && computerSelection == paper) {
        result = "DEFEAT! Paper COVERS Rock!";
    } else if (playerSelection == scissors && computerSelection == paper) {
        result = "VICTORY! Scissors CUT Paper!";
    } else if (playerSelection == paper && computerSelection == scissors) {
        result = "DEFEAT! Scissors CUT Paper";
    }
    else {
        result = "Tie!";
    }
    return result;
}
console.log (computerSelection);
console.log (playerSelection)
console.log (playRound (playerSelection, computerSelection));


