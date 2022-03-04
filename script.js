/*Function that simulates the computer play. It works correctly*/
function computerPlay() {
    let strings = ["Rock", "Paper", "Scissors"];
    let play = strings[Math.floor(Math.random()*strings.length)];
    return play;
}

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "paper") {
            //playerScore += 1;
            let result = "You win! Scissors beats Paper\n";
            resultDisplayer.textContent = "You win! Scissors beats Paper"
            console.log(result);
        } else if (computerSelection.toLowerCase() === "rock") {
            //computerScore += 1;
            let result = "You lose! Rock beats Scissors\n";
            resultDisplayer.textContent = "You lose! Rock beats Scissors"
            console.log(result);
        } else {
            let result = "That's a tie!\n";
            resultDisplayer.textContent = "That's a tie!"
            console.log(result);
        }
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "paper") {
            //computerScore += 1;
            let result = "You lose! Paper beats rock\n";
            resultDisplayer.textContent = "You lose! Paper beats rock"
            console.log(result);
        } else if (computerSelection.toLowerCase() === "rock") {
            let result = "That's a tie!\n";
            resultDisplayer.textContent = "That's a tie!"
            console.log(result);
        } else {
            //playerScore += 1;
            let result = "You win! Rock beats Scissors\n";
            resultDisplayer.textContent = "You win! Rock beats Scissors"
            console.log(result);
        }
    } else {
        if (computerSelection.toLowerCase() === "paper") {
            let result = "That's a tie!";
            resultDisplayer.textContent = "That's a tie!"
            console.log(result);
        } else if (computerSelection.toLowerCase() === "rock") {
            //playerScore += 1;
            let result = "You win! Paper beats rock\n";
            resultDisplayer.textContent = "You win! Paper beats rock"
            console.log(result);
        } else {
            //computerScore += 1;
            let result = "You lose! Scissors beats paper\n";
            resultDisplayer.textContent = "You lose! Scissors beats paper"
            console.log(result);
        }
    }

    console.log("Player: " + playerSelection.toString());
    console.log("Computer: " + computerSelection.toString());
}

const buttons = document.querySelectorAll('button');
const resultDisplayer = document.querySelector('#resultDisplayer');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});




/*btn.addEventListener('click', function(e) {
    console.log(e.target.id);
});*/

/*function game() {
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
}*/

