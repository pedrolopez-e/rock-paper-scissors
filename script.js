/*Function that simulates the computer play. It works correctly*/
function computerPlay() {
    let strings = ["Rock", "Paper", "Scissors"];
    let play = strings[Math.floor(Math.random()*strings.length)];
    return play;
}

function playRound(playerSelection, computerSelection) {
     /* If player has scissors and computer has paper return you win! scissors beats paper*/
     /* If player has scissors and computer has rock return you lose! Rock beats scissors*/
     /* If player has scissors and c has scissors return thats a tie*/
     if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "paper") {
            return "You win! Scissors beats paper";
        } else if (computerSelection.toLowerCase() === "rock") {
            return "You lose! Rock beats scissors";
        } else {
            return "That's a tie!";
        }
    } else if (playerSelection.toLowerCase() === "rock") {
        /* If player has rock and computer has paper return you lose! paper beats rock*/
        /* If player has rock and computer has scissors return you win! Rock beats scissors*/
        /* If player has rock and c has rock return thats a tie*/
        if (computerSelection.toLowerCase() === "paper") {
            return "You lose! Paper beats rock";
        } else if (computerSelection.toLowerCase() === "rock") {
            return "That's a tie!";
        } else {
            return "You win! Rock beats scissors!";
        }
    } else {
        /* If player has paper and computer has scissors return you lose! scissors beats paper*/
        /* If player has paper and computer has rock return you win! paper beats rock*/
        /* If player has paper and c has paper return thats a tie*/
        if (computerSelection.toLowerCase() === "paper") {
            return "That's a tie!";
        } else if (computerSelection.toLowerCase() === "rock") {
            return "You win! Paper beats rock";
        } else {
            return "You lose! Scissors beats paper";
        }

    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
