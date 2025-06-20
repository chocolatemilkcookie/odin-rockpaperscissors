console.log("Hello Player One");
console.log("\n");
let humanScore = 0;
let computerScore = 0;
let draw;
let gameOver;

function getComputerChoice(){
    let computerChoice;
    random1 = Math.random();
    random2 = Math.floor(random1 * 3) + 1;
    
    switch (random2){
        case 1:
            console.log("Computer choice: Rock");
            computerChoice = "rock";
            break;
        
        case 2:
            console.log("Computer choice: Paper");
            computerChoice = "paper";
            break;
        
        case 3:
            console.log("Computer choice: Scissors");
            computerChoice = "scissors";
            break;
        
        default:
            console.log("Computer choice: No value found")
            break;
    }

    return computerChoice;

}


let message;

function playRound(humanChoice, computerChoice){
    draw = false;

    if(humanChoice === "rock" && computerChoice === "rock"){
        message = ("It is a tie, you both chose Rock");
        console.log(message);
        console.log("\n");
        draw = true;
        return false;
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        message = ("You lose, Paper beats Rock");
        console.log(message);
        console.log("\n");
        return false;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        message = ("You Win, Rock beats Scissors");
        console.log(message);
        console.log("\n");
        return true;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        message = ("You win, Paper beats Rock");
        console.log(message);
        console.log("\n");
        return true;
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        message = ("It is a tie, you both chose Paper");
        console.log(message);
        console.log("\n");
        draw = true;
        return false;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        message = ("You lose, Scissors beats paper");
        console.log(message);
        console.log("\n");
        return false;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        message = ("You lose, Rock beats Scissors");
        console.log(message);
        console.log("\n");
        return false;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        message = ("You win Scissors beats Paper");
        console.log(message);
        console.log("\n");
        return true;
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        message = ("It is a tie, you both chose Scissors");
        console.log(message);
        console.log("\n");
        draw = true;
        return false;
    }
    else{
        message = ("Could not get one of the values");
        console.log(message);
        console.log("\n");
        return false;
    }

}

let plays = 0;
let count = 0;
let compWin = 0;

function playGame(){

    if(gameOver){
        plays = 0;
        count = 0;
        compWin = 0;
        gameOver = false;
    }

    let wins;
    let humanSelection = humanChoice;
    let computerSelection = getComputerChoice();

    wins = playRound(humanSelection,computerSelection);
    if(wins){
        count++
    }
    else if(!wins && !draw){
        compWin++
    }

    plays ++;
    calcScore();
    
}

function calcScore(){

        // console.log(`You have won ${count} times`);
        // console.log("\n");

        if(count >= 5){
            message = ("Congratulations, You beat the computer");
            console.log("Congratulations, You beat the computer");
            gameOver = true;
        }
        else if(compWin >= 5){
            message = ("Ahh Shacks, You lost to a damn machine");
            console.log("Ahh Shacks, You lost to a damn machine");
            gameOver = true;
        }
        console.log("********************");
}


let humanChoice;

const buttons = document.querySelectorAll("button");
let container = document.querySelector(".container1");
let results = document.querySelector("#results");
let score = document.querySelector("#humanscore");
let cscore = document.querySelector("#computerscore");
let total = document.querySelector("#total");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = (button.id);
        console.log(humanChoice);
        playGame();

        results.textContent = message;
        score.textContent = count;
        cscore.textContent = compWin;
        total.textContent = plays;
        container.appendChild(results);
    });
});