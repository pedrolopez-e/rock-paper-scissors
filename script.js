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
            playerScore += 1;
            return "You win! Scissors beats Paper\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        } else if (computerSelection.toLowerCase() === "rock") {
            computerScore += 1;
            return "You lose! Rock beats Scissors\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        } else {
            return "That's a tie!\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        }
    } else if (playerSelection.toLowerCase() === "rock") {
        /* If player has rock and computer has paper return you lose! paper beats rock*/
        /* If player has rock and computer has scissors return you win! Rock beats scissors*/
        /* If player has rock and c has rock return thats a tie*/
        if (computerSelection.toLowerCase() === "paper") {
            computerScore += 1;
            return "You lose! Paper beats rock\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        } else if (computerSelection.toLowerCase() === "rock") {
            return "That's a tie!\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        } else {
            playerScore += 1;
            return "You win! Rock beats Scissors\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        }
    } else {
        /* If player has paper and computer has scissors return you lose! scissors beats paper*/
        /* If player has paper and computer has rock return you win! paper beats rock*/
        /* If player has paper and c has paper return thats a tie*/
        if (computerSelection.toLowerCase() === "paper") {
            return "That's a tie! " + 
            "\nYour score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        } else if (computerSelection.toLowerCase() === "rock") {
            playerScore += 1;
            return "You win! Paper beats rock\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        } else {
            computerScore += 1;
            return "You lose! Scissors beats paper\n" + 
            "Your score: " + playerScore.toString() + 
            "\nComputer's score: " + computerScore.toString();
        }

    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("You choose rock, paper or scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        return "Your final score: " + playerScore.toString() + "\nComputer's score: " + computerScore.toString() + "\nYou win!";
    } else if (playerScore < computerScore) {
        return "Your final score: " + playerScore.toString() + "\nComputer's score: " + computerScore.toString() + "\nYou lose!";
    } else {
        return "Your final score: " + playerScore.toString() + "\nComputer's score: " + computerScore.toString() + "\nTies!";
    }
}

let playerScore = 0;
let computerScore = 0;
console.log(game());
