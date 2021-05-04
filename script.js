console.log(game());

function game() {

// random selection using math.floor(math.random() * 3)) and reassigning values to r/p/s //
function computerPlay() {
    let number = (Math.floor(Math.random() * 3));
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else return "scissors";
}

let computerSelection = computerPlay();
let userSelection;
let computerScore;
let userScore;
{
    computerScore = 0;
    userScore = 0;
    for (let i=0; i<5; i++) {
        userInput();
        computerPlay();
    }

// Prompt for user to select r/p/s with a .toLowerCase method //
function userInput() {
   userSelection = prompt("Rock, Paper or Scissors?", "");
    if ((userSelection.toLowerCase() == "rock") ||
    (userSelection.toLowerCase() == "scissors") ||
    (userSelection.toLowerCase() == "paper")) {
        console.log(playRound(computerSelection, userSelection));     
    }
    else { 
        alert("Oh No! That\'s not a valid input...");
        userInput();
} }

// else / if conditionals for result declerations //
function playRound(computerSelection, userSelection) {
    if (computerSelection == userSelection) {
        return `Oooh, you've cancelled eachother out! It's a tie! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }
    else if (computerSelection == "rock" && userSelection == "scissors" || 
    computerSelection == "scissors" && userSelection == "paper" || 
    computerSelection == "paper" && userSelection == "rock") {
        ++computerScore;
        return `Oh dear! Computer wins the round! PLAYER ${userScore} vs. CPU ${computerScore}`;
    } else ++userScore;
    return `Yes! You Win the round! PLAYER ${userScore} vs. CPU ${computerScore}`;
        
} 
}} 

