console.log("Hello Player One");
console.log("\n");
let humanScore = 0;
let computerScore = 0;

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


    if(humanChoice === "rock" && computerChoice === "rock"){
        message = ("It is a tie, you both chose Rock");
        console.log(message);
        console.log("\n");
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
        return false;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        message = ("You lose, Scissors beats paper");
        console.log(message);
        console.log("\n");
        return true;
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
        return false;
    }
    else{
        message = ("Could not get one of the values");
        console.log(message);
        console.log("\n");
        return false;
    }

}

function playGame(){
    let count = 0;
    let wins;
    while (true) {


        let humanSelection = humanChoice;
        let computerSelection = getComputerChoice();
        //console.log(wins = playRound(humanSelection,computerSelection));

        wins = playRound(humanSelection,computerSelection);
    }
}

// playGame();



let humanChoice;

const buttons = document.querySelectorAll("button");
let container = document.querySelector(".container1");
let results = document.querySelector("#results");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = (button.id);
        console.log(humanChoice);
        let computerSelection = getComputerChoice();
        playRound(humanChoice, computerSelection);
        results.textContent = message;
        console.log(`message is ${message}`);
        container.appendChild(results);
    });
});




