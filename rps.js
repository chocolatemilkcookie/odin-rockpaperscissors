console.log("Hello JS");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice;
    random1 = Math.random();
    random2 = Math.floor(random1 * 3) + 1;
    console.log(random1);
    console.log(random2);

    switch (random2){
        case 1:
            console.log("Rock");
            computerChoice = "rock";
            break;
        
        case 2:
            console.log("Paper");
            computerChoice = "paper";
            break;
        
        case 3:
            console.log("Scissors");
            computerChoice = "scissors";
            break;
        
        default:
            console.log("No value found")
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
    
}


let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();
