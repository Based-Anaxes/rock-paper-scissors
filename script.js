function getComputerChoice () {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        choice = "Rock"
    } else if (randomChoice == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors"
    }
    return choice;
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

console.log(playerSelection());