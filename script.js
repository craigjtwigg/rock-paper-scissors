// SCORE VARIABLES //

let userScore = 0;
let computerScore = 0;

// SCORE BOARD AND ROUND RESULT //

const latestResults = document.querySelector('.results');
const results = document.createElement('div');
results.classList.add('results');
latestResults.appendChild(results);

// WINNER DECLARATION //

function declareWinner() {
    if (userScore === 5) {
        alert(`Yeah! You Win! PLAYER ${userScore} vs. CPU ${computerScore}`);
    }
    else if (computerScore === 5) {
        alert(`Boo! You Lose!... PLAYER ${userScore} vs. CPU ${computerScore}`);
}}

function reset(){
    if (computerScore === 5 || userScore ===5){
    userScore = 0;
    computerScore= 0;
    results.textContent = "What are you waiting for? Play again!";
}}



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
    else if (computerSelection === "rock" && userSelection === "scissors") {
        ++computerScore;
        return `Dagnabbit! The computer selected "Rock" and broke your Scissors! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }  
    else if (computerSelection === "scissors" && userSelection === "paper") {
        ++computerScore;
        return `Oh no, The computer selected "Scissors" and cut right through your paper! Bummer.. PLAYER ${userScore} vs. CPU ${computerScore}`;
    } 
    else if (computerSelection === "paper" && userSelection === "rock") {
        ++computerScore;
        return `Deary me! The computer selected "Paper" and wrapped your rock up like a birthday gift! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }   
    else if (computerSelection === "scissors" && userSelection === "rock") {
        ++userScore;
        return `Yeah! The computer selected "Scissors" - you broke them with your Rock! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }  
    else if (computerSelection === "paper" && userSelection === "scissors") {
        ++userScore;
        return `Alright! The computer selected "Paper" - you cut it to pieces with your Scissors! Yes! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }
    else if (computerSelection === "rock" && userSelection === "paper") {
        ++userScore;
        return `You love to see it! The computer selected "Rock" and you wrapped it up with your Paper! Victory! PLAYER ${userScore} vs. CPU ${computerScore}`;
    }
}

// GAMEPLAY - USER SELECTION AND RESULT RETURN // 

const selectionButton = document.querySelectorAll('img'); 
selectionButton.forEach(img => img.addEventListener('click', playGame));

function playGame(e){
    let userSelection = (e.target.id); 
    const computerSelection = computerPlay(); 
    results.textContent = playRound(computerSelection, userSelection);
    console.log(userSelection);
    declareWinner();
    reset();
}
