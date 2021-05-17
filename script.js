// SCORE VARIABLES //

let userScore = 0;
let computerScore = 0;

// SCORE BOARD AND ROUND RESULT //

const container = document.querySelector('.container');
const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

// WINNER DECLARATION //

function declareWinner() {
    if (userScore === 5) {
        alert(`Yeah! You Win! PLAYER ${userScore} vs. CPU ${computerScore}`);
    }
    else if (computerScore === 5) {
        alert(`Boo! You Lose!... PLAYER ${userScore} vs. CPU ${computerScore}`);
} }


// COMPUTER RANDOM SELECTION // 

function computerPlay() {
    const number = (Math.floor(Math.random() * 3));
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else return "scissors"; 
}


// ROUND FUNCTION / GAME LOGIC //

    function playRound(computerSelection, userSelection) {
        computerPlay();
    if (computerSelection === userSelection) {
        return `Oooh, you've cancelled eachother out! It's a tie! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }
    else if (computerSelection === "rock" && userSelection === "scissors" || 
        computerSelection === "scissors" && userSelection === "paper" || 
        computerSelection === "paper" && userSelection === "rock") {
        ++computerScore;
        return `Oh dear! Computer wins the round! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }   
    else ++userScore;

    return `Yes! You Win the round! PLAYER ${userScore} vs. CPU ${computerScore}`;
} 

// GAMEPLAY - USER SELECTION AND RESULT RETURN // 

const selectionButton = document.querySelectorAll('button'); 
selectionButton.forEach(button => button.addEventListener('click', playGame));

function playGame(e){
    let userSelection = (e.target.id); 
    const computerSelection = computerPlay(); 
    results.textContent = playRound(userSelection, computerSelection);
    declareWinner();
}