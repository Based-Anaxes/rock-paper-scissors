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
console.log (getComputerChoice());