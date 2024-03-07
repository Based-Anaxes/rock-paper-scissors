const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

function getComputerSelection() {
    switch (computerSelection = Math.floor((Math.random() * 3) + 1)) {
        case 1:
            computerSelection = ROCK;
            break;
        case 2: 
            computerSelection = PAPER;
            break; 
        case 3: 
            computerSelection = SCISSORS;
    }       
        return computerSelection;
}
console.log(getComputerSelection());