const CHOICES = ["Rock", "Paper", "Scissors"]; 
const BUTTONS = document.querySelectorAll('button');
const PLAYER_SELECTION = Array.from(BUTTONS);

function getPlayerSelection() {

}
console.log(BUTTONS);
console.log(PLAYER_SELECTION);
function getComputerChoice() {
    let computerChoice = CHOICES[Math.floor(CHOICES.length * Math.random())];
    return computerChoice;
}

function playRound(...BUTTONS) {

}
console.log(getComputerChoice());
console.log(getPlayerSelection());