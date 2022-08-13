function getComputerChoice(){
    rps = ["rock","paper","scissors"];
    choice = Math.floor(Math.random()*rps.length);
    return rps[choice];
}
function playRound(playerSelection, computerSelection){
    x = playerSelection.toLowerCase();
    y = computerSelection;

    if(x == y){
        console.log("Tie");
    }else if (x == "rock" && y == "paper"){
        console.log("You Lose! Paper beats Rock");
    }else if (x == "rock" && y == "scissors"){
        console.log("You Win! Rock beats Scissors");
    }else if (x == "paper" && y == "scissors"){
        console.log("You Lose! Scissors beats Paper");
    }else if (x == "paper" && y == "rock"){
        console.log("You Win! Paper beats Rock")
    }else if (x == "scissors" && y == "rock"){
        console.log("You Lose! Rock beats Scissors");
    }else if (x == "scissors" && y == "paper"){
        console.log("You Win! Scissors beats Paper");
    }
}

y = getComputerChoice();
x = prompt("Rock Paper Scissors!");
playRound(x,y);