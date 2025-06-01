console.log("Hello Player One");
console.log("\n");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice;
    random1 = Math.random();
    random2 = Math.floor(random1 * 3) + 1;
    //console.log(random1);
    //console.log(random2);

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

function getHumanChoice(){
    let humanChoice;
    let hchoice = prompt("Enter Rock, Paper or Scissors", "Rock");

    if(hchoice.toLowerCase() === "rock"){
        console.log("Human choice: Rock");
        humanChoice = "rock";
    }
    else if(hchoice.toLowerCase() === "paper"){
        console.log("Human choice: Paper");
        humanChoice = "paper";

    }
    else if(hchoice.toLowerCase() === "scissors"){
        console.log("Human choice: Scissors");
        humanChoice = "scissors";

    }
    else{
        console.log("Human Choice: Invalid");
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("It is a tie, you both chose Rock");
        console.log("\n");
        return false;
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose, Paper beats Rock");
        console.log("\n");
        return false;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win, Rock beats Scissors");
        console.log("\n");
        return true;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win, Paper beats Rock");
        console.log("\n");
        return true;
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("It is a tie, you both chose Paper");
        console.log("\n");
        return false;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose, Scissors beats");
        console.log("\n");
        return true;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose, Rock beats Scissors");
        console.log("\n");
        return false;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win Scissors beats Paper");
        console.log("\n");
        return true;
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("It is a tie, you both chose Scissors");
        console.log("\n");
        return false;
    }
    else{
        console.log("Could not get one of the values");
        console.log("\n");
        return false;
    }
}

function playGame(){
    let count = 0;
    let wins;
    for(i=1; i<=5;i++){

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        //console.log(wins = playRound(humanSelection,computerSelection));

        wins = playRound(humanSelection,computerSelection);
        if(wins){
            count++
        }
    }
    console.log(`You have won ${count} times`);
    console.log("\n");

    if(count >= 3){
        console.log("Congratulations, You beat the computer");
    }
    else{
        console.log("Ahh Shacks, You lost to a damn machine");
    }
    console.log("********************");
}

playGame()

