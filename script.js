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

function playGame() {
    let playerScore = "Your Score: ";
    let computerScore = "Computer Score: ";
    let playerScoreCount = 0;
    let computerScoreCount = 0;
    const round = playRound(playerSelection, computerSelection);
    console.log(round); 
    switch (round){
        case "VICTORY! Rock SMASHES Scissors!":
            playerScoreCount = ++playerScoreCount;
            break;
        case "VICTORY! Paper COVERS Rock!":
            playerScoreCount = ++playerScoreCount;
            break;
        case "VICTORY! Scissors CUT Paper!":
            playerScoreCount = ++playerScoreCount;
            break;
        default:
            score = 0;
    }
/*
    if (playerScore > computerScore) {
        score = "YOU WIN!"
    } else if (playerScore < computerScore) {
        score = "COMPUTER WINS!"
    } else {
        score = "IT'S A TIE!";
    } */
    console.log(playerScore);
    console.log(playerScoreCount);
    console.log(computerScore);
    console.log(computerScoreCount);
}
console.log(playGame());