const choices = ["rock", "paper", "scissors"];

// Function that randomly return either "Rock", "Paper" or "Scissors".
function getComputerChoice(choices) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    return computerChoice;
}

// Function that plays a single round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You won!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You won";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You won";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(choices);
console.log(playRound(playerSelection, computerSelection));