function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll("#buttons button");
const scoreDisplay = document.querySelector("#score");
const resultsDisplay = document.querySelector("#results");

function playRound(humanChoice) {
    if (gameOver) {
        return;
    }

    const computerChoice = getComputerChoice();
    let message = "";

    if (humanChoice === computerChoice) {
        message = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message = "You win this round!";
    } else {
        computerScore++;
        message = "Computer wins this round!";
    }

    scoreDisplay.textContent =
        `Human: ${humanScore} | Computer: ${computerScore}`;

    resultsDisplay.textContent =
        `You chose ${humanChoice}. Computer chose ${computerChoice}. ${message}`;

    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;

        if (humanScore === 5) {
            resultsDisplay.textContent += " You win the game!";
        } else {
            resultsDisplay.textContent += " Computer wins the game!";
        }

        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});