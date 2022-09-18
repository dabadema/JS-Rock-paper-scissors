function getComputerChoice() {
    let computerSelection = "";
    let options = ["Rock", "Paper", "Scissors"];
    computerSelection = options[Math.floor(Math.random()*options.length)];
    return computerSelection
}
console.log(getComputerChoice)

function gameRound() {
    playerSelection = prompt("What do you choose this round?")
    
}
