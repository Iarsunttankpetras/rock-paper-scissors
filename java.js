
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() { // pcu alege random
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return ("rock");
            break;
        case 1:
            return ("paper");
            break;
        case 2:
            return ("scissors");
            break;
    }
}

function playRound(playerSelection, computerSelection) { // se joaca runda nu te bagi
     if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock")
        return ("You Won!");
    else if (computerSelection == "paper")
        return ("Tie!")
    else 
        return ("You Lost! Scissors beats Paper");
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock")
        return ("You Lost! Rock beats Scrissors");
    else if (computerSelection == "paper")
        return ("You Won!")
    else 
        return ("Tie!");
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock")
        return ("Tie!");
    else if (computerSelection == "paper")
        return ("You Lost! Paper beats Rock")
    else 
        return ("You Won!");
    }
}

function game() { // se aduna la scor
    let playerSelection = prompt ("Rock, Paper, Scissors?");
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
        if (playRound(playerSelection, computerSelection) == "You Won!") {
            scorePlayer++;
        }
        else if (playRound(playerSelection, computerSelection) == "Tie!") {
            scorePlayer = scorePlayer + 0;
        }
        else {
            scoreComputer++;
        }
        return (`Your score: ${scorePlayer}\nComputer score: ${scoreComputer}`);
}
function score() { // se joaca meciu pana la final
    while (scorePlayer < 5 && scoreComputer < 5) {
        console.log(game());
    }
    if (scorePlayer == 5) {
        alert ("You Won!");
        scorePlayer = 0;
        scoreComputer = 0;
    }
    else {
        alert ("You Lost!")
        scorePlayer = 0;
        scoreComputer = 0;
    }
}

while (scorePlayer < 6) {
    console.log(score())
}
