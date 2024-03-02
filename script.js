let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let playerScore = 0;
let computerScore = 0;
let round = 0
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

function getPlayerChoice (playerSelection){
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
    return playerSelection;
}
function computerSelection (){
    return getComputerChoice(rock, paper, scissors);
}

function playRound (playerSelection, computerSelection) {
    playerSelection = (getPlayerChoice(playerSelection));
    console.log (playerSelection);
    computerSelection = (getComputerChoice(rock, paper, scissors));
    console.log (computerSelection);
    
    if (playerSelection == rock && computerSelection == scissors) {
        console.log("VICTORY! Rock SMASHES Scissors!");
        return ++playerScore;
    } else if (playerSelection == scissors && computerSelection == rock) {
        console.log("DEFEAT! Rock SMASHES Scissors!");
        return ++computerScore;
    } else if (playerSelection == paper && computerSelection == rock) {
        console.log("VICTORY! Paper COVERS Rock!");
        return ++playerScore;
    } else if (playerSelection == rock && computerSelection == paper) {
        console.log("DEFEAT! Paper COVERS Rock!");
        return ++computerScore;
    } else if (playerSelection == scissors && computerSelection == paper) {
        console.log("VICTORY! Scissors CUT Paper!");
        return ++playerScore;
    } else if (playerSelection == paper && computerSelection == scissors) {
        console.log("DEFEAT! Scissors CUT Paper!");
        return ++computerScore;
        }
    else {
        console.log("TIE!");
    }

}

function playGame() {
    for(round = 1; round < 6; round++){
    let round = ([playRound(getPlayerChoice, computerSelection)]);
    console.log(round);
    }
    if (playerScore > computerScore) {
        result = "YOU WIN!";
    } else if (playerScore < computerScore) {
        result = "COMPUTER WINS!";
    } else {
        result = "IT'S A TIE!";
    }

    console.log("YOUR SCORE = ");
    console.log(playerScore);
    console.log("COMPUTER SCORE = ");
    console.log(computerScore);
    round ++;
    console.log(result);

}

console.log(playGame());