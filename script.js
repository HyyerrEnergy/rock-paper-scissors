function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors:");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        console.log("Human chooses:", humanChoice);
        console.log("Computer chooses:", computerChoice);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win this round!");
        } else {
            computerScore++;
            console.log("Computer wins this round!");
        }

        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
    }

    for (let round = 1; round <= 5; round++) {
        console.log("----- Round " + round + " -----");

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log("===== FINAL RESULTS =====");
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();