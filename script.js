const choices = ["rock", "paper", "scissors"];
const paperButton = document.createElement("button");
const rockButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const displayInfo = document.querySelector(".display-info");
const scoreboard = document.querySelector(".scoreboard");
let displayPlayerScores = document.querySelector("#player");
let displayComputerScores = document.querySelector("#computer");

paperButton.textContent = "Paper";
rockButton.textContent = "Rock";
scissorsButton.textContent = "Scissors";

document.body.appendChild(paperButton);
document.body.appendChild(rockButton);
document.body.appendChild(scissorsButton);

paperButton.addEventListener("click", () => playRound("paper", getComputerChoice(choices)));
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice(choices)));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice(choices)));

let playerScores = 0;
let computerScores = 0;

// Function that randomly return either "Rock", "Paper" or "Scissors".
function getComputerChoice(choices) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    return computerChoice;
}

// Function to decide winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        displayInfo.textContent = "Tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            displayInfo.textContent = "You Lose! Paper beats Rock";
            computerScores++;
            displayComputerScores.textContent = computerScores;
        } else {
            displayInfo.textContent = "You won!";
            playerScores++;
            displayPlayerScores.textContent = playerScores;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            displayInfo.textContent = "You Lose! Rock beats Scissors";
            computerScores++;
            displayComputerScores.textContent = computerScores;
        } else {
            displayInfo.textContent = "You won!";
            playerScores++;
            displayPlayerScores.textContent = playerScores;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            displayInfo.textContent = "You Lose! Scissors beats Paper";
            computerScores++;
            displayComputerScores.textContent = computerScores;
        } else {
            displayInfo.textContent = "You won!";
            playerScores++;
            displayPlayerScores.textContent = playerScores;
        }
    }

    gameOver(playerScores, computerScores);
}

// Function that reports that the game is over
function gameOver(playerScores, computerScores) {
    if (playerScores >= 5) {
        displayInfo.textContent = "";
        scoreboard.textContent = "YOU WON THE GAME!";
    } else if (computerScores >= 5) {
        displayInfo.textContent = "";
        scoreboard.textContent = "YOU LOST THE GAME!";
    }
}