// SCORE VARIABLES //

let userScore = 0;
let computerScore = 0;

// SCORE BOARD //

function getScore() {
    score.textContent = `PLAYER ${userScore} vs. CPU ${computerScore}`;
    }

const resultContainer = document.querySelector('.results');
const results = document.createElement('div');
results.classList.add('results');
resultContainer.appendChild(results);
results.textContent = "First to 5 wins! Pick your first weapon of choice!";

const scoreContainer = document.querySelector('.scoreboard');
const score = document.createElement('div');
score.classList.add('score');
scoreContainer.appendChild(score);
getScore();




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
    getScore();
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
        getScore();
        return `Oooh, you've cancelled eachother out! It's a tie!`;
    }
    else if (computerSelection === "rock" && userSelection === "scissors") {
        ++computerScore;
        getScore();
        return `Dagnabbit! The computer selected "Rock" and broke your Scissors!`;
    }  
    else if (computerSelection === "scissors" && userSelection === "paper") {
        ++computerScore;
        getScore();
        return `Oh no, The computer selected "Scissors" and cut right through your paper! Bummer...`;
    } 
    else if (computerSelection === "paper" && userSelection === "rock") {
        ++computerScore;
        getScore();
        return `Deary me! The computer selected "Paper" and wrapped your rock up like a birthday gift!`;
    }   
    else if (computerSelection === "scissors" && userSelection === "rock") {
        ++userScore;
        getScore();
        return `Yeah! The computer selected "Scissors" - you broke them with your Rock!`;
    }  
    else if (computerSelection === "paper" && userSelection === "scissors") {
        ++userScore;
        getScore();
        return `Alright! The computer selected "Paper" - you cut it to pieces with your Scissors! Yes!`;
    }
    else if (computerSelection === "rock" && userSelection === "paper") {
        ++userScore;
        getScore();
        return `You love to see it! The computer selected "Rock" and you wrapped it up with your Paper! Victory!`;
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
