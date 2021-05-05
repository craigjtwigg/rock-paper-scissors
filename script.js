// SCORE VARIABLES //

let userScore = 0;
let computerScore = 0;

// START CPU SELECTION // 

    function computerPlay() {
    const number = (Math.floor(Math.random() * 3));
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else return "scissors"; 
}

// END CPU SELECTION //


// START ROUND FUNCTION //

    function playRound(computerSelection, userSelection) {
        computerPlay();
    if (computerSelection === userSelection) {
        return `Oooh, you've cancelled eachother out! It's a tie! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }
    else if (computerSelection === "rock" && userSelection === "scissors" || 
    computerSelection === "scissors" && userSelection === "paper" || 
    computerSelection == "paper" && userSelection === "rock") {
        ++computerScore;
        return `Oh dear! Computer wins the round! PLAYER ${userScore} vs. CPU ${computerScore}`;
    } else ++userScore;
    return `Yes! You Win the round! PLAYER ${userScore} vs. CPU ${computerScore}`;
} 
 // END ROUND FUNCTION //

 // START GAME FUNCTION // 
 
 function playGame() {
    for (let i = 0; i < 5; i++) {
   const computerSelection = computerPlay();
   let userSelection = prompt("Rock, Paper or Scissors?", "");
    if ((userSelection.toLowerCase() == "rock") ||
    (userSelection.toLowerCase() == "scissors") ||
    (userSelection.toLowerCase() == "paper")) {
        console.log(playRound(computerSelection, userSelection));     
    }
    else { 
        i-- && alert("Oh No! That\'s not a valid input...");
} } }

// END GAME FUNCTION //

function winner() {
    if (userScore > computerScore) {
        alert(`Your 5 rounds are up! Congratulations you won! PLAYER ${userScore} vs. CPU ${computerScore}`);
    }
    else if (userScore < computerScore) {
        alert(`Boo! The 5 rounds are over and you lost... PLAYER ${userScore} vs. CPU ${computerScore}`);
}
    else alert(`After 5 rounds its a tie! PLAYER ${userScore} vs. CPU ${computerScore}`);
}
playGame();
winner();